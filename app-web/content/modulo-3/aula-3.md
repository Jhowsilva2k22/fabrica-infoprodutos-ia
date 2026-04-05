# Aula 3.3 — Usando a Skill criar-estrutura-curso: De Tema Para 37 Aulas em 15 Minutos

## O Problema da Página em Branco

Antes de criar qualquer conteúdo, você precisa saber o quê criar. E a estrutura de um curso — os módulos, as aulas, a sequência que leva o aluno do ponto A ao ponto B — é a decisão mais estratégica de todo o processo.

Criar uma estrutura ruim desperdiça semanas de produção. Você cria 20 aulas e descobre que a ordem não faz sentido, que estão faltando fundamentos, que o aluno chegaria ao final sem saber como aplicar. Aí reformula tudo.

A maioria dos criadores passa 2-3 dias nessa etapa: stickies num Notion, reuniões consigo mesmo, listas intermináveis de tópicos que não se conectam. É uma das partes mais bloqueantes do processo.

A Skill `criar-estrutura-curso` resolve isso em 15 minutos.

---

## Como a Skill Usa Seu Contexto

A Skill `criar-estrutura-curso` não cria estruturas genéricas. Ela lê três fontes de contexto antes de gerar qualquer coisa:

**1. O CLAUDE.md do projeto** — o posicionamento, o público específico, o resultado prometido, o método proprietário. Com esses dados, a estrutura vai ser construída para levar exatamente aquele público específico ao resultado que você prometeu, usando a sequência que faz sentido para o seu método.

**2. O `curso/pesquisa-mercado.md`** — os dados de validação e o mapeamento de concorrentes. A Skill usa essa informação para identificar as lacunas que seus concorrentes não preenchem e garantir que sua estrutura as preencha.

**3. Boas práticas de design instrucional** — a Skill aplica a Taxonomia de Bloom adaptada para microlearning: começa por criar contexto e motivação, depois constrói fundamentos, depois aplica em prática progressiva, e termina com síntese e autonomia.

---

## Criando a Skill criar-estrutura-curso

Se você seguiu o exercício da Aula 2.5, a pasta `.claude/skills/criar-estrutura-curso/` já existe. Agora você vai criar o SKILL.md:

```
Crie o arquivo .claude/skills/criar-estrutura-curso/SKILL.md para uma skill 
que gera a estrutura completa do curso.

A skill deve:
1. Ler o CLAUDE.md para extrair: tema, público-alvo, resultado prometido, 
   método proprietário, posicionamento
2. Ler curso/pesquisa-mercado.md para entender lacunas dos concorrentes
3. Aplicar princípios de design instrucional (Taxonomia de Bloom adaptada 
   para microlearning) para criar a sequência de aprendizado
4. Gerar entre 6-9 módulos com 3-5 aulas cada, totalizando 28-40 aulas
5. Para cada módulo: título, objetivo de aprendizado, descrição em 1 frase
6. Para cada aula: título, o que o aluno vai aprender, o que vai conseguir 
   fazer ao final
7. Adicionar 1 módulo bônus com conteúdo que acelera os resultados
8. Salvar em curso/estrutura.md no formato markdown estruturado

Regras adicionais:
- A Aula 1.1 deve resolver o problema de motivação: mostrar o resultado 
  final antes de ensinar os fundamentos
- Cada módulo deve ter um resultado parcial visível (o aluno termina o 
  módulo com algo concreto criado ou aprendido)
- As últimas 2 aulas do curso devem ser sobre publicação/distribuição/venda
- Evitar jargão técnico nos títulos das aulas — títulos devem ser benefícios, 
  não tópicos
```

Após criar o SKILL.md, revise o arquivo e ajuste qualquer instrução que não reflita o formato específico do seu curso.

---

## Executando a Skill

Com o CLAUDE.md preenchido e o posicionamento atualizado (Aula 3.2 concluída), execute:

```
/criar-estrutura-curso
```

O Claude vai:

1. Ler o CLAUDE.md para entender o contexto completo do projeto
2. Ler `curso/pesquisa-mercado.md` para usar os dados de validação
3. Aplicar o design instrucional para criar a sequência de aprendizado
4. Gerar entre 28-40 aulas organizadas em módulos
5. Salvar automaticamente em `curso/estrutura.md`

O processo leva em torno de 3-7 minutos dependendo da complexidade do tema. Não interrompa — o Claude está pensando a estrutura inteira antes de escrever.

---

## Como Revisar a Estrutura Gerada

Quando a Skill terminar, você terá um `curso/estrutura.md` com a estrutura completa. A revisão segue um checklist específico:

### Checklist de Revisão Estratégica

**Fluxo de aprendizado:**
- [ ] A Aula 1.1 cria expectativa e mostra o resultado final?
- [ ] Os fundamentos vêm antes das aplicações?
- [ ] Cada módulo termina com algo concreto que o aluno produziu?
- [ ] A aula final leva o aluno à publicação/venda/aplicação do resultado?

**Alinhamento com o posicionamento:**
- [ ] O resultado prometido na copy é alcançável com essa estrutura?
- [ ] O público específico consegue seguir essa sequência sem se perder?
- [ ] O método proprietário está visível na estrutura (os módulos seguem a sequência do método)?

**Lacunas do mercado:**
- [ ] A estrutura cobre pelo menos uma das lacunas identificadas nos concorrentes?
- [ ] Existe alguma aula que nenhum concorrente tem e que entrega valor único?

**Viabilidade:**
- [ ] O total de aulas é realizável no seu cronograma de produção?
- [ ] Algum módulo está pesado demais (mais de 6 aulas)? Se sim, divida.
- [ ] Algum módulo está raso demais (1-2 aulas)? Se sim, expanda ou mescle.

---

## Refinando com o Claude

Após a revisão, você vai ter uma lista de ajustes. Em vez de recriar a estrutura do zero, use o Claude para refinar cirurgicamente:

```
Revisei a estrutura em curso/estrutura.md e tenho os seguintes ajustes:

1. [AJUSTE 1] — por exemplo: "A Aula 3.2 está genérica — renomeie para 
   algo mais específico que mostre o benefício direto"
2. [AJUSTE 2] — por exemplo: "Adicione uma aula no Módulo 4 sobre [TÓPICO 
   ESPECÍFICO] que identifiquei como lacuna dos concorrentes"
3. [AJUSTE 3] — por exemplo: "Módulo 6 está com 7 aulas — separe em dois 
   módulos: um sobre X e outro sobre Y"

Aplique esses ajustes em curso/estrutura.md mantendo o formato atual.
```

---

## Quantas Aulas é a Quantidade Certa?

Essa é uma das perguntas mais comuns. A resposta em 2026, com os dados de microlearning:

| Tipo de Curso | Aulas | Preço Médio | Taxa de Conclusão |
|---------------|-------|-------------|-------------------|
| Mini-curso | 8-15 aulas | R$47-97 | 78% |
| Curso completo | 25-40 aulas | R$197-497 | 52% |
| Mentoria gravada | 40+ aulas | R$497-997 | 31% |

**Recomendação para primeiro curso:** 25-35 aulas. Volume suficiente para justificar preço entre R$97-297, ainda gerenciável para produzir e para o aluno terminar.

O microlearning (aulas de 5-15 minutos cada) aumenta a taxa de conclusão em 20% comparado a aulas de 30+ minutos. Isso significa que um curso de 30 aulas curtas performa melhor do que um de 15 aulas longas — tanto em conclusão quanto em avaliações positivas.

A Skill `gerar-conteudo-completo` vai produzir aulas de 800-1200 palavras — ideal para vídeos de 8-12 minutos ou texto de leitura de 5-8 minutos.

---

## Exercício Prático

1. Crie o SKILL.md da `criar-estrutura-curso` usando o prompt desta aula
2. Confirme que o CLAUDE.md tem o posicionamento completo preenchido (da Aula 3.2)
3. Execute `/criar-estrutura-curso` e aguarde completar
4. Revise com o checklist de 10 pontos
5. Liste os ajustes necessários e aplique com o Claude
6. Verifique o `curso/estrutura.md` final: você deve ter entre 28-40 aulas bem sequenciadas
7. Compartilhe a estrutura com alguém do seu público-alvo (amigo, seguidor) e pergunte: "Você compraria um curso com essa estrutura?" — a reação vai validar ou apontar gaps

Essa estrutura vai ser o mapa para toda a produção de conteúdo que começa na Aula 4.1.

---

## Dicas e Pontos de Atenção

> **Por que revisar em vez de confiar cegamente:** A Skill cria uma estrutura excelente como ponto de partida, mas você conhece nuances do seu público que não estão no CLAUDE.md. Talvez exista uma objeção específica do seu mercado que precisa de uma aula dedicada. Talvez um tópico que parece simples seja o maior bloqueio na prática. A revisão humana é o que transforma uma boa estrutura em uma estrutura que vende — porque reflete sua experiência real com o público.

> **Ponto de atenção — títulos de aulas como copy:** Os títulos das aulas aparecem na página de vendas como "conteúdo do curso" — e são um fator de conversão importante. Títulos no formato "Como [fazer X] sem [obstáculo]" ou "[Resultado] em [tempo/passos]" convertem mais do que títulos descritivos de tópicos. Peça ao Claude para revisar especificamente os títulos com esse critério após a estrutura estar aprovada.

> **Atalho — usar a estrutura deste curso como referência:** Se você está com dificuldade em visualizar como uma estrutura bem feita parece, estude a estrutura deste próprio curso (o `curso/estrutura.md` do projeto Fábrica de Infoprodutos). Cada módulo termina com um resultado concreto, os títulos são benefícios, a sequência vai de contexto → fundamentos → prática → publicação → escala. Use como referência, não como template a copiar.
