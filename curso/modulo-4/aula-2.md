# Aula 4.2 — Gerando Módulo por Módulo com Background Agents: 37 Aulas em Paralelo

## O Gargalo da Produção Sequencial

Se você gerar as aulas uma por uma — espera o Claude terminar a Aula 1.1, revisa, pede a 1.2, espera, revisa — um curso de 37 aulas vai levar dias só de geração, sem contar a revisão.

Mas não é só o tempo. É o limite cognitivo: cada sessão de trabalho você começa do zero com a energia em alta e termina com fadiga de revisão. Depois de 5 aulas num dia, o padrão de qualidade começa a cair porque você está cansado de revisar.

Os Background Agents resolvem ambos os problemas.

---

## Background Agents: O Que São e Como Funcionam

No Claude Code v2.1.92, um Background Agent é uma instância separada do Claude que roda em paralelo com a sessão principal, num Git Worktree isolado.

Git Worktree é uma função do Git que cria uma cópia de trabalho do repositório em outra pasta, sem duplicar o histórico. Cada Background Agent recebe seu próprio Worktree — ele pode criar e modificar arquivos sem interferir no que você está fazendo na sessão principal, e sem interferir nos outros agents rodando em paralelo.

Na prática: você inicia 5 Background Agents para gerar as 5 aulas de um módulo. Todos rodam ao mesmo tempo. Em 10-15 minutos, as 5 aulas estão geradas. Você revisa todas de uma vez, faz os ajustes e parte para o próximo módulo.

**O que você consegue em paralelo:**
- Até 10 Background Agents simultâneos por sessão no plano Pro
- Cada agent tem acesso completo ao sistema de arquivos do projeto (via Worktree)
- Cada agent lê o CLAUDE.md e a estrutura do curso independentemente
- Os resultados são integrados ao branch principal quando o agent termina

---

## Iniciando Background Agents Para Produção de Módulo

O fluxo para gerar um módulo inteiro em paralelo:

### Passo 1: Prepare a Sessão

Abra o Claude Code na raiz do projeto e confirme que:
- O CLAUDE.md está atualizado com o posicionamento
- O `curso/estrutura.md` tem as aulas do módulo que você vai gerar
- A Skill `gerar-conteudo-completo` está criada e testada

### Passo 2: Inicie os Agents em Paralelo

Para um módulo com 4 aulas, execute:

```
Preciso gerar as 4 aulas do Módulo [X] em paralelo usando Background Agents.

Para cada aula abaixo, inicie um Background Agent separado que vai executar 
a skill gerar-conteudo-completo:

- Background Agent 1: gerar aula [X.1] — [TÍTULO DA AULA 1]
- Background Agent 2: gerar aula [X.2] — [TÍTULO DA AULA 2]
- Background Agent 3: gerar aula [X.3] — [TÍTULO DA AULA 3]
- Background Agent 4: gerar aula [X.4] — [TÍTULO DA AULA 4]

Cada agent deve:
1. Ler o CLAUDE.md e o curso/estrutura.md
2. Identificar o que a aula precisa cobrir com base na estrutura
3. Executar o prompt de geração com a estrutura obrigatória (gancho, conceito, 
   demonstração, aplicação imediata, exercício, dicas)
4. Salvar o resultado em curso/modulo-[X]/aula-[N].md
5. Reportar quando concluir

Inicie todos os 4 agents agora.
```

### Passo 3: Monitore e Aguarde

O Claude vai confirmar que os agents foram iniciados e mostrar seus IDs. Você pode fechar o terminal e voltar em 15-20 minutos, ou continuar trabalhando em outra tarefa (revisar aulas de módulos anteriores, por exemplo).

Para verificar o status:
```
Liste o status dos Background Agents em execução.
```

### Passo 4: Integre os Resultados

Quando todos os agents terminarem, o Claude vai notificá-lo. Execute:
```
Os Background Agents terminaram. Integre os resultados dos Worktrees ao 
branch principal. Se houver conflito em algum arquivo, me avise antes de 
resolver automaticamente.
```

---

## Escalando Para o Curso Inteiro: A Estratégia de Lotes

Para um curso de 37 aulas, a estratégia de lotes divide o trabalho em sessões gerenciáveis:

| Sessão | Módulos | Aulas | Background Agents |
|--------|---------|-------|-------------------|
| Dia 1 - manhã | Módulos 1-2 | 8 aulas | 8 agents (2 lotes) |
| Dia 1 - tarde | Módulos 3-4 | 8 aulas | 8 agents (2 lotes) |
| Dia 2 - manhã | Módulos 5-6 | 8 aulas | 8 agents (2 lotes) |
| Dia 2 - tarde | Módulos 7-8 | 8 aulas | 8 agents (2 lotes) |
| Dia 3 | Bônus + revisão | 5 aulas + ajustes | revisão manual |

Em 2,5 dias de trabalho (não contínuo — você pode fazer outras coisas enquanto os agents trabalham), você tem a primeira versão completa de todas as 37 aulas.

---

## Revisão em Lote: Eficiência Sem Perder Qualidade

Com todas as aulas de um módulo geradas, a revisão em lote é mais rápida do que revisar uma por vez porque você cria contexto sobre o módulo uma só vez.

```
Leia todas as aulas do Módulo [X] em sequência (aulas [X.1] a [X.4]).

Após ler todas, me dê:

1. CONSISTÊNCIA: As aulas progridem logicamente? Alguma usa conceito 
   que só aparece depois?

2. TOM: O tom é consistente ao longo do módulo? Alguma aula soa 
   diferente das outras?

3. REDUNDÂNCIA: Existe conteúdo repetido entre aulas que poderia ser 
   consolidado?

4. RESULTADO DO MÓDULO: Ao terminar a última aula, o aluno consegue 
   [RESULTADO ESPERADO DO MÓDULO conforme estrutura.md]? Se não, 
   o que está faltando?

5. LISTA DE AJUSTES: Para cada problema identificado, diga qual aula 
   precisa de mudança e o que específico deve mudar.
```

Essa revisão leva 5-10 minutos e gera uma lista de ajustes cirúrgicos — muito mais eficiente do que revisar aula por aula.

---

## Uso do /loop Para Produção Recorrente

O `/loop` (Tarefas Agendadas) do Claude Code v2.1.92 abre outra possibilidade de escala: executar a geração de aulas automaticamente em horários definidos, sem sua presença.

Cenário de uso: você configura uma tarefa recorrente para gerar 2 aulas por dia às 7h. Acorda com as aulas geradas e revisadas. Usa a manhã para fazer a revisão manual de 30 minutos. Repete.

Para configurar:
```
/loop criar tarefa diária

Tarefa: Gerar a próxima aula do curso que ainda não foi criada.
Horário: 07:00
Condição de parada: Quando todas as aulas em curso/estrutura.md estiverem 
criadas (verificar se o arquivo correspondente existe em curso/modulo-X/)
Instrução: 
1. Ler curso/estrutura.md para identificar qual é a próxima aula pendente
2. Executar /gerar-conteudo-completo [número da próxima aula pendente]
3. Após gerar, executar o teste de 5 perguntas e corrigir automaticamente 
   os problemas encontrados
4. Salvar o resultado e registrar em um arquivo curso/log-producao.md
```

O `/loop` suporta até 50 tarefas concorrentes por sessão e as tarefas expiram em 3 dias — suficiente para um curso completo.

---

## O Que Revisar Manualmente vs. Delegar Para o Claude

Não tudo pode ser delegado. Aqui está a divisão que funciona:

**Delegue para o Claude (automatize):**
- Geração inicial de todas as aulas
- Verificação de estrutura (todas as seções presentes?)
- Verificação de extensão (800-1200 palavras?)
- Verificação de sequência lógica dentro do módulo
- Correção de frases muito longas ou jargão técnico

**Revise manualmente (você precisa olhar):**
- Exemplos que usam situações do seu mercado específico
- Referências que podem estar desatualizadas
- Tom — o Claude às vezes escorrega para o acadêmico
- O gancho inicial — é a parte mais importante e a mais pessoal
- O exercício prático — precisa ser viável para o seu público específico

Uma revisão manual de qualidade leva 10-15 minutos por aula. Com 37 aulas, são 6-9 horas de revisão total. Distribuída em dias de trabalho, é gerenciável.

---

## Exercício Prático

1. Escolha o Módulo 2 do seu curso (não o 1 — guarde para depois que você dominar o fluxo)
2. Inicie Background Agents para gerar todas as aulas do módulo em paralelo
3. Enquanto os agents trabalham, revise manualmente a Aula 1.1 que você gerou na Aula 4.1
4. Quando os agents terminarem, aplique a revisão em lote do módulo 2
5. Faça os ajustes cirúrgicos e registre em `curso/log-producao.md`:
   - Quais ajustes foram necessários
   - Quanto tempo levou a geração + revisão
   - O que você vai adicionar ao SKILL.md para evitar esses ajustes no próximo módulo

Esse registro vai ser o seu sistema de melhoria contínua — cada módulo gerado melhora os seguintes.

---

## Dicas e Pontos de Atenção

> **Sobre instabilidade de agents:** Background Agents são uma feature robusta no Claude Code v2.1.92, mas em sessões muito longas ou com computador em modo de suspensão, um agent pode travar. Se isso acontecer, verifique quais arquivos foram criados e reinicie apenas os agents que falharam. Os arquivos já criados pelos agents bem-sucedidos não são afetados.

> **Ponto de atenção — Worktree e conflitos:** Quando dois agents tentam modificar o mesmo arquivo (raro, mas possível se a Skill salvar em um arquivo de log compartilhado), o Claude vai perguntar como resolver o conflito. A solução mais simples: configure a Skill para que cada agent salve apenas no arquivo de aula específico dele — nenhum arquivo de log compartilhado.

> **Dica de organização:** Crie o `curso/log-producao.md` antes de começar a geração em lote. Inclua uma linha para cada aula: status (pendente / gerada / revisada / aprovada) e data. Esse arquivo vai ser lido pelos Background Agents para saber qual é a próxima aula pendente quando você usar o `/loop`.
