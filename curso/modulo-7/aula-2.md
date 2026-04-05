# Aula 7.2 — Usando a Skill configurar-kiwify: Checklist Completo de Configuração

## Por Que Um Checklist Importa Aqui

Cadastrar um produto na Kiwify parece simples — e é. O problema não é criar o produto. O problema é criar o produto corretamente da primeira vez, sem esquecer configurações que afetam conversão, entrega e integração com o App Web.

Um produto publicado sem o pixel do Meta Ads perde todos os dados das primeiras vendas — dados impossíveis de recuperar retroativamente. Um produto publicado sem o webhook configurado significa que os primeiros alunos não recebem acesso automático — você vai responder mensagens às 2h da manhã criando acesso manualmente.

A skill `configurar-kiwify` funciona como um checklist inteligente: lê o CLAUDE.md, a copy e os dados do produto, e gera cada campo de configuração com os valores corretos.

---

## Criando a Skill configurar-kiwify

```
Crie o arquivo .claude/skills/configurar-kiwify/SKILL.md com as seguintes especificações:

---
name: configurar-kiwify
description: Gera o checklist completo de configuração de produto na Kiwify — todos os campos, valores e integrações para publicar um infoproduto sem esquecer nada.
argument-hint: "[opcional] URL do App Web e preço do produto se diferentes do CLAUDE.md"
user-invocable: true
---

# Skill: configurar-kiwify

Ao executar esta skill, você vai:

1. Ler CLAUDE.md para obter: nome do produto, preço, público-alvo, resultado prometido
2. Ler pagina-vendas/copy.md para obter: headline, descrição, garantia, FAQ
3. Gerar um formulário preenchido com todos os campos da Kiwify:

## DADOS DO PRODUTO
- Nome do produto: [lido do CLAUDE.md]
- Descrição curta (aparece no checkout, máx 200 chars): [gerado da copy]
- Categoria: [inferida do nicho]

## PREÇO E PARCELAMENTO
- Preço à vista: R$[PREÇO]
- Aceita parcelamento: Sim
- Máximo de parcelas: [calcular baseado no preço — produtos < R$97 = 3x, R$97-197 = 6x, > R$197 = 12x]
- Parcelamento tem juros: Não (juros para o cliente reduz conversão)

## ENTREGA DO PRODUTO
- Tipo de entrega: Link Externo
- URL de acesso: [URL do App Web]/login
- Instrução de entrega no email: "Acesse o link acima com o email usado na compra. Sua senha será enviada separadamente pelo webhook."

## CONFIGURAÇÕES DE CHECKOUT
- Página de obrigado: [URL do App Web]/obrigado
- Solicitar CPF no checkout: Não (reduz fricção — apenas se necessário para NF)
- Solicitar telefone: Sim (necessário para recuperação WhatsApp)
- Solicitar endereço: Não

## WEBHOOK
- URL: [URL do App Web]/api/kiwify-webhook
- Token secreto: [KIWIFY_WEBHOOK_SECRET — orientar a gerar e salvar]
- Eventos: order.paid, order.complete, order.refunded

## PIXEL E RASTREAMENTO
- Pixel do Meta Ads: [orientar a colar o Pixel ID]
- Google Tag Manager: [opcional]
- Google Analytics 4: [opcional]

## AFILIADOS
- Programa de afiliados: [Sim/Não baseado no CLAUDE.md]
- Comissão sugerida: [calcular — produtos R$97-197 = 30-40%, > R$197 = 25-35%]

## ORDER BUMP (opcional)
- Produto do order bump: Ebook PDF separado ou sessão de mentoria
- Preço sugerido: R$[PREÇO × 0.2] — regra: order bump custa 15-25% do produto principal
- Descrição do order bump (máx 100 chars): [gerado da copy]

Ao final, gere:
1. Checklist com todos os itens acima para o usuário marcar como feito
2. Os textos prontos para copiar em cada campo da Kiwify
3. Alertas para itens críticos não configurados
```

---

## Executando a Skill

```
/configurar-kiwify
```

A skill vai ler seus arquivos e gerar algo assim:

```
=== CONFIGURAÇÃO KIWIFY — [NOME DO PRODUTO] ===

DADOS DO PRODUTO
✓ Nome: Fábrica de Infoprodutos com IA
✓ Descrição do checkout: "Crie, publique e venda seu infoproduto em 7 dias usando 
  Claude Code — do zero ao primeiro faturamento."

PREÇO
✓ Valor à vista: R$197,00
✓ Parcelamento: até 12x de R$18,90 (sem juros para o cliente)
⚠️  AÇÃO NECESSÁRIA: Configure "sem juros para o cliente" — a Kiwify 
   absorve os juros ou você repassa ao comprador. Recomendação: absorva até 6x.

ENTREGA
✓ URL de acesso: https://app.seuproduto.com.br/login
✓ Página de obrigado: https://app.seuproduto.com.br/obrigado

WEBHOOK
⚠️  AÇÃO NECESSÁRIA: Gere um token secreto agora e salve em duas partes:
   - Painel Kiwify → Produto → Integrações → Webhook → Token
   - Vercel → Projeto App Web → Environment Variables → KIWIFY_WEBHOOK_SECRET
   Token sugerido: [token gerado]

PIXEL
⚠️  AÇÃO NECESSÁRIA: Insira o Pixel ID do Meta Ads antes de publicar.
   Sem o pixel, você perde os dados de compra das primeiras vendas.
   Como encontrar: Meta Business → Gerenciador de Eventos → Pixel

AFILIADOS
✓ Comissão recomendada: 35% (R$68,95 por venda)
  Justificativa: produtos de R$197 com 35% de comissão são competitivos 
  para atrair afiliados de nicho. Produtos < 30% têm dificuldade de 
  engajar afiliados sérios.

ORDER BUMP
✓ Sugerido: Ebook "Guia Rápido de Referência" — R$39
  Posição: aparece no checkout após o comprador clicar em "Comprar"
  Taxa de aceitação esperada: 15-25% dos compradores

=== ITENS PENDENTES ===
❌ Pixel do Meta Ads não configurado
❌ Token do webhook não confirmado
⚠️  Verifique: dados bancários cadastrados para recebimento?
```

---

## Configurando o Produto Passo a Passo na Kiwify

Após executar a skill, siga esta sequência no painel da Kiwify:

### 1. Criar o produto
1. **Painel Kiwify → Produtos → Novo Produto**
2. Tipo: **Produto Digital**
3. Cole os dados gerados pela skill: nome, descrição, preço

### 2. Configurar entrega
1. Na aba **Entrega**: selecione "Link Externo"
2. Cole a URL do App Web: `https://app.[seuproduto].com.br/login`
3. Configure a instrução de acesso que aparece no email de confirmação da Kiwify

### 3. Configurar o checkout
1. Na aba **Checkout**: configure campos obrigatórios (nome, email, telefone)
2. **Página de Obrigado**: cole `https://app.[seuproduto].com.br/obrigado`
3. Desative campos desnecessários — cada campo adicional reduz conversão

### 4. Configurar o webhook
1. Na aba **Integrações → Webhook**
2. Cole a URL: `https://app.[seuproduto].com.br/api/kiwify-webhook`
3. Cole o token secreto (o mesmo que está em KIWIFY_WEBHOOK_SECRET na Vercel)
4. Selecione eventos: `order.paid`, `order.complete`, `order.refunded`
5. Clique em **Testar Webhook** — a Kiwify envia um ping para verificar que o endpoint responde

### 5. Configurar o pixel
1. Na aba **Pixels → Meta Ads**
2. Cole o ID do Pixel (formato: 15 dígitos)
3. A Kiwify vai disparar eventos `Purchase` automaticamente para cada venda confirmada

### 6. Configurar afiliados (opcional)
1. Na aba **Afiliados → Ativar Programa**
2. Configure a comissão percentual
3. A Kiwify cria a URL de afiliado automaticamente: `kiwify.com.br/[seu_produto]?affiliate=[id_afiliado]`

### 7. Criar o Order Bump (opcional)
1. Na aba **Order Bump → Adicionar**
2. Selecione o produto a oferecer (pode ser outro produto seu ou um produto criado só para o bump)
3. Configure o preço do bump
4. Escreva o texto do bump (máx 100 caracteres) — use o texto gerado pela skill

---

## Testando Antes de Publicar

```
Crie um roteiro de teste para verificar que o produto está configurado 
corretamente na Kiwify antes de publicar.

O roteiro deve cobrir:
1. Checkout de teste (modo sandbox da Kiwify)
2. Verificação que o webhook dispara corretamente
3. Verificação que o aluno recebe o email com acesso
4. Verificação que a página de obrigado carrega
5. Verificação do Order Bump (se configurado)
6. Verificação do pixel com Meta Pixel Helper (extensão Chrome)

Para cada teste, indique:
- Ação a executar
- Resultado esperado
- O que verificar se falhar
```

A Kiwify tem um **Ambiente de Teste** no painel em **Configurações → Desenvolvedor → Sandbox**. No modo sandbox:
- As transações não cobram cartão real
- O webhook ainda é disparado (com flag `sandbox: true` no payload)
- Você pode testar o fluxo completo sem processar pagamento

---

## O Momento da Publicação

Quando todos os itens do checklist estiverem ✅:

1. No painel da Kiwify, o produto está em status **Rascunho**
2. Clique em **Publicar Produto**
3. A Kiwify gera a URL de checkout: `kiwify.com.br/checkout/[ID_DO_PRODUTO]`
4. Cole essa URL nos botões CTA da landing page (substitua os placeholders `[LINK_KIWIFY_PLACEHOLDER]`)
5. Faça o push da landing page atualizada para o GitHub → deploy automático na Vercel

A partir desse momento, qualquer pessoa que clicar no botão de compra da sua landing page vai para o checkout da Kiwify. Você está no ar.

---

## Exercício Prático

1. Execute `/configurar-kiwify` e revise os campos gerados
2. Crie o produto no painel da Kiwify com os dados gerados
3. Configure webhook, pixel e página de obrigado
4. Execute o teste no modo sandbox
5. Substitua os placeholders da landing page com a URL de checkout real
6. Faça o push da landing page atualizada
7. Acesse a landing page no ar e teste o fluxo completo: clique no CTA → checkout → compra de teste → webhook → login no App Web

Quando esse fluxo funcionar de ponta a ponta, você tem um produto publicado e vendável.

---

## Dicas e Pontos de Atenção

> **Sobre o Order Bump e o timing:** O order bump aparece na última tela antes da confirmação do pagamento — quando o comprador já inseriu os dados do cartão. A taxa de aceitação do bump é alta justamente porque o custo psicológico de adicionar R$39 a uma compra de R$197 já confirmada é baixo. Para o primeiro lançamento, um order bump simples (o ebook PDF separado) já pode adicionar 15-20% de receita sem nenhum tráfego extra.

> **Ponto de atenção — URL de checkout e UTMs:** Quando você veicular anúncios no Meta Ads, vai querer saber qual anúncio gerou qual venda. A Kiwify aceita parâmetros UTM na URL de checkout: `kiwify.com.br/checkout/[ID]?utm_source=meta&utm_campaign=[NOME_DA_CAMPANHA]`. Configure isso nos anúncios antes de ativar — você não consegue atribuir vendas retroativamente.

> **Reembolso automático vs. manual:** A Kiwify processa reembolsos solicitados pelo comprador automaticamente dentro do prazo de 7 dias. Após 7 dias, o reembolso é manual e passa pela sua aprovação. Para produtos de R$197, a taxa de reembolso média no mercado brasileiro é 2-5%. Se sua taxa estiver acima de 8%, é sinal de que a promessa da landing page não está alinhada com o que o produto entrega — corrija a copy ou o produto.
