# Aula 7.1 — Por Que a Kiwify é a Melhor Plataforma Para Infoprodutos no Brasil em 2026

## O Mercado de Plataformas de Venda em Abril de 2026

O mercado brasileiro de plataformas para infoprodutos nunca foi tão competitivo. Hotmart, Kiwify, Eduzz e Monetizze dividem um mercado que movimenta mais de R$8 bilhões/ano — e cada plataforma fez apostas diferentes sobre o que os criadores precisam em 2026.

Aqui está a análise direta, sem o viés de marketing:

| Critério | Kiwify | Hotmart | Eduzz | Monetizze |
|---------|--------|---------|-------|-----------|
| Taxa por venda | 7,49% + R$1 | 9,9% | 7% + R$0,90 | 7% + R$0,90 |
| Parcelamento máx. | 12x | 12x | 12x | 12x |
| Apple Pay | Sim (desde 2025) | Sim | Não | Não |
| Recuperação via WhatsApp | Sim (IA, 2025) | Sim (manual) | Não | Não |
| Área de membros própria | Sim (estilo Netflix) | Sim (Club) | Não | Não |
| Webhook completo | Sim | Sim | Parcial | Parcial |
| Afiliados | Sim | Sim | Sim | Sim |
| Order bump nativo | Sim | Sim | Não (2026) | Sim |
| API pública | Sim | Sim | Limitada | Limitada |
| Setup em < 30 min | Sim | Não | Sim | Sim |

A Kiwify não tem a menor taxa do mercado — a Eduzz e Monetizze cobram 7% vs. 7,49% da Kiwify. O que torna a Kiwify a escolha certa para este curso é a combinação de:
1. **Menor fricção no checkout** — Apple Pay e Google Pay reduzem abandono de carrinho em 22-31% para compradores mobile
2. **Recuperação de carrinho com IA** — o sistema de WhatsApp automatizado da Kiwify recupera 8-14% dos carrinhos abandonados sem intervenção manual
3. **Webhook robusto** — integração direta com o App Web (coberta na Aula 6.3) funciona de forma confiável na Kiwify

---

## O Que É e O Que Não É a Kiwify

A Kiwify é uma plataforma de pagamento e entrega de infoprodutos — não é uma ferramenta de marketing. Ela processa os pagamentos, gerencia os reembolsos e entrega o produto ao comprador. O marketing (landing page, Meta Ads, email) continua sendo responsabilidade do criador.

**O que a Kiwify faz:**
- Processa pagamentos: cartão de crédito, PIX, boleto, Apple Pay, Google Pay
- Gerencia parcelamento (até 12x) e repassa o valor no prazo configurado
- Envia o produto ao comprador (link do App Web, arquivo PDF, área de membros)
- Lida com reembolsos e chargebacks
- Paga afiliados automaticamente
- Dispara webhooks para eventos de compra, reembolso, cancelamento

**O que a Kiwify não faz:**
- Gerar tráfego para sua landing page
- Escrever a copy de vendas
- Criar seu curso ou App Web
- Gerenciar sua lista de emails
- Otimizar sua taxa de conversão

Essa clareza é importante: muitos criadores confundem "publicar na Kiwify" com "começar a vender". A Kiwify é o caixa do seu produto — não a vitrine.

---

## A Estrutura de Produto na Kiwify

Quando você cadastra um produto na Kiwify, está definindo:

**1. Nome e descrição do produto**
Exibidos no checkout e nos emails da Kiwify. Use o nome real do curso e uma descrição de 2-3 linhas que reforce a promessa principal.

**2. Preço e parcelamento**
Configure o preço e quantas parcelas aceita. Para produtos acima de R$197, o parcelamento é essencial — compradores do segmento médio decidem pelo valor da parcela, não pelo valor total.

**3. Entrega do produto**
Como o comprador acessa o que comprou:
- **Link externo**: a URL do App Web em `https://app.[seuproduto].com.br/login`
- **Área de membros da Kiwify**: se preferir usar a área de membros nativa (não recomendado se você já tem App Web próprio)
- **Arquivo para download**: PDF direto

**4. Página de obrigado**
A URL para onde a Kiwify redireciona após a compra confirmada: `https://app.[seuproduto].com.br/obrigado`

**5. Webhook**
A URL que a Kiwify chama quando um evento ocorre: `https://app.[seuproduto].com.br/api/kiwify-webhook`

---

## Kiwify vs. Hotmart: A Decisão Real

A Hotmart é a maior plataforma do Brasil — mais de 70 mil produtos cadastrados em 2026. Para um criador novo, isso cria duas percepções opostas:
- Vantagem: legitimidade por associação, compradores reconhecem a Hotmart
- Desvantagem: taxa de 9,9% vs. 7,49% da Kiwify, processo de aprovação de produto mais burocrático, onboarding mais lento

Para o contexto deste curso — primeiro infoproduto, lançamento rápido, integração com App Web próprio — a Kiwify é a escolha tecnicamente superior. Quando você tiver 3-5 produtos e um catálogo estabelecido, a análise muda e pode valer a pena estar nas duas plataformas para acessar a base de afiliados da Hotmart.

```
Compare a Kiwify e a Hotmart para o produto descrito no CLAUDE.md.

Considere:
- Preço do produto: [PREÇO]
- Volume esperado no primeiro lançamento: [50 / 100 / 200 vendas]
- Necessidade de integração com App Web próprio: [sim/não]
- Estratégia de afiliados: [sim/não]

Calcule:
1. Diferença de custo entre as plataformas no primeiro lançamento
2. Impacto do Apple Pay na taxa de conversão estimada para o público-alvo do CLAUDE.md
3. Recomendação justificada: começar com qual plataforma?
```

---

## A Taxa de 7,49% na Prática

Muitos criadores se preocupam excessivamente com a taxa da plataforma. Um exercício de perspectiva:

Para um produto de R$197 à vista:
- Taxa Kiwify: 7,49% + R$1 = R$14,76 + R$1 = **R$15,76 por venda**
- Você recebe: **R$181,24 por venda**
- Para 100 vendas: R$18.124 de receita líquida (depois da plataforma, antes dos impostos)

Compare com o custo de processar pagamentos você mesmo:
- Gateway de pagamento: 2,5-3% + R$0,40 por transação
- PagarMe/Stripe: R$1.000+/mês em infraestrutura
- Suporte a reembolsos e chargebacks: horas do seu tempo

A taxa da Kiwify não é um custo — é o preço que você paga para não ter que construir e manter toda essa infraestrutura.

```
Com base nos dados de CLAUDE.md e na estratégia de precificação em 
pagina-vendas/copy.md, calcule:

1. Receita líquida por venda na Kiwify (após taxa da plataforma)
2. Receita total estimada para cada cenário:
   - Lançamento conservador: 30 vendas
   - Lançamento médio: 80 vendas
   - Lançamento forte: 200 vendas
3. Para cada cenário, qual é o custo de aquisição (CAC) máximo 
   sustentável em Meta Ads para manter ROI positivo?
4. Em qual cenário compensa começar a anunciar?
```

---

## Conta Kiwify: O Que Você Precisa Para Começar

Para cadastrar e vender na Kiwify, você precisa de:

**Pessoa Física:**
- CPF
- Conta bancária no seu nome
- Endereço residencial

**Pessoa Jurídica (MEI ou além):**
- CNPJ ativo
- Conta PJ ou conta vinculada ao CNPJ
- Endereço comercial

O cadastro é gratuito e a aprovação é automática para pessoa física. Para PJ, pode haver verificação adicional de documentos.

**Recomendação para primeiro lançamento:** cadastre como pessoa física primeiro para não atrasar o lançamento. Migre para MEI/PJ assim que tiver receita recorrente — tanto pela questão tributária quanto pela credibilidade.

O prazo de repasse da Kiwify:
- **PIX**: D+1 (dia seguinte ao pagamento confirmado)
- **Cartão**: D+30 ou D+15 com antecipação (taxa adicional)
- **Boleto**: D+3 após compensação

Para um lançamento, o PIX é o método mais importante — compradores motivados pagam no PIX para não perder o preço de lançamento.

---

## Exercício Prático

1. Crie sua conta na Kiwify (`kiwify.com.br`) — leva menos de 10 minutos
2. Adicione os dados bancários para recebimento
3. Execute o prompt de comparação Kiwify vs. Hotmart para o seu produto
4. Execute o prompt de cálculo de receita para os 3 cenários de lançamento
5. Na próxima aula, você vai criar o produto completo na plataforma — chegue com a conta ativa

Quando a conta estiver ativa e os dados bancários confirmados, você está pronto para cadastrar o produto. A Aula 7.2 cobre a configuração completa: produto, preço, entrega e integrações.

---

## Dicas e Pontos de Atenção

> **Sobre impostos na Kiwify:** A Kiwify emite nota fiscal automaticamente para os compradores quando você está cadastrado como PJ. Para pessoa física, a responsabilidade de declarar a renda é sua — a Kiwify só repassa o dinheiro. Em 2026, receitas de infoprodutos acima de R$28.559,70/ano são tributáveis pelo IRPF. Se você estiver no caminho de superar esse limite, abra um MEI (receita bruta máxima de R$81.000/ano) para ter mais eficiência tributária.

> **Ponto de atenção — reembolsos e chargebacks:** A garantia de 7 dias é legalmente obrigatória para produtos digitais vendidos online (Código de Defesa do Consumidor, Art. 49). A Kiwify processa reembolsos automaticamente dentro do prazo. Chargebacks (disputas com a operadora de cartão) são raros mas existem — a Kiwify tem uma equipe de representação. Para minimizar: venda o que promete, entregue rápido e responda dúvidas antes que virem disputas.

> **Kiwify Sandbox para testes:** A Kiwify tem um modo sandbox onde você pode simular compras sem processar pagamento real. Use para testar o webhook, a página de obrigado e o fluxo completo antes de abrir para compradores reais. O acesso ao sandbox é no painel da Kiwify em **Desenvolvedor → Ambiente de Teste**.
