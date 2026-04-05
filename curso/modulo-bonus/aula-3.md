# Aula Bônus 3 — Automação Avançada: /loop, Background Agents e Computer Use

## Além do Chat: O Claude Code Como Sistema Autônomo

Ao longo do curso, você usou o Claude Code de forma interativa: você escreve um prompt, o Claude executa, você revisa o resultado. Esse fluxo é poderoso — mas ainda requer que você esteja presente.

O Claude Code v2.1.92 tem um segundo modo de operação: **autônomo**. Você define um objetivo, e o Claude Code trabalha sem interrupção enquanto você faz outra coisa. Essa é a diferença entre usar uma ferramenta e ter um sistema.

Esta aula cobre as três funcionalidades que transformam o Claude Code de assistente em sistema de produção assíncrono.

---

## `/loop`: Tarefas Recorrentes Automatizadas

O `/loop` é o modo de execução repetitiva do Claude Code. Você define uma tarefa e o número de iterações — e o Claude executa em sequência sem pedir confirmação entre rodadas.

**Casos de uso para infoprodutos:**
- Gerar todas as aulas de um módulo em sequência automática
- Revisar e melhorar 10 criativos de anúncio em sequência
- Criar variações de email para teste A/B
- Processar 20 feedbacks de alunos e gerar melhorias de conteúdo

**Como usar:**

```
/loop [N]
[INSTRUÇÃO QUE SE REPETE]
```

**Exemplo concreto — gerar 8 aulas de um módulo:**

```
/loop 8

Gere a próxima aula do módulo 3 do produto descrito no CLAUDE.md.

Contexto acumulado:
- Aulas já geradas: [O loop mantém o contexto entre iterações]
- Estrutura do módulo: curso/modulo-3/estrutura.md
- Regras de estilo: CLAUDE.md seção "Tom e Voz"

Para cada aula:
1. Siga a estrutura: hook → conceito → demonstração → exercício → dicas
2. Salve em curso/modulo-3/aula-[N].md onde N é o número da iteração
3. Ao final de cada aula, registre em 1 linha o que foi coberto para o contexto da próxima iteração

Ao terminar as 8 aulas, gere um resumo de consistência entre elas.
```

**O limite de 50 iterações:**
O `/loop` suporta até 50 iterações em sequência por sessão. Para cursos com mais de 50 aulas, divida em múltiplas sessões de loop com contexto de retomada.

**Como criar contexto de retomada:**
```
Crie um arquivo de contexto de retomada para sessões de loop longas.

Ao final de cada rodada do /loop, atualize setup/loop-context.md com:
- Última aula gerada: [módulo]/[aula]
- Decisões tomadas que afetam as próximas aulas
- Termos ou conceitos que devem ser referenciados nas próximas aulas
- Qualquer inconsistência identificada que precisa ser corrigida

Isso garante que uma nova sessão de loop pode retomar de onde parou sem reprocessar o que já foi feito.
```

---

## Background Agents: Criação Paralela com Git Worktree

Background Agents executam tarefas de forma assíncrona — você inicia a tarefa, o agent trabalha em background enquanto você continua com outras coisas na sessão principal, e você é notificado quando termina.

Em Claude Code v2.1.92, Background Agents usam **Git Worktree** para isolamento: cada agent trabalha em uma cópia separada do repositório, sem conflitos com o trabalho principal.

**Como funciona o Git Worktree:**
```
Seu repositório principal (branch: main)
│
├── Worktree 1 (branch: agent/modulo-4) ← Background Agent 1
├── Worktree 2 (branch: agent/landing-page-v2) ← Background Agent 2
└── Worktree 3 (branch: agent/emails-lancamento) ← Background Agent 3
```

Cada branch é isolada. Quando o agent termina, você revisa e faz merge na main.

**Casos de uso para infoprodutos:**

```
# Iniciar 3 Background Agents em paralelo

Agent 1 — Conteúdo:
Gere o Módulo 5 completo (4 aulas) do produto do CLAUDE.md.
Branch: agent/modulo-5-conteudo
Salve cada aula em curso/modulo-5/aula-[N].md
Notifique quando todas as 4 aulas estiverem prontas.

Agent 2 — Copy:
Execute a skill /escrever-copy-vendas para o produto do CLAUDE.md.
Branch: agent/copy-vendas-v2
Esta é uma revisão da copy atual em pagina-vendas/copy.md — compare com a versão existente e destaque as 5 maiores melhorias.
Notifique quando a nova versão estiver pronta para revisão.

Agent 3 — Emails:
Execute a skill /gerar-emails-lancamento para o segundo lançamento do produto.
Branch: agent/emails-lancamento-2
O primeiro lançamento gerou estes dados: [DADOS DE ABERTURA E CLIQUE].
Use esses dados para melhorar os assuntos dos emails que tiveram abertura < 40%.
Notifique quando os 7 emails revisados estiverem prontos.
```

**O fluxo de revisão após os agents terminarem:**

```
Revise o trabalho dos Background Agents e decida o que mergear.

Agent 1 (Módulo 5) terminou. Avalie:
1. As 4 aulas estão com progressão didática coerente?
2. O tom e a voz estão alinhados com o CLAUDE.md?
3. Há repetições desnecessárias de conceitos já cobertos em outros módulos?

Se aprovado: git merge agent/modulo-5-conteudo → main
Se precisa ajustes: liste as aulas específicas que precisam de revisão e o que mudar.
```

**Limitações dos Background Agents:**
- Cada agent tem contexto separado — não compartilham informações entre si durante a execução
- Para tarefas interdependentes (agent B precisa do resultado do agent A), execute sequencialmente, não em paralelo
- O Worktree consome espaço em disco — após o merge, delete os worktrees orphaned

---

## Computer Use: Automação de Desktop em Preview

O Computer Use do Claude Code permite que o agent controle a interface gráfica do computador — cliques, preenchimento de formulários, capturas de tela, navegação em sites. Em abril de 2026, está em **preview experimental** e funciona de forma mais confiável em macOS e Linux do que em Windows.

**O que o Computer Use consegue fazer por infoprodutores:**

1. **Subir anúncios no Meta Ads Manager automaticamente**
   - Você gera os criativos com `/gerar-criativos-ads`
   - O Computer Use navega até o Gerenciador, cria a campanha, sobe as imagens e textos
   - Tempo economizado: 45-90 minutos por ciclo de criativos

2. **Extrair dados do Gerenciador para análise**
   - O Computer Use captura a tabela de métricas da semana
   - Você usa o prompt de análise da Aula 8.4 sem precisar copiar manualmente

3. **Atualizar a Kiwify quando o produto muda**
   - Nova garantia, novo preço, novo upsell — o Computer Use navega e atualiza os campos

**Como ativar (experimental):**

```
# No CLAUDE.md, adicione:
## Computer Use
Modo: preview
Permissões: browser_only (não controlar apps do sistema, apenas o navegador)
Confirmação: sempre pedir antes de clicar em botões de pagamento ou publicação
```

**Exemplo de uso com Meta Ads:**

```
[COMPUTER USE] Suba os criativos do arquivo ads/criativos.md no Meta Ads Manager.

Credenciais: use o perfil salvo no navegador (não insira senhas)
Conta: [NOME DA CONTA NO META BUSINESS]

Passos:
1. Navegue até business.facebook.com → Gerenciador de Anúncios
2. Abra a campanha "[NOME DA CAMPANHA]"
3. No Conjunto 1, clique em "+ Criar Anúncio"
4. Preencha:
   - Texto principal: [VARIAÇÃO A DO CRIATIVO DE FEED]
   - Headline: [HEADLINE A]
   - URL de destino: [URL DA LANDING PAGE]
5. Suba a imagem: ads/imagens/feed-variacao-a.png
6. Repita para Variações B e C
7. Antes de publicar: tire screenshot da prévia e aguarde confirmação

NÃO publique sem confirmação explícita.
```

**Limitações reais do Computer Use em 2026:**
- Falha em interfaces dinâmicas (popups inesperados, carregamentos lentos de SPA)
- Não funciona bem com autenticação 2FA que requer código manual
- Em Windows, o suporte ainda é limitado — prefira browser tasks a tasks que envolvam aplicativos nativos
- Sempre revise screenshots antes de confirmar ações irreversíveis (publicar, deletar, pagar)

```
Avalie quais tarefas do meu fluxo de trabalho atual podem ser automatizadas com Computer Use.

Meu fluxo atual inclui:
1. Subir criativos no Meta Ads Manager (semanal)
2. Exportar dados do Gerenciador para análise (segunda-feira)
3. Atualizar informações do produto na Kiwify quando há mudança de preço (mensal)
4. Verificar emails de bounce no Resend (quinzenal)

Para cada tarefa:
- Complexidade de automação (baixa/média/alta) no Computer Use
- Risco de erro (se o agent errar, qual é o impacto?)
- Recomendação: automatizar agora, aguardar, ou fazer manualmente sempre

Priorize as 2 de maior ROI de tempo por menor risco.
```

---

## Criando o Sistema de Automação Completo

Com `/loop`, Background Agents e Computer Use funcionando juntos, o fluxo semanal de manutenção de um infoproduto pode ser quase totalmente automatizado.

**O Sistema de Segunda-Feira:**

```
Crie o playbook de automação para a rotina semanal de segunda-feira.

Objetivo: 20 minutos de atenção humana, 2 horas de trabalho automatizado.

SEQUÊNCIA AUTOMATIZADA:
1. [Background Agent] Analise os dados da semana no Gerenciador
   → Gere relatório em setup/relatorio-[DATA].md
   → Fonte: screenshot ou CSV exportado manualmente (coloque em setup/dados-semana.csv antes)

2. [/loop 3] Com base no relatório:
   → Iteração 1: identifique o criativo vencedor e gere variações (salve em ads/criativos-semana-[N].md)
   → Iteração 2: identifique criativos para pausar e documente o motivo
   → Iteração 3: gere 1 email de segmentação para alunos inativos (>14 dias sem login)

3. [Computer Use — opcional] Subir novos criativos aprovados no Meta Ads
   → Execute apenas se os criativos da iteração 1 foram aprovados por você

PONTO DE PARADA OBRIGATÓRIO:
Antes de qualquer ação no Meta Ads ou Kiwify, o sistema deve apresentar um resumo das ações planejadas e aguardar confirmação.

Salve este playbook em setup/automacao-semanal.md
```

---

## Limitações Que Você Precisa Conhecer

**O `/loop` não é magia:**
Cada iteração do loop é uma chamada separada ao modelo. Erros se propagam. Se a iteração 3 produziu algo inconsistente, as iterações 4-8 podem amplificar o erro. Revise periodicamente durante loops longos, não apenas no final.

**Background Agents consomem contexto:**
Cada agent usa uma fração do limite de uso do plano Pro. Em abril de 2026, o plano Pro inclui uso estendido de agents, mas projetos com muitos agents simultâneos podem atingir limites em sessões intensivas.

**Computer Use é preview, não produção:**
Trate o Computer Use como beta. Teste em sandbox antes de usar em contas reais. Nunca delegue ações financeiras (pagar anúncios, fazer saques) sem revisão humana. A responsabilidade pela ação é sempre sua.

---

## Exercício Prático

1. Execute um `/loop 4` para gerar as 4 aulas de um módulo do seu segundo produto
2. Configure um Background Agent para revisar a copy atual do produto 1 em paralelo com o loop
3. Crie o arquivo `setup/automacao-semanal.md` com o playbook de segunda-feira
4. Se estiver em macOS ou Linux: teste o Computer Use com uma tarefa de baixo risco (exportar dados do Gerenciador)
5. Defina os 3 pontos de parada obrigatórios no seu fluxo (onde o humano sempre decide antes de agir)

---

## Dicas e Pontos de Atenção

> **Sobre delegar sem supervisão:** O loop e os Background Agents produzem outputs que precisam de revisão. A tentação é rodar o loop e assumir que está tudo correto — isso leva a publicar conteúdo com inconsistências, criativos com erros, ou código quebrado. A regra: quanto mais consequência tem o output (vai ao ar, vai para o aluno, vai para o anúncio), mais revisão precisa. A automação salva o tempo de produção, não o tempo de revisão.

> **Ponto de atenção — custo dos Background Agents:** Em abril de 2026, o plano Pro do Claude Code inclui um volume generoso de Background Agents, mas em produção intensiva (produto novo, muitos agents simultâneos), você pode atingir o limite de uso antes do fim do mês. Monitore o uso no painel da Anthropic. Para picos de produção (lançamento de produto novo), planeje os agents para os primeiros dias do ciclo de billing.

> **Computer Use e LGPD:** Ao usar Computer Use para navegar em sistemas que contêm dados de clientes (Kiwify, Resend, Meta Business), esteja ciente que screenshots capturados pelo agent podem conter dados pessoais. Os screenshots são processados na infraestrutura da Anthropic. Para fins de conformidade com LGPD, evite usar Computer Use em telas que exibam CPF, endereços completos, ou dados de pagamento de clientes específicos.
