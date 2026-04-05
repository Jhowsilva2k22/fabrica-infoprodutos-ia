# Aula 8.2 — Usando a Skill gerar-criativos-ads: 5 Variações de Anúncio em Minutos

## Por Que Criativo É o Fator Que Mais Importa

Em 2026, o consenso entre os maiores anunciantes do Meta é o seguinte: o algoritmo (Andromeda) resolve a distribuição, mas o criativo determina o resultado. Você pode ter a segmentação perfeita e o produto certo — se o anúncio não parar o scroll em 1-2 segundos, nada acontece.

**O que define um bom criativo para infoprodutos:**

1. **O gancho** (primeiros 3 segundos de vídeo ou primeira linha de texto): precisa fazer o usuário identificar que o anúncio é para ele
2. **A promessa**: específica, crível, verificável — não "transforme sua vida", mas "crie seu primeiro infoproduto em 7 dias"
3. **A prova**: resultado real de alguém parecido com o comprador
4. **O CTA**: claro e direto — "Saiba mais" para topo de funil, "Comprar agora" para retargeting

---

## Criando a Skill gerar-criativos-ads

```
Crie o arquivo .claude/skills/gerar-criativos-ads/SKILL.md:

---
name: gerar-criativos-ads
description: Gera 5 variações de anúncio para Meta Ads — copy para feed, stories e reels, 2 roteiros de vídeo — para o produto descrito no CLAUDE.md.
argument-hint: "[opcional] formato específico (feed/stories/reels) ou público específico"
user-invocable: true
---

# Skill: gerar-criativos-ads

Ao executar esta skill:

1. Leia CLAUDE.md — produto, público, promessa, método
2. Leia pagina-vendas/copy.md — headline, benefícios, objeções, garantia
3. Leia curso/pesquisa-mercado.md — linguagem real do público, dores específicas
4. Gere os criativos a seguir, salvando em ads/criativos.md:

## FORMATO 1: FEED (imagem/vídeo quadrado 1:1)
Gere 3 variações com ângulos diferentes:
- Variação A: Ângulo da DOR — começa com o problema que o público tem
- Variação B: Ângulo do RESULTADO — começa com o que a pessoa vai conseguir fazer
- Variação C: Ângulo da CURIOSIDADE — começa com algo surpreendente sobre o tema

Para cada variação:
TEXTO PRINCIPAL (máx 125 caracteres para preview sem truncar):
HEADLINE (máx 40 caracteres):
DESCRIÇÃO (máx 30 caracteres, aparece embaixo do botão):
CTA: [Saiba mais / Comprar agora / Baixar grátis]

## FORMATO 2: STORIES/REELS (vertical 9:16)
Stories tem comportamento diferente — as pessoas seguram o polegar para não passar.
Para stories, o texto é overlay sobre imagem ou vídeo.
Gere 2 variações:
- Stories A: Formato "Antes e Depois" — 5 frames com texto
- Stories B: Formato "Tutorial Rápido" — 5 frames com micro-ensino + CTA

Para cada frame de cada stories:
FRAME X: [Visual sugerido] + [Texto overlay]

## FORMATO 3: ROTEIROS DE VÍDEO
Gere 2 roteiros completos:

Roteiro A — Vídeo de 30 segundos (formato de depoimento/resultado):
- Segundos 0-3: gancho visual/verbal para parar o scroll
- Segundos 3-8: identificação do problema (quem é você/o problema que resolve)
- Segundos 8-20: a solução e o que você vai aprender
- Segundos 20-28: prova (resultado específico)
- Segundos 28-30: CTA verbal e na tela

Roteiro B — Vídeo de 60 segundos (formato educativo):
- Segundos 0-3: pergunta ou afirmação que gera curiosidade
- Segundos 3-15: ensine algo genuinamente útil do produto
- Segundos 15-40: contextualize o que foi ensinado no produto
- Segundos 40-55: prova social ou resultado
- Segundos 55-60: CTA

## ANÁLISE DE CADA CRIATIVO
Para cada peça gerada, avalie:
- Nível de especificidade (1-5): quanto é específico para o público do CLAUDE.md?
- Probabilidade de parar o scroll (1-5): baseado em convenções do mercado
- Conformidade com política do Meta (Sim/Atenção/Risco): flags para claims problemáticos

Salve todos os criativos em ads/criativos.md
```

---

## Executando a Skill

```
/gerar-criativos-ads
```

Após gerar, você vai ter um arquivo `ads/criativos.md` com todos os formatos. O próximo passo é produzir os criativos visuais — imagens ou vídeos — usando os textos gerados.

---

## Produzindo os Visuais Com IA

Para a imagem dos anúncios de feed, você tem 3 opções em 2026:

**Opção 1: Meta AI Image-to-Video (dentro do Gerenciador)**
O GEM da Meta pode gerar variações de imagem e vídeo curto a partir de uma imagem base. Você sobe uma imagem estática e o GEM cria movimentos, zoom, ou versões animadas. Funciona dentro do próprio Gerenciador de Anúncios — sem precisar de software externo.

**Opção 2: Canva (com Magic Media)**
Gera imagens para anúncios usando prompts de texto, já formatadas para as dimensões do Meta Ads.

**Opção 3: Apareça você mesmo (mais eficaz)**
Para infoprodutos, anúncios onde o criador aparece — gravando no celular, falando diretamente para a câmera — convertem melhor do que criativos com IA. A conexão pessoal é o diferencial que o conteúdo gerado por IA não replica.

```
Com base nos roteiros em ads/criativos.md, gere o prompt técnico para 
criar as imagens dos anúncios de feed:

Para cada imagem:
1. Prompt para geração no Canva Magic Media (em português)
2. Especificações: dimensão (1080×1080px), paleta de cores (#0f0f0f, #f0f0f0, #6366f1)
3. Elementos obrigatórios: [título do produto], [promessa principal], [CTA visual]
4. Elementos a evitar: rostos gerados por IA (política do Meta)

Para o vídeo selfie (Roteiro A):
1. Lista de materiais: iluminação, enquadramento, fundo recomendado
2. Checklist de gravação: o que falar em cada segundo
3. Como fazer o corte básico no CapCut (legendas automáticas, música, corte nos silêncios)
```

---

## O GEM do Meta: Variações Automáticas

O GEM (Generative Ads Model) do Meta gera automaticamente variações de texto e imagem a partir do seu anúncio original. Em 2026, funciona assim:

1. Você sobe 1 anúncio com texto e imagem
2. No Gerenciador, ative **"Criação Dinâmica"** ou **"Advantage+ Creative"**
3. O GEM gera 4-8 variações de headline e texto
4. O Andromeda testa cada variação e direciona impressões para as que convertem melhor

Isso significa que você precisa criar **menos** criativos manualmente — mas os que você criar precisam ser bons, porque o GEM vai gerar variações baseado na qualidade do original.

**Como usar:**
1. No nível de anúncio, ative **"Advantage+ Creative"**
2. Suba a imagem ou vídeo
3. Insira o texto principal, headline e descrição
4. Marque quais elementos podem ser variados pelo GEM:
   - Texto da imagem (pode gerar variações do texto overlay)
   - Headline (pode testar diferentes versões)
   - Recorte de vídeo (pode testar diferentes aberturas)

```
Revise os criativos em ads/criativos.md para otimização com o GEM do Meta.

Para cada criativo:
1. Identifique qual elemento tem mais variações possíveis (headline, texto, hook)
2. Gere 3 alternativas para esse elemento (o GEM vai testar estas vs. a original)
3. Marque quais elementos são "fixos" (não variar: nome do produto, preço)
4. Quais elementos "liberar para variação" ao ativar Advantage+ Creative

Formato: tabela com elemento, versão original, alternativa A, alternativa B, alternativa C.

Salve como ads/criativos-gem-variacoes.md
```

---

## Criativos Para Retargeting: Uma Linguagem Diferente

Os criativos de retargeting falam para pessoas que já viram sua landing page. Elas já sabem o que é o produto — o anúncio não precisa apresentar. Precisa remover o que impediu a compra.

As 3 objeções mais comuns para infoprodutos de R$97-297:
1. "Será que funciona para mim especificamente?"
2. "E se eu não tiver tempo para fazer?"
3. "É muito caro agora, vejo depois"

```
Gere criativos de retargeting específicos para cada objeção.

Use os dados de curso/pesquisa-mercado.md para identificar as objeções 
reais do público-alvo do CLAUDE.md.

Para cada objeção, crie:
1. Criativo de feed (imagem) — texto que aborda a objeção diretamente
2. Stories (2 frames) — a objeção e a resposta

Tom: honesto e direto. Não ignore a objeção — confirme que é válida e depois dissolva.
Exemplo (objeção de tempo): "Se você tem 30 minutos por dia, tem tempo para isso."

Salve em ads/retargeting-criativos.md
```

---

## Subindo os Anúncios no Gerenciador

Com os criativos prontos, você vai para o Meta Ads Manager:

```
Gere o guia passo a passo para subir os primeiros anúncios no Meta Ads Manager.

Contexto:
- Nunca usei o Meta Ads Manager antes
- Tenho: conta no Meta Business Suite, Pixel ID configurado, criativos em ads/criativos.md
- Objetivo: 2 conjuntos de anúncios (topo de funil Advantage+ e retargeting)
- Orçamento inicial: R$[VALOR]/dia

O guia deve cobrir:
1. Criar a campanha (objetivo: Vendas, orçamento CBO)
2. Criar o Conjunto 1 (Advantage+ Audience, configurações de posicionamento)
3. Criar o Conjunto 2 (Retargeting 14 dias, configurações específicas)
4. Subir os anúncios (imagem + texto + headline + URL de destino)
5. Ativar Advantage+ Creative no Conjunto 1
6. Publicar e o que esperar nas primeiras 24 horas

Para cada passo: nome exato do botão/menu na interface do Meta (abril 2026).
```

---

## Exercício Prático

1. Execute `/gerar-criativos-ads`
2. Revise o arquivo `ads/criativos.md` e ajuste os textos que não soam natural na sua voz
3. Grave o vídeo do Roteiro A (30 segundos) com o celular — use o checklist de gravação
4. Crie as imagens de feed no Canva com os prompts gerados
5. Gere as variações para o GEM com o prompt de otimização
6. Crie os criativos de retargeting
7. Suba os anúncios no Gerenciador seguindo o guia passo a passo
8. Defina um alarme para revisar os resultados em 48 horas

Os primeiros 48-72 horas são de aprendizado do algoritmo — resultados instáveis são normais.

---

## Dicas e Pontos de Atenção

> **Sobre aparecer no vídeo:** Se você tem hesitação em aparecer no vídeo, o resultado financeiro vai diminuir sua hesitação rapidamente. Anúncios com o criador falando diretamente para a câmera convertem em média 40-80% melhor do que criativos com IA ou stock images para infoprodutos pessoais. Não precisa de estúdio — um celular, luz natural pela janela, e fundo arrumado já funciona. O Roteiro A foi projetado para ser gravável em 2-3 tentativas.

> **Ponto de atenção — aprovação dos anúncios:** O Meta revisa os anúncios antes de publicar. Criativos novos levam de 1 hora a 24 horas para aprovação. Se reprovado, o Meta informa o motivo no painel. Causas comuns: claims de renda específica, imagens "antes e depois" para produtos de saúde, texto em excesso na imagem. O Claude pode reescrever criativos reprovados dentro da política.

> **O princípio da criatividade sustentável:** Você vai precisar de novos criativos a cada 2-4 semanas quando os anúncios saturarem (a mesma pessoa vê o mesmo anúncio várias vezes e para de clicar — "ad fatigue"). Para manter a máquina rodando, agende uma sessão mensal de `/gerar-criativos-ads` com novos ângulos, novas histórias de alunos, novos ganchos. O sistema da fábrica torna isso uma tarefa de 20 minutos.
