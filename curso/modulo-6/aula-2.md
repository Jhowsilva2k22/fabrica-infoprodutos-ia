# Aula 6.2 — Construindo o App Web em Next.js 16.2: O Produto Que Você Realmente Vende

## O App Web Como Diferencial Competitivo

A maioria dos infoprodutos entrega o conteúdo via plataforma de terceiro — Hotmart, Kiwify, Teachable. O aluno acessa no ambiente da plataforma, com a identidade visual da plataforma, no player da plataforma.

Quando você entrega o curso via App Web próprio, o aluno experimenta o produto como um software profissional com a identidade do seu produto. É como a diferença entre ver um filme num canal de streaming genérico versus ver no aplicativo oficial do estúdio — a experiência muda a percepção de valor.

Em 2026, com o Next.js 16.2 e o Vercel gratuito para projetos pessoais, construir e hospedar um App Web de curso não exige conhecimento de desenvolvimento — exige apenas o Claude Code e os prompts certos.

---

## O Que o App Web Vai Ter

O App Web do seu curso precisa de 6 componentes:

**1. Tela de Login** — Autenticação simples com email + senha. Após o pagamento na Kiwify, o aluno recebe acesso por email com link de primeiro acesso.

**2. Dashboard do Aluno** — Visão geral do progresso: módulos completados, próxima aula, barra de progresso geral.

**3. Player de Aula** — Renderiza o conteúdo markdown das aulas com formatação profissional. Se você gravar vídeos, embute o player do YouTube/Vimeo.

**4. Navegação Entre Módulos** — Menu lateral com todos os módulos e aulas, com indicador visual de completado/pendente.

**5. Download de Materiais** — Link para baixar o ebook PDF, templates e checklists.

**6. Página de Boas-vindas** — Primeira coisa que o aluno vê ao acessar: o que ele vai conseguir ao final do curso, como usar o app, um vídeo de boas-vindas (opcional).

---

## Inicializando o Projeto Next.js 16.2

Execute no Claude Code:

```
Inicialize um projeto Next.js 16.2 para o App Web do curso descrito no CLAUDE.md.

Especificações:
- Next.js 16.2 com App Router (não Pages Router)
- TypeScript
- Tailwind CSS
- Pasta: app-web/
- Tema: dark mode como padrão (não toggle)

Estrutura de pastas que deve criar:
app-web/
├── app/
│   ├── layout.tsx          (layout root com metadata do curso)
│   ├── page.tsx            (landing/login redirect)
│   ├── login/
│   │   └── page.tsx        (tela de login)
│   ├── dashboard/
│   │   ├── layout.tsx      (layout autenticado com sidebar)
│   │   ├── page.tsx        (dashboard do aluno)
│   │   └── aula/
│   │       └── [modulo]/
│   │           └── [aula]/
│   │               └── page.tsx (player de aula)
│   └── api/
│       └── auth/
│           └── route.ts    (autenticação simples)
├── components/
│   ├── Sidebar.tsx
│   ├── ProgressBar.tsx
│   ├── AulaCard.tsx
│   └── MarkdownRenderer.tsx
├── lib/
│   ├── auth.ts             (lógica de autenticação)
│   └── content.ts          (leitura dos arquivos de conteúdo)
├── content/                (cópia dos arquivos de curso)
│   ├── modulo-1/
│   └── ...
├── public/
│   └── ebook/
│       └── guia-rapido.pdf (cópia do ebook)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts

Após criar a estrutura, instale as dependências:
npm install
```

---

## Construindo o Dashboard do Aluno

```
No arquivo app-web/app/dashboard/page.tsx, crie o dashboard do aluno.

O dashboard deve:
1. Mostrar o nome do aluno (mockado por enquanto: "Olá, [Nome]!")
2. Exibir a barra de progresso geral do curso
3. Mostrar a "próxima aula" com link direto
4. Listar os módulos em cards com:
   - Título do módulo
   - Número de aulas completadas / total de aulas
   - Miniatura ou ícone (use emojis como placeholder)
   - Status visual: "Não iniciado" / "Em progresso" / "Completado"
5. Link para download do ebook

Dados dos módulos: leia curso/estrutura.md para obter os títulos reais.
Use Tailwind CSS para o estilo — dark theme, cores primárias #6366f1 (indigo).
Responsivo: sidebar oculta em mobile, visible em desktop.
```

---

## O Player de Aula (Renderizador de Markdown)

```
No arquivo app-web/components/MarkdownRenderer.tsx, crie um componente 
que renderiza arquivos markdown como aulas formatadas.

Requisitos:
- Usa a biblioteca 'react-markdown' com 'remark-gfm'
  (instale: npm install react-markdown remark-gfm)
- Renderiza H1 como título da aula (font-size: 2rem, cor branca)
- Renderiza H2 como seções (font-size: 1.5rem, cor #a5b4fc)
- Renderiza H3 como subseções (font-size: 1.2rem, cor #c7d2fe)
- Blocos de código em fundo #1e1e2e com syntax highlight básico
- Blockquotes (>) em fundo #1e293b, borda esquerda #6366f1, 
  padding 16px, rounded — para as dicas das aulas
- Listas com bullet customizado (•) em #6366f1
- Parágrafos com line-height: 1.8 para legibilidade
- Largura máxima: 720px, centralizado

No arquivo app-web/app/dashboard/aula/[modulo]/[aula]/page.tsx:
- Leia o arquivo markdown correspondente de /content/modulo-[X]/aula-[Y].md
- Renderize com MarkdownRenderer
- Adicione botões "Aula anterior" e "Próxima aula" no footer
- Adicione botão "Marcar como concluída" que salva no localStorage
```

---

## Autenticação Simples Para o Lançamento

Para o primeiro lançamento, a autenticação não precisa ser complexa. Uma tabela de usuários em JSON ou banco de dados simples é suficiente.

```
Configure a autenticação simples em app-web/lib/auth.ts:

Abordagem: JWT simples sem banco de dados externo.
- Armazene os alunos em uma variável de ambiente: 
  ALUNOS_JSON = [{"email":"aluno@email.com","senha":"hash","nome":"Nome"}]
- Após login, gere um JWT com email e expiração de 30 dias
- Armazene no localStorage do cliente
- Middleware verifica JWT em todas as rotas /dashboard/*

Para o lançamento, novos alunos são adicionados manualmente (ou via 
webhook da Kiwify — configure o webhook na Aula 7.3).

Crie também o endpoint api/auth/route.ts que:
- POST /api/auth/login: valida email+senha, retorna JWT
- POST /api/auth/logout: limpa o token
- GET /api/auth/me: retorna dados do aluno logado

Use a biblioteca 'jose' para JWT: npm install jose
```

---

## Next.js 16.2: Os Recursos Que Fazem Diferença

O Next.js 16.2 (lançado em fevereiro de 2026 junto ao Claude Opus 4.6) tem recursos específicos que beneficiam o App Web do curso:

**Turbopack estável:** Build 5x mais rápido que webpack. Desenvolvimento com hot reload quase instantâneo.

**Agent DevTools:** Ferramentas de debug especificamente para componentes que integram com IA. Útil se você quiser adicionar features de IA dentro do App Web futuramente (tutor IA, quiz adaptativo).

**Streaming de Markdown:** Permite renderizar conteúdo markdown de forma progressiva, sem aguardar o arquivo inteiro ser processado. Para aulas longas, isso melhora a percepção de velocidade.

**`use cache` directive estável:** Armazena resultados de leitura de arquivo em cache. Para o App Web do curso, significa que as aulas são lidas do disco uma vez e servidas do cache — praticamente zero latência.

Para ativar:
```typescript
// Em app-web/lib/content.ts
import { unstable_cache as cache } from 'next/cache'

export const getAulaContent = cache(async (modulo: string, aula: string) => {
  // lê o arquivo markdown
  const fs = await import('fs/promises')
  const content = await fs.readFile(
    `content/modulo-${modulo}/aula-${aula}.md`, 
    'utf-8'
  )
  return content
}, ['aula-content'], { revalidate: 3600 })
```

---

## Exercício Prático

1. Execute o prompt de inicialização do projeto Next.js 16.2
2. Rode localmente: `cd app-web && npm run dev` — verifique que abre em localhost:3000
3. Execute o prompt do Dashboard do Aluno
4. Execute o prompt do MarkdownRenderer e do Player de Aula
5. Configure a autenticação simples
6. Copie os arquivos de conteúdo: `cp -r curso/ app-web/content/`
7. Teste o fluxo completo: login → dashboard → clique numa aula → conteúdo renderizado
8. Faça o deploy no Vercel: `cd app-web && vercel`

Quando o App Web estiver funcionando em Vercel, você tem a URL do produto que vai entregar aos alunos.

---

## Dicas e Pontos de Atenção

> **Sobre TypeScript e erros de tipo:** O Claude gera código TypeScript correto na maioria dos casos, mas às vezes aparece um erro de tipo que ele não previu. Se o `npm run build` apresentar erros TypeScript, cole o erro no Claude Code: "O build do Next.js apresentou este erro TypeScript: [erro]. Corrija em [arquivo]." Geralmente são fixes de 1-3 linhas.

> **Ponto de atenção — conteúdo vs. app:** O App Web em `app-web/` e os arquivos de curso em `curso/` são dois repositórios conceituais separados. O App Web lê de `app-web/content/` — que é uma cópia dos arquivos de `curso/`. Quando você atualizar aulas (após revisão), lembre de atualizar também a cópia em `app-web/content/`. Uma boa prática: crie um script de sincronização.

> **Deploy gratuito e limites:** O Vercel gratuito suporta 100GB de bandwidth/mês e 100k Function invocations. Para um primeiro lançamento de 50-200 alunos, esses limites são mais do que suficientes. Quando escalar para mais de 500 alunos ativos simultâneos, considere o plano Pro do Vercel (US$20/mês).
