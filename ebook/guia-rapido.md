# MODO FÁBRICA
## O Protocolo Completo do Lançamento — Do Zero à Primeira Venda

**O Manual de Campo do Aluno da Fábrica de Infoprodutos com IA**

*Checklists prontos. Templates copie-e-cole. Prompts para cada etapa.*
*Enquanto o curso ensina o porquê — este guia entrega o faça agora.*

---

> **Como usar este guia:**
> Abra ao lado do curso. Cada seção tem um checklist de verificação, o prompt exato para usar no Claude, e o template pronto. Você não precisa pensar — só executar na ordem.

---

## ÍNDICE

1. [Fase 1 — Fundação: Pesquisa e CLAUDE.md](#fase-1)
2. [Fase 2 — Produto: Estrutura e Conteúdo](#fase-2)
3. [Fase 3 — Venda: Copy e Landing Page](#fase-3)
4. [Fase 4 — Entrega: App Web e Kiwify](#fase-4)
5. [Fase 5 — Tráfego: Meta Ads do Zero](#fase-5)
6. [Fase 6 — Escala: Análise e Segundo Produto](#fase-6)
7. [Prompts Mestres: Os 12 Prompts que Fazem Tudo](#prompts-mestres)
8. [Checklist de Lançamento: 47 Pontos em Ordem](#checklist-lancamento)
9. [Templates Prontos: Copie e Cole](#templates)

---

<a name="fase-1"></a>
## FASE 1 — Fundação: Pesquisa e CLAUDE.md

### Antes de Começar: Checklist de Pesquisa

Não crie uma linha de conteúdo sem marcar todos estes itens:

- [ ] Pesquisei os 5 principais concorrentes no nicho (preço, proposta, formato)
- [ ] Identifiquei o problema que NENHUM concorrente resolve adequadamente
- [ ] Entrevistei ou li feedbacks de pelo menos 10 pessoas do público-alvo
- [ ] Confirmei a demanda: há pelo menos 100k pessoas no nicho com dor específica?
- [ ] Definido o preço baseado nos concorrentes + valor entregue (não no custo)
- [ ] Confirmei: consigo ensinar isso melhor do que 90% do mercado?
- [ ] Salvei pesquisa em `curso/pesquisa-mercado.md` com fontes e data

---

### Prompt: Validação de Nicho (copie, cole, substitua os colchetes)

```
Pesquise o mercado de infoprodutos no Brasil em 2026 para o nicho de [SEU NICHO].

Preciso de:
1. Tamanho estimado do mercado (quantas pessoas têm essa dor)
2. Os 5 principais produtos digitais existentes nesse nicho (nome, preço, proposta)
3. O que os alunos desses produtos mais reclamam nas avaliações
4. O que está faltando no mercado que nenhum produto entrega ainda
5. Faixas de preço praticadas (ticket baixo, médio, premium)
6. Termos de pesquisa mais usados pelo público (para usar no Meta Ads)

Baseado nessa análise, indique:
- O ângulo de diferenciação que eu deveria usar
- O preço ideal para o produto
- A proposta de valor que resume o produto em 1 frase

Salve a pesquisa completa em curso/pesquisa-mercado.md
```

---

### Template: CLAUDE.md Completo

Substitua os campos entre [colchetes] com os dados do seu produto:

```markdown
# [NOME DO PRODUTO]

## Produto
Nome: [NOME COMPLETO]
Formato: App Web (produto principal) + Ebook PDF (bônus)
Plataforma de venda: Kiwify
Hospedagem: Vercel
Preço: R$[VALOR]

## Público-Alvo
Perfil principal: [DESCREVA — ex: "Nutricionistas que querem atender online"]
Dor principal: [O QUE ELEs MAIS SOFREM]
Objetivo: [O QUE QUEREM CONQUISTAR]
Nível: [Iniciante / Intermediário / Avançado]
Objeção principal: [A PRINCIPAL DESCULPA PARA NÃO COMPRAR]

## Produto
Promessa principal: [O RESULTADO EM 1 FRASE]
Método exclusivo: [COMO VOCÊ ENTREGA O RESULTADO — dê um nome]
Módulos: [N] módulos, [N] aulas
Tempo de conclusão esperado: [X] semanas
Resultado que o aluno conquista: [RESULTADO ESPECÍFICO E MENSURÁVEL]

## Tom e Voz
Tom: [ex: "direto, técnico, sem rodeios"]
Pessoa: segunda pessoa singular (você)
Proibido: jargões corporativos, promessas vagas, eufemismos
Referência de estilo: [ex: "como Ramit Sethi em inglês — resultados práticos, sem papo de guru"]

## Concorrência
Produto A: [Nome] — R$[Preço] — fraqueza: [O QUE NÃO ENTREGA]
Produto B: [Nome] — R$[Preço] — fraqueza: [O QUE NÃO ENTREGA]
Nosso diferencial: [O QUE SÓ NÓS ENTREGAMOS]

## Bônus
Bônus 1: [Nome do ebook] — valor percebido: R$[VALOR]
Bônus 2: [Opcional]

## Regras Técnicas
- Todo conteúdo em português brasileiro
- App Web: Next.js para Vercel
- HTML: responsivo, mobile-first, sem dependências externas
- Imagens de anúncio: 1080x1080 (feed) e 1080x1920 (stories)
```

---

### Checklist CLAUDE.md: Antes de Avançar

- [ ] Público-alvo tem dor específica e mensurável (não genérica)
- [ ] Promessa é específica ("perder 5kg em 30 dias" > "emagrecer")
- [ ] Método tem um nome próprio (não "meu método")
- [ ] Tom é diferente dos concorrentes (não apenas mais do mesmo)
- [ ] Pelo menos 2 concorrentes mapeados com fraquezas reais
- [ ] CLAUDE.md salvo na raiz do projeto

---

<a name="fase-2"></a>
## FASE 2 — Produto: Estrutura e Conteúdo

### Prompt: Estrutura do Curso (use após CLAUDE.md pronto)

```
Com base no CLAUDE.md deste projeto, crie a estrutura completa do curso.

A estrutura deve ter:
- [N] módulos (do básico ao avançado, com progressão lógica)
- Cada módulo com 3-5 aulas
- Cada aula com: título + objetivo de aprendizado em 1 frase + exercício prático

Regras da estrutura:
1. Módulo 1 deve gerar uma "vitória rápida" — resultado visível em 24-48h
2. Cada aula deve terminar com 1 ação concreta, não apenas aprendizado teórico
3. O módulo final deve entregar exatamente a promessa principal do CLAUDE.md
4. Inclua 1 módulo bônus com conteúdo avançado para "alunos que querem mais"

Formato: lista numerada com nome do módulo, depois aulas com descrição.

Salve em curso/estrutura.md
```

---

### Prompt: Geração de Aula (use 1x por aula)

```
Gere a [NÚMERO]ª aula do Módulo [N]: "[TÍTULO DA AULA]"

Contexto:
- Módulo: [NOME DO MÓDULO]
- Aulas anteriores cobriram: [LISTE EM 1 LINHA]
- Próxima aula será sobre: [PRÓXIMO TÓPICO]

Estrutura obrigatória de cada aula:
1. HOOK (primeiras 3 linhas — por que isso importa AGORA para o aluno)
2. CONCEITO (o que é e por que funciona — com exemplo concreto, sem teoria vazia)
3. DEMONSTRAÇÃO (passo a passo do que fazer — com imagens/código/exemplo real)
4. EXERCÍCIO (1 ação específica que o aluno faz antes de avançar)
5. DICAS E PONTOS DE ATENÇÃO (erros comuns e como evitar — em formato de citação)

Tom: conforme definido no CLAUDE.md — direto, sem enrolação, resultados práticos.
Tamanho: 600-900 palavras (aula densa mas não exaustiva).

Salve em curso/modulo-[N]/aula-[N].md
```

---

### Prompt: Geração em Loop (gera módulo inteiro de uma vez)

```
/loop [NÚMERO DE AULAS DO MÓDULO]

Gere a próxima aula do Módulo [N] do produto descrito no CLAUDE.md.

Estrutura de aula: hook → conceito → demonstração → exercício → dicas
Tom e voz: conforme CLAUDE.md
Aulas já geradas: [o loop mantém contexto automaticamente]

Para cada aula:
1. Siga a estrutura obrigatória acima
2. Salve em curso/modulo-[N]/aula-[NÚMERO].md
3. Ao final, registre em 1 linha o que foi coberto (para contexto da próxima iteração)

Ao terminar todas as aulas, gere um resumo de consistência entre elas.
```

---

### Checklist de Conteúdo: Antes de Avançar

- [ ] Todas as aulas do módulo 1 geradas e revisadas
- [ ] Módulo 1 entrega vitória rápida (resultado em 48h)
- [ ] Todas as aulas têm exercício prático (não apenas teoria)
- [ ] Tom é consistente entre todas as aulas
- [ ] Não há repetição de conceitos entre aulas do mesmo módulo
- [ ] Módulo final entrega exatamente a promessa do CLAUDE.md
- [ ] Módulo bônus criado com conteúdo avançado
- [ ] Estrutura revisada em `curso/estrutura.md` — títulos finais confirmados

---

<a name="fase-3"></a>
## FASE 3 — Venda: Copy e Landing Page

### Prompt: Copy de Vendas Completa

```
Escreva a copy de vendas completa para o produto descrito no CLAUDE.md.

A copy deve seguir a estrutura de página de vendas de alta conversão:

1. HEADLINE PRINCIPAL
   - Promessa específica + resultado + prazo (se possível)
   - 3 variações para teste A/B

2. SUBHEADLINE
   - Quem é para + o que recebe + sem o quê (eliminar objeção principal)

3. PROBLEMA (agitar a dor)
   - Descreva em detalhes a situação frustrante do cliente ideal agora
   - Use linguagem do cliente, não do vendedor

4. PROMESSA (o sonho)
   - Como a vida fica após o produto
   - Específico, visual, crível

5. APRESENTAÇÃO DO MÉTODO
   - Nome do método com explicação de por que funciona
   - 3 diferenciais vs. concorrentes

6. PROVA SOCIAL
   - 3 depoimentos template com: [Nome, profissão, resultado específico obtido]
   - Deixe marcado para substituir com depoimentos reais

7. O QUE ESTÁ DENTRO
   - Lista de módulos com benefício por módulo (não apenas nome)
   - Bônus com valor percebido de cada um

8. GARANTIA
   - 7 dias incondicional (padrão Kiwify)
   - Texto que elimine o risco de compra

9. PREÇO E CTA
   - Ancoragem de preço (do quanto valia → quanto custa)
   - Botão de compra com urgência real
   - Lembrete da garantia abaixo do botão

10. FAQ
    - 5 perguntas frequentes com respostas que convertem objeções

Copy agressiva, gatilhos mentais pesados, linguagem direta.
Salve em pagina-vendas/copy.md
```

---

### Template: Headline de Alta Conversão

Escolha um dos 5 formatos e substitua os campos:

**Formato 1 — Resultado + Prazo:**
`"Como [RESULTADO DESEJADO] em [PRAZO REALISTA] — mesmo que [MAIOR OBJEÇÃO]"`

**Formato 2 — Número + Promessa:**
`"[N] Passos Para [RESULTADO] — O Método que [N] Alunos Já Usaram Para [PROVA]"`

**Formato 3 — Virada:**
`"Pare de [AÇÃO FRUSTRANTE]. Comece a [RESULTADO DESEJADO] com [MÉTODO]"`

**Formato 4 — Segredo:**
`"O que [GRUPO ASPIRACIONAL] Sabe Sobre [TEMA] que Você Ainda Não Sabe"`

**Formato 5 — Problema/Solução:**
`"[PROBLEMA EXATO]. Existe um [MÉTODO] que resolve isso em [PRAZO]"`

---

### Prompt: Landing Page HTML

```
Crie a landing page completa em HTML para o produto do CLAUDE.md.

Requisitos técnicos:
- HTML responsivo, mobile-first
- CSS inline ou em <style> — sem dependências externas
- Sem JavaScript obrigatório (use para animações opcionais)
- Botão de compra com href="#checkout" (Kiwify injeta o botão)
- Timer evergreen: <div id="timer"> (JavaScript simples, conta 72h para o visitante)
- Formulário de captura de email (opcional, para lista de espera)

Seções em ordem (use copy.md como fonte):
1. Header com logo + CTA fixo no topo (mobile)
2. Hero section com headline + subheadline + CTA primário
3. Seção de problema (agitar a dor)
4. Apresentação do método com ícones
5. O que está dentro (módulos + bônus)
6. Prova social (3 depoimentos em cards)
7. Sobre o criador (autoridade)
8. Garantia com ícone de escudo
9. Bloco de preço com timer + CTA
10. FAQ em accordion
11. Rodapé com política de privacidade e termos

Design:
- Paleta: [ESCOLHA: azul-escuro/dourado, verde-escuro/laranja, ou preto/vermelho]
- Tipografia: sistema (sem Google Fonts)
- Contraste alto para conversão mobile

Salve em pagina-vendas/index.html
```

---

### Checklist de Copy e Landing Page: Antes de Avançar

- [ ] Headline principal testada em 3 versões
- [ ] Problema descrito com linguagem do cliente (não do vendedor)
- [ ] Prova social: pelo menos 3 depoimentos (mesmo que templates para substituir depois)
- [ ] Garantia de 7 dias claramente visível
- [ ] Timer evergreen funcionando
- [ ] CTA aparece no mínimo 3 vezes na página (acima da dobra, meio, final)
- [ ] FAQ cobre as 5 principais objeções de compra
- [ ] Página abre em menos de 3s no mobile (sem imagens pesadas)
- [ ] Link do checkout Kiwify inserido no botão principal

---

<a name="fase-4"></a>
## FASE 4 — Entrega: App Web e Kiwify

### Prompt: App Web Completo (Next.js)

```
Crie o App Web completo para o curso do CLAUDE.md.

Stack:
- Next.js 14 com App Router
- TypeScript
- Tailwind CSS
- Deploy: Vercel

Funcionalidades obrigatórias:
1. AUTENTICAÇÃO SIMPLES
   - Login com email + senha (sem banco de dados — ALUNOS_JSON em lib/auth.ts)
   - Proteção de rotas: /curso/* requer login
   - Session com cookie seguro (7 dias)

2. ÁREA DO ALUNO
   - Dashboard com todos os módulos e progresso
   - Progresso salvo em localStorage por aluno
   - Aula concluída: botão "Marcar como concluída" → verde
   - Barra de progresso geral do curso

3. PLAYER DE CONTEÚDO
   - Layout: sidebar com módulos/aulas + área principal de conteúdo
   - Renderização de Markdown das aulas em curso/modulo-[N]/aula-[N].md
   - Navegação: anterior/próxima aula
   - Botão de download do ebook PDF na sidebar

4. WEBHOOK KIWIFY
   - Rota POST /api/kiwify-webhook
   - Recebe payload de compra confirmada
   - Adiciona email do comprador ao ALUNOS_JSON com senha temporária
   - Envia email de boas-vindas via Resend com credenciais

Gere os arquivos:
- app-web/app/page.tsx (login)
- app-web/app/dashboard/page.tsx
- app-web/app/curso/[modulo]/[aula]/page.tsx
- app-web/app/api/kiwify-webhook/route.ts
- app-web/lib/auth.ts (ALUNOS_JSON + funções de auth)
- app-web/components/Sidebar.tsx
- app-web/components/ProgressBar.tsx
- app-web/package.json
- app-web/.env.example
```

---

### Template: ALUNOS_JSON (lib/auth.ts)

```typescript
// lib/auth.ts
export const ALUNOS: Aluno[] = [
  {
    email: "aluno@exemplo.com",
    senha: "senha123",          // Hash em produção com bcrypt
    nome: "Nome do Aluno",
    acessoDesde: "2026-01-15",
    progresso: {
      "modulo-1-aula-1": true,
      "modulo-1-aula-2": false,
    }
  }
]

export interface Aluno {
  email: string
  senha: string
  nome: string
  acessoDesde: string
  progresso: Record<string, boolean>
}

export function autenticar(email: string, senha: string): Aluno | null {
  return ALUNOS.find(a => 
    a.email === email && a.senha === senha
  ) ?? null
}
```

---

### Prompt: Configuração Kiwify

```
Gere o checklist de configuração completa do produto na Kiwify.

Produto: conforme CLAUDE.md
Preço: R$[VALOR]
Garantia: 7 dias

Inclua:
1. Configurações do produto (nome, descrição, preço, parcelamento)
2. Configuração do checkout (campos, upsell, order bump)
3. Configuração do webhook (URL: https://[seu-dominio.vercel.app]/api/kiwify-webhook)
4. Configuração dos emails automáticos da Kiwify
5. Pixel de conversão do Meta Ads (onde inserir o código)
6. Teste de compra: fluxo completo com cartão de teste

Para cada configuração: onde encontrar na interface + o valor exato a inserir.

Salve em setup/kiwify-config.md
```

---

### Checklist App Web e Kiwify: Antes de Avançar

- [ ] App Web rodando localmente sem erros (`npm run dev`)
- [ ] Login funcionando com usuário de teste
- [ ] Progresso salva e persiste após recarregar a página
- [ ] Webhook recebe POST e adiciona aluno ao ALUNOS_JSON
- [ ] Deploy na Vercel funcionando (push no GitHub → auto-deploy)
- [ ] Domínio customizado configurado na Vercel (se tiver)
- [ ] URL do webhook inserida no Kiwify
- [ ] Teste de compra realizado com cartão de teste da Kiwify
- [ ] Email de boas-vindas disparado após compra de teste
- [ ] Acesso ao curso liberado após compra de teste

---

<a name="fase-5"></a>
## FASE 5 — Tráfego: Meta Ads do Zero

### Prompt: Criativos de Anúncio

```
Crie os criativos de anúncio para o produto do CLAUDE.md.

Gere 6 criativos nestes formatos:

FEED (1080x1080):
Criativo 1 — PROBLEMA: mostre a dor do público antes do produto
Criativo 2 — RESULTADO: mostre a transformação depois do produto  
Criativo 3 — PROVA SOCIAL: depoimento de aluno com resultado específico

STORIES (1080x1920):
Criativo 4 — GANCHO DIRETO: "Se você [problema], este produto é para você"
Criativo 5 — LISTA: "3 coisas que [público] precisa saber sobre [tema]"
Criativo 6 — URGÊNCIA: timer + oferta + CTA

Para cada criativo, forneça:
- Texto da imagem/vídeo (máximo 20% da área para feed)
- Texto principal do anúncio (primeiras 3 linhas são decisivas — sem corte)
- Headline (30 caracteres)
- Descrição (125 caracteres)
- CTA: [Saiba Mais / Comprar Agora / Inscreva-se]
- Público recomendado para este criativo

Salve em ads/criativos.md
```

---

### Template: Estrutura de Campanha Meta Ads

```
CAMPANHA: [NOME DO PRODUTO] — Conversões
Objetivo: Vendas (otimização: Compra)
Budget: R$[VALOR]/dia (CBO — Campaign Budget Optimization)

CONJUNTO DE ANÚNCIOS 1 — Interesses Amplos
Público: Brasil | 25-45 anos | Interesse: [NICHO PRINCIPAL]
Budget: não definido (CBO)
Criativos: Feed V1 + Feed V2 + Stories V1

CONJUNTO DE ANÚNCIOS 2 — Interesse Específico
Público: Brasil | 28-45 anos | Interesse: [NICHO ESPECÍFICO + CONCORRENTE]
Budget: não definido (CBO)
Criativos: Feed V3 + Stories V2

CONJUNTO DE ANÚNCIOS 3 — Lookalike (depois de 50+ compras)
Público: LAL 1% baseado em compradores
Budget: não definido (CBO)
Criativos: melhores do Conjunto 1 + 2

REGRAS AUTOMÁTICAS:
- Pausar criativo se CPA > R$[2x o alvo] e gasto > R$150
- Alertar se frequência > 4x em 7 dias
- Aumentar budget 20% se ROAS > 3x por 3 dias consecutivos
```

---

### Prompt: Análise Semanal de Resultados

```
Analise os resultados da campanha da semana e gere relatório de decisão.

Dados da semana:
- Budget gasto total: R$[VALOR]
- Vendas: [N] | CPA médio: R$[VALOR] | ROAS: [X]x

[Cole aqui os dados por criativo/conjunto do Gerenciador]

Responda:
1. Qual criativo tem melhor CPA? Por quê provavelmente está funcionando?
2. Qual criativo tem CTR alto mas CPA alto? (problema na landing page)
3. Quais criativos pausar agora? (critério: >R$150 gastos sem conversão OU CPA > 2x alvo)
4. Quais criativos escalar? (critério: CPA dentro do alvo + 3+ conversões + ROAS > 2.5x)
5. Próximas 3 ações específicas

Tom: objetivo e direto. Sem introduções. Vá ao ponto.
```

---

### Checklist Meta Ads: Antes de Ir ao Ar

- [ ] Pixel do Meta instalado na landing page E no App Web (evento Purchase)
- [ ] Teste do pixel: evento Purchase disparando na URL de confirmação da Kiwify
- [ ] Pelo menos 3 criativos diferentes prontos (não suba 1 criativo só)
- [ ] Página de vendas aprovada no meta (sem promessas médicas ou financeiras ilegais)
- [ ] Budget inicial definido: mínimo R$60/dia para ter dados em 7 dias
- [ ] Regras automáticas de pausa configuradas
- [ ] Objetivo da campanha: Conversões (não Tráfego, não Engajamento)
- [ ] URL do evento de conversão: confirmação de compra da Kiwify
- [ ] Primeiro resultado esperado: 7-14 dias para CPA estabilizar

---

<a name="fase-6"></a>
## FASE 6 — Escala: Análise e Segundo Produto

### Quando Criar o Segundo Produto

Só avance quando tiver **todos** estes:
- [ ] Mínimo 30 vendas do produto 1
- [ ] CPA estável por 2 semanas consecutivas
- [ ] Feedback de alunos indicando necessidade complementar clara
- [ ] Fluxo de caixa positivo (receita > (anúncios + ferramentas))

---

### A Regra dos 20% (escala sem quebrar o algoritmo)

**Nunca aumente o budget mais de 20% a cada 3-4 dias.**

Exemplo de escala segura:
```
Dia 1:  R$100/dia
Dia 4:  R$120/dia (+20%)
Dia 8:  R$145/dia (+20%)
Dia 12: R$174/dia (+20%)
Dia 16: R$208/dia (+20%)
Dia 20: R$250/dia (+20%)
```

Aumentos maiores resetam o aprendizado do Andromeda e elevam o CPA temporariamente.

---

### Sinais de Ad Fatigue (hora de criar novos criativos)

Crie criativos novos quando:
- Frequência acima de 4x (público saturado)
- CTR caindo 20%+ em relação à primeira semana
- CPA subindo 30%+ sem mudança de orçamento

**Não aumente o budget quando esses sinais aparecerem. Crie criativos novos primeiro.**

---

### Prompt: Identificar Oportunidade do Segundo Produto

```
Com base no produto atual do CLAUDE.md e nos feedbacks dos alunos abaixo,
identifique as 3 melhores oportunidades para o segundo produto.

Feedbacks recorrentes dos alunos:
[COLE OS FEEDBACKS MAIS COMUNS AQUI]

Para cada oportunidade:
1. Problema específico que o segundo produto resolve
2. Relação com o produto 1 (sequência / complemento / versão avançada)
3. Preço ideal baseado no valor entregue
4. Tempo de produção estimado usando o sistema da Fábrica

Priorize por: maior demanda comprovada × menor esforço de produção.
```

---

<a name="prompts-mestres"></a>
## PROMPTS MESTRES: Os 12 Prompts que Fazem Tudo

Estes são os prompts mais importantes do curso. Salve em favoritos.

---

### PM-01: Pesquisa de Mercado

```
Pesquise o mercado de infoprodutos brasileiro em 2026 para o nicho [NICHO].
Identifique: tamanho, top 5 concorrentes, gap de mercado, preço ideal, termos de busca.
Salve resultado em curso/pesquisa-mercado.md com fontes e data.
```

---

### PM-02: CLAUDE.md do Zero

```
Com base na pesquisa em curso/pesquisa-mercado.md, crie o CLAUDE.md completo
para o produto [NOME] no nicho [NICHO] com preço R$[VALOR] para [PÚBLICO].
Inclua: produto, público-alvo, tom/voz, concorrência, método exclusivo, bônus.
```

---

### PM-03: Estrutura de Curso

```
Com base no CLAUDE.md, crie a estrutura completa do curso.
[N] módulos, 3-5 aulas cada, progressão lógica, vitória rápida no módulo 1.
Cada aula com: título + objetivo + exercício prático.
Salve em curso/estrutura.md
```

---

### PM-04: Geração de Aula

```
Gere a aula [N] do Módulo [N]: "[TÍTULO]"
Estrutura: hook → conceito → demonstração → exercício → dicas
Tom conforme CLAUDE.md | 600-900 palavras
Salve em curso/modulo-[N]/aula-[N].md
```

---

### PM-05: Copy de Vendas

```
Escreva a copy completa de vendas para o produto do CLAUDE.md.
Estrutura: headline (3 versões) → problema → promessa → método → prova → oferta → garantia → FAQ
Copy agressiva com gatilhos pesados. Salve em pagina-vendas/copy.md
```

---

### PM-06: Landing Page

```
Crie a landing page HTML completa usando pagina-vendas/copy.md.
Responsivo, mobile-first, sem dependências externas, timer evergreen.
Paleta: [escolha]. Salve em pagina-vendas/index.html
```

---

### PM-07: App Web

```
Crie o App Web Next.js completo para o curso do CLAUDE.md.
Inclui: login simples, dashboard, player de conteúdo, progresso em localStorage,
webhook Kiwify POST, envio de email via Resend.
Salve em app-web/
```

---

### PM-08: Emails de Lançamento

```
Escreva a sequência completa de 7 emails de lançamento para o produto do CLAUDE.md.
Dias: -7, -5, -3, -1, 0 (abertura), +1 (urgência), +2 (último dia)
Cada email: assunto A/B + corpo (max 200 palavras) + CTA.
Salve em emails/sequencia-lancamento.md
```

---

### PM-09: Criativos de Anúncio

```
Crie 6 criativos para Meta Ads do produto do CLAUDE.md.
3 para feed (1080x1080): problema, resultado, prova social
3 para stories (1080x1920): gancho direto, lista, urgência
Para cada um: texto da imagem, texto do anúncio, headline, CTA, público recomendado.
Salve em ads/criativos.md
```

---

### PM-10: Análise de Anúncios

```
Analise os dados da campanha desta semana:
[COLE OS DADOS AQUI]
Identifique: criativo vencedor, criativos para pausar, próximas 3 ações.
Seja direto. Sem introduções.
```

---

### PM-11: Ebook Bônus

```
Crie o ebook bônus do produto do CLAUDE.md.
Formato: guia de referência rápida com checklists, templates copie-e-cole e prompts prontos.
Estrutura: capa + sumário + [N] seções correspondendo aos módulos do curso.
Salve em ebook/guia-rapido.md
```

---

### PM-12: Inventário do Sistema

```
Gere o inventário completo do sistema deste projeto.
Para cada componente: nome, localização, status, última atualização, responsável pela manutenção.
Identifique os 3 mais críticos e os 3 mais desatualizados.
Salve em setup/inventario-sistema.md
```

---

<a name="checklist-lancamento"></a>
## CHECKLIST DE LANÇAMENTO: 47 Pontos em Ordem

Execute na sequência. Não avance uma fase sem terminar a anterior.

### FASE 0 — Preparação (antes de tudo)
- [ ] 1. Claude Code instalado e atualizado (`npm update -g @anthropic-ai/claude-code`)
- [ ] 2. Conta na Vercel criada e conectada ao GitHub
- [ ] 3. Conta na Kiwify criada e verificada
- [ ] 4. Conta no Meta Business Suite criada
- [ ] 5. Domínio comprado (opcional, mas recomendado)
- [ ] 6. Conta no Resend criada (envio de emails transacionais)

### FASE 1 — Fundação
- [ ] 7. Pesquisa de mercado completa em `curso/pesquisa-mercado.md`
- [ ] 8. CLAUDE.md criado com todos os campos preenchidos
- [ ] 9. Estrutura do curso aprovada em `curso/estrutura.md`

### FASE 2 — Conteúdo
- [ ] 10. Módulo 1 completo e revisado (vitória rápida confirmada)
- [ ] 11. Todos os módulos gerados
- [ ] 12. Revisão de consistência entre módulos (sem repetições, sem buracos)
- [ ] 13. Módulo bônus criado

### FASE 3 — Copy e Página
- [ ] 14. Copy completa em `pagina-vendas/copy.md`
- [ ] 15. Headline testada com pelo menos 3 variações
- [ ] 16. Landing page criada em `pagina-vendas/index.html`
- [ ] 17. Landing page testada no mobile (Chrome DevTools)
- [ ] 18. Timer evergreen funcionando
- [ ] 19. Velocidade de carregamento < 3s (PageSpeed Insights)

### FASE 4 — App Web
- [ ] 20. App Web rodando localmente sem erros
- [ ] 21. Login e logout funcionando
- [ ] 22. Progresso de aulas funcionando
- [ ] 23. Deploy na Vercel funcionando
- [ ] 24. Domínio customizado configurado (ou subdomínio da Vercel)

### FASE 5 — Kiwify
- [ ] 25. Produto cadastrado na Kiwify com preço correto
- [ ] 26. Página de obrigado configurada (redireciona para app web)
- [ ] 27. Webhook configurado (URL do App Web)
- [ ] 28. Teste de compra realizado com cartão de teste
- [ ] 29. Aluno criado automaticamente após compra de teste
- [ ] 30. Email de boas-vindas disparado e recebido
- [ ] 31. Acesso ao curso liberado para email de teste

### FASE 6 — Meta Ads
- [ ] 32. Pixel do Meta instalado na landing page
- [ ] 33. Evento Purchase configurado na URL de confirmação
- [ ] 34. Teste do pixel: evento disparando corretamente (Meta Pixel Helper)
- [ ] 35. Conta de anúncios verificada e sem restrições
- [ ] 36. Pelo menos 3 criativos prontos (feed + stories)
- [ ] 37. Campanha criada com objetivo Conversões
- [ ] 38. Conjunto de anúncios 1: interesses amplos configurado
- [ ] 39. Conjunto de anúncios 2: interesse específico configurado
- [ ] 40. Regras automáticas de pausa configuradas
- [ ] 41. Budget inicial definido (mínimo R$60/dia)

### FASE 7 — Bônus e Suporte
- [ ] 42. Ebook bônus gerado e disponível no App Web para download
- [ ] 43. Prompt de suporte salvo como conversa no Claude.ai
- [ ] 44. Plataforma de comunidade criada (WhatsApp/Telegram/Discord)
- [ ] 45. Mensagem de boas-vindas automática configurada

### FASE 8 — Lançamento
- [ ] 46. Sequência de emails de lançamento agendada no Resend
- [ ] 47. Anúncios aprovados e campanha ativa

**Parabéns. A fábrica está em operação.**

---

<a name="templates"></a>
## TEMPLATES PRONTOS: Copie e Cole

### Template 1: Email de Boas-Vindas (disparado pela Kiwify)

```
Assunto: Seu acesso chegou — [NOME DO PRODUTO] ✓

[NOME DO ALUNO],

Bem-vindo(a)! Sua compra foi confirmada.

Suas credenciais de acesso:
→ Link: https://[SEU-APP].vercel.app
→ Email: [EMAIL DO ALUNO]
→ Senha: [SENHA GERADA AUTOMATICAMENTE]

Comece pelo Módulo 1 — ele foi desenhado para você ter 
um resultado real em 48 horas.

Qualquer dúvida, responda este email.

[SEU NOME]
[NOME DO PRODUTO]

P.S. Você também tem acesso ao ebook [NOME DO EBOOK] — 
baixe na sidebar do App Web. É o guia de campo do curso.
```

---

### Template 2: Solicitação de Depoimento (envie após 14 dias)

```
Assunto: Posso te fazer 3 perguntas rápidas?

[NOME],

Você está com [PRODUTO] há 14 dias. Quero saber como está indo.

3 perguntas — responde aqui mesmo no email:

1. Qual foi o maior resultado ou "aha moment" que você teve até agora?
2. O que mudou na sua rotina/negócio desde que começou?
3. Para quem você indicaria este produto?

Suas respostas me ajudam a melhorar o produto — e podem ajudar 
futuros alunos que estão na mesma situação que você estava.

Obrigado(a),
[SEU NOME]
```

---

### Template 3: Email de Urgência (último dia de carrinho)

```
Assunto: Encerra hoje à meia-noite [NOME DO PRODUTO]

[NOME],

Esta é a última vez que te envio sobre [PRODUTO].

O carrinho fecha hoje às 23h59.

Não por pressão de marketing — porque após o fechamento 
eu preciso de tempo para atender os alunos que entraram 
antes de abrir para novas turmas.

Se você ainda está na dúvida, lembra da garantia:
7 dias para pedir reembolso integral, sem pergunta, sem burocracia.
Você não tem nada a perder.

→ [LINK DE COMPRA]

[SEU NOME]

P.S. Se não é o momento certo, tudo bem. Guarda o link — 
quando eu abrir novamente, o preço não vai ser o mesmo.
```

---

### Template 4: Post de Instagram para Lançamento (sequência de 3 dias)

**Dia -2 (Teaser):**
```
Algo está chegando.

Você [DOR DO PÚBLICO]?

Amanhã, às [HORÁRIO], eu abro [X] vagas para o maior atalho 
que já criei para [RESULTADO].

Coloca nos favoritos. Você vai querer ver isso.
```

**Dia -1 (Lista de Espera):**
```
Abertura amanhã.

[PRODUTO] — [PROMESSA PRINCIPAL]

Lista de espera no link da bio.
Quem está na lista tem desconto de lançamento por 24h.

[LINK]
```

**Dia 0 (Abertura):**
```
Aberto.

[NÚMERO] vagas para [PRODUTO].

[RESULTADO QUE O ALUNO CONSEGUE] — com garantia de 7 dias.

Clica no link da bio. O preço de lançamento encerra em 72h.
```

---

### Template 5: Mensagem de Boas-Vindas para Comunidade

```
Bem-vindo(a) à comunidade [NOME DO PRODUTO]! 

Aqui é onde os resultados acontecem de verdade.

Como aproveitar ao máximo:
📌 [CANAL DE DÚVIDAS]: poste suas dúvidas aqui — respondo pessoalmente
📌 [CANAL DE RESULTADOS]: celebre suas vitórias, grandes ou pequenas
📌 [CANAL DE SUGESTÕES]: tem ideia de melhoria? Me fala aqui

Sua primeira missão: se apresente abaixo com:
→ Seu nome
→ De onde é
→ Qual resultado você quer ter em 30 dias

Vou comentar em cada apresentação. Vai ser rápido.

Bora começar?
[SEU NOME]
```

---

## Uma Última Coisa

Este guia foi construído com o mesmo sistema que ensina — o curso Fábrica de Infoprodutos com IA gerou este ebook da mesma forma que você vai gerar o seu.

Não porque é um truque de marketing.

Porque é a demonstração mais honesta que existe: **o sistema funciona**.

Agora está na sua vez.

Abra o módulo 1. Execute o checklist da Fase 1. Coloque no Claude o Prompt PM-01.

O primeiro produto não é perfeito. É real. E real vende.

---

*Fábrica de Infoprodutos com IA — guia de campo para alunos*
*Versão 2026 — Atualizado em Abril de 2026*
