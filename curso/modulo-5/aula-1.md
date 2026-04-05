# Aula 5.1 — Copy Que Vende: Os Elementos Que Fazem Alguém Clicar em Comprar

## A Diferença Entre Descrição e Copy

Quando você descreve seu curso, você fala sobre ele. Quando você escreve copy, você fala com quem vai comprar.

Descrição: "Um curso completo de fotografia com smartphone com 30 aulas divididas em 6 módulos cobrindo composição, luz, edição e publicação."

Copy: "Você sabia que 78% das fotos rejeitadas por marcas não são rejeitadas por qualidade técnica — mas por composição ruim? Em 3 horas, você vai aprender as 5 regras de composição que fotógrafos profissionais usam inconscientemente, mas que qualquer pessoa pode aprender com o celular que já tem."

A descrição informa. A copy cria desejo. A distinção é o que separa landing pages com 0.3% de conversão de landing pages com 4-8%.

---

## Os 7 Elementos de Copy Que Convertem

Uma landing page de infoproduto que converte precisa de 7 elementos em ordem específica. Cada elemento tem uma função psicológica que prepara o comprador para o próximo.

### Elemento 1: Headline (Você Só Tem 3 Segundos)

A headline é a única parte da copy que todo visitante vai ler. Todos os outros elementos são lidos pelos que ficaram depois da headline.

Fórmula que funciona:
**[Resultado específico] em [prazo ou condição] [sem/mesmo sem o obstáculo principal]**

Exemplos:
- "Crie seu primeiro curso digital em 7 dias usando IA — mesmo sem audiência prévia"
- "Fotos de produto que parecem de estúdio — sem fotógrafo, sem iluminação cara, só com o celular que você já tem"
- "De zero a primeiro cliente de coaching em 30 dias — mesmo sem certificação nem experiência formal"

A headline deve resolver o problema de "por que eu continuaria lendo" nos primeiros 3 segundos. Se não resolver, o visitante fecha a aba.

### Elemento 2: Lead (Por Que Isso Importa Para Você Agora)

Os 3-5 primeiros parágrafos após a headline. Função: criar identificação. O leitor precisa pensar "esse texto está falando de mim."

Técnica: descreva um problema ou situação que o seu público-alvo vive. Use a linguagem exata que encontrou na pesquisa de mercado da Aula 3.1 — as palavras que eles usam nos fóruns e grupos.

### Elemento 3: A Promessa (O Que Muda)

Uma afirmação clara do que o comprador vai ter/ser/fazer depois do curso. Não uma lista de módulos — uma transformação em 2-3 frases.

### Elemento 4: O Mecanismo (Por Que Vai Funcionar)

O que torna seu método diferente dos outros que o comprador já tentou. O Método Proprietário que você criou na Aula 3.2. A explicação de por que sua abordagem funciona quando outras não funcionaram.

### Elemento 5: Bullets de Benefício (A Lista Que Cria Desejo)

7-12 bullets em formato "você vai [benefício concreto]". Não "você vai aprender sobre X" — "você vai conseguir X em Y situação."

- "Você vai ter seu primeiro curso publicado na Kiwify com landing page funcionando em 7 dias"
- "Você vai usar Background Agents para produzir 5 aulas em paralelo enquanto faz outra coisa"
- "Você vai criar copy de vendas que converte sem ter experiência prévia em marketing"

### Elemento 6: Ancoragem e Preço (O Valor Percebido)

A ancoragem cria o preço de referência antes de revelar o preço real.

**Estrutura:**
1. Anchore no preço de alternativas (consultoria, mentoria, curso premium do segmento)
2. Revele que o produto entrega o mesmo resultado por uma fração
3. Mostre o preço com o risco eliminado pela garantia

### Elemento 7: Urgência + CTA (A Razão Para Agir Agora)

Uma razão legítima para não esperar. Não "oferta expirando em 10 minutos" sem justificativa — mas urgência real: vagas de suporte limitadas, preço de lançamento, acesso antecipado.

O botão de CTA não diz "Comprar" — diz o resultado: "Quero criar meu primeiro curso em 7 dias" ou "Acessar agora por R$97".

---

## O Prompt Para Gerar a Copy Completa

Com o `curso/decisoes-produto.md` criado na Aula 3.4 e o `curso/pesquisa-mercado.md` com os dados de validação, você tem tudo que o Claude precisa:

```
Você vai escrever a copy completa de vendas para o curso descrito no CLAUDE.md.

Antes de escrever, leia:
1. CLAUDE.md — posicionamento, público-alvo, método proprietário, resultado prometido
2. curso/decisoes-produto.md — diferencial central, público excluído
3. curso/pesquisa-mercado.md — a linguagem exata que o público usa, os problemas reais

Agora escreva a copy completa no formato abaixo. Seja específico com 
números reais quando disponíveis:

---
## HEADLINE
[3 opções de headline usando a fórmula: Resultado + Prazo/Condição + Sem Obstáculo]

## LEAD
[5 parágrafos que descrevem o problema com a linguagem do público]

## A PROMESSA
[Transformação em 3 frases]

## O MECANISMO
[Por que o [MÉTODO PROPRIETÁRIO] funciona quando outros não funcionam]

## BULLETS DE BENEFÍCIO
[10 bullets no formato "você vai [benefício concreto]"]

## O QUE VOCÊ RECEBE
[Lista do produto principal + bônus com valor percebido de cada item]

## ANCORAGEM E PREÇO
[Estrutura: alternativas caras → valor percebido → preço real → garantia]

## DEPOIMENTOS (PLACEHOLDERS)
[3 formatos de depoimento — você vai preencher com depoimentos reais após o lançamento]

## FAQ
[7 perguntas com as objeções mais comuns identificadas na pesquisa de mercado]

## URGÊNCIA E CTA
[Razão legítima + texto do botão CTA]

## P.S.
[1-2 parágrafos de fechamento para os que pularam tudo e foram direto ao final]
---

Salve em pagina-vendas/copy.md
```

---

## O Que Revisar na Copy Antes de Publicar

```
Leia a copy em pagina-vendas/copy.md e avalie:

1. HEADLINE: A melhor das 3 opções resolve o problema do visitante 
   em menos de 5 segundos? Qual das 3 é mais específica?

2. LEAD: Usa a linguagem exata do público (coletada na pesquisa de mercado)
   ou soa como publicidade corporativa?

3. BULLETS: Pelo menos 7 dos 10 bullets descrevem benefícios concretos 
   e verificáveis? Ou são vagos como "você vai entender melhor X"?

4. MECANISMO: A explicação do por que o método funciona é convincente 
   para alguém que já tentou outras soluções sem sucesso?

5. ANCORAGEM: O preço real parece razoável comparado às alternativas 
   mencionadas? A proporção é de pelo menos 5:1 (âncora:preço)?

6. URGÊNCIA: A urgência é legítima e específica? Ou parece marketing 
   genérico de contagem regressiva?

Para cada item problemático, reescreva diretamente na copy.
```

---

## A Hierarquia de Leitura

Visitantes não leem landing pages de cima para baixo. Eles escaneiam em F ou Z e decidem em 8 segundos se vão ler mais.

Dica para o Claude formatar a copy corretamente:

```
Revise pagina-vendas/copy.md com foco na hierarquia de leitura.

Um visitante que só escaneia vai ler: headline, subtítulo, bullets, preço, CTA.
Esse caminho de escaneamento deve ser suficiente para criar desejo mesmo 
sem ler o resto.

Verifique:
1. Os bullets sozinhos (sem o contexto antes deles) são suficientes 
   para criar desejo de compra?
2. A transição da headline para o preço (sem ler o meio) faz sentido?
3. O P.S. captura quem pulou tudo e foi direto ao final?

Ajuste o que for necessário.
```

---

## Exercício Prático

1. Confirme que o CLAUDE.md, `curso/decisoes-produto.md` e `curso/pesquisa-mercado.md` estão completos e atualizados
2. Execute a Skill `escrever-copy-vendas` (ou o prompt desta aula manualmente se a Skill ainda não estiver criada)
3. Revise com o checklist dos 7 elementos
4. Aplique o teste de hierarquia de leitura
5. Escolha a melhor headline das 3 opções — salve a razão da escolha no arquivo
6. Compartilhe a copy com alguém do seu público-alvo (não com um amigo de fora do público) e peça: "O que te impediria de comprar?" — as objeções reais que aparecerem devem ser respondidas no FAQ

A copy finalizada vai ser usada na próxima aula para gerar a landing page HTML.

---

## Dicas e Pontos de Atenção

> **Sobre validação antes do lançamento:** Antes de publicar a landing page com essa copy, teste os bullets de benefício como posts separados nas redes sociais. O bullet que gerar mais engajamento é a sua headline mais poderosa. O que gerar menos engajamento pode ser removido da landing page sem perda.

> **Ponto de atenção — depoimentos:** A copy tem placeholders para depoimentos porque você ainda não vai ter depoimentos reais no lançamento. Estratégia para resolver: ofereça acesso antecipado gratuito para 3-5 pessoas do seu público-alvo em troca de feedback honesto. Esses depoimentos preenchem os placeholders e são 100% legítimos — são de pessoas que usaram o produto.

> **Sobre promessas verificáveis:** A copy que você gerou faz promessas específicas sobre resultados. Verifique se essas promessas são alcançáveis pela maioria dos compradores que seguirem as instruções. Copy que promete demais gera alta taxa de reembolso — e taxa de reembolso alta na Kiwify afeta seu ranqueamento na plataforma.
