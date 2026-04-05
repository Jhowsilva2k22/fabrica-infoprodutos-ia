# Aula 8.4 — Analisando Resultados e Escalando: Do Primeiro Venda ao Lucro Consistente

## O Momento Mais Perigoso: Os Primeiros 7 Dias

Quando os primeiros anúncios sobem, dois erros opostos são igualmente comuns:

**Erro 1 — Matar cedo demais.** Os primeiros 3 dias de uma campanha nova são instáveis por design — o algoritmo está em fase de aprendizado. Um criativo com CPA de R$300 nos primeiros 2 dias pode chegar a R$80 no dia 7 após o algoritmo otimizar. Desligar antes é desperdiçar o investimento que já foi feito.

**Erro 2 — Aguardar demais.** Alguns criativos são ruins, não estão em aprendizado. Se um anúncio gastou R$200 sem nenhuma conversão e o CTR está abaixo de 0,5%, ele está provando que não funciona — não que está aprendendo.

A diferença entre aprendizado e fracasso se mede por dados, não por intuição.

---

## As 5 Métricas Que Importam

No Meta Ads Manager, você vai ver dezenas de colunas. Estas são as 5 que definem tudo:

| Métrica | O Que Mede | Bom Para Infoprodutos R$197 |
|---------|-----------|----------------------------|
| **CPA** (Custo por Aquisição) | Quanto custa cada venda | < R$80 (≥ 2.5x ROAS) |
| **ROAS** (Retorno sobre Investimento em Anúncio) | R$ de venda / R$ de anúncio | ≥ 2.5x |
| **CTR** (Taxa de Clique) | % que clica no anúncio | ≥ 1.5% (feed), ≥ 2% (stories) |
| **CPM** (Custo por Mil Impressões) | Quanto custa o tráfego | Varia por nicho: R$20-80 |
| **Frequência** | Quantas vezes a mesma pessoa viu | < 3x/semana para evitar fadiga |

CPM é uma métrica de mercado — você não controla diretamente, é determinado pelo Andromeda. CTR é 100% controlado pelo seu criativo. CPA é resultado de CTR × CVR da landing page × CVR do checkout.

---

## Lendo Os Dados: O Framework de Diagnóstico

```
Analise os resultados das campanhas com os seguintes dados:

Campanha: [NOME]
Período: [DATA INÍCIO — DATA FIM]
Budget total gasto: R$[VALOR]
Resultado geral: [NÚMERO DE VENDAS], CPA médio: R$[VALOR], ROAS: [X]x

Dados por conjunto de anúncios:
| Conjunto | Gasto | Vendas | CPA | ROAS | CTR | CPM |
|---------|-------|--------|-----|------|-----|-----|
| [NOME] | R$ | X | R$ | X | % | R$ |
| [NOME] | R$ | X | R$ | X | % | R$ |

Dados por criativo (dentro de cada conjunto):
| Criativo | Gasto | Vendas | CPA | CTR |
|---------|-------|--------|-----|-----|
| [NOME] | R$ | X | R$ | % |

Com base nesses dados, responda:
1. Qual conjunto de anúncios tem o melhor ROAS? Por que provavelmente está performando melhor?
2. Qual criativo tem melhor CTR? Ele também tem o melhor CPA?
3. Há criativo com CTR alto mas CPA alto? O que isso indica? (Problema na landing page)
4. Há criativo com CTR baixo mas CPA bom? (Pequeno volume, mas comprador qualificado)
5. Quais criativos pausar agora? (Critérios: > R$150 gastos sem conversão OU CPA > 2x o alvo)
6. Quais criativos escalar? (Critérios: CPA dentro do alvo + 3+ conversões + ROAS > 2.5x)
7. Próximas ações específicas nos próximos 3 dias

Gere um relatório de decisões com ações concretas.
```

---

## O Processo de Escala

Quando um criativo ou conjunto está convertendo dentro do alvo, o instinto é aumentar o orçamento imediatamente. Esse é o erro clássico — aumentar budget de golpe reseta o aprendizado e piora o CPA.

**A regra dos 20%:** Aumente o orçamento em no máximo 20% a cada 3-4 dias. Se hoje você gasta R$100/dia e quer escalar, vá para R$120 → R$145 → R$174. Cada aumento de 20% permite que o algoritmo se readapte sem resetar o aprendizado.

**Quando pode escalar mais agressivamente:** Quando o algoritmo já passou da fase de aprendizado (50+ conversões no conjunto) e o ROAS está consistente há pelo menos 7 dias. Nesse ponto, aumentos de 30-40% são tolerados.

```
Crie o plano de escala para a campanha com os seguintes dados:

Budget atual: R$[VALOR]/dia
ROAS atual: [X]x (última semana)
Conversões na última semana: [N]
Fase de aprendizado: [Ativa / Concluída]
Budget máximo disponível para escala: R$[VALOR]/mês

Gere:
1. Cronograma de escala semana a semana (com percentual de aumento)
2. ROAS mínimo para continuar escalando em cada etapa
3. Gatilho de pausa: se o ROAS cair abaixo de X por 3 dias consecutivos, reduzir budget
4. Budget máximo recomendado para este produto/nicho 
   (existe um teto de escala antes de saturar o público disponível no Brasil)
5. Quando considerar expandir para Google Ads ou outros canais

Salve em setup/plano-escala.md
```

---

## Interpretando o Breakdown de Dados

O Meta Ads Manager permite "quebrar" os dados por variáveis para encontrar padrões:

**Breakdown por dispositivo:**
Se mobile tem CPA de R$120 e desktop tem CPA de R$50, o checkout mobile pode ter um problema. Verifique o App Web no iPhone/Android.

**Breakdown por faixa etária:**
Se 35-44 anos tem ROAS de 4x e 18-24 anos tem ROAS de 1x, crie um conjunto dedicado para 35-44 com mais budget.

**Breakdown por posicionamento:**
Se Stories tem CTR de 5% mas CPA alto, o criativo de stories está capturando atenção mas a landing page mobile não está convertendo.

```
Analise o breakdown por [DIMENSÃO] da campanha e identifique otimizações.

Dados do breakdown:
[COLE O BREAKDOWN AQUI]

Para cada segmento com performance discrepante:
1. Qual é a hipótese para a diferença?
2. Qual ação específica testar?
3. Qual é o resultado esperado da ação?
4. Como medir se a ação funcionou?

Priorize as 3 ações de maior impacto potencial.
```

---

## Quando Criar Novos Criativos

A criatividade sustentável é o que separa campanhas que escalam por semanas de campanhas que morrem em 10 dias. Sinais de que você precisa de criativos novos:

- **Frequência acima de 4x** (o público já está saturado)
- **CTR caindo 20%+ em relação à primeira semana** (ad fatigue)
- **CPA aumentando 30%+** sem mudança de orçamento (saturação do público)

Quando esses sinais aparecem, não aumente o orçamento — crie novos criativos primeiro.

```
Crie novos criativos para combater o ad fatigue.

O criativo atual ([NOME]) está com:
- CTR caindo de [X%] para [Y%]
- Frequência: [Z]x

Baseado no que funcionou nesse criativo (gancho: "[TEXTO DO GANCHO ATUAL]"), 
gere 3 variações com:
1. Novo gancho (ângulo diferente mas mesma promessa)
2. Novo formato (se era vídeo, tente imagem; se era feed, tente stories)
3. Nova prova social (use depoimento de aluno diferente, se disponível)

Cada variação deve manter o que funcionou (CTA, produto, URL) mas mudar o suficiente 
para parecer novo para quem já viu o original.

Salve em ads/criativos-v2.md (ou v3, v4 conforme iterações)
```

---

## O Caminho Para O Lucro Consistente

A evolução de uma campanha de infoproduto típica:

**Fase 1 — Teste (dias 1-14):**
- Objetivo: encontrar 1-2 criativos vencedores
- Budget: mínimo para ter dados (R$60-100/dia)
- Espere: CPA instável, alguns dias sem venda, alguns com várias
- Decisão ao final: identificar o conjunto e criativo com melhor CPA

**Fase 2 — Otimização (dias 15-30):**
- Objetivo: confirmar que o vencedor escala
- Budget: aumentar 20%/semana nos vencedores, pausar os perdedores
- Espere: CPA estabiliza, ROAS fica mais previsível
- Decisão ao final: escala se ROAS ≥ 2.5x de forma consistente

**Fase 3 — Escala (dia 31+):**
- Objetivo: crescer receita mantendo ROAS acima do mínimo
- Budget: escala 20%/semana ou mais agressivo se ROAS suportar
- Espere: precisar de novos criativos a cada 3-4 semanas
- Decisão contínua: renovar criativos + expandir públicos

```
Crie o playbook de otimização para os próximos 30 dias da campanha.

Dados atuais:
- Fase atual: [Teste / Otimização / Escala]
- Resultados: [RESUMO DOS DADOS]
- Budget: R$[VALOR]/dia
- CPA alvo: R$[VALOR] (baseado em setup/metricas-alvo.md)

O playbook deve ter:
- Semana 1-2: ações específicas (o quê verificar, o que pausar, o que escalar)
- Semana 3-4: critérios de transição de fase
- Dia 30: avaliação de saúde da campanha

Para cada semana, defina:
- 3 ações a tomar
- 2 métricas para monitorar diariamente
- 1 decisão gate: se X acontecer, faça Y

Salve em setup/playbook-30-dias.md
```

---

## Claude Como Analista de Mídia

O Meta Ads Manager gera muito dado — mais do que qualquer pessoa consegue processar manualmente todos os dias. Use o Claude para interpretar:

```
Analise os dados de mídia paga desta semana e gere um relatório executivo 
em 3 parágrafos: O que funcionou, o que não funcionou, e o que fazer agora.

Dados:
[COLE O EXPORT DO GERENCIADOR — pode ser tabela, CSV ou print descrito em texto]

O relatório deve:
1. Identificar o criativo/conjunto vencedor da semana com justificativa
2. Identificar o criativo/conjunto a ser pausado com justificativa
3. Recomendar as 2-3 próximas ações na conta

Tom: objetivo e direto. Sem introduções. Vá ao ponto.
```

Use esse prompt toda segunda-feira para revisar os dados da semana anterior. Em 5 minutos você tem clareza sobre o que fazer.

---

## A Meta de Longo Prazo

Um produto de R$197 com CPA de R$70 e 5 vendas/dia gera:
- Receita diária: R$985 (após taxa da Kiwify)
- Custo de anúncios: R$350/dia
- Lucro bruto diário: R$635
- Lucro bruto mensal: ~R$19.050

Esse número não inclui impostos, upsells (que têm CAC zero), ou escala. É o cenário base de um produto funcionando.

Chegar lá leva tempo — geralmente 45-90 dias de otimização para encontrar o sistema que funciona de forma previsível. Mas quando o sistema funciona, funciona todos os dias — com ou sem você acordado.

---

## Exercício Prático

1. Após 7 dias de campanha, execute o prompt de análise de resultados
2. Identifique 1 criativo vencedor e 1 criativo para pausar
3. Execute o plano de escala com seu budget atual
4. Crie novos criativos para substituir os que mostrarem fadiga
5. Configure uma rotina de revisão semanal (segunda às 9h: 20 minutos de análise + prompt no Claude)
6. Execute o playbook de 30 dias

Com o produto publicado, o tráfego ativo e o sistema de análise funcionando, você completou a Fábrica de Infoprodutos com IA. O Módulo Bônus cobre como escalar além do primeiro produto.

---

## Dicas e Pontos de Atenção

> **Sobre o ROAS de curto vs. longo prazo:** O ROAS que você mede no Gerenciador é de janela de 7 dias — captura apenas compras que ocorreram dentro de 7 dias do clique no anúncio. Mas infoprodutos de maior ticket têm ciclos de decisão mais longos: a pessoa clica num anúncio hoje, pensa por 10 dias, e compra. O ROAS "real" de 30 dias pode ser 20-40% melhor do que o de 7 dias. Compare regularmente via relatório de atribuição do Meta (Attribution → Comparar janelas).

> **Ponto de atenção — Meta Ads e sazonalidade:** O CPM sobe significativamente em períodos de alta demanda de anúncios: novembro-dezembro (Black Friday/Natal), julho-agosto (inverno escolar). Se você lançar nesse período, o CPA vai subir — não porque seu produto piorou, mas porque o custo do tráfego aumentou. Planeje o orçamento levando isso em conta, ou agende o lançamento para fevereiro-abril (CPMs historicamente menores no Brasil).

> **O próximo produto começa agora:** Enquanto o primeiro produto está rodando, o sistema da fábrica já está configurado. Criar o segundo produto levará 20-30% do tempo do primeiro — o CLAUDE.md já está estruturado, as Skills já estão criadas, o App Web já tem a infraestrutura. O Módulo Bônus explica como duplicar o sistema com mínimo esforço incremental.
