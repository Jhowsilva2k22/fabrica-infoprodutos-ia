# Aula 2.4 — Estrutura de Pastas de um Projeto Profissional: Organize Antes de Criar

## Por Que a Organização Importa Mais do Que Parece

A maioria dos criadores começa a gerar conteúdo antes de organizar a estrutura de pastas. O resultado é previsível: arquivos espalhados em Downloads, Documentos, Desktop e na nuvem. Quando chega a hora de publicar, ninguém sabe onde está o quê. A landing page usa uma versão antiga da copy. O ebook está numa pasta diferente da que o Claude está lendo. O app web não encontra os arquivos de conteúdo.

Organização não é burocracia. É a diferença entre um sistema que escala e um projeto que afunda no caos quando chega a hora de publicar.

Mais importante: o Claude Code trabalha com o **sistema de arquivos do projeto como contexto**. Ele lê os arquivos existentes para entender onde colocar outputs novos, como referenciar conteúdo gerado anteriormente e como manter coerência entre as peças. Uma estrutura de pastas bem definida torna o Claude mais eficiente — ele sabe exatamente onde procurar e onde salvar.

---

## A Estrutura Completa do Projeto Fábrica de Infoprodutos

Esta é a estrutura que você vai usar neste curso e que pode reutilizar para todos os projetos futuros:

```
meu-infoproduto/
│
├── CLAUDE.md                    ← instruções globais para o Claude
├── .gitignore                   ← arquivos que o Git não deve rastrear
├── README.md                    ← descrição e mapa do projeto
│
├── .claude/
│   └── skills/                  ← Skills personalizadas
│       ├── criar-estrutura-curso/
│       │   └── SKILL.md
│       ├── gerar-conteudo-completo/
│       │   └── SKILL.md
│       ├── escrever-copy-vendas/
│       │   └── SKILL.md
│       ├── montar-pagina-vendas/
│       │   └── SKILL.md
│       ├── gerar-emails-lancamento/
│       │   └── SKILL.md
│       ├── configurar-kiwify/
│       │   └── SKILL.md
│       ├── gerar-criativos-ads/
│       │   └── SKILL.md
│       └── gerar-app-web/
│           └── SKILL.md
│
├── curso/                       ← todo o conteúdo das aulas
│   ├── estrutura.md             ← mapa completo de módulos e aulas
│   ├── pesquisa-mercado.md      ← dados de mercado para embasar o conteúdo
│   ├── modulo-1/
│   │   ├── aula-1.md
│   │   ├── aula-2.md
│   │   └── ...
│   ├── modulo-2/
│   └── ...
│
├── pagina-vendas/               ← landing page de vendas
│   ├── copy.md                  ← copy completa em markdown
│   └── index.html               ← landing page HTML/CSS gerada
│
├── emails/                      ← sequência de lançamento
│   └── sequencia-lancamento.md
│
├── criativos/                   ← anúncios para Meta Ads
│   └── anuncios-meta.md
│
├── ebook/                       ← ebook bônus
│   └── guia-rapido.md
│
├── kiwify/                      ← configuração da plataforma
│   └── guia-configuracao.md
│
└── app-web/                     ← aplicativo Next.js do curso
    ├── package.json
    ├── app/
    └── ...
```

---

## Por Que Cada Pasta Existe

**`/curso`** — O coração do produto. Todas as aulas em formato markdown, organizadas por módulo. O Claude lê esses arquivos para manter consistência ao gerar novas aulas. A skill `gerar-conteudo-completo` salva outputs aqui automaticamente.

**`/pagina-vendas`** — Separada do curso porque tem regras diferentes: linguagem mais agressiva, gatilhos mentais, urgência. O `copy.md` é a versão texto (para revisão fácil) e o `index.html` é a versão deployável gerada a partir da copy.

**`/emails`** — A sequência de 7 emails de lançamento. Fica separada porque tem seu próprio fluxo de uso: você exporta os textos para o sistema de email (ActiveCampaign, RD Station, etc.) manualmente.

**`/criativos`** — Roteiros e textos para anúncios no Meta Ads. Em formato texto porque os criativos visuais (imagens, vídeos) são criados externamente — aqui estão os textos que você usa como base.

**`/ebook`** — O guia rápido de referência que você vai exportar para PDF. Conteúdo condensado do curso em formato de checklist e templates.

**`/kiwify`** — Documentação da configuração da plataforma. Não tem arquivo automático aqui — é onde a skill `configurar-kiwify` salva o guia de setup passo a passo.

**`/app-web`** — O projeto Next.js completo que os alunos recebem. Gerado pela skill `gerar-app-web`, hospedado na Vercel. É o produto principal que você vende.

**`/.claude/skills`** — As Skills que automatizam tudo. Cada subpasta tem um arquivo SKILL.md com as instruções encapsuladas.

---

## Context Compaction: Por Que a Estrutura de Arquivos Importa Para Sessões Longas

O Claude Code v2.1.92 tem **Context Compaction automático**: quando uma sessão começa a ficar muito longa (próxima ao limite de contexto), o Claude compacta automaticamente as mensagens mais antigas — mantendo o contexto essencial do projeto, mas liberando espaço para continuar trabalhando.

A estrutura de pastas bem organizada é o que permite que o Context Compaction funcione bem. Em vez de depender do histórico da conversa para saber o que foi criado, o Claude pode simplesmente ler os arquivos da pasta `/curso` para saber onde parou e continuar de onde ficou.

Isso significa que você pode criar um curso inteiro de 37 aulas numa série de sessões ao longo de dias — e o Claude vai manter coerência porque os arquivos servem como memória permanente.

---

## Criando a Estrutura no Seu Projeto

Abra o Claude Code na pasta raiz do seu projeto e execute:

```
Crie a estrutura completa de pastas para um projeto de infoproduto no Claude Code.
Estrutura necessária:
- CLAUDE.md (arquivo vazio por enquanto — vou preencher depois)
- .gitignore com: node_modules/, .DS_Store, *.log, .next/, out/
- README.md com: nome do projeto, propósito, mapa de pastas
- .claude/skills/ (pasta vazia com .gitkeep)
- curso/ com estrutura.md vazio e pastas modulo-1/ até modulo-8/ e bonus/
- pagina-vendas/ com .gitkeep
- emails/ com .gitkeep
- criativos/ com .gitkeep
- ebook/ com .gitkeep
- kiwify/ com .gitkeep
- app-web/ com .gitkeep

Não crie o CLAUDE.md com conteúdo — deixe vazio.
```

Em 30 segundos, a estrutura completa estará criada.

---

## Verificando a Estrutura com o Claude

Após criar a estrutura, peça ao Claude para verificar:

```
Liste todas as pastas e arquivos deste projeto em formato de árvore.
Confirme que a estrutura está correta para um projeto de infoproduto com:
- Skills personalizadas em .claude/skills/
- Conteúdo de curso em /curso com subpastas por módulo
- Landing page em /pagina-vendas
- App Next.js em /app-web
```

O Claude vai ler a estrutura atual e confirmar ou apontar o que está faltando.

---

## Exercício Prático

1. Crie a estrutura de pastas completa usando o Claude Code (comando acima)
2. Abra o VS Code na pasta do projeto — você deve ver a árvore de arquivos no Explorer lateral
3. Crie o arquivo `README.md` com o Claude: peça "Crie um README.md descrevendo o propósito de cada pasta deste projeto de infoproduto"
4. Leia o README gerado e adicione manualmente: nome do seu produto, público-alvo em uma frase, data prevista de lançamento
5. Salve — esse README vai ser seu orientador quando você voltar ao projeto após alguns dias

---

## Dicas e Pontos de Atenção

> **Atalho:** Salve a estrutura de pastas como um template para reutilizar em futuros projetos. Quando for criar o segundo infoproduto, você vai copiar essa estrutura e adaptar apenas o CLAUDE.md e o conteúdo — não vai precisar recriar o sistema do zero.

> **Ponto de atenção:** Não coloque nada fora das pastas definidas. Se você criar arquivos em pastas aleatórias "por enquanto", eles vão ficar lá para sempre e vão criar confusão nas skills que leem a estrutura do projeto. A disciplina de organização agora poupa horas de retrabalho depois.

> **Sobre o Git:** Mesmo que você não vá subir este projeto para um repositório público, recomendo inicializar o Git na pasta do projeto (`git init` no terminal). Isso dá dois benefícios: histórico de versão para desfazer mudanças indesejadas, e compatibilidade com os Background Agents do Claude Code que usam Git Worktree para isolamento de tarefas paralelas.
