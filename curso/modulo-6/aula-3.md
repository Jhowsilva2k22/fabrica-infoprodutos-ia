# Aula 6.3 — Integrando Kiwify ao App Web: Do Pagamento ao Acesso Automático

## O Fluxo Que Precisa Ser Automatizado

Quando um aluno compra no Kiwify, três coisas precisam acontecer:
1. O pagamento é processado
2. O aluno recebe acesso ao App Web
3. O aluno recebe o email de boas-vindas com as instruções

Se você fizer isso manualmente — verificar cada compra no painel da Kiwify, criar o acesso no App Web, enviar o email — você vai virar refém do próprio produto. Com 5 vendas por dia, são 2-3 horas do seu tempo só em onboarding.

A automação via webhook resolve tudo isso sem sua presença.

---

## Como Funciona o Webhook da Kiwify

Um webhook é uma notificação HTTP que a Kiwify envia para a URL que você configurar sempre que um evento acontece — pagamento confirmado, reembolso solicitado, assinatura cancelada.

Você vai criar um endpoint na sua aplicação Next.js que:
1. Recebe a notificação do webhook da Kiwify
2. Valida que a notificação é legítima (token de segurança)
3. Extrai os dados do comprador (nome, email)
4. Cria o acesso no App Web
5. Dispara o email de boas-vindas

---

## Criando o Endpoint de Webhook

```
No app-web/app/api/kiwify-webhook/route.ts, crie o endpoint que 
recebe notificações da Kiwify.

O endpoint deve:
1. Aceitar POST requests
2. Validar o header X-Kiwify-Signature com o token secreto da Kiwify
   (o token será armazenado em KIWIFY_WEBHOOK_SECRET nas env vars)
3. Para eventos do tipo "order.paid" ou "order.complete":
   a. Extrair: customer.name, customer.email do body JSON
   b. Gerar uma senha aleatória segura (12 caracteres, letras+números)
   c. Criar o aluno em ALUNOS_JSON (adicionar à lista de usuários)
   d. Salvar em um arquivo de dados ou env var atualizada
   e. Retornar 200 OK

4. Para eventos "order.refunded":
   a. Remover ou desativar o acesso do aluno
   b. Retornar 200 OK

5. Para qualquer outro evento: retornar 200 OK sem ação

Validação do Kiwify webhook:
const signature = request.headers.get('X-Kiwify-Signature')
const secret = process.env.KIWIFY_WEBHOOK_SECRET
// Validar HMAC SHA256 do body com o secret

Persistência dos alunos: para MVP, use um arquivo JSON em 
app-web/data/alunos.json. Para produção real, substituir por banco 
de dados (Supabase ou PlanetScale).
```

---

## Email Automático de Boas-vindas

Após criar o acesso, o webhook precisa disparar um email para o novo aluno. Use Resend (gratuito até 100 emails/dia, ideal para MVP):

```
Configure o envio de email de boas-vindas no webhook.

1. Instale: npm install resend

2. Configure RESEND_API_KEY nas variáveis de ambiente do Vercel

3. Após criar o acesso do aluno, envie email com:
   De: "Seu Nome <cursos@seudominio.com>" (ou noreply@resend.dev para testes)
   Para: customer.email
   Assunto: "Seu acesso ao [NOME DO CURSO] está pronto!"
   
   Corpo HTML do email:
   - Cumprimento personalizado com nome do aluno
   - URL de login do App Web: [URL_DO_APP_WEB]/login
   - Email de acesso: customer.email
   - Senha gerada: [senha gerada]
   - Link para o ebook PDF
   - Instrução para salvar o email
   - Assinatura do criador
   
   Crie o template HTML em app-web/lib/email-templates/boas-vindas.html
   e use o conteúdo do CLAUDE.md para personalizar o nome do curso e o tom.
```

---

## Testando o Webhook Localmente

Antes de configurar na Kiwify real, teste localmente com o ngrok:

```bash
# Instale o ngrok
npm install -g ngrok

# Em terminal 1: rode o Next.js
cd app-web && npm run dev

# Em terminal 2: exponha o localhost
ngrok http 3000
```

O ngrok vai gerar uma URL pública temporária (ex: `https://abc123.ngrok.io`). Configure essa URL na Kiwify como URL do webhook.

Para simular uma venda:
```
Crie um script de teste em app-web/scripts/test-webhook.ts que simula 
uma notificação da Kiwify enviando um POST para localhost:3000/api/kiwify-webhook 
com payload de "order.paid" para um aluno de teste:
- nome: "Aluno Teste"
- email: "teste@example.com"

Execute: npx ts-node scripts/test-webhook.ts

Verifique:
1. O aluno foi adicionado em data/alunos.json?
2. O login funciona com as credenciais geradas?
3. O email seria enviado corretamente?
```

---

## Configurando na Kiwify

Após testar localmente, configure na Kiwify real:

1. No painel da Kiwify, vá em **Produtos → [Seu Produto] → Integrações → Webhook**
2. URL do webhook: `https://[seu-app].vercel.app/api/kiwify-webhook`
3. Token de segurança: gere um token aleatório e salve em KIWIFY_WEBHOOK_SECRET no Vercel
4. Eventos para escutar: `order.paid`, `order.complete`, `order.refunded`
5. Salve e faça uma venda de teste (R$0.01 ou use o modo sandbox da Kiwify)

Se a venda de teste criar o acesso e disparar o email, o fluxo está funcionando.

---

## Página de Redirecionamento Pós-Compra

A Kiwify redireciona o comprador para uma URL após o pagamento. Use esse momento:

```
Crie a página app-web/app/obrigado/page.tsx — a "thank you page".

A página deve:
1. Exibir mensagem de confirmação: "Pagamento confirmado! Seu acesso 
   está sendo processado."
2. Mostrar: "Você vai receber um email em [X] minutos com o acesso"
3. Orientar enquanto espera: links para o Instagram, grupo de WhatsApp 
   (se houver), vídeo de introdução no YouTube (se houver)
4. Botão "Já recebi o email — fazer login" que leva para /login
5. Timer de 5 minutos ("geralmente chega em menos de 5 minutos")

Use o mesmo dark theme do restante do App Web.
Estilo: celebratório mas profissional. Use um ícone de checkmark verde animado.
```

Configure a URL de redirecionamento pós-compra na Kiwify para:
`https://[seu-app].vercel.app/obrigado`

---

## Exercício Prático

1. Crie o endpoint de webhook em `app-web/app/api/kiwify-webhook/route.ts`
2. Configure o Resend e crie o template de email de boas-vindas
3. Teste com ngrok + script de teste local
4. Verifique que o login funciona com as credenciais criadas pelo webhook
5. Crie a thank you page `/obrigado`
6. Faça o deploy no Vercel com as variáveis de ambiente configuradas
7. Configure o webhook na Kiwify e faça uma venda de teste no modo sandbox

Quando esse fluxo funcionar, você tem automação completa: aluno compra → recebe acesso → faz login → começa o curso. Zero intervenção manual.

---

## Dicas e Pontos de Atenção

> **Sobre a persistência de alunos em JSON:** O arquivo `data/alunos.json` como banco de dados funciona para os primeiros 100-200 alunos. Para escalar além disso, migre para Supabase (gratuito até 500MB) ou PlanetScale. O Claude pode fazer essa migração em menos de 1 hora de trabalho — e você terá um banco SQL real com histórico de acesso, analytics e fácil gerenciamento.

> **Ponto de atenção — concorrência de webhooks:** Se você fizer uma promoção e vender 50 cursos em 2 minutos, o sistema vai receber 50 webhooks simultâneos. O arquivo JSON não suporta escrita concorrente — dois acessos simultâneos podem corromper o arquivo. Para o MVP, isso é risco aceitável. Para lançamentos com tráfego pago real, migre para Supabase antes de ligar os anúncios.

> **Backup dos dados de alunos:** O arquivo `data/alunos.json` não deve estar no `.gitignore` — ele precisa persistir entre deploys. Mas também não deve estar no repositório público — contém dados pessoais. Solução: use variáveis de ambiente do Vercel para armazenar os dados de alunos em JSON encoded como env var, não em arquivo no repositório.
