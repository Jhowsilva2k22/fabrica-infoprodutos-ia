# Aula 2.3 — CLAUDE.md: O Arquivo Que Transforma o Claude no Seu Funcionário Perfeito

## O Problema Que o CLAUDE.md Resolve

Imagine contratar um funcionário talentoso. No primeiro dia, você passa duas horas explicando como a empresa funciona, quem é o público, qual é o tom de comunicação, quais são as regras de estilo. Ele aprende tudo.

No segundo dia, ele acorda sem memória nenhuma do primeiro dia. Você repete as duas horas.

É exatamente isso que acontece quando você usa o Claude.ai ou o Claude Code **sem** um arquivo CLAUDE.md. Cada sessão começa do zero. Todo o contexto que você construiu na sessão anterior — o tom de voz, as regras de formatação, o perfil do público, a estrutura do curso — some quando a sessão fecha.

O **CLAUDE.md** é o arquivo que resolve isso definitivamente.

---

## O Que é o CLAUDE.md

O CLAUDE.md é um arquivo de texto em Markdown salvo na raiz do seu projeto (ou em subpastas para regras específicas). O Claude Code lê esse arquivo **automaticamente** no início de cada sessão, antes de qualquer instrução sua.

É o "manual do funcionário" que você escreve uma vez e o Claude segue para sempre, enquanto estiver trabalhando naquele projeto.

O que você coloca no CLAUDE.md:
- Contexto do projeto e objetivo
- Perfil detalhado do público-alvo
- Regras de tom de voz e estilo
- Formato esperado dos outputs
- Informações do produto (nome, preço, entrega)
- Regras de negócio específicas
- Referências e exemplos de copy aprovados

---

## Estrutura do CLAUDE.md Para Criadores de Infoprodutos

Aqui está o template completo que você vai adaptar para o seu projeto:

```markdown
# [Nome do Projeto] — Instruções para o Claude

## Contexto do Projeto
Este projeto é um infoproduto digital: [descreva seu curso em 2 frases].
Plataforma de venda: Kiwify.
Entrega: App Web em Next.js hospedado na Vercel + Ebook PDF bônus.
Preço de lançamento: R$97 (com âncora R$997 na copy).

## Público-Alvo
- **Quem são:** [descreva com detalhes — idade, profissão, nível]
- **Principal dor:** [o problema urgente que eles têm]
- **Principal desejo:** [o resultado que querem alcançar]
- **Nível de conhecimento técnico:** [iniciante / intermediário / avançado]
- **Canais que usam:** [Instagram, YouTube, etc.]
- **Objeção principal:** [por que ainda não resolveram o problema]

## Tom de Voz
- Direto e sem rodeios — vai direto ao ponto
- Linguagem de conversa entre amigos, não de professor universitário
- Sem jargão técnico desnecessário — quando usar termo técnico, explique
- Use "você" (não "vocês")
- Exemplos sempre com números reais ou situações concretas
- Motivador mas realista — sem promessas vazias

## Regras de Formatação
- Aulas: mínimo 800 palavras, máximo 1200 palavras
- Sempre incluir: introdução com problema/gancho, desenvolvimento com 3 conceitos, exercício prático, dicas ao final
- Usar H2 para seções principais, H3 para subseções
- Listas quando tiver 3+ itens do mesmo tipo
- Blocos de citação (>) para dicas e pontos de atenção ao final
- Copy: agressiva, com gatilhos mentais, ancoragem de preço, urgência real

## Sobre o Produto
**Nome do produto:** [título do curso]
**Tagline:** [frase de 10 palavras que resume a transformação]
**Módulos:** [número] módulos, [número] aulas
**Bônus:** Ebook PDF "[título do ebook]"
**Garantia:** 7 dias incondicional

## Regras Importantes
- SEMPRE escrever em português do Brasil
- NUNCA mencionar concorrentes pelo nome na copy
- SEMPRE terminar aulas com exercício prático concreto
- NUNCA usar frases como "é muito importante que" ou "vale ressaltar"
- Ao gerar código HTML/CSS: dark theme, mobile-first, zero dependências externas
- Ao gerar Next.js: usar App Router, TypeScript, Tailwind CSS
```

---

## Criando o CLAUDE.md do Seu Projeto

Abra o Claude Code na pasta do seu projeto e execute:

```
Crie um arquivo CLAUDE.md na raiz deste projeto com a estrutura de instruções 
para um projeto de infoproduto. Inclua seções para: contexto do projeto, 
público-alvo, tom de voz, regras de formatação, informações do produto e 
regras importantes. Deixe placeholders claros para eu preencher com os 
dados do meu produto específico.
```

O Claude vai gerar o arquivo. Depois, você preenche os placeholders com os dados reais do seu produto.

**Exemplo de preenchimento para um curso de fotografia:**

```markdown
## Contexto do Projeto
Este projeto é um curso sobre fotografia com smartphone para Instagram.
Plataforma de venda: Kiwify.
Entrega: App Web em Next.js hospedado na Vercel + Ebook "50 Composições Para Fotos Profissionais com Celular".
Preço de lançamento: R$97 (com âncora R$497 na copy).

## Público-Alvo
- **Quem são:** Empreendedoras digitais, 25-40 anos, que vendem produtos físicos
  ou serviços pelo Instagram mas têm fotos amadoras que diminuem a percepção de valor
- **Principal dor:** Fotos feitas com celular parecem amadorísticas e afastam clientes
- **Principal desejo:** Ter fotos que parecem de fotógrafo profissional sem contratar um
- **Nível técnico:** Zero — nunca estudou fotografia formal
- **Canais:** Instagram (principal), TikTok (secundário)
- **Objeção principal:** "Meu celular não é bom o suficiente" (objeção técnica falsa)
```

---

## A Auto-Memória do Claude Code v2.1.92

O CLAUDE.md é o que você escreve conscientemente. Mas o Claude Code v2.1.92 também tem um sistema de **auto-memória**: ele aprende e salva aprendizados automaticamente entre sessões.

Na prática, isso funciona assim: quando você pede ao Claude "crie as aulas usando markdown com cabeçalhos H2" várias vezes, em algum momento o Claude pode notar o padrão e salvar isso como uma preferência — de forma que você não precise pedir mais. O sistema é transparente: o Claude avisa quando está salvando algo na memória e você pode revisar e editar.

Para criadores de infoprodutos, isso significa que ao longo do projeto o Claude vai ficando cada vez mais afinado com o seu estilo e processo — sem você precisar escrever mais nada no CLAUDE.md.

---

## CLAUDE.md Hierárquico: Regras Globais e Regras de Módulo

O Claude Code suporta CLAUDE.md em múltiplos níveis:

```
/projeto
  CLAUDE.md           ← regras globais do projeto
  /curso
    CLAUDE.md         ← regras específicas para conteúdo do curso
  /pagina-vendas
    CLAUDE.md         ← regras específicas para copy
```

O Claude lê todos os arquivos CLAUDE.md relevantes para a pasta onde está trabalhando. Isso é útil quando a copy precisa de regras diferentes das aulas — mais urgência, mais gatilhos, linguagem diferente.

Para este curso, você vai criar apenas o CLAUDE.md raiz. À medida que o projeto cresce e você percebe padrões específicos por seção, pode adicionar CLAUDE.md nas subpastas.

---

## Exercício Prático

Crie o CLAUDE.md do seu projeto hoje:

1. Abra o Claude Code na pasta do projeto
2. Cole o template desta aula e peça ao Claude para gerar o arquivo com placeholders
3. Preencha o campo "Público-Alvo" com o máximo de detalhe possível (esse é o campo mais importante)
4. Preencha "Tom de Voz" com 3-5 regras que definem como você escreve (ou como quer que seu conteúdo soe)
5. Preencha "Contexto do Projeto" com as informações do seu produto
6. Teste: feche o Claude Code, reabra e peça "Quem é o público deste projeto?" — o Claude deve responder corretamente sem você precisar explicar nada

Se o Claude responder corretamente na etapa 6, seu CLAUDE.md está funcionando.

---

## Dicas e Pontos de Atenção

> **O campo mais importante:** "Público-Alvo" é onde a maioria das pessoas é vaga demais. "Empreendedores digitais" não é suficiente. "Empreendedoras digitais brasileiras, 28-42 anos, que vendem serviços de design pelo Instagram, têm entre 5.000-50.000 seguidores, já faturaram algo mas travam em escalar porque não têm sistema de produção de conteúdo" — isso é suficiente. Quanto mais específico, mais personalizado cada output vai ser.

> **Ponto de atenção:** O CLAUDE.md não substitui instruções específicas — ele é o contexto de fundo. Se você quiser uma aula no estilo de um professor específico, você ainda precisa pedir isso na instrução da tarefa. O CLAUDE.md garante que as regras que nunca mudam (idioma, tom base, formato padrão, público) não precisam ser repetidas. Regras que variam por tarefa continuam na instrução.

> **Revisão periódica:** O CLAUDE.md não é estático. À medida que você produz conteúdo e percebe que está sempre corrigindo o mesmo tipo de coisa, adicione uma regra no CLAUDE.md. Se você revisa aulas e sempre trocas "é importante" por algo mais direto, adicione "NUNCA use a expressão 'é importante'" no CLAUDE.md e nunca mais precise fazer essa troca manualmente.
