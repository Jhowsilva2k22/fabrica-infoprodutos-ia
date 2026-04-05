# Aula 3.4 — Revisão Estratégica: Como o Claude Vira Seu Consultor de Produto

## A Diferença Entre Executar e Pensar

As aulas anteriores deste módulo foram sobre executar: pesquisar o mercado, definir posicionamento, gerar a estrutura. Essa aula é diferente. Ela é sobre parar antes de produzir e fazer as perguntas certas.

A maioria dos criadores passa do planejamento direto para a produção. O curso parece bom no papel, então eles começam a gravar. Três semanas depois, percebem que a aula 8 contradiz a aula 3, que prometeram um resultado na copy que a estrutura não entrega, ou que o módulo mais importante está enterrado no meio do curso onde metade dos alunos vai desistir antes de chegar.

Essas são correções caras — porque exigem regravar, reestruturar, ou na pior das hipóteses, relançar. A revisão estratégica feita agora evita tudo isso.

E o Claude Opus 4.6, com sua capacidade de manter e analisar contextos de 1M de tokens, é o parceiro ideal para esse exercício.

---

## Os 4 Problemas Que Matam Cursos Antes do Lançamento

Antes dos prompts de revisão, entenda o que você está procurando:

**Problema 1 — Promessa vs. Entrega**
A copy promete um resultado que a estrutura do curso não consegue entregar. O aluno compra esperando X e recebe Y. Resultado: reembolso + review negativa.

**Problema 2 — Sequência Quebrada**
Uma aula usa conceitos que só foram explicados depois. O aluno chega na Aula 5 sem as ferramentas que deveria ter aprendido na Aula 3. Resultado: confusão, abandono, reembolso.

**Problema 3 — Módulo Morto**
Um ou dois módulos do curso têm material bom isoladamente, mas não se conectam com o fluxo do restante. São "apêndices disfarçados de módulos". Resultado: o aluno termina o curso sem saber como aplicar aquele conteúdo.

**Problema 4 — Resultado Adiado**
O aluno consegue seu primeiro resultado real só nas últimas aulas do curso. Tudo antes foi fundamento sem aplicação. Resultado: abandono antes de chegar ao resultado — e o aluno fica com a impressão que o curso não funciona, mesmo sem ter terminado.

---

## A Sessão de Consultoria com o Claude

Execute esse processo com o Claude Code após ter a estrutura aprovada em `curso/estrutura.md` e o posicionamento no CLAUDE.md:

### Parte 1: Análise de Consistência Interna

```
Leia o arquivo curso/estrutura.md e o CLAUDE.md deste projeto.

Faça uma análise de consistência interna do curso e me aponte:

1. PROMESSA VS. ENTREGA: O resultado prometido no campo "resultado prometido" 
   do CLAUDE.md é alcançável com a estrutura atual? Se não, o que está faltando?

2. SEQUÊNCIA QUEBRADA: Existe algum módulo ou aula que usa conceitos que 
   ainda não foram ensinados nos módulos anteriores? Liste todos os casos.

3. MÓDULOS MORTOS: Algum módulo parece um apêndice que não se conecta 
   com o fluxo principal? Se sim, como integrá-lo ou transformá-lo?

4. RESULTADO ADIADO: Quando o aluno consegue seu primeiro resultado 
   visível e concreto? Se for depois da aula 8, o curso tem problema de 
   engajamento inicial.

Seja direto: diga o que está errado, não apenas o que está bom.
```

### Parte 2: Análise do Ponto de Vista do Aluno

```
Agora faça um role-play: você é um aluno que comprou este curso com as 
seguintes características:

[Cole aqui o perfil do público-alvo do seu CLAUDE.md]

Leia a estrutura em curso/estrutura.md e me diga:

1. Em qual aula você estaria mais animado? Por quê?
2. Em qual aula você estaria confuso ou perdido? Por quê?
3. Qual módulo te parece desnecessariamente longo para o que entrega?
4. Qual módulo te parece insuficiente para o que promete?
5. Se você pudesse pular 3 aulas sem perder nada essencial, quais seriam?
   (Atenção: se existem aulas que podem ser puladas, elas precisam ser 
   reformuladas ou removidas)

Responda como o aluno, com a mentalidade e conhecimento prévio dele.
```

### Parte 3: Teste de Diferenciação Real

```
Baseado no mapeamento de concorrentes em curso/pesquisa-mercado.md e na 
estrutura em curso/estrutura.md, responda:

1. Qual é a aula deste curso que nenhum concorrente oferece?
   Se não existe nenhuma, isso é um problema — identifique onde 
   adicionar diferencial real.

2. Qual é o módulo que mais claramente reflete o método proprietário 
   "[NOME DO SEU MÉTODO]" conforme definido no CLAUDE.md?
   Se nenhum módulo reflete o método de forma clara, a estrutura não 
   materializa a promessa de posicionamento.

3. Existe algo na estrutura atual que um concorrente poderia copiar 
   exatamente amanhã? O que tornaria esse conteúdo impossível de copiar 
   sem ter minha experiência específica?
```

---

## Ajustando com Base na Consultoria

Após as três análises, você vai ter uma lista de problemas identificados. Priorize assim:

**Críticos (corrija antes de produzir qualquer aula):**
- Promessa vs. entrega incompatíveis
- Sequências com pré-requisitos faltando
- Resultado adiado para depois da aula 10

**Importantes (corrija antes da primeira sessão de gravação):**
- Módulos mortos ou desconectados
- Aulas redundantes ou puláveis
- Módulo que não reflete o método proprietário

**Opcionais (corrija se der tempo antes do lançamento):**
- Títulos de aulas que poderiam ser mais específicos
- Módulo que poderia ser expandido para maior profundidade
- Bônus que poderia ser mais alinhado com a promessa principal

Para cada ajuste crítico ou importante, use este prompt:

```
Com base na análise de consultoria, preciso corrigir os seguintes problemas 
em curso/estrutura.md:

[PROBLEMA 1]: [descrição] → [solução proposta]
[PROBLEMA 2]: [descrição] → [solução proposta]

Aplique essas correções no arquivo mantendo o formato. Se precisar adicionar 
ou remover aulas para resolver os problemas, faça e justifique a mudança.
```

---

## O Documento de Decisões

Após a revisão, crie um registro das principais decisões tomadas:

```
Crie um arquivo curso/decisoes-produto.md que documente:

1. POSICIONAMENTO FINAL (3 componentes do UPV)
2. RESULTADO PROMETIDO (exato, como aparecerá na copy)
3. MÉTODO PROPRIETÁRIO (nome + sequência de etapas)
4. DECISÕES ESTRUTURAIS (o que foi mudado e por quê durante a revisão)
5. PÚBLICO EXCLUÍDO (quem deliberadamente não é nosso cliente)
6. DIFERENCIAL CENTRAL (a 1 coisa que nenhum concorrente faz igual)

Este arquivo vai ser referência para a copy, para os anúncios e para 
qualquer material de marketing que viermos a criar.
```

Esse documento se torna o briefing de todas as etapas seguintes. Quando você criar a copy na Aula 5.1, vai carregar esse arquivo junto. Quando criar os anúncios na Aula 8.2, vai referenciar o diferencial central. Quando precisar responder perguntas de alunos potenciais, vai ter clareza imediata sobre o que o produto é e para quem é.

---

## Exercício Prático

1. Execute as 3 partes da sessão de consultoria com o Claude (Consistência Interna, Perspectiva do Aluno, Diferenciação)
2. Liste os problemas encontrados e classifique como Crítico, Importante ou Opcional
3. Corrija os problemas Críticos e Importantes em `curso/estrutura.md`
4. Execute a consultoria novamente nos trechos corrigidos para confirmar que os problemas foram resolvidos
5. Crie o arquivo `curso/decisoes-produto.md` com as 6 seções do prompt acima

Quando o `curso/decisoes-produto.md` estiver pronto e o `curso/estrutura.md` estiver limpo de problemas críticos, a fase de estratégia está completa. O Módulo 4 começa a produção de conteúdo em escala — e você vai entrar nele com uma fundação sólida.

---

## Dicas e Pontos de Atenção

> **Sobre receber críticas do Claude:** O Claude por padrão tende a ser equilibrado e a misturar críticas com elogios. Para uma revisão estratégica útil, peça explicitamente: "seja direto, aponte apenas os problemas, não precisa elogiar o que está certo." Isso dá outputs mais acionáveis para esse tipo de tarefa.

> **Ponto de atenção — o viés do criador:** Você criou essa estrutura. Naturalmente vai achar que está boa. O role-play do aluno é o exercício mais valioso desta aula exatamente porque força você a sair da perspectiva do criador e entrar na perspectiva de quem vai comprar sem saber nada do que você sabe. Leve as respostas a sério mesmo quando desconfortáveis.

> **O documento de decisões como proteção:** Ao longo de um projeto de infoproduto, você vai ter dezenas de ideias novas — um módulo a mais, um bônus diferente, uma abordagem alternativa de copy. O `curso/decisoes-produto.md` serve como âncora: antes de mudar qualquer coisa fundamental, verifique se a mudança conflita com alguma decisão estratégica já tomada. Esse documento evita a deriva que faz projetos ficarem inacabados.
