# Aula 8.3 — Segmentação Inteligente com Advantage+: Como o Meta Encontra Seu Comprador Ideal

## O Paradoxo da Segmentação em 2026

Até 2023, quanto mais específica a segmentação no Meta Ads, melhor. Você definia interesses, comportamentos, dados demográficos, excluía públicos sobrepostos — o resultado era um público menor e mais qualificado.

Em 2026, esse modelo foi invertido. O algoritmo Andromeda tem acesso a mais de 3 bilhões de pontos de dados comportamentais por segundo — compras, tempo em página, histórico de cliques, padrões de visualização de vídeo. Ele sabe mais sobre quem vai comprar do que qualquer segmentação manual.

O paradoxo: segmentar demais priva o Andromeda de dados. Um público de 50.000 pessoas pode encontrar 500 compradores. Um público de 5 milhões com Advantage+ pode encontrar os mesmos 500 compradores mais rapidamente porque tem mais dados para aprender.

A regra prática de 2026: **segmentação manual só quando você tem evidência** — lista de clientes existentes, exclusões específicas, restrições geográficas reais.

---

## Como Funciona o Advantage+

O Advantage+ Audience tem três camadas de funcionamento:

**Camada 1 — Dados do pixel**
Cada compra que passa pela Kiwify com o pixel configurado ensina o Andromeda sobre quem são seus compradores. Após 50-100 compras, o algoritmo tem um perfil detalhado: faixa etária, dispositivos usados, horários de compra, interesses correlacionados.

**Camada 2 — Sugestões de público**
Você pode sugerir interesses ou comportamentos como ponto de partida. O Andromeda usa isso como sinal inicial, mas vai além — mostra para pessoas que não têm aquele interesse mas têm comportamento parecido com quem comprou.

**Camada 3 — Lookalike dinâmico**
À medida que as compras acumulam, o Advantage+ constrói um perfil lookalike contínuo dos seus compradores. Diferente do lookalike manual (que você cria uma vez e fica estático), o Advantage+ atualiza esse perfil automaticamente.

```
Com base no produto do CLAUDE.md e no público descrito, gere a estratégia 
de segmentação para o Advantage+ Audience.

Para cada estágio da campanha, defina:

ESTÁGIO 1 — Dias 1-7 (sem dados do pixel suficientes):
- Sugestões de público para "orientar" o Advantage+
- Restrições que fazem sentido (ex: localização, idioma)
- O que NÃO restringir (deixar o algoritmo explorar)

ESTÁGIO 2 — Dias 8-21 (com primeiros dados de compra):
- Como ajustar as sugestões com base em quem comprou
- Novos públicos a testar baseado nos primeiros compradores

ESTÁGIO 3 — Dias 22+ (com 50+ compras):
- Remover sugestões manuais (deixar Advantage+ puro)
- Criar público lookalike manual como controle para comparar

Para cada decisão, justifique com o comportamento esperado do Andromeda.
Salve em setup/estrategia-segmentacao.md
```

---

## Públicos Personalizados: Quando a Segmentação Manual Ainda Faz Sentido

Em três situações, a segmentação manual supera o Advantage+:

### 1. Lista de clientes existentes

Se você tem uma lista de emails (de um produto anterior, lista de newsletter, grupo de WhatsApp), faça upload no Meta como Público Personalizado. O Meta vai tentar fazer match com contas do Facebook/Instagram.

Taxa de match típica: 40-65% da lista (nem todos têm conta com o mesmo email).

O que fazer com esse público:
- **Excluir** do topo de funil: não mostre anúncio de aquisição para quem já comprou
- **Incluir** no retargeting: mostre o upsell para quem comprou o produto anterior

```
Gere as instruções para fazer upload de lista de clientes no Meta e 
criar os públicos necessários para o produto do CLAUDE.md.

Contexto: tenho uma lista de [X] emails de [FONTE DA LISTA — newsletter, produto anterior].

Instrua:
1. Formato do arquivo CSV para upload (quais colunas o Meta aceita)
2. Como criar o público no Meta Business → Audiences
3. Como usar esse público como EXCLUSÃO no conjunto de topo de funil
4. Como criar um lookalike desse público para encontrar pessoas parecidas
5. Considerações de LGPD no uso de lista de emails para anúncios
```

### 2. Retargeting de visitantes do site

O pixel na landing page registra todos os visitantes. Você pode segmentar:
- Visitantes dos últimos 14 dias que não converteram
- Visitantes que passaram > 60 segundos na página (mais engajados)
- Visitantes que iniciaram o checkout mas não completaram

```
Configure os públicos de retargeting baseados em comportamento no site.

Crie os seguintes públicos no Meta Business → Audiences:

1. "Visitantes LP 14d" — visitantes da landing page nos últimos 14 dias
2. "Checkout Abandonado 7d" — iniciou checkout (evento InitiateCheckout) mas não comprou
3. "Engajados 60s" — visitou landing page e ficou > 60 segundos (use evento customizado PageView com tempo)

Para cada público:
- Nome no Meta
- Configuração passo a passo (tipo de evento, URL, janela de tempo)
- Tamanho estimado após 30 dias de tráfego (baseado em volume esperado de visitas)
- Anúncio recomendado para cada um (use dados de ads/retargeting-criativos.md)
```

### 3. Exclusões estratégicas

Uma exclusão bem pensada melhora o ROAS diretamente:
- **Excluir compradores recentes** do topo de funil: não gastas budget mostrando o mesmo produto para quem já comprou
- **Excluir lista negra** (se tiver): pessoas que pediram reembolso ou reportaram anúncios

```
Configure as exclusões para a campanha do produto do CLAUDE.md.

Exclusão 1: Compradores dos últimos 180 dias
- Como criar o público de compradores (evento Purchase no pixel)
- Como adicioná-lo como exclusão em cada conjunto de anúncios

Exclusão 2: Pessoas que pediram reembolso (se tiver webhook de reembolso configurado)
- Evento: order.refunded → custom event "Refunded" no pixel
- Criar público de reembolsados e excluir de todas as campanhas

Exclusão 3: Visitantes recentes no conjunto de retargeting de compradores
- Exclua do conjunto de "Checkout Abandonado" quem já comprou nas últimas 24h
  (webhooks com delay podem causar compras que chegam após o retargeting estar ativo)
```

---

## Lookalike Audiences: O Multiplicador de Escala

Quando você tiver 100+ compradores no pixel, crie um público lookalike para encontrar pessoas parecidas em escala.

**Como funciona:**
1. Você cria um público semente: "Compradores nos últimos 90 dias"
2. O Meta analisa as características desse público
3. Cria um novo público com pessoas que têm perfil similar no Brasil

**Tamanhos de lookalike disponíveis:**
- 1%: ~2 milhões de pessoas (mais similar ao original, maior CPM)
- 2%: ~4 milhões (equilíbrio)
- 3-5%: ~6-10 milhões (menos similar, menor CPM, mais escala)

Para infoprodutos no primeiro lançamento, comece com 1% quando tiver 50-100 compradores.

```
Crie o plano de Lookalike Audiences para quando atingir cada marco de compradores.

Marco 1 — 50 compradores:
- Criar: Lookalike 1% de compradores
- Usar em: conjunto de anúncios separado para testar vs. Advantage+ puro
- Budget sugerido: 20% do budget total

Marco 2 — 200 compradores:
- Criar: Lookalike 1% e 2% separados
- Teste: comparar CPA do lookalike 1% vs. Advantage+ vs. lookalike 2%
- Manter vencedor com 50% do budget

Marco 3 — 500 compradores:
- Criar: Lookalike de visitantes de alta qualidade (visitou > 60s E não comprou — quase compradores)
- Potencial: captura pessoas que têm interesse mas precisam de mais contexto

Para cada marco, gere a configuração exata no Meta e o budget recomendado.
Salve em setup/lookalike-roadmap.md
```

---

## Posicionamentos: Onde Seus Anúncios Aparecem

O Meta tem dezenas de posicionamentos: Feed do Facebook, Feed do Instagram, Stories, Reels, Audience Network, Messenger.

**Advantage+ Placements** escolhe automaticamente onde seu anúncio aparece baseado em onde ele vai ter melhor performance para o objetivo.

Para infoprodutos em 2026, o Advantage+ Placements funciona bem com uma exceção: **Audience Network** (sites externos). Muitos anunciantes excluem a Audience Network porque o tráfego é menos qualificado e mais difícil de rastrear com o pixel. Teste por 7-14 dias com ela ativa e depois compare o ROAS com e sem.

```
Defina a estratégia de posicionamentos para a campanha do produto do CLAUDE.md.

Analyze:
1. Para o produto e público específico, qual posicionamento provavelmente converte melhor?
   (baseado no perfil do público do CLAUDE.md: faixa etária, plataforma preferida)
2. Devo incluir ou excluir Audience Network inicialmente?
3. Stories e Reels requerem criativos específicos (9:16) — tenho esses criativos em ads/criativos.md?
4. Se não tiver criativos 9:16, qual o impacto de usar Advantage+ Placements sem eles?

Recomendação: ativar ou customizar posicionamentos? Por quê?
```

---

## Acompanhando a Segmentação Com Dados Reais

Após 7-14 dias com os anúncios ativos, você pode analisar quem está comprando:

No Gerenciador de Anúncios:
- **Breakdown → Demographics**: quem comprou por faixa etária, gênero, localização
- **Breakdown → Placement**: qual posicionamento gerou mais compras
- **Breakdown → Device**: mobile vs. desktop (impacta o criativo e o checkout)

```
Após 7 dias de campanha, analisei os dados e encontrei:
[Cole os dados do breakdown aqui]

Com base nesses dados:
1. O perfil do comprador real corresponde ao público-alvo do CLAUDE.md?
2. Quais ajustes de segmentação fazer baseado nos compradores reais?
3. Há posicionamentos com ROAS muito acima ou abaixo da média?
4. Qual faixa etária/gênero tem o melhor ROAS? Devo criar um conjunto exclusivo para eles?
5. O compradores mobile estão convertendo menos que desktop? O checkout mobile está otimizado?

Gere as ações específicas a tomar na conta de anúncios.
```

---

## Exercício Prático

1. Execute o prompt de estratégia de segmentação por estágio
2. Configure o Advantage+ Audience com as sugestões geradas (estágio 1)
3. Crie os públicos de retargeting no Meta Business → Audiences
4. Configure as exclusões no Conjunto 1 (topo de funil)
5. Salve o lookalike roadmap para usar quando atingir os marcos de compradores
6. Após 7 dias de campanha, execute o prompt de análise com os dados reais

A Aula 8.4 cobre o que fazer com os dados das primeiras semanas: quais criativos matar, quais escalar, e como ir do primeiro cliente ao lucro consistente.

---

## Dicas e Pontos de Atenção

> **Sobre o tamanho mínimo de público para lookalike:** O Meta exige no mínimo 100 pessoas no público semente para criar um lookalike. Com menos de 100 compradores, use o Advantage+ como substituto — ele tem dados suficientes do próprio ecossistema do Meta. O lookalike manual só supera o Advantage+ quando seu público semente é muito específico e de alta qualidade (ex: compradores que compraram 2x ou mais).

> **Ponto de atenção — iOS 14+ e limitações de rastreamento:** Desde o iOS 14.5 (2021), usuários Apple podem optar por não serem rastreados entre apps. Em 2026, aproximadamente 62% dos usuários iOS no Brasil escolhem "não rastrear". Isso significa que o pixel subreporta compras de usuários iOS — suas métricas de CPA no Gerenciador podem ser melhores do que parecem (compras acontecendo que o pixel não registra). Configure a **API de Conversões da Meta** (CAPI) no App Web para enviar eventos pelo servidor, contornando a limitação do iOS.

> **Frequency: o limite antes do ad fatigue:** O "frequency" (frequência) mostra quantas vezes, em média, a mesma pessoa viu seu anúncio. Quando frequency supera 4-5x para o mesmo criativo, a performance cai — a pessoa já está ignorando. No Gerenciador: veja frequency por conjunto de anúncios. Se passar de 3x/semana, adicione novos criativos ou pause os saturados.
