# Fábrica de Infoprodutos com IA — Documento End-to-End

> Gerado em 2026-04-05. Use este documento para passar contexto completo ao Claude Code em novas sessões.

---

## 1. Visão Geral do Projeto

**Produto:** Curso digital "Fábrica de Infoprodutos com IA — Crie, Lance e Venda Produtos Digitais 100% com Claude"
**Stack:** Next.js 16.2.2 + TypeScript + CSS customizado puro (sem framework CSS)
**Venda:** Kiwify
**Hospedagem:** Vercel (GitHub auto-deploy)
**Tráfego:** Meta Ads (Facebook + Instagram)
**Bônus:** Ebook PDF (markdown)

---

## 2. Estrutura de Pastas do Repositório

```
fabrica-infoprodutos-ia/
├── CLAUDE.md                    ← Regras absolutas do projeto
├── PROJETO-END-TO-END.md        ← Este documento
├── app-web/                     ← Produto principal (Next.js)
│   ├── CLAUDE.md / AGENTS.md
│   ├── app/
│   │   ├── globals.css          ← CSS completo (496 linhas, puro, sem Tailwind)
│   │   ├── layout.tsx           ← Root layout + Sidebar + Meta Pixel
│   │   ├── page.tsx             ← Dashboard / Home
│   │   └── aula/[modulo]/[aula]/
│   │       ├── page.tsx         ← Server Component (lê .md do disco)
│   │       └── LessonClient.tsx ← Client Component (ReactMarkdown + localStorage)
│   ├── components/
│   │   └── Sidebar.tsx          ← Nav lateral com progresso
│   ├── lib/
│   │   └── courseData.ts        ← Fonte de verdade de módulos/aulas
│   ├── content/
│   │   ├── modulo-1/ … modulo-8/ modulo-bonus/  ← 37 arquivos .md de aulas
│   └── package.json
├── curso/                       ← Conteúdo bruto das aulas (markdown)
│   ├── estrutura.md             ← Estrutura completa (9 módulos, 37 aulas)
│   ├── pesquisa-mercado.md      ← Pesquisa de mercado obrigatória
│   └── modulo-1/ … modulo-bonus/
├── pagina-vendas/
│   ├── copy.md                  ← Copy agressiva da página
│   └── index.html               ← Landing page HTML/CSS completa
├── emails/
│   └── sequencia-lancamento.md  ← 7 emails de lançamento (Jeff Walker style)
├── criativos/
│   └── criativos-meta-ads.md    ← Scripts/textos para anúncios
├── ebook/
│   └── guia-rapido.md           ← Ebook bônus (formato PDF-ready)
├── kiwify/
│   └── configuracao-completa.md ← Checklist completo Kiwify
└── .claude/
    └── skills/                  ← 9 Skills personalizadas do Claude Code
        ├── criar-estrutura-curso/
        ├── gerar-conteudo-completo/
        ├── escrever-copy-vendas/
        ├── montar-pagina-vendas/
        ├── gerar-ebook-bonus/
        ├── gerar-emails-lancamento/
        ├── gerar-criativos-ads/
        ├── configurar-kiwify/
        └── gerar-app-web/
```

---

## 3. Estrutura do Curso (37 aulas)

| # | Módulo | Tema | Aulas |
|---|--------|------|-------|
| 1 | A Virada de Chave | Mentalidade e fundamentos de IA | 4 |
| 2 | Setup da Fábrica | Claude Code v2.1.92, CLAUDE.md, Skills | 5 |
| 3 | Construindo o Produto | Validação, posicionamento, estrutura | 4 |
| 4 | Produção em Escala | Conteúdo com Background Agents | 4 |
| 5 | Copy que Vende | Gatilhos, página de vendas, emails | 4 |
| 6 | A Vitrine Digital | Landing page, App Web, Vercel | 4 |
| 7 | Publicação e Monetização | Kiwify, checkout, integração | 4 |
| 8 | Tráfego Pago | Meta Ads com motor Andromeda/GEM | 4 |
| B | Módulo Bônus | Escala, automação avançada | 4 |

### Módulo 1 — A Virada de Chave
- Aula 1.1: Por Que 99% das Pessoas Usam IA Errado
- Aula 1.2: Claude Opus 4.6 vs. O Mercado
- Aula 1.3: O Modelo Mental da Fábrica
- Aula 1.4: Sua Primeira Conversa Produtiva com o Claude

### Módulo 2 — Setup da Fábrica
- Aula 2.1: O Que é o Claude Code e Por Que Ele Muda Tudo
- Aula 2.2: Instalação e Configuração do Zero (Windows/Mac/Linux)
- Aula 2.3: CLAUDE.md: O Arquivo Que Transforma o Claude no Seu Funcionário
- Aula 2.4: Estrutura de Pastas de um Projeto Profissional
- Aula 2.5: Skills: Comandos Personalizados Que Automatizam Seu Fluxo

### Módulo 3 — Construindo o Produto
- Aula 3.1: Validação de Nicho com IA
- Aula 3.2: Posicionamento Imbatível — Framework "Único Por Que Você"
- Aula 3.3: Skill criar-estrutura-curso
- Aula 3.4: Revisão Estratégica

### Módulo 4 — Produção em Escala
- Aula 4.1: O Prompt Perfeito Para Conteúdo Didático
- Aula 4.2: Gerando Módulo por Módulo com Background Agents
- Aula 4.3: Revisão Inteligente (Claude revisando o próprio conteúdo)
- Aula 4.4: Criando o Ebook Bônus em 1 hora

### Módulo 5 — Copy que Vende
- Aula 5.1: Os 7 Gatilhos Mentais Que Mais Vendem no Brasil
- Aula 5.2: Skill escrever-copy-vendas
- Aula 5.3: Ajustando a Copy (injetar sua voz, testar variações)
- Aula 5.4: Sequência de Emails de Lançamento (7 emails)

### Módulo 6 — A Vitrine Digital
- Aula 6.1: Anatomia de Uma Landing Page Que Converte (12 elementos)
- Aula 6.2: Skill montar-pagina-vendas
- Aula 6.3: Publicando na Vercel via GitHub (deploy automático)
- Aula 6.4: Criando o App Web com Next.js 16.2

### Módulo 7 — Publicação e Monetização
- Aula 7.1: Por Que a Kiwify é a Melhor Plataforma em 2026
- Aula 7.2: Skill configurar-kiwify
- Aula 7.3: Checkout de Alta Conversão (order bumps, upsells, pixel)
- Aula 7.4: Conectando Tudo (Kiwify + Vercel + Email)

### Módulo 8 — Tráfego Pago
- Aula 8.1: Meta Ads Para Infoprodutos em 2026 (motor Andromeda)
- Aula 8.2: Skill gerar-criativos-ads
- Aula 8.3: Segmentação com Advantage+
- Aula 8.4: Analisando Resultados e Escalando

### Módulo Bônus — Acelerador
- Aula B1: Lançamento Perpétuo vs. Lançamento Semente
- Aula B2: Criando Seu Segundo Produto em 48 Horas
- Aula B3: /loop, Background Agents e Computer Use
- Aula B4: Comunidade, Suporte e Atualizações

---

## 4. App Web — Arquitetura Técnica

### Dependências (package.json)

```json
{
  "dependencies": {
    "next": "16.2.2",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "react-markdown": "^10.1.0",
    "remark-gfm": "^4.0.1"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.2",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

> **ATENÇÃO:** `@tailwindcss/postcss` está em devDependencies mas NÃO está sendo usado.
> O `postcss.config.mjs` foi DELETADO e o `@import "tailwindcss"` foi REMOVIDO do globals.css
> porque o `@tailwindcss/node` falha com `Error: EINVAL` no Node.js v25.8.2 no Windows.
> O CSS é 100% customizado, não usa nenhuma classe utilitária do Tailwind.

### Problema de Build (PENDENTE — CRÍTICO)

**Ambiente:** Windows 10, Node.js v25.8.2, Next.js 16.2.2 (Turbopack)

**Histórico de erros:**
1. Erro inicial: `TurbopackInternalError` — OS error 10054 (WSAECONNRESET) ao processar globals.css via `@tailwindcss/postcss`
2. Erro seguinte: `Error: EINVAL — new Worker()` em `@tailwindcss/node/dist/index.js:18` — incompatibilidade Node.js v25 + worker threads ESM
3. Correção aplicada: removido `@import "tailwindcss"` do globals.css + deletado `postcss.config.mjs`
4. Erro atual: `Next.js build worker exited with code: 134` — crash/SIGABRT do Turbopack

**Próximos passos para resolver o build:**
```bash
# Opção 1: forçar webpack (sem Turbopack)
npx next build --no-turbopack

# Opção 2: configurar next.config.ts
# experimental: { turbopack: false }  ← checar se existe em Next.js 16

# Opção 3: downgrade de Node.js para v20 LTS ou v22 LTS
# nvm use 20  (recomendado — Node 20 é LTS estável)
```

### lib/courseData.ts

Fonte de verdade do curso. Exports:
- `courseModules: Module[]` — 9 módulos com lessons aninhadas
- `getTotalLessons(): number` → 37
- `getModuleById(id: string): Module | undefined`
- `getLessonNav(moduleId, lessonId)` → `{ prev, next, current, index, total }`

Interface:
```typescript
interface Lesson { id: string; title: string; description: string; }
interface Module { id: string; number: string; title: string; level: string; lessons: Lesson[]; }
```

### app/globals.css

496 linhas de CSS puro. **Sem PostCSS, sem Tailwind.** Design system dark premium:

```css
:root {
  --bg: #07090f;        /* fundo principal */
  --bg2: #0d1220;       /* fundo sidebar */
  --bg3: #111827;       /* cards/code blocks */
  --bg4: #1a2235;
  --bg5: #1e293b;
  --green: #00e87a;     /* cor de destaque principal */
  --green2: #00c96a;
  --green-glow: rgba(0,232,122,0.15);
  --text: #f1f5f9;      /* texto principal */
  --text2: #94a3b8;     /* texto secundário */
  --text3: #64748b;     /* texto terciário */
  --border: rgba(255,255,255,0.07);
  --sidebar-w: 280px;
  --radius: 12px;
  --radius-sm: 8px;
}
```

Classes de layout: `.app-layout`, `.sidebar`, `.main-content`
Classes home: `.home-wrap`, `.home-eyebrow`, `.home-title`, `.home-desc`, `.start-cta`, `.stats-grid`, `.stat-card`, `.modules-grid`, `.module-card`
Classes aula: `.lesson-wrap`, `.lesson-topbar`, `.lesson-breadcrumb`, `.lesson-badge`, `.lesson-header`, `.lesson-title`, `.lesson-content`, `.lesson-completion`, `.completion-checkbox`, `.lesson-nav`, `.nav-btn`
Classes sidebar: `.sidebar-brand`, `.sidebar-progress`, `.progress-fill`, `.sidebar-nav`, `.module-item`, `.module-header`, `.lesson-link`, `.lesson-dot`
Media query mobile: `@media (max-width: 768px)` — sidebar transforma em drawer com toggle hamburger

### app/layout.tsx

```tsx
// suppressHydrationWarning em <html> e <body>
// Meta Pixel via env var NEXT_PUBLIC_META_PIXEL_ID (opcional)
// Estrutura: <html> → <body> → <div class="app-layout"> → <Sidebar> + <main class="main-content">
```

### app/page.tsx (Dashboard)

Server Component. Renderiza:
- Eyebrow badge "✦ Curso Completo — Claude Code"
- H1 com `<span>` verde
- Parágrafo descritivo com contagem dinâmica
- CTA verde → `/aula/modulo-1/aula-1`
- Grid de 4 stats (37 aulas, 9 módulos, 7d, 9 Skills)
- Lista de module cards com ícones emoji por módulo

```typescript
const MODULE_ICONS: Record<string, string> = {
  'modulo-1': '🔑', 'modulo-2': '⚙️', 'modulo-3': '🏗️', 'modulo-4': '🏭',
  'modulo-5': '✍️', 'modulo-6': '🖥️', 'modulo-7': '💰', 'modulo-8': '🚀',
  'modulo-bonus': '🎁',
};
```

### components/Sidebar.tsx

`'use client'`. Funcionalidades completas:

```typescript
// Detecta módulo/aula atual via usePathname()
const parts = pathname.split('/').filter(Boolean);
const currentModule = parts[1] || '';  // ex: 'modulo-1'
const currentLesson = parts[2] || '';  // ex: 'aula-2'

// Estado inicializado do pathname (evita hydration mismatch)
const [openModules, setOpenModules] = useState<string[]>([initialOpen]);
const [completed, setCompleted] = useState<string[]>([]);
const [mounted, setMounted] = useState(false);
const [sidebarOpen, setSidebarOpen] = useState(false);

// localStorage lido apenas no useEffect (após mount)
// Evento 'fabrica_progress' para sincronizar com LessonClient
// suppressHydrationWarning no progress fill e nos lesson-dots
```

### app/aula/[modulo]/[aula]/page.tsx

Server Component com `generateStaticParams` que pré-gera as 37 rotas. Lê o `.md` de `content/modulo/aula.md`. Renderiza topbar, header e delega conteúdo para `LessonClient`. Botões Prev/Next gerados via `getLessonNav()`.

```typescript
// Next.js 16: params é Promise — obrigatório await
interface Props { params: Promise<{ modulo: string; aula: string }>; }
export default async function LessonPage({ params }: Props) {
  const { modulo, aula } = await params;
  // ...
}
```

### app/aula/[modulo]/[aula]/LessonClient.tsx

`'use client'`. Renderiza markdown com `<ReactMarkdown remarkPlugins={[remarkGfm]}>`.
Checkbox de conclusão salva em `localStorage` chave `fabrica_completed` (array de strings `"modulo-1/aula-2"`).
Dispara evento `fabrica_progress` ao salvar para que a Sidebar atualize a barra.

---

## 5. Padrão Anti-Hydration (React 19 + Next.js 16)

Regra: qualquer valor que difere entre server e client deve ser guardado por `mounted`:

```tsx
const [mounted, setMounted] = useState(false);
useEffect(() => { setMounted(true); }, []);

// Conteúdo dinâmico:
{mounted && done ? 'Aula concluída ✓' : 'Marcar como concluída'}

// Elementos com style dinâmico:
<div style={{ width: `${progressPct}%` }} suppressHydrationWarning />

// onClick só ativo após mount:
onClick={mounted ? toggleComplete : undefined}
```

---

## 6. Rotas Geradas Estaticamente

```
/                              → Dashboard
/aula/modulo-1/aula-1  …  aula-4
/aula/modulo-2/aula-1  …  aula-5
/aula/modulo-3/aula-1  …  aula-4
/aula/modulo-4/aula-1  …  aula-4
/aula/modulo-5/aula-1  …  aula-4
/aula/modulo-6/aula-1  …  aula-4
/aula/modulo-7/aula-1  …  aula-4
/aula/modulo-8/aula-1  …  aula-4
/aula/modulo-bonus/aula-1  …  aula-4
```
Total: **38 páginas estáticas** (1 home + 37 aulas).

---

## 7. Conteúdo das Aulas

37 arquivos `.md` em dois lugares espelhados:
- `curso/modulo-X/aula-Y.md` — fonte de edição/revisão
- `app-web/content/modulo-X/aula-Y.md` — lido em runtime pelo app

Formato de cada aula:
```markdown
# Título da Aula

## Introdução
...

## Conceito Central
...

## Prática
...

## Resumo
...
```

---

## 8. Materiais de Venda Produzidos

| Arquivo | Conteúdo |
|---------|----------|
| `pagina-vendas/index.html` | Landing page completa: dark premium, countdown timer JS, FAQ accordion, ancoragem R$997→R$97, zero dependências externas |
| `pagina-vendas/copy.md` | Copy completa: headline, 12 bullets, ancoragem de preço, garantia incondicional 30 dias, 8 FAQs, PS com escassez |
| `emails/sequencia-lancamento.md` | 7 emails estilo Jeff Walker/Russell Brunson com progressão curiosidade → valor → urgência |
| `criativos/criativos-meta-ads.md` | 5 variações de anúncio (feed/stories/reels), 2 roteiros de vídeo (30s/60s), sugestões de público |
| `ebook/guia-rapido.md` | Guia rápido PDF-ready — resumo do curso como bônus |
| `kiwify/configuracao-completa.md` | Checklist: preço R$97, entrega via link Vercel, afiliados, página de obrigado, order bump R$27, upsell |

---

## 9. Skills Claude Code (`.claude/skills/`)

Cada skill é um arquivo `SKILL.md` invocável via `/nome-da-skill`:

| `/skill` | O que faz |
|----------|-----------|
| `/criar-estrutura-curso` | Gera módulos + aulas com Taxonomia de Bloom aplicada |
| `/gerar-conteudo-completo` | Escreve conteúdo completo de cada aula (800+ palavras) |
| `/escrever-copy-vendas` | Página de vendas completa com gatilhos e ancoragem |
| `/montar-pagina-vendas` | Copy → HTML/CSS dark responsivo pronto para Vercel |
| `/gerar-ebook-bonus` | Ebook em markdown formatado para exportar PDF |
| `/gerar-emails-lancamento` | Sequência de 7 emails de lançamento |
| `/gerar-criativos-ads` | Textos e roteiros para Meta Ads |
| `/configurar-kiwify` | Checklist completo de publicação na Kiwify |
| `/gerar-app-web` | App Next.js completo pronto para deploy |

---

## 10. Configuração Vercel

```json
// app-web/.vercel/project.json
// Projeto já conectado à Vercel
// Deploy: npx vercel --prod
// ou push para main → auto-deploy via GitHub
```

Env vars necessárias na Vercel:
- `NEXT_PUBLIC_META_PIXEL_ID` — ID do pixel do Meta Ads (opcional)

---

## 11. CLAUDE.md (Regras do Projeto)

```markdown
REGRA ABSOLUTA: PESQUISA ANTES DE CRIAR
- Nunca criar conteúdo sem pesquisa prévia salva em curso/pesquisa-mercado.md
- Dados sempre de 2026, nunca informações desatualizadas

Regras Gerais:
- Todo conteúdo em português brasileiro
- Tom: direto, prático, motivador
- Copy AGRESSIVA: gatilhos mentais, urgência, escassez, ancoragem de preço
- HTML responsivo, mobile-first, zero dependências externas
- App web: Next.js + Vercel
- Ebook: markdown PDF-ready
```

---

## 12. Estado Atual e Próximos Passos

### Concluído
- [x] Pesquisa de mercado (`curso/pesquisa-mercado.md`)
- [x] Estrutura completa do curso (9 módulos, 37 aulas)
- [x] Conteúdo de todas as 37 aulas (em `curso/` e `app-web/content/`)
- [x] App web Next.js (todos os componentes, rotas, CSS)
- [x] Landing page HTML completa
- [x] Copy da página de vendas
- [x] Sequência de 7 emails
- [x] Criativos para Meta Ads
- [x] Ebook bônus
- [x] Checklist Kiwify
- [x] 9 Skills Claude Code

### Pendente (BLOQUEADOR)
- [ ] **Resolver o build do app-web** — `npm run build` falha com exit 134 (Turbopack crash no Windows/Node.js v25)
  - Tentar: `npx next build --no-turbopack`
  - Tentar: downgrade Node.js para v20 LTS (`nvm use 20`)
- [ ] Deploy final na Vercel
- [ ] Publicar produto na Kiwify
- [ ] Subir anúncios no Meta Ads
