# Aula Bônus 2 — Criando Seu Segundo Produto em 48 Horas com o Sistema da Fábrica

## O Efeito Acumulativo do Sistema

Quando você criou o primeiro produto, você construiu a fábrica. Agora a fábrica já existe — e criar o segundo produto é fundamentalmente diferente.

**O que mudou:**
- O CLAUDE.md tem contexto profundo sobre seu nicho, público e voz
- As Skills estão criadas e testadas
- O App Web já tem a estrutura de navegação, autenticação e progresso
- A landing page tem o design e componentes reusáveis
- O fluxo Kiwify → webhook → email está funcionando
- Você tem CPA real do primeiro produto para comparar

O segundo produto levará 20-30% do tempo do primeiro. Não porque você vai cortar atalhos — mas porque o sistema já está montado.

---

## Quando Criar o Segundo Produto

Não crie o segundo produto antes de:
- Ter pelo menos 30 vendas do primeiro produto
- Ter um CPA estabilizado (não apenas testes)
- Ter feedback de alunos que indique uma necessidade complementar

**Por que esperar:**
O segundo produto certo não é uma ideia nova — é a resposta natural ao que os primeiros alunos estão perguntando. Os alunos do primeiro produto vão dizer o que falta, o que querem mais, onde travam. O segundo produto resolve exatamente isso.

```
Com base no produto atual do CLAUDE.md e nos feedbacks coletados dos primeiros alunos,
identifique as 3 melhores oportunidades para o segundo produto.

Contexto:
- Produto atual: [NOME E DESCRIÇÃO DO CLAUDE.md]
- Feedbacks recorrentes dos alunos: [COLE OS FEEDBACKS MAIS COMUNS]
- Perguntas mais frequentes no suporte: [LISTE AS PERGUNTAS]

Para cada oportunidade:
1. Problema específico que o segundo produto resolve
2. Relação com o produto atual (sequência, complemento, alternativa avançada)
3. Modelo de venda sugerido: produto único, upsell do produto 1, ou assinatura
4. Preço estimado baseado no valor entregue
5. Complexidade de produção: simples (2-4 módulos), médio (6-8), completo (8+)

Priorize pelo critério: maior demanda comprovada × menor esforço de produção.
```

---

## Adaptando o CLAUDE.md Para o Segundo Produto

O CLAUDE.md atual descreve o primeiro produto. Para o segundo, você tem duas opções:

**Opção 1 — Novo CLAUDE.md em novo projeto:**
Ideal quando o segundo produto é para um público diferente ou nicho distinto.

```
Crie um novo CLAUDE.md para o segundo produto baseado no aprendizado do primeiro.

Produto 2: [NOME]
Nicho: [NICHO — pode ser igual ou diferente do produto 1]
Público-alvo: [DESCRIÇÃO — como difere do público do produto 1?]
Promessa principal: [O que o aluno consegue fazer ao terminar?]
Método: [Como entrega o resultado?]
Preço: R$[VALOR]
Relação com produto 1: [Sequência / Complemento / Independente]

Diferenciais em relação ao CLAUDE.md do produto 1:
- [O que muda no tom?]
- [O que muda na profundidade técnica?]
- [Qual seção deve ser expandida baseado nos erros do produto 1?]

Salve em [NOME-DO-PROJETO-2]/CLAUDE.md
```

**Opção 2 — CLAUDE.md multi-produto no mesmo projeto:**
Ideal quando os dois produtos compartilham público, nicho, e voz — e você quer manter um único ambiente de trabalho.

```
Atualize o CLAUDE.md para suportar múltiplos produtos.

Estrutura nova:
## Portfólio
### Produto 1: [NOME]
[Seção existente — mantida intacta]

### Produto 2: [NOME]
Promessa: [...]
Público: [...]
Preço: R$[...]
App Web: [URL]
Landing page: [URL]
Status: [Em produção / Em desenvolvimento]

## Regras Gerais (valem para todos os produtos)
[Tom de voz, estilo, valores]
```

---

## Reutilizando as Skills Existentes

As Skills criadas ao longo do curso funcionam para qualquer produto — elas leem o CLAUDE.md e adaptam automaticamente. Você não precisa recriar nada.

**Skills que funcionam sem mudança:**
- `criar-estrutura-curso` — gera a nova estrutura com o novo CLAUDE.md
- `gerar-conteudo-completo` — produz as aulas com o novo contexto
- `escrever-copy-vendas` — gera a copy do produto 2
- `gerar-emails-lancamento` — nova sequência de 7 emails
- `gerar-criativos-ads` — criativos para o produto 2
- `gerar-ebook-bonus` — bônus do produto 2

**Skills que precisam de ajuste mínimo:**
- `montar-pagina-vendas` — a estrutura HTML é igual, mas você vai querer um design visual diferente para diferenciar os produtos. Uma paleta de cores diferente (ou variações) é suficiente.
- `configurar-kiwify` — funciona igual, mas precisa ser executada em uma nova conta de produto na Kiwify.
- `gerar-app-web` — o App Web do produto 2 pode ser um novo deploy ou pode ser um novo "curso" dentro do mesmo App Web (multi-produto).

```
Execute o fluxo de produção do segundo produto.

ETAPA 1: Estrutura (execute agora)
/criar-estrutura-curso

[Após revisar a estrutura]

ETAPA 2: Conteúdo (Background Agents)
/gerar-conteudo-completo

[Em paralelo, execute:]
ETAPA 3: Copy
/escrever-copy-vendas

[Com copy pronta:]
ETAPA 4: Landing page
/montar-pagina-vendas [variação de cor: use paleta do produto 2]

ETAPA 5: Bônus
/gerar-ebook-bonus

ETAPA 6: Emails
/gerar-emails-lancamento

ETAPA 7: Criativos
/gerar-criativos-ads

Objetivo: produto 2 pronto para revisão em 48 horas.
```

---

## O App Web Multi-Produto

Se os dois produtos compartilham público, considere um App Web multi-produto: uma única área de membros onde o aluno acessa todos os produtos que comprou.

**Vantagens:**
- Um único domínio (ex: `app.seumarca.com.br`)
- Um único sistema de autenticação
- O aluno faz login uma vez e vê todos os produtos que possui
- Upsell dentro da plataforma: aluno do produto 1 vê o produto 2 "bloqueado" com botão de compra

**Estrutura de pastas para multi-produto:**
```
app-web/
├── app/
│   ├── dashboard/         ← lista de todos os produtos do aluno
│   ├── curso/[produto]/[modulo]/[aula]/  ← roteamento multi-produto
│   └── api/
│       └── kiwify-webhook/  ← identifica qual produto foi comprado
├── content/
│   ├── produto-1/         ← conteúdo do produto 1
│   └── produto-2/         ← conteúdo do produto 2
└── lib/
    └── auth.ts            ← ALUNOS_JSON com campo `produtos: string[]`
```

```
Atualize o App Web para suportar múltiplos produtos.

Contexto: o App Web atual em app-web/ suporta apenas o produto 1.
Preciso adicionar o produto 2: [NOME DO PRODUTO 2]

Mudanças necessárias:
1. ALUNOS_JSON: adicione campo "produtos": ["produto-1", "produto-2"] por aluno
2. Dashboard: mostre apenas os produtos que o aluno possui (desbloqueados)
3. Roteamento: /curso/[produto]/[modulo]/[aula] em vez de /curso/[modulo]/[aula]
4. Webhook: identifique qual produto foi comprado pelo campo "product_id" do payload
5. Upsell interno: alunos sem produto-2 veem um card "bloqueado" com CTA de compra

Gere as mudanças mínimas necessárias nos seguintes arquivos:
- app-web/app/dashboard/page.tsx
- app-web/app/api/kiwify-webhook/route.ts
- app-web/lib/auth.ts

Mantenha backward compatibility: o produto 1 deve continuar funcionando sem mudanças.
```

---

## O Segundo Produto Como Upsell do Primeiro

A forma mais eficiente de vender o segundo produto: oferecê-lo como upsell para os alunos do primeiro produto.

**Por que funciona tão bem:**
- CAC (Custo de Aquisição de Cliente) = R$0 para alunos existentes
- Você já tem a confiança deles — eles compraram antes
- Você conhece o problema específico que eles têm (são seus alunos, não estranhos)
- A compra dentro do App Web tem fricção zero (não precisam preencher dados novamente — Kiwify salva o cartão)

**Sequência de email para alunos existentes:**
```
Crie uma sequência de 3 emails para oferecer o produto 2 para alunos do produto 1.

Produto 1 (que eles já têm): [NOME]
Produto 2 (oferta): [NOME]
Preço do produto 2: R$[VALOR]
Desconto exclusivo para alunos: R$[VALOR] (ex: 30% de desconto)

Email 1 (Dia 1): Narrativa — "você completou X, agora o próximo passo natural é..."
Email 2 (Dia 3): Valor — ensine algo do produto 2 gratuitamente (um mini-aula)
Email 3 (Dia 5): Oferta — desconto exclusivo válido por 72h (carrinho aberto)

Para cada email:
- Assunto (A/B test: 2 versões)
- Corpo com no máximo 200 palavras
- CTA específico

Salve em emails/upsell-produto-2.md
```

---

## Construindo um Portfólio de Produtos

Com o segundo produto, você passa de criador de produto para operador de portfólio. Essa mudança de mentalidade é importante:

| | Produto Único | Portfólio |
|--|--------------|-----------|
| Risco | Concentrado | Distribuído |
| LTV por cliente | R$197 (uma vez) | R$197 + R$297 + R$47/mês |
| Dependência de novos clientes | Alta | Menor |
| CAC efetivo | Total no CPA | Diluído entre produtos |
| Ticket médio | Fixo | Cresce com upsells |

O portfólio ideal para infoprodutos em 2026:
- **Produto entrada:** R$47-97 (resolve um problema específico e pequeno)
- **Produto principal:** R$197-497 (o curso completo)
- **Produto avançado/mentoria:** R$997-2997 (implementação acompanhada)
- **Subscription:** R$27-97/mês (comunidade + atualizações)

Não todos de uma vez. A sequência correta é: produto principal → produto entrada (para capturar quem acha caro) → produto avançado (para quem quer mais) → subscription (para quem quer ficar).

---

## Exercício Prático

1. Execute o prompt de identificação das 3 melhores oportunidades para o segundo produto
2. Escolha uma e crie o CLAUDE.md para o produto 2
3. Execute as Skills na sequência proposta com o objetivo de ter a estrutura e copy prontas em 48h
4. Avalie se o App Web multi-produto faz sentido para o seu caso (mesma audiência ou audiências distintas?)
5. Crie a sequência de upsell de 3 emails para os alunos existentes
6. Esboce o portfólio de 4 produtos que você quer ter em 12 meses

---

## Dicas e Pontos de Atenção

> **Sobre a velocidade no segundo produto:** O risco agora é o oposto do primeiro produto — no primeiro, o risco era nunca começar. No segundo, o risco é criar rápido demais e entregar algo que não está à altura da expectativa criada pelo primeiro. O segundo produto precisa ser pelo menos tão bom quanto o primeiro. Não corte atalhos na revisão de conteúdo porque o sistema é mais rápido.

> **Ponto de atenção — fragmentação de foco:** Criar o segundo produto enquanto o primeiro ainda está na fase de otimização de tráfego é arriscado. A regra prática: só comece o segundo produto quando o primeiro tiver CPA estável por pelo menos 2 semanas consecutivas. Dividir atenção entre tráfego novo e criação de produto novo normalmente prejudica os dois.

> **O CLAUDE.md como ativo estratégico:** Cada CLAUDE.md que você cria é um ativo de conhecimento. Ele contém seu posicionamento, sua voz, seu público, sua pesquisa de mercado, e os aprendizados dos alunos. Trate cada CLAUDE.md como um documento vivo — atualize-o com os feedbacks dos alunos, os dados de CPA que você descobriu, e as objeções reais que aparecem no suporte. Com o tempo, esse documento se torna o manual completo de como vender para esse público.
