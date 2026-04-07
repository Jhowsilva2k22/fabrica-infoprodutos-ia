# Fábrica de Infoprodutos com IA — Documentação Completa do Projeto

> Atualizado em 2026-04-06. Cole este documento na outra aba do Claude para dar contexto total sobre o estado do projeto.

---

## 1. O QUE É O PROJETO

Curso digital: **"Fábrica de Infoprodutos com IA — Crie, Lance e Venda Produtos Digitais 100% com Claude"**

- **Formato:** App Web (Next.js) como produto principal + Ebook PDF como bônus
- **Plataforma de venda:** Kiwify (checkout + entrega)
- **Hospedagem:** Vercel (auto-deploy via GitHub)
- **Tráfego:** Meta Ads (Facebook + Instagram)
- **Público-alvo:** Empreendedores digitais iniciantes e intermediários
- **Preço:** R$47 (âncora R$997) + Order Bump R$19,90
- **Idioma:** Português brasileiro
- **Tom:** Direto, prático, copy agressiva com gatilhos mentais

---

## 2. ESTRUTURA DE PASTAS (COMPLETA)

```
fabrica-infoprodutos-ia/
├── CLAUDE.md                    ← Regras absolutas do projeto (pesquisa obrigatória, pt-BR, tom agressivo)
├── PROJETO-END-TO-END.md        ← Documento técnico de referência
├── DOCUMENTACAO-PROJETO.md      ← ESTE ARQUIVO
│
├── app-web/                     ← PRODUTO PRINCIPAL (Next.js 16.2.2)
│   ├── package.json             ← next@16.2.2, react@19.2.4, react-markdown, remark-gfm
│   ├── next.config.ts           ← output: "standalone", images: avif/webp
│   ├── .vercel/project.json     ← projectId: prj_LEuwO37jGp2wGkNHA6eSVmkN2Qvd
│   ├── CLAUDE.md → AGENTS.md    ← Aviso: Next.js 16 tem breaking changes
│   ├── app/
│   │   ├── globals.css          ← 496 linhas CSS puro, dark theme, accent azul (#0028fa)
│   │   ├── layout.tsx           ← Root layout + Sidebar + Meta Pixel (env var)
│   │   ├── page.tsx             ← Dashboard/Home com cards dos módulos
│   │   └── aula/[modulo]/[aula]/
│   │       ├── page.tsx         ← Server Component — lê .md do disco + generateStaticParams (38 páginas)
│   │       └── LessonClient.tsx ← Client Component — ReactMarkdown + localStorage progress
│   ├── components/
│   │   └── Sidebar.tsx          ← Nav lateral com progresso, mobile toggle, custom events
│   ├── lib/
│   │   └── courseData.ts        ← FONTE DE VERDADE — 9 módulos, 37 aulas, helpers de navegação
│   └── content/                 ← 37 arquivos .md (conteúdo renderizado pelo app)
│       ├── modulo-1/aula-1.md … aula-4.md
│       ├── modulo-2/aula-1.md … aula-5.md
│       ├── modulo-3/aula-1.md … aula-4.md
│       ├── modulo-4/aula-1.md … aula-4.md
│       ├── modulo-5/aula-1.md … aula-4.md
│       ├── modulo-6/aula-1.md … aula-4.md
│       ├── modulo-7/aula-1.md … aula-4.md
│       ├── modulo-8/aula-1.md … aula-4.md
│       └── modulo-bonus/aula-1.md … aula-4.md
│
├── curso/                       ← CONTEÚDO FONTE (markdown bruto)
│   ├── pesquisa-mercado.md      ← Pesquisa de mercado com dados 2026 (OBRIGATÓRIA antes de criar conteúdo)
│   ├── estrutura.md             ← Estrutura completa: 9 módulos, 37 aulas com descrições
│   └── modulo-1/ … modulo-bonus/ ← Espelho dos 37 .md (fonte editável)
│
├── pagina-vendas/               ← LANDING PAGE DE VENDAS
│   ├── copy.md                  ← Copy completa: headline A/B, dor, agitação, solução, bullets, FAQs, PS
│   ├── index.html               ← HTML/CSS dark premium, CTAs → checkout Kiwify
│   └── .vercel/project.json     ← projectId: prj_8ZhsTjkwWXziSstY8fk0F5GxOKAt (nome: landing-fabrica-ia)
│
├── emails/
│   └── sequencia-lancamento.md  ← 7 emails Jeff Walker/Russell Brunson style
│                                   D-4 curiosidade → D-3 valor → D0 abertura → D+1 prova →
│                                   D+2 objeções → D+3 urgência → D+4 fechamento
│
├── criativos/
│   └── criativos-meta-ads.md    ← 5 variações de anúncio (feed, stories, reels) +
│                                   2 roteiros de vídeo (30s e 60s) +
│                                   Configuração Advantage+ Shopping Campaign
│
├── ebook/
│   └── guia-rapido.md           ← "MODO FÁBRICA" — manual de campo com:
│                                   6 fases, 12 prompts mestres, 47-item checklist, templates
│
├── kiwify/
│   └── configuracao-completa.md ← Checklist: conta, produto R$47, order bump R$19,90,
│                                   checkout, pixel Meta, entrega automática, email
│
└── .claude/skills/              ← 10 SKILLS PERSONALIZADAS
    ├── criar-estrutura-curso/SKILL.md
    ├── gerar-conteudo-aulas/SKILL.md
    ├── gerar-conteudo-completo/SKILL.md
    ├── escrever-copy-vendas/SKILL.md
    ├── montar-pagina-vendas/SKILL.md
    ├── gerar-app-web/SKILL.md
    ├── gerar-ebook-bonus/SKILL.md
    ├── gerar-emails-lancamento/SKILL.md
    ├── gerar-criativos-ads/SKILL.md
    └── configurar-kiwify/SKILL.md
```

---

## 3. ARQUITETURA TÉCNICA DO APP WEB

### Stack
- **Next.js 16.2.2** com App Router
- **React 19.2.4** + TypeScript 5
- **CSS puro** (496 linhas) — Tailwind e PostCSS foram removidos por incompatibilidade com Node.js v25 + Turbopack no Windows
- **react-markdown 10.1.0** + remark-gfm para renderizar aulas
- **Meta Pixel** via `next/script` (ID em env var `NEXT_PUBLIC_META_PIXEL_ID`)
- **Vercel Analytics** (dependency instalada)

### Como rodar
```bash
cd app-web
npx next dev --webpack -p 3000    # Dev mode (--webpack obrigatório, Turbopack crashava)
npx next build --webpack           # Build (flag --webpack já está no package.json)
```

### Padrões de código
- **SSG completo:** `generateStaticParams()` pré-gera 38 páginas (1 home + 37 aulas)
- **Conteúdo em build-time:** `readFileSync` lê os .md em `content/` durante o build
- **Hidratação segura:** padrão `mounted` state para evitar mismatch server/client
- **Progresso:** `localStorage` key `fabrica_completed` (array JSON de strings `"modulo-X/aula-Y"`)
- **Sincronização:** custom event `fabrica_progress` para Sidebar reagir ao LessonClient
- **Zero backend:** sem API routes, sem banco, tudo estático + client-side
- **Navegação:** Sidebar com accordion por módulo + breadcrumb + botões prev/next

### CSS Variables (tema)
```css
--bg: #08080c          /* Fundo principal */
--green: #0028fa       /* Accent azul (antigo verde, renomeado mantido) */
--green2: #2450ff      /* Accent secundário */
--text: #f8f8f8        /* Texto principal */
--text2: #c0c4d1       /* Texto secundário */
--sidebar-w: 280px     /* Largura sidebar */
```

---

## 4. CONTEÚDO DO CURSO (37 AULAS)

| Módulo | Título | Aulas | Nível |
|--------|--------|-------|-------|
| **1** | A Virada de Chave | 4 | Fundamentos |
| **2** | Setup da Fábrica | 5 | Básico-Intermediário |
| **3** | Construindo o Produto | 4 | Intermediário |
| **4** | Produção em Escala | 4 | Intermediário |
| **5** | Copy que Vende | 4 | Intermediário-Avançado |
| **6** | A Vitrine Digital | 4 | Avançado |
| **7** | Publicação e Monetização | 4 | Avançado |
| **8** | Tráfego Pago | 4 | Avançado |
| **Bônus** | Acelerador | 4 | Extra |

### Aulas por módulo (títulos completos):

**Módulo 1 — A Virada de Chave:**
1. Por Que 99% das Pessoas Usam IA Errado
2. Claude Opus 4.6 vs. O Mercado
3. O Modelo Mental da Fábrica
4. Sua Primeira Conversa Produtiva com o Claude

**Módulo 2 — Setup da Fábrica:**
1. O Que é o Claude Code e Por Que Ele Muda Tudo
2. Instalação e Configuração do Zero
3. CLAUDE.md: O Arquivo Que Transforma o Claude no Seu Funcionário
4. Estrutura de Pastas de um Projeto Profissional
5. Skills: Comandos Personalizados Que Automatizam Seu Fluxo

**Módulo 3 — Construindo o Produto:**
1. Validação de Nicho com IA
2. Posicionamento Imbatível
3. Skill criar-estrutura-curso
4. Revisão Estratégica

**Módulo 4 — Produção em Escala:**
1. O Prompt Perfeito Para Conteúdo Didático
2. Gerando Módulo por Módulo
3. Revisão Inteligente
4. Criando o Ebook Bônus

**Módulo 5 — Copy que Vende:**
1. Os 7 Gatilhos Mentais Que Mais Vendem no Brasil
2. Skill escrever-copy-vendas
3. Ajustando a Copy
4. Sequência de Emails de Lançamento

**Módulo 6 — A Vitrine Digital:**
1. Anatomia de Uma Landing Page Que Converte
2. Skill montar-pagina-vendas
3. Publicando na Vercel via GitHub
4. Criando o App Web com Next.js 16.2

**Módulo 7 — Publicação e Monetização:**
1. Por Que a Kiwify é a Melhor Plataforma em 2026
2. Skill configurar-kiwify
3. Checkout de Alta Conversão
4. Conectando Tudo

**Módulo 8 — Tráfego Pago:**
1. Meta Ads Para Infoprodutos em 2026
2. Skill gerar-criativos-ads
3. Segmentação com Advantage+
4. Analisando Resultados e Escalando

**Módulo Bônus — Acelerador:**
1. Lançamento Perpétuo vs. Lançamento Semente
2. Criando Seu Segundo Produto em 48 Horas
3. /loop, Background Agents e Computer Use
4. Comunidade, Suporte e Atualizações

---

## 5. MATERIAIS DE MARKETING

### 5.1 Copy de Vendas (`pagina-vendas/copy.md`)
- 3 versões de headline para teste A/B
- Subheadline
- Seção de dor ("O Inferno que Você Vive Agora")
- Agitação ("O Que Acontece Se Você Não Agir")
- Solução com prova
- 12+ bullets de benefícios
- Ancoragem: R$997 → R$47
- Garantia incondicional 7 dias
- FAQ (8 perguntas)
- PS com escassez

### 5.2 Landing Page (`pagina-vendas/index.html`)
- HTML/CSS completo, dark premium, responsivo mobile-first
- CTAs apontam para checkout Kiwify
- Countdown timer em JS puro
- FAQ accordion
- Zero dependências externas
- Deploy: Vercel project `landing-fabrica-ia`

### 5.3 Emails (`emails/sequencia-lancamento.md`)
- 7 emails estilo Jeff Walker + Russell Brunson
- Cadência: D-4, D-3, D0 (abertura), D+1, D+2, D+3, D+4 (fechamento)
- Cada email com assunto, preview text, corpo e CTA
- Placeholder `[LINK_COMPRA]` para substituir com URL real Kiwify

### 5.4 Criativos Meta Ads (`criativos/criativos-meta-ads.md`)
- 5 variações de anúncio com ângulos diferentes:
  1. Transformação (antes/depois)
  2. Dor/problema
  3. Prova social
  4. Comparação (com IA vs. sem IA)
  5. Urgência/escassez
- 2 roteiros de vídeo (30s e 60s)
- Config de campanha: Advantage+ Shopping, R$60-120/dia, pixel Purchase
- Estrutura de teste A/B (semanas 1-3)

### 5.5 Ebook Bônus (`ebook/guia-rapido.md`)
- Título: "MODO FÁBRICA — O Protocolo Completo do Lançamento"
- 6 fases: Fundação → Produto → Venda → Entrega → Tráfego → Escala
- 12 prompts mestres (copie-e-cole)
- Checklist de 47 itens em ordem
- Templates prontos
- Formato markdown pronto para exportar PDF

### 5.6 Config Kiwify (`kiwify/configuracao-completa.md`)
- Checklist: criação de conta, verificação, dados bancários
- Produto principal: R$47 (tipo "Curso Online / Área de Membros")
- Order bump: R$19,90 (ebook bônus)
- Checkout: Pix + Cartão, garantia 7 dias
- Pixel Meta no checkout
- Entrega automática: link do App Web Vercel + ebook PDF

---

## 6. VERCEL — PROJETOS CONFIGURADOS

| Projeto | Project ID | Diretório | URL esperada |
|---------|-----------|-----------|--------------|
| app-web | `prj_LEuwO37jGp2wGkNHA6eSVmkN2Qvd` | `app-web/` | fabrica-infoprodutos.vercel.app |
| landing-fabrica-ia | `prj_8ZhsTjkwWXziSstY8fk0F5GxOKAt` | `pagina-vendas/` | landing-fabrica-ia.vercel.app |

**Org:** `team_Mf3vr6oYlp373wrEsowhFQT8`

---

## 7. SKILLS DO CLAUDE CODE (10 skills em `.claude/skills/`)

| Skill | Comando | O que faz |
|-------|---------|-----------|
| criar-estrutura-curso | `/criar-estrutura-curso` | Gera módulos e aulas com Taxonomia de Bloom |
| gerar-conteudo-aulas | `/gerar-conteudo-aulas` | Gera conteúdo de aulas individuais |
| gerar-conteudo-completo | `/gerar-conteudo-completo` | Gera todas as 37 aulas de uma vez |
| escrever-copy-vendas | `/escrever-copy-vendas` | Copy agressiva de página de vendas |
| montar-pagina-vendas | `/montar-pagina-vendas` | HTML/CSS responsivo da landing page |
| gerar-app-web | `/gerar-app-web` | App Next.js completo para Vercel |
| gerar-ebook-bonus | `/gerar-ebook-bonus` | Ebook PDF em markdown |
| gerar-emails-lancamento | `/gerar-emails-lancamento` | Sequência de 7 emails de lançamento |
| gerar-criativos-ads | `/gerar-criativos-ads` | Textos e roteiros para Meta Ads |
| configurar-kiwify | `/configurar-kiwify` | Checklist de configuração Kiwify |

---

## 8. GIT — ESTADO ATUAL

**Branch:** main
**Remote:** origin (GitHub, auto-deploy Vercel)

### Commits recentes:
```
915e613 Fix: CTAs landing page apontando pro checkout Kiwify
adf5790 Landing page: link Kiwify checkout + cores Axtor Labs
abc8782 Fix: hydration, cores Axtor Labs, webpack build, remove postcss
f5c5d54 fix: next.config.ts - standalone output, performance & security
637deb9 Projeto completo: Fábrica de Infoprodutos com IA - curso, app web, ebook, copy, emails, criativos
```

**Uncommitted:** `image.png` (staged)

---

## 9. REGRAS DO CLAUDE.md (OBRIGATÓRIAS)

1. **Pesquisa antes de criar** — NUNCA criar conteúdo sem pesquisa de mercado atualizada em `curso/pesquisa-mercado.md`
2. **Dados de 2026** — NUNCA usar dados de 2024/2025 sem contextualizar como históricos
3. **Português brasileiro** — Todo conteúdo em pt-BR
4. **Tom direto e prático** — Sem enrolação, motivador
5. **Copy agressiva** — Gatilhos mentais pesados: urgência, escassez, prova social, ancoragem
6. **HTML responsivo** — Mobile-first, sem dependências externas
7. **Arquivos completos** — Sempre gerar prontos para uso
8. **App web em Next.js** — Deploy na Vercel
9. **Ebook em markdown** — Pronto para exportar PDF

---

## 10. STATUS ATUAL — O QUE ESTÁ FEITO vs. O QUE FALTA

### FEITO ✅
- [x] Pesquisa de mercado com dados 2026
- [x] Estrutura completa do curso (9 módulos, 37 aulas)
- [x] Conteúdo de todas as 37 aulas (markdown)
- [x] App Web Next.js completo (SSG, sidebar, progress tracking)
- [x] CSS dark theme puro (496 linhas, sem Tailwind)
- [x] Meta Pixel integrado no layout
- [x] Landing page HTML/CSS completa com CTAs pro Kiwify
- [x] Copy de vendas completa (3 versões headline + corpo inteiro)
- [x] Sequência de 7 emails de lançamento
- [x] 5 criativos + 2 roteiros de vídeo para Meta Ads
- [x] Ebook bônus "MODO FÁBRICA" (6 fases, 12 prompts, 47-item checklist)
- [x] Configuração Kiwify documentada (checklist completo)
- [x] 10 Skills personalizadas do Claude Code
- [x] Vercel configurada (2 projetos: app-web + landing)
- [x] Correção de hidratação (pattern mounted state)
- [x] CTAs da landing page apontando pro checkout correto

### PENDENTE / A FAZER 🔲
- [ ] **Resolver build para produção** — dev funciona com `--webpack`, precisa garantir que build/deploy Vercel funciona
- [ ] **Deploy do App Web na Vercel** — push + verificar se build passa no CI da Vercel
- [ ] **Deploy da Landing Page na Vercel** — mesmo processo
- [ ] **Configurar produto real na Kiwify** — seguir checklist de `kiwify/configuracao-completa.md`
- [ ] **Configurar entrega automática** — link do app Vercel + PDF do ebook na Kiwify pós-compra
- [ ] **Configurar emails na plataforma** — subir sequência em ferramenta de email (Resend ou automação Kiwify)
- [ ] **Pixel do Meta** — setar env var `NEXT_PUBLIC_META_PIXEL_ID` com ID real
- [ ] **Subir criativos no Meta Ads** — criar campanha Advantage+ com os 5 criativos
- [ ] **Testar fluxo E2E** — anúncio → landing → checkout → acesso app → emails
- [ ] **Exportar ebook para PDF** — converter `ebook/guia-rapido.md` para PDF formatado
- [ ] **Domínio customizado (opcional)** — conectar domínio próprio na Vercel
- [ ] **Proteção de acesso ao app (opcional)** — implementar algum controle (senha, token, ou via Kiwify webhook)
- [ ] **Revisar conteúdo das aulas** — leitura humana final de qualidade e atualização de dados

---

## 11. PROBLEMAS CONHECIDOS

### Build Turbopack no Windows
- **Problema:** Next.js 16 usa Turbopack por default, que crasha com `TurbopackInternalError` no Windows + Node.js v25
- **Workaround:** Usar flag `--webpack` (já configurada no `package.json` script de build)
- **No Vercel:** Deve funcionar normalmente pois Vercel roda Linux

### Tailwind/PostCSS removidos
- **Motivo:** Incompatibilidade com worker threads no Node.js v25 no Windows
- **Solução aplicada:** CSS puro completo em `globals.css` (496 linhas)
- **Dependências de dev permanecem** no `package.json` mas não são usadas

### Variáveis CSS renomeadas
- `--green` e `--green2` agora contém valores azuis (`#0028fa`, `#2450ff`) — branding Axtor Labs
- O nome da variável não foi atualizado (sem impacto funcional)

---

## 12. COMO CONTINUAR O DESENVOLVIMENTO

### Para rodar localmente:
```bash
cd app-web
npm install        # só na primeira vez
npx next dev --webpack -p 3000
```

### Para fazer build de produção:
```bash
cd app-web
npm run build      # usa --webpack via package.json
```

### Para editar conteúdo de aulas:
1. Editar o .md em `app-web/content/modulo-X/aula-Y.md`
2. Se quiser manter espelho, editar também em `curso/modulo-X/aula-Y.md`
3. O app recarrega automaticamente em dev mode

### Para alterar estrutura (adicionar/remover aulas):
1. Editar `app-web/lib/courseData.ts` (fonte de verdade)
2. Criar/remover os .md correspondentes em `app-web/content/`
3. O `generateStaticParams()` se adapta automaticamente

### Para alterar o visual:
1. Editar `app-web/app/globals.css`
2. Variáveis de tema estão no `:root` no topo do arquivo
