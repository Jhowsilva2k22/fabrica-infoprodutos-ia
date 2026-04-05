# Aula 2.5 — Skills: Como Criar Comandos Personalizados Que Automatizam Seu Fluxo

## O Conceito Que Separa Amadores de Profissionais

Existe um momento de transformação no aprendizado do Claude Code. Antes desse momento, você usa o Claude pedindo coisas em linguagem natural, um pedido de cada vez. Depois desse momento, você ativa um comando e uma cascata de trabalho acontece automaticamente.

Esse momento é quando você cria sua primeira **Skill**.

Uma Skill é um arquivo SKILL.md que encapsula um fluxo completo de trabalho — com papel, contexto, formato, regras de output e instruções específicas — num único comando. Em vez de escrever um prompt de 30 linhas toda vez que precisa criar uma aula, você digita `/gerar-conteudo-completo` e o sistema executa.

A Skill não apenas economiza tempo. Ela garante que o fluxo seja idêntico toda vez — mesma qualidade, mesmo formato, mesmo nível de detalhe — independente de quando você executar.

---

## Como as Skills Funcionam Tecnicamente

Uma Skill é um arquivo Markdown com frontmatter YAML salvo em `.claude/skills/[nome-da-skill]/SKILL.md` dentro do seu projeto.

Quando você digita `/nome-da-skill` no Claude Code, o sistema:
1. Localiza o SKILL.md correspondente
2. Lê as instruções encapsuladas
3. Injeta o contexto do CLAUDE.md do projeto
4. Executa o fluxo com os parâmetros que você passou (se houver)

O frontmatter YAML define metadados da Skill. Os atributos válidos em abril de 2026 são:

```yaml
---
name: nome-da-skill
description: Descrição do que esta skill faz
argument-hint: "[parâmetro opcional]"
user-invocable: true
disable-model-invocation: false
compatibility: claude-opus-4-6
license: proprietary
metadata:
  version: "1.0"
  category: content
---
```

**Atributos importantes:**
- `user-invocable: true` — torna a skill disponível via `/comando`
- `disable-model-invocation: true` — faz a skill funcionar como documentação/checklist sem chamar o modelo (útil para guias passo a passo)
- `argument-hint` — mostra ao usuário que parâmetro passar

---

## A Skill Economy: O Ecossistema de 2026

Skills não são só uma feature do Claude Code — se tornaram uma economia própria.

**O ecossistema atual (abril 2026):**
- **Skills oficiais da Anthropic:** Conjunto curado de Skills para tarefas comuns de desenvolvimento
- **Skills verificadas de parceiros:** Agências e plataformas (Vercel, Supabase, etc.) publicam Skills de integração
- **Skills comunitárias:** Milhares de Skills gratuitas e pagas no MCP Market (mcpmarket.com/tools/skills)
- **Skills proprietárias:** Empresas e criadores vendem acesso a Skills especializadas por assinatura

O mesmo arquivo SKILL.md funciona no Claude Code, Cursor, Gemini CLI e Antigravity IDE — é um formato universal desde 2025. Isso significa que uma Skill que você cria para o Claude Code pode ser usada por quem trabalha com Cursor, sem nenhuma adaptação.

Para criadores de infoprodutos, isso abre uma possibilidade interessante: você pode **vender** as Skills que criar como produto digital separado.

---

## Criando Sua Primeira Skill: gerar-conteudo-completo

Vamos criar a Skill mais importante para produção de infoprodutos. Abra o Claude Code e execute:

```
Crie a estrutura de pasta .claude/skills/gerar-conteudo-completo/ 
e dentro dela o arquivo SKILL.md para uma skill que gera o conteúdo 
completo de uma aula do curso. 

A skill deve:
- Receber o número da aula como parâmetro (ex: "3.2")
- Ler a estrutura em curso/estrutura.md para entender o que a aula deve cobrir
- Ler o CLAUDE.md para aplicar as regras de tom e público
- Gerar uma aula completa com: título, introdução com problema/gancho, 
  3 conceitos principais com exemplos práticos, exercício prático com 5 passos,
  3 dicas em blocos de citação
- Mínimo 800 palavras, máximo 1200 palavras
- Salvar em curso/modulo-X/aula-Y.md (inferindo X e Y do parâmetro)
```

O Claude vai criar o arquivo com a estrutura correta. Após criado, revise o SKILL.md e ajuste as instruções conforme seu estilo específico.

---

## As 8 Skills do Sistema Fábrica de Infoprodutos

Para o sistema completo que você vai montar neste curso, você precisa de 8 Skills:

### 1. `/criar-estrutura-curso`
**O que faz:** Cria a estrutura completa de módulos e aulas com base no tema e público-alvo definidos no CLAUDE.md  
**Output:** `curso/estrutura.md` com todos os módulos, títulos e descrições  
**Quando usar:** Uma vez por projeto, no início

### 2. `/gerar-conteudo-completo [numero-da-aula]`
**O que faz:** Gera o conteúdo completo de uma aula específica, 800+ palavras  
**Output:** `curso/modulo-X/aula-Y.md`  
**Quando usar:** Para cada aula do curso, em sequência ou em paralelo com Background Agents

### 3. `/escrever-copy-vendas`
**O que faz:** Gera copy completa de vendas com todos os elementos: headline, bullets, ancoragem, garantia, FAQ, PS  
**Output:** `pagina-vendas/copy.md`  
**Quando usar:** Uma vez, após o curso estar estruturado

### 4. `/montar-pagina-vendas`
**O que faz:** Transforma a copy em landing page HTML/CSS responsiva com countdown timer  
**Output:** `pagina-vendas/index.html`  
**Quando usar:** Uma vez, após a copy estar pronta

### 5. `/gerar-emails-lancamento`
**O que faz:** Cria a sequência completa de 7 emails de lançamento  
**Output:** `emails/sequencia-lancamento.md`  
**Quando usar:** Uma vez, na fase de publicação

### 6. `/configurar-kiwify`
**O que faz:** Gera guia passo a passo de configuração do produto na Kiwify  
**Output:** `kiwify/guia-configuracao.md`  
**Quando usar:** Uma vez, ao publicar o produto

### 7. `/gerar-criativos-ads`
**O que faz:** Cria 5 variações de anúncios para Meta Ads + 2 roteiros de vídeo  
**Output:** `criativos/anuncios-meta.md`  
**Quando usar:** Uma vez, ao ativar o tráfego pago

### 8. `/gerar-app-web`
**O que faz:** Inicializa e estrutura o projeto Next.js 16.2 com o conteúdo do curso  
**Output:** `app-web/` (projeto Next.js completo)  
**Quando usar:** Uma vez, após o curso estar completo

---

## Testando Sua Primeira Skill

Após criar o SKILL.md da skill `gerar-conteudo-completo`, teste-a:

```
/gerar-conteudo-completo 1.1
```

O Claude deve:
1. Ler o SKILL.md da skill
2. Ler o `curso/estrutura.md` para entender o que a Aula 1.1 cobre
3. Ler o CLAUDE.md para aplicar tom e contexto
4. Gerar o conteúdo completo da aula
5. Salvar em `curso/modulo-1/aula-1.md`

Se tudo correr bem, você vai ter uma aula completa gerada com um único comando. Se algo não ficar como esperado, ajuste o SKILL.md e tente de novo — a iteração de Skills é parte do processo.

---

## Exercício Prático

1. Crie as pastas de todas as 8 Skills em `.claude/skills/`
2. Comece com a Skill `gerar-conteudo-completo` — crie o SKILL.md seguindo o processo desta aula
3. Teste a skill com `/gerar-conteudo-completo 1.1`
4. Avalie o output: o tom está certo? O formato seguiu as especificações? A aula tem 800+ palavras?
5. Faça 3 ajustes no SKILL.md com base no que o output não acertou
6. Teste novamente — compare as duas versões

A Skill que você tem ao final desse processo é personalizada para o seu projeto e produto específico.

---

## Dicas e Pontos de Atenção

> **Sobre a ordem de criação das Skills:** Não precisa criar todas as 8 Skills hoje. Crie conforme precisar. Comece com as Skills de Produção (criar-estrutura-curso e gerar-conteudo-completo) — você vai usá-las ainda neste módulo. As Skills de Publicação (montar-pagina-vendas, gerar-emails-lancamento, etc.) você cria nos módulos correspondentes do curso.

> **Ponto de atenção — atributo `allowed-tools`:** Em versões anteriores do Claude Code, algumas documentações mencionavam um atributo `allowed-tools` no frontmatter do SKILL.md. Esse atributo **não existe** na versão 2.1.92 e gera erros. Os únicos atributos válidos são: `name`, `description`, `argument-hint`, `user-invocable`, `disable-model-invocation`, `compatibility`, `license`, `metadata`. Se você encontrar um tutorial usando `allowed-tools`, ignore essa parte.

> **Skills e o MCP Market:** Antes de criar uma Skill do zero, pesquise se já existe uma no MCP Market (mcpmarket.com/tools/skills). Pode haver uma Skill de copywriting, de estruturação de curso ou de geração de emails que já está otimizada e você pode usar como base, adaptando para o seu contexto. Isso economiza tempo e aproveita o trabalho coletivo da comunidade.
