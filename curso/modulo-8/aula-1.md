# Aula 8.1 — Meta Ads Para Infoprodutos: A Estrutura de Campanha Que Funciona em 2026

## Como o Meta Ads Mudou em 2026

Em 2024, anunciar no Meta Ads exigia conhecimento técnico de segmentação: públicos de interesse, comportamento, lookalike de múltiplos graus, públicos salvos, regras de exclusão. A configuração de uma campanha competitiva levava horas.

Em 2026, o motor Andromeda mudou essa dinâmica. O Andromeda é o sistema de IA do Meta que determina para quem mostrar cada anúncio — e ele é significativamente melhor do que qualquer segmentação manual em escala. O criador do anúncio continua sendo responsável pelos criativos (o que o anúncio diz e mostra), pela landing page (para onde vai o tráfego) e pelo pixel (os dados que alimentam o sistema). A otimização de audiência virou trabalho da máquina.

O modelo GEM (Generative Ads Model), lançado pelo Meta em meados de 2025, adiciona geração automática de variações de copy e imagem baseada no criativo original — você sobe 1 anúncio e o GEM testa 8-12 variações automaticamente.

O resultado prático: a barreira de entrada para anunciar efetivamente no Meta caiu. Você não precisa ser especialista em segmentação. Precisa de:
1. Um produto que converte
2. Um criativo que captura atenção
3. Uma landing page que vende
4. Dados suficientes para o algoritmo aprender

---

## A Estrutura de Campanha Para Infoprodutos em 2026

### Nível 1: Campanha

```
Objetivo: Vendas (não "Tráfego" — você quer compras, não cliques)
Orçamento: nível de campanha (Advantage Campaign Budget)
Estratégia de lance: Custo mais baixo com teto de lance (opcional na fase inicial)
```

O **Advantage Campaign Budget** distribui automaticamente o orçamento entre os conjuntos de anúncios de melhor performance. Para infoprodutos em fase inicial, é a configuração certa — você não tem dados suficientes para saber qual conjunto vai converter melhor.

### Nível 2: Conjunto de Anúncios

Para o lançamento inicial, use **2 conjuntos** de anúncios:

**Conjunto 1 — Audience frio (topo do funil)**
- Público: Advantage+ Audience (deixe o Andromeda encontrar os compradores)
- Conversão: `Purchase` no pixel da Kiwify
- Orçamento: 70% do total diário

**Conjunto 2 — Retargeting (fundo do funil)**
- Público: visitantes da landing page nos últimos 14 dias que não compraram
- Criativo: diferente do fundo de funil — aborda objeções específicas
- Orçamento: 30% do total diário

```
Com base no produto descrito no CLAUDE.md e nos dados de setup/metricas-alvo.md, 
gere a estrutura de campanha para o lançamento.

Calcule:
1. Orçamento diário mínimo para ter 50+ eventos de compra em 7 dias
   (regra: precisa de 50 conversões/semana para o algoritmo otimizar bem)
2. Divisão recomendada entre topo (Advantage+) e retargeting
3. Período mínimo de aprendizado antes de escalar (número de dias/conversões)
4. Quando aumentar o orçamento e em que percentual por vez (regra dos 20%)

Salve em setup/estrutura-campanha.md
```

### Nível 3: Anúncio

Cada conjunto de anúncios pode ter múltiplos anúncios. Para o lançamento:
- 3-5 criativos no conjunto de topo de funil
- 2-3 criativos no conjunto de retargeting

O GEM vai testar variações de cada criativo automaticamente. Você precisa dar material de qualidade para ele trabalhar.

---

## O Funil de Tráfego Pago Para Infoprodutos

O caminho do clique à venda tem 4 momentos críticos:

**1. Impressão → Clique (CTR)**
O anúncio aparece no feed. O comprador clica ou ignora.
- CTR típico para infoprodutos no Brasil: 1-3% para anúncios medianos, 3-6% para bons
- O que define o CTR: os primeiros 3 segundos do vídeo ou a primeira linha do texto

**2. Clique → Visita qualificada (tempo na página)**
O comprador chega na landing page. Fica ou sai em < 5 segundos.
- Taxa de rejeição boa: < 65%
- O que define: velocidade de carregamento, headline, alinhamento com o anúncio

**3. Visita → Checkout (CVR da landing page)**
O comprador clica no CTA e vai para o checkout.
- Taxa de conversão boa: 1-3% de visitantes únicos
- O que define: copy, prova social, preço em relação ao valor percebido

**4. Checkout → Compra (CVR do checkout)**
O comprador preenche os dados e confirma.
- Taxa de conversão boa: 40-60% de quem inicia o checkout
- O que define: simplicidade do checkout, opções de pagamento, confiança

```
Com base no produto e público do CLAUDE.md, estime:
1. CTR esperado para os primeiros 7 dias (considerando criativos novos sem histórico)
2. Taxa de rejeição esperada na landing page
3. CVR esperado da landing page
4. CVR esperado do checkout (com Apple Pay disponível)
5. CPM estimado para o nicho/público-alvo (R$ por mil impressões)
6. CPA estimado (Custo por Aquisição) nos primeiros 7 dias

Monte a planilha de projeção: orçamento R$[X]/dia → X vendas em 7 dias.
Use os dados de setup/metricas-alvo.md como referência de CPA alvo.
```

---

## Advantage+ Audience: Deixando o Andromeda Trabalhar

O Advantage+ Audience (antes chamado de Broad Targeting ou Open Targeting) funciona assim: você não define público. O algoritmo Andromeda usa os dados do pixel para encontrar pessoas parecidas com quem já comprou ou visitou sua página.

**Configuração recomendada para o lançamento:**

No Conjunto de Anúncios:
1. Localização: Brasil
2. Idioma: Português
3. Advantage+ Audience: Ativado
4. Sugestão de público (opcional mas ajuda na fase inicial):
   - Interesses relacionados ao nicho do seu produto
   - O Andromeda usa isso como ponto de partida, não como limite

```
Com base no CLAUDE.md, gere as sugestões de público para o campo 
"Advantage+ Audience — Sugestões" no Meta Ads.

Nicho do produto: [NICHO]
Público-alvo: [DESCRIÇÃO DO PÚBLICO DO CLAUDE.md]

Para cada sugestão, liste:
1. Nome do interesse ou comportamento no Meta Ads
2. Tamanho estimado do público no Brasil
3. Nível de intenção de compra (alto/médio/baixo)

Agrupe em:
- Interesses diretos (pessoas que declaram interesse no tema)
- Comportamentos relacionados (o que essas pessoas fazem online)
- Demografias específicas (se relevante para o produto)

Limite: 5-8 sugestões por grupo — mais do que isso dilui o sinal.
```

---

## Retargeting: Convertendo Quem Já Demonstrou Interesse

O retargeting atinge pessoas que visitaram a landing page mas não compraram. Elas já conhecem o produto — o trabalho é diferente: eliminar a objeção específica que impediu a compra.

**Públicos de retargeting para infoprodutos:**

| Público | Janela | Mensagem |
|---------|--------|---------|
| Visitantes da landing page | 14 dias | "Ainda pensando? Aqui está o que você vai conseguir fazer..." |
| Iniciaram checkout mas não compraram | 7 dias | "Seu acesso está esperando. A garantia cobre tudo." |
| Assistiram 50%+ do vídeo | 30 dias | Social proof + urgência se houver deadline |

Para criar esses públicos:
1. **Meta Business → Públicos → Criar público → Público personalizado**
2. Fonte: **Site (pixel)**
3. Evento: `PageView` com URL da landing page
4. Janela: 14 dias

```
Gere os anúncios de retargeting para o produto do CLAUDE.md.

Para cada público:
1. Visitantes da landing page (14 dias): headline + texto que aborda a principal objeção (baseada em pesquisa-mercado.md)
2. Iniciaram checkout mas não compraram (7 dias): headline + copy que elimina o risco (garantia + prova social)

Para cada anúncio:
- Formato: carrossel ou imagem estática (vídeo não recomendado para retargeting — pessoa já viu o vídeo)
- Headline (máx 40 caracteres)
- Texto principal (máx 125 caracteres)
- CTA: "Saiba mais" ou "Comprar agora"

Salve em ads/retargeting-anuncios.md
```

---

## Orçamento Para o Primeiro Lançamento

A pergunta mais comum: "Quanto devo gastar para testar?"

**A matemática realista:**

Para um produto de R$197 com CPA alvo de R$80:
- Orçamento mínimo para ter dados: R$800-1.000 (10-12 dias × R$80-90/dia)
- Vendas esperadas com esse orçamento: 10-12 vendas
- ROI esperado no período de teste: empate ou leve prejuízo (normal — você está comprando dados)
- Depois do período de teste, com otimização: ROI positivo

**Se o orçamento é limitado (< R$500):**
- Comece com tráfego orgânico + email list
- Use os R$500 apenas quando tiver a primeira versão do pixel otimizada com compras orgânicas
- Sem dados no pixel, os primeiros R$500 em Meta Ads vão educar o algoritmo — resultado imprevisível

```
Calcule o plano de budget para o lançamento com as seguintes restrições:
- Budget total disponível: R$[VALOR]
- Período de lançamento: [X] dias
- CPA alvo: [baseado em setup/metricas-alvo.md]

Gere:
1. Divisão por fase: teste (primeiros 7 dias) / otimização (dias 8-14) / escala (dias 14+)
2. Orçamento diário por fase
3. Critérios para passar de uma fase para a próxima (ex: atingir X conversões)
4. Gatilhos de pausa: quando parar os anúncios se os números estiverem ruins
5. Projeção conservadora, moderada e otimista de retorno

Salve em setup/plano-budget.md
```

---

## Exercício Prático

1. Execute o prompt de estrutura de campanha e salve em `setup/estrutura-campanha.md`
2. Execute o prompt de estimativas de CTR/CVR/CPA para o seu produto
3. Execute o prompt de sugestões de público Advantage+
4. Execute o prompt de anúncios de retargeting
5. Execute o cálculo de budget com o valor que você tem disponível
6. Crie a conta no Meta Business Suite (se ainda não tiver)
7. Verifique que o pixel está recebendo eventos do seu ambiente de produção

Na Aula 8.2, você vai gerar os criativos com a skill `gerar-criativos-ads` — os anúncios reais que vão rodar no Meta.

---

## Dicas e Pontos de Atenção

> **Sobre o período de aprendizado:** O algoritmo do Meta precisa de 50 conversões por conjunto de anúncios por semana para sair da fase de aprendizado e otimizar com eficiência. Antes disso, os resultados são instáveis — um dia caro, outro barato, sem padrão. Não julgue uma campanha nova com menos de 7 dias e 30+ conversões. E nunca faça mudanças significativas (criativo, público, lance) durante a fase de aprendizado — você reinicia o clock a zero.

> **Ponto de atenção — política de anúncios do Meta:** O Meta tem políticas rigorosas para infoprodutos, especialmente claims de renda ("ganhe R$X em Y dias"). Em 2026, anúncios com promessas financeiras específicas passam por revisão humana adicional e podem ser reprovados. Foque nos benefícios funcionais (o que a pessoa vai saber fazer) e no processo (o método), não nas projeções de faturamento. O Claude pode ajudar a reescrever os criativos dentro da política.

> **Dados antes de anúncios:** Se você conseguir as primeiras 10-20 vendas organicamente (lista de email, grupos de WhatsApp, Instagram Stories), o pixel vai aprender quem são seus compradores antes de você gastar em anúncios. Esse "pré-aquecimento" do pixel pode reduzir o CPA dos primeiros anúncios em 30-50%.
