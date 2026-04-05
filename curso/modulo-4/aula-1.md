# Aula 4.1 — O Prompt Perfeito Para Conteúdo Didático: Ensinar de Um Jeito Que Vende

## A Diferença Entre Conteúdo Que Informa e Conteúdo Que Transforma

Existe um tipo de aula que informa. E existe um tipo de aula que transforma.

O conteúdo que informa entrega fatos, conceitos, teorias. O aluno aprende algo novo. Mas ao fechar a aba, não sabe o que fazer com aquela informação. A sensação é de "interessante" — não de "eu consigo fazer isso."

O conteúdo que transforma entrega o mesmo conhecimento, mas estruturado de um jeito que o aluno sabe exatamente o que fazer quando terminar a aula. A sensação é de "eu preciso aplicar isso agora."

A diferença entre os dois não está no conhecimento — está no prompt que gerou o conteúdo.

---

## Por Que a Maioria dos Cursos Gerados por IA São Conteúdo Informativo

Quando você pede ao Claude "escreva uma aula sobre [tema]" sem mais contexto, ele vai produzir conteúdo competente no formato enciclopédico: introdução, definição, exemplos, conclusão. É o padrão mais comum no dataset de treinamento.

Esse conteúdo parece bom na leitura. Mas não transforma — porque não foi estruturado para transformar. Ele foi estruturado para informar.

O prompt perfeito para conteúdo didático instrui o Claude a criar conteúdo no formato de transformação: começa com o problema concreto que o aluno tem, demonstra a solução com exemplo real, leva o aluno a aplicar antes de terminar a aula.

---

## A Anatomia de Uma Aula Que Transforma

Cada aula do seu curso deve seguir esta estrutura:

### 1. O Gancho (primeiros 2 parágrafos)
Começa com um problema concreto que o aluno reconhece como seu. Não com a definição do conceito que você vai ensinar. Não com "nesta aula você vai aprender X." Com a dor ou a frustração específica que esse conhecimento vai resolver.

**Exemplo fraco:** "Nesta aula você vai aprender sobre posicionamento de mercado."  
**Exemplo forte:** "Você criou um curso incrível. A estrutura está ótima, o conteúdo é sólido. Mas quando você olha para os outros cursos no mercado, eles parecem todos iguais ao seu — e você não sabe como se destacar sem baixar o preço."

### 2. O Conceito Central (sem jargão, com analogia)
Apresenta o conceito principal usando uma analogia do mundo físico antes de entrar no contexto específico do curso. Analogias reduzem a resistência cognitiva — o aluno entende o novo pelo que já conhece.

### 3. A Demonstração (exemplo com números reais)
Mostra o conceito funcionando num exemplo concreto, com números, nomes e situações específicas. Não com "imagine que alguém..." mas com "João, 34 anos, vende curso de Excel para contadores..."

### 4. A Aplicação Imediata (o aluno faz algo agora)
Antes do exercício formal, inclua um micro-passo que o aluno pode executar em 2 minutos enquanto ainda está lendo. Isso cria o primeiro resultado imediato — e resultado imediato cria engajamento.

### 5. Os Conceitos Complementares (construção progressiva)
Dois ou três conceitos adicionais que ampliam o conceito central, cada um com exemplo próprio.

### 6. O Exercício Prático (5 passos concretos)
O exercício de fechamento deve ser específico o suficiente para que o aluno não precise improvisar. Cinco passos numerados, com instrução clara em cada um.

### 7. As Dicas e Pontos de Atenção (blocos de citação)
Dois ou três insights que o aluno só vai entender depois de executar — mas que você está dando antes para economizar tempo e evitar os erros mais comuns.

---

## O Prompt Mestre Para Gerar Aulas

Este é o prompt que você vai usar na Skill `gerar-conteudo-completo`:

```
Você vai gerar a Aula [NÚMERO] do curso "[NOME DO CURSO]".

CONTEXTO:
- Leia o CLAUDE.md para entender o público, o tom e as regras de formatação
- Leia curso/estrutura.md para entender o que esta aula deve cobrir e como 
  se conecta com as aulas anteriores e seguintes
- Esta aula serve para um aluno que acabou de terminar a Aula [NÚMERO-1] 
  e sabe [O QUE FOI COBERTO ANTES]

ESTRUTURA OBRIGATÓRIA:
1. Gancho: começa com o problema concreto do aluno (2 parágrafos), 
   NÃO com "nesta aula você vai aprender"
2. Conceito central com analogia do mundo físico
3. Demonstração com exemplo real (nome, números, situação específica)
4. Micro-aplicação imediata (algo que o aluno faz em 2 minutos agora)
5. 2-3 conceitos complementares com exemplos próprios
6. Exercício prático com 5 passos numerados e instruções específicas
7. 2-3 dicas/pontos de atenção em blocos de citação (>)

REGRAS DE TOM:
- Linguagem de conversa entre profissionais, não de professor universitário
- Exemplos sempre com números reais e situações concretas
- Frases curtas — máximo 25 palavras por frase
- Sem "é importante ressaltar", "vale a pena mencionar", "como mencionado"
- O aluno deve terminar a aula sabendo EXATAMENTE o que fazer a seguir

EXTENSÃO: Entre 800 e 1200 palavras (conte as palavras do conteúdo gerado)

SALVAR: Salve automaticamente em curso/modulo-[X]/aula-[Y].md
```

Esse prompt está encapsulado na Skill `gerar-conteudo-completo` — você só precisa criá-lo uma vez no SKILL.md e depois o executa com `/gerar-conteudo-completo [número]`.

---

## Ajustes de Prompt Por Tipo de Aula

Nem todas as aulas são iguais. Alguns tipos de aula precisam de ajustes no prompt base:

### Aulas de Fundamento (as primeiras de cada módulo)
Adicione ao prompt:
```
Esta é a aula de fundamento do módulo. O aluno ainda não tem contexto 
sobre este tema. Explique o "por quê" antes do "como". Use mais analogias 
e menos instruções diretas nesta aula específica.
```

### Aulas de Prática Guiada (onde o aluno executa junto)
Adicione ao prompt:
```
Esta é uma aula de prática guiada — o aluno deve executar junto, 
passo a passo. Estruture o conteúdo como um tutorial numerado, 
não como explicação. Cada passo deve ser uma ação concreta, 
não um conceito.
```

### Aulas de Revisão e Síntese (última de cada módulo)
Adicione ao prompt:
```
Esta é a aula de fechamento do módulo. O objetivo é consolidar o que foi 
aprendido e conectar com o próximo módulo. Inclua: (1) resumo dos 3 
principais aprendizados do módulo, (2) o resultado que o aluno deve ter 
ao final deste módulo, (3) uma ponte explicando como o próximo módulo 
usa o que acabou de ser aprendido.
```

---

## Testando o Conteúdo Gerado

Após gerar cada aula, aplique o teste rápido de 5 perguntas:

```
Leia a aula em curso/modulo-[X]/aula-[Y].md e responda:

1. A primeira frase resolve se o aluno vai continuar lendo? (Sim/Não — se Não, reescreva)
2. Existe pelo menos 1 exemplo com número real e nome específico? (Sim/Não)
3. O aluno consegue fazer algo concreto em 2 minutos enquanto lê? (Sim/Não)
4. O exercício final tem 5 passos com instruções sem ambiguidade? (Sim/Não)
5. A aula termina com o aluno sabendo exatamente o que fazer antes da 
   próxima aula? (Sim/Não)

Para cada "Não", reescreva a parte correspondente.
```

---

## Exercício Prático

1. Leia a estrutura da Aula 1.1 do seu curso em `curso/estrutura.md`
2. Execute o Prompt Mestre acima para gerar a Aula 1.1 (manualmente, sem a Skill — isso vai te ensinar a calibrar o prompt)
3. Aplique o Teste de 5 Perguntas no resultado
4. Para cada "Não" no teste, reescreva a parte correspondente (você pode pedir ao Claude para reescrever)
5. Atualize o SKILL.md da `gerar-conteudo-completo` com os ajustes que você fez para tornar o prompt ainda mais específico para o seu projeto
6. Teste a Skill atualizada com `/gerar-conteudo-completo 1.2` — compare com a Aula 1.1 que você gerou manualmente

O objetivo é chegar ao ponto em que a Skill produz 90% do conteúdo pronto para uso, com apenas pequenos ajustes manuais. A próxima aula escala isso com Background Agents.

---

## Dicas e Pontos de Atenção

> **Sobre a extensão ideal:** 800-1200 palavras é a faixa ideal para aulas em texto. Menos de 800 tende a ser superficial — falta profundidade para criar confiança. Mais de 1200 começa a perder o aluno. Se o Claude consistentemente ultrapassa 1200 palavras, adicione no prompt: "Ao chegar em 1000 palavras, comece a fechar a aula." Se consistentemente fica abaixo de 800, adicione: "Cada conceito deve ter ao menos 3 parágrafos de desenvolvimento."

> **Ponto de atenção — exemplos genéricos:** O Claude tem tendência a criar exemplos com "João Silva" ou "Maria" sem história. Para exemplos que realmente conectam com o leitor, especifique no prompt o tipo de exemplo que você quer: "use exemplos de [TIPO DO SEU PÚBLICO-ALVO] com situações realistas, como 'uma artesã com 2.000 seguidores que vende sabonetes artesanais por R$25 a unidade'." Exemplos específicos criam identificação — exemplos genéricos criam distância.

> **Dica de produtividade:** Após encontrar a versão do Prompt Mestre que funciona para o seu curso, não mude mais. A consistência do prompt é o que garante que todas as 30+ aulas vão ter o mesmo nível de qualidade e o mesmo formato. Mudanças no meio da produção criam inconsistência que o aluno percebe mesmo sem conseguir nomear o que está diferente.
