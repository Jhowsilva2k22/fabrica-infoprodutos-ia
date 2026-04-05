# Aula 4.3 — Revisão Inteligente: Como o Claude Revisa o Próprio Conteúdo Que Gerou

## O Problema da Auto-Revisão

Quando você pede ao Claude para revisar um texto que ele mesmo gerou, existe um viés natural: o modelo tende a fazer revisões cosméticas — ajustar palavras aqui e ali, suavizar frases — sem questionar as decisões estruturais que tomou.

É o equivalente a pedir para um escritor revisar o próprio livro. Ele vê o que quis dizer, não o que escreveu. Passa pelos problemas reais sem perceber.

A revisão inteligente no Claude Code funciona diferente. Em vez de pedir uma revisão genérica, você cria condições para que o Claude assuma um papel genuinamente crítico — separado do papel de gerador — e use critérios específicos que o impedem de fazer revisão cosmética.

---

## Os Três Níveis de Revisão

### Nível 1: Revisão Técnica (automatize com checklist)

Verifica se a aula está tecnicamente correta: estrutura presente, extensão adequada, sem erros de referência, sem contradições com aulas anteriores.

```
Revise tecnicamente a aula em curso/modulo-[X]/aula-[Y].md.

Checklist técnico:
□ A aula tem gancho nos 2 primeiros parágrafos (não começa com "nesta aula")?
□ Existe pelo menos 1 exemplo com nome e número específico?
□ A aula tem micro-aplicação imediata (algo para fazer em 2 minutos)?
□ O exercício final tem exatamente 5 passos com instruções sem ambiguidade?
□ Tem 2-3 dicas em blocos de citação (>) ao final?
□ Extensão entre 800 e 1200 palavras?
□ Nenhuma frase usa as expressões proibidas do CLAUDE.md?
□ Não contradiz nenhum conceito de aulas anteriores?

Para cada item marcado como NÃO, corrija diretamente no arquivo 
e liste o que foi alterado.
```

Essa revisão pode ser executada como parte do Background Agent de geração — adicione ao SKILL.md como etapa automática após a geração.

### Nível 2: Revisão Didática (faça uma vez por módulo)

Verifica se o conteúdo realmente ensina — se o aluno consegue aplicar, não só entender.

```
Assuma o papel de um designer instrucional experiente em cursos online.
Leia a aula em curso/modulo-[X]/aula-[Y].md e avalie:

1. CLAREZA DE APRENDIZADO: Ao terminar a aula, o aluno sabe exatamente 
   o que precisa fazer a seguir? (Sim / Não — se Não, o que falta?)

2. CARGA COGNITIVA: A aula tenta ensinar coisas demais? O aluno médio 
   consegue absorver tudo sem sobrecarregar? (Escala 1-5, onde 5 é 
   muito pesado)

3. APLICABILIDADE IMEDIATA: Os exercícios são executáveis com as 
   ferramentas que o aluno tem neste ponto do curso? Ou exigem algo 
   que ele só vai ter em módulos posteriores?

4. EXEMPLOS: Os exemplos são do mundo real do público-alvo definido 
   no CLAUDE.md? Ou são genéricos demais?

5. RECOMENDAÇÕES: Liste 3 mudanças específicas que aumentariam o 
   valor didático desta aula.
```

### Nível 3: Revisão de Copy (faça para as aulas de módulo bônus e primeiras aulas)

As primeiras aulas e as do módulo bônus precisam de revisão de copy — porque são as que mais influenciam a percepção de valor. A Aula 1.1 determina se o aluno vai terminar o curso. O Bônus determina se ele vai recomendar.

```
Assuma o papel de um copywriter especializado em produtos educacionais.
Leia a aula em curso/modulo-[X]/aula-[Y].md.

Esta é a [primeira aula / aula bônus] do curso — precisa não só ensinar 
mas também encantar e criar expectativa para o que vem a seguir.

Avalie:
1. O gancho cria curiosidade ou urgência suficiente para continuar lendo?
2. O aluno termina com a sensação "aprendi muito" (percepção de valor)?
3. Existe uma frase ou parágrafo que o aluno vai querer compartilhar 
   ou citar? Se não, sugira um.
4. A aula planta a semente para o próximo conteúdo (cria curiosidade 
   para continuar)?

Reescreva o gancho e o parágrafo final com base nessa análise.
```

---

## Revisão Cruzada: O Truque Mais Subestimado

A técnica mais poderosa de revisão no Claude Code é usar um agent para revisar o trabalho de outro agent.

Quando o Background Agent A gera a aula, ele sabe o que quis dizer. Mas quando você pede ao Claude numa sessão nova (sem o histórico da geração) para revisar essa mesma aula, ele a analisa apenas pelo que está escrito — sem o contexto de intenção.

Para fazer isso com consistência:

```
Você não gerou o conteúdo que vou pedir para revisar. Leia o arquivo 
curso/modulo-[X]/aula-[Y].md como se fosse a primeira vez que vê esse texto.

Sem levar em conta nenhuma intenção ou contexto que não está explicitamente 
no texto, responda:

1. O que este texto está ensinando? (Resuma em 2 frases)
2. O que fica confuso ou pouco explicado?
3. Qual frase ou parágrafo você removeria sem perder nada essencial?
4. Qual conceito merece mais desenvolvimento do que recebeu?

Use apenas o que está escrito. Se algo depende de contexto externo 
para fazer sentido, sinalize.
```

---

## Construindo um Sistema de Revisão Escalável

Para um curso de 37 aulas, você precisa de um sistema que não dependa do seu tempo para cada aula. O sistema de 3 camadas:

**Camada 1 — Revisão Automática (sem você)**
Configure a Skill `gerar-conteudo-completo` para executar automaticamente o checklist técnico após gerar cada aula. Adicione ao final do SKILL.md:

```
Após gerar e salvar a aula, execute uma auto-revisão técnica:
Verifique os 8 itens do checklist técnico. Para cada item não atendido, 
corrija diretamente no arquivo. Ao final, adicione ao curso/log-producao.md:
"Aula [X.Y] gerada e revisada em [data]. Ajustes: [lista de ajustes feitos]"
```

**Camada 2 — Revisão em Lote Por Módulo (30 min por módulo)**
Após todos os agents de um módulo terminarem, execute a revisão didática do módulo inteiro de uma vez — uma única solicitação que cobre todas as aulas.

**Camada 3 — Revisão Manual Seletiva (você decide quais)**
Você revisa manualmente apenas:
- Todas as aulas da primeira semana do curso (Módulos 1-2)
- A primeira aula de cada módulo (a mais estratégica)
- O módulo bônus inteiro
- Qualquer aula onde o aluno vai precisar de suporte técnico complexo

Isso reduz sua revisão manual de 37 aulas para aproximadamente 15-18 aulas — com as demais cobertas pelas camadas 1 e 2.

---

## O Prompt de Refinamento Final

Após a revisão das três camadas, execute este prompt consolidado em cada aula antes de marcá-la como finalizada:

```
Leia a aula em curso/modulo-[X]/aula-[Y].md.

Faça os seguintes refinamentos pontuais:

1. Abra cada bloco de citação (>) — verifique se cada dica começa com 
   uma afirmação direta, não com "é importante que" ou similar

2. Leia os títulos das seções (H2 e H3) — cada título deve ser um 
   benefício ou ação, não um tópico. Se algum título é apenas um tópico, 
   reescreva como benefício.

3. Verifique os 5 passos do exercício final — cada passo deve ser uma 
   ação com verbo no imperativo. Se algum passo descreve o que acontece 
   em vez de o que fazer, reescreva.

4. Última frase da aula — deve criar expectativa para a próxima aula 
   ou motivar a aplicação imediata. Se for conclusão neutra, reescreva.

Faça apenas esses 4 tipos de mudança. Não altere o conteúdo substantivo.
```

---

## Exercício Prático

1. Pegue as aulas do Módulo 2 que você gerou na Aula 4.2
2. Execute a revisão técnica (Nível 1) em todas as aulas de uma vez com um único prompt em lote
3. Execute a revisão didática (Nível 2) no módulo inteiro
4. Para a Aula 2.1 (primeira aula do módulo), execute a revisão de copy (Nível 3)
5. Execute a revisão cruzada em 2 aulas (simule o contexto limpo — abra nova sessão do Claude)
6. Execute o refinamento final em todas as aulas do módulo
7. Atualize o `curso/log-producao.md` marcando as aulas do Módulo 2 como "revisadas"

Após esse processo, você deve ter confiança de que as aulas do Módulo 2 estão prontas para produção de vídeo ou publicação direta.

---

## Dicas e Pontos de Atenção

> **Sobre não revisar o que não precisa ser revisado:** É tentador revisar tudo. Mas revisão demais é tão problemática quanto revisão de menos — você acaba num loop de "melhorar" textos que já estão bons o suficiente. Defina um critério claro de "aprovado": se uma aula passa nos 8 itens do checklist técnico e nenhum dos itens de revisão didática pontua 4 ou 5 em carga cognitiva, está aprovada. Não revise além disso.

> **Ponto de atenção — consistência de voz:** Quando você gera aulas em dias diferentes ou com diferentes configurações de Skill, o tom pode variar sutilmente. Antes de fechar cada módulo, peça ao Claude para fazer uma verificação de consistência de voz: "Compare o tom das aulas [X.1] a [X.4] e me diga se alguma soa claramente diferente das outras." Se houver variação, aplique o prompt de refinamento para uniformizar.

> **A revisão como aprendizado:** Cada rodada de revisão vai revelar padrões — o Claude consistentemente faz o mesmo tipo de erro no mesmo tipo de situação. Documente esses padrões no SKILL.md como regras específicas. Depois de 2-3 módulos revisados, sua Skill vai gerar conteúdo cada vez mais próximo do aprovado na primeira versão.
