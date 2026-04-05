# Aula 5.4 — Preço, Âncora e Percepção de Valor: A Psicologia Que Determina Quanto Você Vende

## O Preço Não É Sobre o Produto — É Sobre a Referência

Quando alguém vê "R$197", não pensa "isso é barato ou caro" em termos absolutos. Pensa "R$197 comparado a quê?"

Se a referência for "um almoço no restaurante" (R$50-80), R$197 parece caro. Se a referência for "uma consultoria de 1 hora com especialista" (R$500-1.500), R$197 parece muito acessível. Se a referência for "o problema que continuará existindo se não resolver" (perda de oportunidade, tempo desperdiçado, receita que não vem), R$197 parece insignificante.

A ancoragem de preço é o trabalho de criar a referência certa antes de revelar o preço. E o Claude pode fazer isso de forma cirúrgica na sua copy.

---

## Como Funciona a Âncora Psicológica

Daniel Kahneman demonstrou que o cérebro usa números previamente apresentados como referência para avaliar novos números — mesmo quando a relação é arbitrária. Em copy de vendas, isso se manifesta assim:

**Sem âncora:** "O curso custa R$197."
Cérebro: "R$197 para um curso? Preciso avaliar se vale."

**Com âncora:** "Uma sessão de consultoria individual para montar a estrutura do seu curso custa entre R$800 e R$1.500. A maioria das agências cobra R$2.500+ para criar a copy de vendas. O acesso ao Claude Code para criar o App Web seria mais R$200/mês. Investimento total se você fosse contratar cada peça separada: R$3.500-5.000. O curso completo com tudo isso em 7 dias: R$197."
Cérebro: "R$197 comparado a R$3.500 é 94% de desconto. Faz muito sentido."

O preço não mudou. A referência mudou. E a referência muda tudo.

---

## As 3 Estratégias de Precificação Para Infoprodutos

### Estratégia 1: Precificação por Transformação (recomendada)

O preço é baseado no valor da transformação que o produto entrega, não no custo de produção.

Quanto vale para o seu público-alvo específico resolver o problema que o curso resolve?
- Para a artesã que vai dobrar as vendas do Instagram com fotos melhores: a transformação vale centenas de reais por mês recorrente
- Para o profissional que vai criar uma renda extra de R$2.000/mês com infoprodutos: a transformação vale 1 mês de renda extra

Preço recomendado: entre 5-15% do valor da transformação no primeiro mês

**Prompt para calcular:**
```
Com base no público-alvo do CLAUDE.md e no resultado prometido em 
curso/decisoes-produto.md, calcule:

1. Qual é o valor financeiro estimado da transformação no primeiro mês 
   após o cliente aplicar o que aprendeu?
2. Qual é o preço ideal baseado em 5-10% dessa transformação?
3. Qual deve ser o preço de âncora (consultoria/alternativa cara)?
4. Qual deve ser o preço de lançamento (15-30% abaixo do preço regular)?
5. Quando aumentar para o preço regular? (após quantos alunos/dias?)

Justifique cada número.
```

### Estratégia 2: Precificação por Concorrência (quando entrar em mercado estabelecido)

Se seu mercado já tem referências de preço bem estabelecidas, sair muito acima ou abaixo cria barreiras de percepção.

Muito mais caro que todos: o comprador precisa de mais justificativa
Muito mais barato que todos: cria suspeita sobre a qualidade

Nesse caso: precifique dentro do range do mercado, mas justifique o posicionamento pela especificidade (serve melhor um segmento específico).

### Estratégia 3: Precificação de Entrada (para construir audiência inicial)

Para quem não tem audiência e está lançando o primeiro produto: o objetivo do primeiro lançamento não é maximizar receita — é maximizar depoimentos e casos de sucesso.

Primeiro lançamento: R$47-97 com acesso ilimitado e suporte direto do criador
Segundo lançamento: R$97-197 com os depoimentos coletados
Terceiro lançamento: R$197-297 com cases de sucesso estabelecidos

Essa escada de preço é mais sustentável do que lançar caro sem prova social.

---

## A Estrutura de Ancoragem Na Copy

Aqui está a sequência exata para apresentar preço na landing page:

```
[Bloco de Ancoragem]
Se você fosse resolver esse problema contratando:
→ Consultoria de estrutura de curso: R$800-1.500
→ Copywriter para a página de vendas: R$1.500-3.000
→ Desenvolvedor para o App Web: R$3.000-6.000
→ Especialista em Meta Ads para configurar as campanhas: R$1.000-2.000
Total se você contratasse cada profissional: R$6.300-12.500

Ou você pode aprender a fazer tudo isso com o Claude Code em 7 dias.

[Revelação do Preço]
Hoje, o investimento no [NOME DO CURSO] é de apenas R$[PREÇO].

[Quebra do Preço]
Isso é menos de R$[PREÇO/DIA] por dia ao longo de um mês.
Menos do que um almoço fora na semana.

[Garantia]
E se em [PRAZO] você aplicar os métodos e não conseguir [RESULTADO MÍNIMO],
eu devolvo cada centavo. Sem perguntas.
```

**Prompt para personalizar:**
```
Com base nos dados de pagina-vendas/copy.md e no posicionamento do CLAUDE.md, 
escreva o bloco de ancoragem de preço.

Use alternativas reais e específicas para o mercado do [TEMA DO CURSO] —
não genéricas. O comprador deve reconhecer os valores como realistas.

Calcule também:
- Preço por dia (dividindo por 30)
- Equivalência com algum gasto comum do público-alvo
  (almoço, aplicativo de streaming, cafezinho, etc.)

Insira em pagina-vendas/copy.md na posição correta.
```

---

## Estrutura de Preços e Planos (Upsell e Order Bump)

Uma única opção de preço converte menos do que duas ou três opções — porque em vez de "comprar ou não comprar", o comprador pensa em "qual versão escolher."

**Estrutura de 3 planos:**

| Plano | O Que Inclui | Preço | Psicologia |
|-------|-------------|-------|-----------|
| Básico | Só o curso | R$97 | Âncora baixa |
| Completo (destaque) | Curso + Ebook + Suporte 30 dias | R$197 | A escolha certa |
| Premium | Completo + 1 sessão ao vivo com o criador | R$397 | Para os mais sérios |

O plano do meio é sempre o que converte mais — por isso é "destacado" visualmente. O plano de baixo faz o do meio parecer completo por pequena diferença. O plano de cima faz o do meio parecer acessível.

```
Com base no que tenho para oferecer, crie os 3 planos de preço para 
[NOME DO CURSO].

Minha situação atual:
- [Liste o que você pode oferecer: suporte, sessões ao vivo, bônus extras]

Para cada plano:
- Nome do plano
- O que inclui (específico)
- Preço sugerido
- Nome do botão CTA
- Por que este plano existe (qual problema de precificação ele resolve)

Salve em pagina-vendas/copy.md como a seção de planos.
```

---

## Exercício Prático

1. Execute o Prompt de Cálculo de Precificação por Transformação
2. Avalie a estratégia: você está em mercado estabelecido (use concorrência) ou criando segmento novo (use transformação)?
3. Escreva o bloco de ancoragem com alternativas reais e específicas para o seu mercado
4. Decida: um preço único ou 3 planos? Se 3 planos, execute o prompt de planos
5. Insira a estrutura de preço na copy de `pagina-vendas/copy.md`
6. Leia a seção de preço em voz alta — parece razoável e convincente para o seu público-alvo? Se não, identifique o que está quebrando a lógica e ajuste

Quando a estratégia de preço estiver finalizada, a copy completa vai para a landing page na Aula 6.1.

---

## Dicas e Pontos de Atenção

> **Sobre o medo de precificar alto:** A maioria dos criadores de primeiro curso subestima o valor do próprio produto. Compare com o quanto o seu público-alvo paga por soluções alternativas (consultorias, agências, cursos de faculdade sobre o tema). Se sua comparação honesta mostra que R$197 é 90% mais barato do que as alternativas e entrega o mesmo resultado, o produto está subprecificado — não o contrário.

> **Ponto de atenção — Kiwify e parcelamento:** A Kiwify permite parcelamento em até 12x. Para produtos acima de R$197, o parcelamento é um argumento de venda. "R$197 ou 12x de R$18,90" — a parcela entra como referência adicional. Muitos compradores pensam em parcela, não em valor total. Configure o parcelamento na Kiwify antes de publicar a landing page.

> **Aumentar o preço ao longo do tempo:** Anuncie desde o início que o preço de lançamento é temporário. "Nas primeiras 72 horas: R$97. Após o lançamento: R$197." Isso cria urgência legítima e prepara o comprador tardio para pagar mais. Na prática, aumentar o preço também aumenta a percepção de valor — cursos que sempre custam R$97 são percebidos como menos valiosos do que cursos que "custavam R$197 e estão em promoção por R$97."
