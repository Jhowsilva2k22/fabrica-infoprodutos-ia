# Aula 7.3 — Checkout de Alta Conversão: Order Bumps, Upsells e Pixel de Rastreamento

## Por Que o Checkout É o Momento Mais Valioso

Quando um comprador chega ao checkout da Kiwify, ele já tomou a decisão mais difícil: decidiu comprar. A resistência psicológica está no mínimo histórico da jornada. Este é o momento para:

1. Não destruir a conversão com fricção desnecessária
2. Aumentar o ticket médio com ofertas relevantes
3. Capturar dados para melhorar campanhas futuras

O ticket médio de um produto de R$197 pode chegar a R$240-260 com um order bump bem configurado. Para cada 100 compradores, isso representa R$4.300-6.300 de receita adicional sem nenhum custo extra de aquisição.

---

## Anatomia do Checkout de Alta Conversão

### O Que Aumenta a Conversão

**Menos campos = mais conversões.** Cada campo adicional no checkout aumenta o abandono em 3-7%. O checkout ideal pede apenas:
- Nome completo
- Email
- Número do cartão (preenchido pelo browser/Apple Pay automaticamente)

A Kiwify tem um checkout otimizado por padrão — não adicione campos extras sem necessidade real.

**Prova social no checkout.** A Kiwify permite adicionar um bloco de depoimento abaixo do formulário. Use um depoimento curto (1-2 linhas) de alguém que tenha resultado comprovado. Isso reduz o abandono de carrinho em 12-18% em produtos de R$100+.

**Selo de segurança visível.** A Kiwify exibe automaticamente selos SSL e ícones de cartão. Não remova nada — eles reduzem ansiedade de segurança.

**Garantia visível.** Configure a Kiwify para exibir o prazo de garantia (7 dias mínimo, 30 dias recomendado para produtos de R$197+) no próprio checkout.

### O Que Destrói a Conversão

- Campos desnecessários (endereço, telefone secundário, CPF se não for obrigatório)
- Tempo de carregamento lento (problemas no seu App Web que afetam o iframe do checkout)
- Erros no email de confirmação (URL errada, link quebrado)
- Página de obrigado que não carrega

```
Revise a configuração de checkout do produto no contexto do CLAUDE.md.

Avalie:
1. Quais campos estão ativos no checkout que poderiam ser removidos?
2. O depoimento no checkout é forte o suficiente? (critérios: resultado específico, 
   sem adjetivos vagos, com nome real)
3. O prazo de garantia está alinhado com o preço do produto?
   (regra prática: R$97 = 7 dias mínimo; R$197+ = 30 dias recomendado; R$297+ = 30+ dias)
4. A página de obrigado cria expectativa positiva ou apenas confirma a compra?

Gere sugestões específicas de melhoria para cada ponto.
```

---

## Order Bump: A Oferta No Momento Certo

O order bump aparece na última tela do checkout, entre o formulário de pagamento e o botão de confirmação. O comprador está prestes a clicar em "Confirmar Pagamento" — e vê: "Adicione ao seu pedido por apenas R$37."

**Taxa de aceitação típica:**
- Order bump bem relevante e bem escrito: 20-35%
- Order bump genérico: 8-15%
- Order bump desconexo com o produto principal: < 5%

O critério decisivo é a relevância: o bump deve ser algo que resolve um problema que aparece imediatamente após o comprador começar a usar o produto principal.

**Para o contexto deste curso:**
- **Produto principal:** Fábrica de Infoprodutos com IA (R$197)
- **Order bump ideal:** Sessão de revisão do CLAUDE.md e estrutura do curso via videoconferência (R$97) — ou —
  Pack de 20 prompts extras para nichos específicos (R$37) — ou —
  Template completo do App Web já configurado (arquivo zip do projeto Next.js) (R$47)

O bump de menor preço (R$37-47) converte mais em volume. O bump de maior preço (R$97) converte menos mas aumenta mais o ticket médio. Teste ambos se possível.

```
Crie o texto do order bump para o produto descrito no CLAUDE.md.

O produto do bump é: [DESCREVA O BUMP — ex: "Pack de templates de SKILL.md prontos"]
Preço do bump: R$[PREÇO]

O texto deve ter:
1. Título (máx 8 palavras): a promessa do bump em uma linha
2. Descrição curta (máx 60 palavras): o que é + por que precisa agora
3. Gatilho de urgência: por que pegar agora e não depois
4. CTA do checkbox: texto para "Sim, quero adicionar" e "Não, obrigado"

Formato final: texto pronto para copiar no painel da Kiwify, campo a campo.
```

---

## Upsell: A Segunda Venda Imediata

O upsell acontece após a confirmação do pagamento — na página de obrigado ou em uma página intermediária. O comprador acabou de comprar, o cartão foi aprovado, e a dopamina da decisão ainda está ativa.

Na Kiwify, o upsell é chamado de **"One Click Upsell"** — o comprador adiciona o produto extra com um único clique, sem inserir os dados do cartão novamente.

**Estrutura do upsell para infoprodutos:**
- **Produto principal:** R$197 (curso completo)
- **Upsell 1:** R$197 — Mentoria em grupo (3 sessões ao vivo via Zoom)
- **Upsell 2 (downsell):** R$97 — Se recusar o upsell 1, ofereça uma sessão individual gravada

O downsell é a oferta de menor valor para quem recusa o primeiro upsell. Captura compradores que querem mais suporte mas não no preço do upsell.

```
Crie a sequência de upsell/downsell para o produto descrito no CLAUDE.md.

Contexto:
- Capacidade de suporte disponível: [suas horas por semana disponíveis]
- O criador aparece ao vivo: [sim/não]
- Tamanho da turma de lançamento esperado: [X alunos]

Para cada etapa, gere:
1. Headline (1 linha)
2. Corpo da oferta (3-5 bullets)
3. Preço e justificativa
4. Urgência (por que aceitar agora, não depois)
5. Texto do botão de aceitar
6. Texto do botão de recusar (downsell: o que vem a seguir)

Se não tiver capacidade de suporte ao vivo, sugira upsells alternativos 
(ex: acesso vitalício vs. acesso anual, versão avançada do ebook, templates extras).
```

---

## Pixel de Rastreamento: Os Dados São o Ativo

O pixel do Meta Ads é um fragmento de JavaScript que a Kiwify injeta automaticamente no checkout quando você configura o Pixel ID. A cada compra confirmada, o Meta recebe o evento `Purchase` com:
- Valor da compra (para calcular ROAS)
- Email hash do comprador (para criar lookalike audiences)
- Dados de dispositivo e comportamento

Sem o pixel, você voa cego nos anúncios. Com o pixel, o Meta aprende quem são seus compradores e encontra mais pessoas parecidas.

**Como configurar:**

1. No Meta Business Suite → **Gerenciador de Eventos → Pixels**
2. Crie um novo pixel ou use um existente
3. Copie o **Pixel ID** (15 dígitos)
4. No painel da Kiwify → **Produto → Pixels → Meta Ads**
5. Cole o Pixel ID

Verifique que está funcionando:
- Instale a extensão **Meta Pixel Helper** no Chrome
- Acesse a página de obrigado após uma compra de teste
- O Pixel Helper deve mostrar o evento `Purchase` em verde

```
Gere o roteiro completo para configurar e verificar o pixel do Meta Ads 
na Kiwify para o produto descrito no CLAUDE.md.

Inclua:
1. Passo a passo para criar o pixel no Meta Business Suite (nunca fiz)
2. Como configurar no painel da Kiwify
3. Como verificar com Meta Pixel Helper
4. Como configurar os eventos customizados adicionais:
   - ViewContent na landing page
   - InitiateCheckout ao clicar no botão de compra
   - Purchase na página de obrigado
5. Como verificar que os dados estão chegando no Meta (painel de eventos)

Salve em setup/pixel-meta-ads.md para referência futura.
```

---

## Rastreamento da Landing Page

O pixel na Kiwify rastreia o checkout. Mas você também precisa rastrear o que acontece antes — na landing page.

Para rastrear a landing page:
1. Adicione o código do pixel no `<head>` do `pagina-vendas/index.html`
2. Configure eventos:
   - `PageView`: automático quando a página carrega
   - `InitiateCheckout`: quando o comprador clica no botão CTA

```
Na landing page pagina-vendas/index.html, adicione o código do pixel 
do Meta Ads com os seguintes eventos:

1. PageView automático no carregamento da página
2. InitiateCheckout nos botões com data-kiwify="checkout"
   - Inclua o valor do produto: {value: [PREÇO], currency: 'BRL'}

O Pixel ID: [COLE SEU PIXEL ID AQUI]

Posição do código: no <head>, antes do </head>.
Use o padrão da Meta: fbq('init', '[PIXEL_ID]'); fbq('track', 'PageView');
```

Com isso, o funil completo fica rastreado:
- **Meta Ads → Landing Page**: impressão e clique no anúncio (rastreado pelo Meta)
- **Landing Page → Checkout**: evento `InitiateCheckout` (rastreado pelo pixel na landing)
- **Checkout → Compra**: evento `Purchase` (rastreado pelo pixel na Kiwify)

Esses dados permitirão calcular com precisão quanto custa cada compra e qual anúncio é mais lucrativo.

---

## O Número Que Define o Sucesso: CPA

CPA = Custo por Aquisição. É quanto você gasta em anúncios para gerar uma venda.

Para um produto de R$197:
- Taxa da Kiwify: ~R$16 → Você recebe R$181
- CPA máximo para 50% de margem: R$90,50
- CPA máximo para 30% de margem: R$126,70
- CPA máximo para breakeven: R$181

Um CPA de R$60-80 em um produto de R$197 é considerado bom no mercado brasileiro de infoprodutos em 2026. Isso significa gastar R$70 em anúncios para receber R$181 — 2,6x de retorno.

```
Com os dados do CLAUDE.md e o preço definido em pagina-vendas/copy.md, calcule:

1. Receita líquida por venda (após taxa da Kiwify)
2. CPA máximo para cada nível de margem: 20%, 30%, 40%, 50%
3. ROAS mínimo para cada nível de margem
4. Dado o público-alvo do CLAUDE.md, qual é o CPA médio esperado nos primeiros 
   7 dias de campanha para um produto nesse nicho?
5. Qual é o orçamento diário mínimo recomendado para ter dados estatísticos 
   suficientes em 7 dias?

Use esses números como referência para a configuração das campanhas no Módulo 8.
Salve em setup/metricas-alvo.md.
```

---

## Exercício Prático

1. Configure o order bump no produto da Kiwify (use o texto gerado pela skill)
2. Configure o pixel do Meta Ads no checkout
3. Adicione o código do pixel na landing page com os eventos corretos
4. Instale o Meta Pixel Helper e verifique que os eventos estão disparando
5. Execute o cálculo de CPA e salve os números alvo em `setup/metricas-alvo.md`
6. Faça uma compra de teste no sandbox e verifique que o evento `Purchase` aparece no painel do Meta

Quando o pixel estiver funcionando e os números alvo calculados, você está pronto para a Aula 7.4 — a integração final que fecha o ciclo completo do produto.

---

## Dicas e Pontos de Atenção

> **Sobre o upsell e a capacidade de entrega:** O erro mais comum de criadores iniciantes é vender upsell de mentoria ao vivo sem calcular a capacidade real de entrega. Se você vender 100 unidades do curso principal com 20% de aceitação do upsell, são 20 sessões de mentoria. Com sessões de 60 minutos, isso é 20 horas extras de trabalho. Para o primeiro lançamento, prefira upsells digitais (templates, ebook avançado, acesso a grupo exclusivo) que não escalam com seu tempo.

> **Ponto de atenção — LGPD e pixel:** O uso do pixel do Meta Ads para rastreamento de comportamento do usuário requer consentimento sob a LGPD (Lei Geral de Proteção de Dados). A landing page deve ter um aviso de cookies com opção de aceitar/recusar. A Kiwify tem LGPD compliance nativo no checkout — não se preocupe com o lado deles. A responsabilidade é na sua landing page. O Claude pode gerar um banner de cookies LGPD-compliant para adicionar ao HTML.

> **A/B test de order bump:** Teste dois textos diferentes para o order bump durante o lançamento — a Kiwify não tem A/B test nativo, mas você pode manualmente alternar o texto a cada 50 compradores e comparar as taxas de aceitação. O texto que converter mais vira padrão para as campanhas de Meta Ads.
