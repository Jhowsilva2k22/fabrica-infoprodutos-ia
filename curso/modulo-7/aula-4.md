# Aula 7.4 — Conectando Tudo: Kiwify + Vercel + Email + Página de Vendas no Mesmo Fluxo

## O Sistema Completo

Você chegou ao fim da linha de montagem. Cada peça foi construída nos módulos anteriores:

- **Landing page** (Módulo 6) — converte visitantes em compradores
- **App Web** (Módulo 6) — entrega o produto aos alunos
- **Webhook** (Aula 6.3) — automatiza o acesso após a compra
- **Email de boas-vindas** (Aula 6.3) — onboarding automático
- **Produto na Kiwify** (Aulas 7.1-7.3) — processa o pagamento

Agora você vai conectar todas essas peças e verificar que o fluxo funciona de ponta a ponta, sem intervenção manual.

---

## O Fluxo Completo Mapeado

```
[Meta Ads / Tráfego Orgânico]
        ↓
[Landing Page — seuproduto.com.br]
        ↓ (clique no botão CTA)
[Checkout Kiwify — kiwify.com.br/checkout/ID]
        ↓ (pagamento confirmado)
[Webhook → app.seuproduto.com.br/api/kiwify-webhook]
   ├── Cria acesso no ALUNOS_JSON
   └── Envia email de boas-vindas via Resend
        ↓ (redirect após pagamento)
[Thank You Page — app.seuproduto.com.br/obrigado]
        ↓ (comprador clica em "Já recebi o email")
[Login — app.seuproduto.com.br/login]
        ↓
[Dashboard — app.seuproduto.com.br/dashboard]
        ↓
[Aula 1.1 — primeira aula do curso]
```

Cada seta é uma transição que pode quebrar. O objetivo desta aula é verificar cada uma.

---

## Teste de Integração Completo

```
Execute o teste de integração completo do produto descrito no CLAUDE.md.

Simule o fluxo do comprador do início ao fim:

PARTE 1 — PRÉ-COMPRA
1. Acesse a landing page no ar (https://[seuproduto].com.br ou URL Vercel)
2. Verifique:
   □ Página carrega em < 3 segundos
   □ Countdown timer está funcionando (não expirado)
   □ Todos os botões CTA têm o link da Kiwify (não o placeholder)
   □ Página responsiva em mobile (simule em DevTools)
   □ Pixel do Meta Ads está disparando PageView (Meta Pixel Helper)

PARTE 2 — CHECKOUT
3. Clique num botão CTA — você vai para o checkout da Kiwify
4. Verifique:
   □ Produto e preço corretos no checkout
   □ Order Bump está visível
   □ Página de checkout carrega sem erros
   □ Pixel dispara InitiateCheckout

PARTE 3 — PÓS-COMPRA (use o modo sandbox da Kiwify)
5. Complete a compra de teste no sandbox
6. Verifique:
   □ Webhook foi recebido (verifique logs do App Web na Vercel)
   □ Aluno de teste aparece no ALUNOS_JSON / logs de criação
   □ Email de boas-vindas chegou (verifique inbox do email de teste)
   □ Email tem URL correta do App Web
   □ Email tem as credenciais (email + senha)
   □ Redirect para a Thank You Page funcionou

PARTE 4 — ACESSO AO PRODUTO
7. Acesse app.[seuproduto].com.br/login com as credenciais do email
8. Verifique:
   □ Login bem-sucedido
   □ Dashboard mostra os módulos corretos
   □ Primeira aula carrega e renderiza corretamente
   □ Progresso é salvo ao clicar em "Marcar como concluída"
   □ Download do ebook funciona
   □ Logout funciona

Para cada ❌ encontrado, gere o comando ou código para corrigir.
```

---

## Diagnóstico de Falhas Comuns

Se o teste revelar problemas, use estes diagnósticos:

### Webhook não está sendo recebido

```
O webhook da Kiwify não está chegando no endpoint. Diagnose o problema.

Informações:
- URL do webhook: [URL]
- Resposta do teste de webhook na Kiwify: [CÓDIGO DE ERRO / TIMEOUT]
- Logs da Vercel: [Cole os logs de erro]

Verifique:
1. A rota api/kiwify-webhook/route.ts existe e está deployada?
2. O endpoint retorna 200 para GET (teste de verificação da Kiwify)?
3. A validação HMAC está rejeitando o token?
4. Há erro de parsing do body JSON?

Gere o fix específico para o problema identificado.
```

### Email não está sendo enviado

```
O email de boas-vindas não está sendo disparado após a compra. Diagnose.

Verifique:
1. RESEND_API_KEY está configurada na Vercel?
2. O domínio de envio está verificado no painel do Resend?
3. Há erros nos logs da função do webhook?
4. A cota gratuita do Resend (100 emails/dia) não foi atingida?

Cole aqui os logs de erro da Vercel:
[LOGS]

Gere o fix.
```

### Login não funciona após a compra

```
O aluno recebeu as credenciais mas não consegue fazer login. Diagnose.

Possíveis causas:
1. ALUNOS_JSON não foi atualizado (variável de ambiente precisa de redeploy)
2. O hash da senha está incorreto (bcrypt rounds incorretos)
3. O JWT_SECRET mudou entre a criação da conta e o login
4. O middleware de autenticação tem um bug de verificação

Verifique os logs do endpoint /api/auth/login e gere o fix.
```

---

## Configurando o Fluxo de Urgência Real

A landing page tem um countdown timer. Para que funcione como urgência real (não fictícia), você precisa definir:

**Para lançamento com data de encerramento:**
- Timer fixo com a data real de fechamento
- Quando o timer zera: preço sobe ou vagas fecham

**Para produto sempre disponível (evergreen):**
- Timer de 72 horas que reseta baseado na primeira visita (usando localStorage)
- Quando o timer zera: preço sobe (e sobe de verdade — configure na Kiwify)

```
Configure a lógica de urgência para a landing page.

Escolha o modelo: [LANÇAMENTO COM DATA / EVERGREEN]

Para lançamento com data:
- Data de encerramento: [DATA E HORA]
- O que acontece quando o timer zera: [PREÇO SOBE DE R$97 PARA R$197 / PÁGINA FECHA]
- Mensagem após o encerramento: gere o texto para a tela de "oferta encerrada"

Para evergreen:
- Prazo do timer: 72 horas (recomendado) ou [X] horas
- O preço realmente muda quando o timer zera? [SIM — configure na Kiwify / NÃO — apenas urgência psicológica]
- Como rota para o aluno que revisita após o timer: [exibe nova janela / mantém preço original]

Atualize o JavaScript do countdown em pagina-vendas/index.html com a lógica correta.
```

---

## Automação Pós-Venda: Além do Acesso

O webhook da Kiwify já cria o acesso e envia o email de boas-vindas. Mas há mais automações possíveis:

**7 dias após a compra:**
```
Adicione ao webhook um job agendado que, 7 dias após a compra:
- Envie um email de "check-in": "Você chegou até onde?"
- Inclua um link direto para a aula em que o aluno parou (baseado no progresso em localStorage — ou pergunte por resposta de email)
- CTA: link direto para a próxima aula não concluída

Use o Vercel Cron Jobs para agendar:
- Em vercel.json, adicione um cron que roda às 10h diariamente
- O cron verifica alunos que completaram 7 dias e ainda não terminaram o módulo 1
- Envia o email via Resend

Crie o arquivo app-web/app/api/cron/check-in/route.ts e configure o vercel.json.
```

**30 dias após a compra — tentativa de upsell:**
```
Após 30 dias, envie um email de upsell para alunos que:
- Completaram pelo menos 50% do curso (baseado no progresso)
- Não compraram o upsell no checkout

Ofereça: [UPSELL DO CLAUDE.md] com desconto de 20% para alunos existentes.

Use o mesmo sistema de Vercel Cron Jobs.
```

---

## Documentando o Sistema Para o Futuro

Quando você for atualizar o produto, contratar um assistente, ou simplesmente lembrar como tudo funciona em 6 meses, vai precisar de documentação.

```
Gere um documento de "arquitetura do sistema" em setup/arquitetura-sistema.md.

O documento deve cobrir:
1. Mapa de todas as URLs e o que cada uma faz
2. Todas as variáveis de ambiente e onde cada uma é usada
3. O fluxo completo do webhook com diagrama em texto ASCII
4. Passos para adicionar um aluno manualmente (emergência)
5. Passos para fazer redeploy após atualização de conteúdo
6. Contatos e credenciais dos serviços (Kiwify, Vercel, Resend) — [PLACEHOLDER para você preencher]
7. Checklist de manutenção mensal (verificar limites, backup de dados, etc.)

Tom: como um manual de operações. Quem lê deve conseguir operar o sistema sem você por perto.
```

---

## Você Completou a Fábrica

Chegando ao fim desta aula, você tem:

| Componente | Status |
|-----------|--------|
| Produto estruturado (CLAUDE.md) | ✅ |
| Conteúdo das aulas (37 arquivos .md) | ✅ |
| Ebook bônus (PDF) | ✅ |
| Copy da landing page | ✅ |
| Sequência de 7 emails | ✅ |
| Estratégia de preço com ancoragem | ✅ |
| Landing page HTML/CSS | ✅ |
| App Web Next.js 16.2 no ar | ✅ |
| Integração webhook Kiwify | ✅ |
| Email automático de boas-vindas | ✅ |
| Produto publicado na Kiwify | ✅ |
| Pixel do Meta Ads configurado | ✅ |
| Order bump e upsell | ✅ |
| Documentação do sistema | ✅ |

O que falta é tráfego — compradores chegando na landing page. Isso é o que o Módulo 8 cobre.

---

## Exercício Prático

1. Execute o teste de integração completo (copie o prompt acima)
2. Corrija qualquer ❌ encontrado no teste
3. Configure a lógica de urgência real no countdown timer
4. Adicione o cron de check-in de 7 dias (opcional mas recomendado)
5. Gere e salve o documento de arquitetura do sistema
6. Convide uma pessoa do público-alvo para testar o fluxo completo — do anúncio à primeira aula — e colete o feedback

Com o sistema testado e documentado, você está pronto para o Módulo 8: atrair os primeiros compradores com Meta Ads.

---

## Dicas e Pontos de Atenção

> **Sobre o primeiro comprador:** Sua primeira venda real vai ser para alguém que você conhece pessoalmente — um seguidor próximo, um amigo do nicho, um conhecido que tem o problema que seu curso resolve. Isso é normal e estratégico: o primeiro comprador gera o primeiro depoimento. Acompanhe de perto os primeiros 5-10 alunos, responda dúvidas rapidamente, e peça o feedback honesto. Esses dados valem mais do que qualquer pesquisa de mercado.

> **Ponto de atenção — Vercel Cron Jobs e plano gratuito:** O plano gratuito da Vercel inclui 2 cron jobs com execução mínima de 1 vez por dia. Para os emails de check-in de 7 dias e 30 dias, isso é suficiente. Se você precisar de granularidade maior (ex: email 2 horas após a compra), precisará do plano Pro (US$20/mês) ou usar uma ferramenta de automação externa como Make.com (plano gratuito suporta 1.000 operações/mês).

> **Celebre esse momento:** Você construiu um sistema completo de negócio digital usando IA — do produto ao checkout ao onboarding automático. Isso levaria meses com uma equipe humana. Você fez em dias. O Módulo 8 vai colocar combustível nessa máquina. Mas antes, valide o produto com os primeiros compradores orgânicos — os dados das primeiras vendas vão informar as campanhas e reduzir o custo de aquisição.
