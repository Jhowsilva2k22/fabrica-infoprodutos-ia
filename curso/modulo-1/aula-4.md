# Aula 1.4 — Sua Primeira Conversa Produtiva com o Claude: Técnicas de Prompt Avançado

## O Que Separa Um Prompt Amador de Um Prompt Profissional

Um prompt amador parece com: *"Escreva uma aula sobre funil de vendas."*

Um prompt profissional parece com: *"Você é um professor de marketing digital com 10 anos de experiência ensinando empreendedores brasileiros iniciantes. Escreva a primeira aula de um módulo sobre funis de vendas para freelancers que estão migrando para o modelo de infoprodutos. Tom: direto e prático, sem jargão técnico. Estrutura: conceito central (200 palavras) → por que isso importa para o aluno (150 palavras) → exemplo prático com números reais (200 palavras) → passo a passo de implementação (250 palavras) → exercício final. Nível: iniciante que nunca criou um funil antes."*

A diferença no resultado é enorme. E a diferença na construção do prompt é aprendível — você vai dominar isso nesta aula.

Um detalhe importante para 2026: o Claude Opus 4.6 tem **thinking adaptativo** — ele decide dinamicamente quando e quanto raciocinar antes de responder. Prompts bem estruturados ativam esse modo de raciocínio de forma mais eficiente, produzindo outputs de qualidade substancialmente superior para tarefas complexas.

---

## As 5 Técnicas de Prompt Que Transformam Resultados

### Técnica 1: Atribuição de Papel (Role Assignment)

Antes de qualquer instrução, diga ao Claude **quem ele é** naquela tarefa.

**Sem papel:** "Escreva uma copy de vendas para meu curso."  
**Com papel:** "Você é um copywriter sênior especializado em infoprodutos brasileiros, com histórico de páginas que convertem acima de 5%. Escreva uma copy de vendas para meu curso."

O papel ativa um "modo" de resposta diferente. Com papel de copywriter, o Claude vai aplicar estruturas de copy, gatilhos mentais, técnicas de persuasão que não apareceriam em uma resposta genérica.

**Como usar:** Comece sempre com "Você é um [cargo/especialidade] com [experiência específica] que [resultado relevante]."

---

### Técnica 2: Contexto Detalhado do Público

A IA só consegue personalizar o conteúdo se souber para quem ele é. Quanto mais específico o público, mais relevante o output.

**Público vago:** "empreendedores digitais"

**Público específico:** "Empreendedores digitais brasileiros, 28-45 anos, que têm expertise em uma área mas nunca criaram um produto digital. Já tentaram criar um curso antes mas travaram na produção de conteúdo. Usam Instagram como principal canal. Principal dor: tempo. Principal desejo: ter renda extra sem depender de atender clientes um a um. Frustração central: já compraram cursos de IA mas não conseguiram implementar nada prático."

Com esse nível de detalhe, o Claude sabe exatamente que exemplos usar, que linguagem adotar, que objeções antecipar e que benefícios enfatizar. Quando você configura isso no CLAUDE.md, nunca mais precisa repetir — está lá permanentemente.

---

### Técnica 3: Especificação de Formato e Estrutura

Se você não especificar o formato, o Claude vai escolher um. E raramente vai ser o que você queria.

**Sem formato:** "Escreva uma sequência de emails de lançamento."

**Com formato:** "Crie 7 emails de lançamento no seguinte formato para cada um: | Assunto (máx 50 caracteres) | Preview text (máx 90 caracteres) | Corpo (200-300 palavras, 3 parágrafos curtos) | CTA (1 frase com link placeholder) |. Os emails devem ter progressão psicológica: curiosidade → valor → urgência → prova social → objeções → escassez → fechamento."

Com essa especificação, você recebe exatamente o que pode usar diretamente, sem reformatar. A Skill `gerar-emails-lancamento` que você vai criar no Módulo 2 usa exatamente essa lógica — o prompt complexo está encapsulado na Skill, e você só digita `/gerar-emails-lancamento`.

---

### Técnica 4: Exemplos de Output Desejado (Few-Shot Prompting)

Mostre um exemplo do que você quer. Isso é especialmente poderoso para capturar tom de voz.

**Sem exemplo:** "Escreva no meu tom de voz."

**Com exemplo:** "Escreva no tom dos seguintes exemplos que uso no meu conteúdo: [cole 2-3 parágrafos que você escreveu]. Esse é o estilo que quero: direto, sem rodeios, fala como amigo que manja do assunto, não como professor de faculdade."

Quando você tem seus próprios textos como referência, o Claude captura seu estilo com precisão surpreendente. O contexto de 1M tokens do Opus 4.6 permite colocar múltiplos exemplos longos sem sacrificar a instrução principal.

---

### Técnica 5: Iteração Estruturada com Raciocínio em Cadeia (Chain of Thought)

Para tarefas complexas, divida em etapas e peça ao Claude para pensar em voz alta antes de escrever.

**Prompt direto:** "Crie a estratégia de lançamento do meu curso."

**Prompt iterativo:** "Antes de criar a estratégia, analise: 1) O público que defini, 2) O produto que tenho, 3) O mercado atual de infoprodutos sobre IA no Brasil em abril de 2026 — onde 60%+ dos produtos já usam IA. Liste os pontos fortes e fracos desta oferta. Depois, com base nessa análise, proponha a estratégia de lançamento mais adequada e justifique cada escolha."

Pedir a análise antes da resposta final ativa o thinking adaptativo do Opus 4.6 — e o resultado é substancialmente melhor. Você está aproveitando a capacidade de raciocínio do modelo, não só a capacidade de geração de texto.

---

## Colocando as 5 Técnicas em Prática: Prompt Completo

Veja como todas as técnicas se combinam em um único prompt poderoso:

```
Você é um Designer Instrucional sênior com 15 anos de experiência criando 
cursos para o mercado brasileiro de educação online, especialista em 
adaptar conteúdo técnico para audiências não-técnicas. [TÉCNICA 1: PAPEL]

O curso é sobre "Como usar Claude Code para criar infoprodutos", voltado para 
empreendedores digitais brasileiros de 28-45 anos, com expertise em alguma área 
mas sem experiência em criar produtos digitais. Principal dor: falta de tempo 
para produzir conteúdo. Principal desejo: ter um sistema que trabalhe por eles. 
Frustração: já tentaram usar IA mas continuam fazendo tudo manualmente. 
[TÉCNICA 2: CONTEXTO DO PÚBLICO]

Crie a estrutura da Aula 1 do Módulo 1 no seguinte formato:
- Título da aula (gancho forte, máx 70 caracteres)
- Objetivo de aprendizagem (1 frase com verbo de ação)
- Introdução com problema concreto e gancho emocional (150 palavras)
- 3 conceitos principais (subtítulo H3 + 200 palavras cada)
- Exemplo prático com resultado numérico real
- Exercício ao final com 5 passos claros
[TÉCNICA 3: FORMATO]

O tom deve ser similar a este exemplo:
"Você não precisa de mais tempo. Você precisa de um sistema. A diferença entre 
quem produz e quem trava não é talento — é processo. E processo é o que você 
vai construir aqui." 
[TÉCNICA 4: EXEMPLO DE TOM]

Antes de criar o conteúdo, liste os 3 principais medos que esse público tem 
sobre usar IA para criar conteúdo, e confirme que a estrutura da aula os 
endereça. Depois, crie o conteúdo.
[TÉCNICA 5: ITERAÇÃO COM RACIOCÍNIO]
```

---

## Exercício Prático

Crie seu primeiro prompt profissional agora mesmo:

1. Escolha uma aula simples do seu nicho (ex: "Introdução ao tema que você domina")
2. Aplique as 5 técnicas: escreva o papel, descreva o público específico, especifique o formato com contagem de palavras, adicione um exemplo do seu tom, peça análise antes da criação
3. Envie para o Claude Opus 4.6 no Claude.ai ou Claude Code
4. Avalie o resultado: quantas técnicas fizeram diferença visível no output?
5. Faça uma segunda versão do prompt ajustando o que não ficou certo
6. Compare a primeira e segunda versão lado a lado — anote o que mudou

A habilidade de iterar e refinar prompts é tão importante quanto criar o prompt inicial. Você vai ficar exponencialmente mais rápido com a prática — e quando as melhores versões estiverem prontas, elas vão para as Skills do seu sistema.

---

## Dicas e Pontos de Atenção

> **Atalho:** Crie um arquivo `prompts-base.md` na pasta do seu projeto com seus 5-10 prompts mais eficazes. Quando precisar criar algo novo, você adapta um prompt existente em vez de começar do zero. Esse arquivo é o embrião das Skills que você vai montar no Módulo 2 — depois você encapsula os melhores prompts nas Skills e nunca mais os escreve manualmente.

> **Ponto de atenção:** Prompt longo não significa prompt bom. O objetivo é especificidade, não extensão. Um prompt de 3 linhas bem estruturado pode superar um prompt de 20 linhas vago. Foque no que realmente importa: papel, público, formato, tom. Contexto desnecessário polui o raciocínio do modelo.

> **Técnica bônus — correção incremental:** Quando um output não ficar bom, não reescreva o prompt do zero. Adicione uma instrução de correção: "O resultado ficou bom mas o tom está formal demais. Reescreva mantendo o conteúdo mas com linguagem mais conversacional, como se estivesse explicando para um amigo que já sabe o básico." Correções incrementais são mais eficientes que recomeços — e o Opus 4.6 com 1M de contexto mantém todo o trabalho anterior enquanto aplica a correção.

> **Sobre o thinking adaptativo:** O Claude Opus 4.6 decide autonomamente quando usar raciocínio profundo. Para tarefas criativas simples, ele responde diretamente. Para tarefas complexas — como criar a estrutura de um curso inteiro ou escrever copy persuasiva com múltiplos elementos — ele ativa o modo de raciocínio automaticamente. Você pode explicitamente pedir "pense passo a passo antes de responder" para forçar esse modo em tarefas onde quer mais profundidade.
