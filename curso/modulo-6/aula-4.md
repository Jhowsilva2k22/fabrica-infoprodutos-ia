# Aula 6.4 — Deploy na Vercel, Domínio e Checklist Final: Colocando Sua Vitrine No Ar

## O Momento Que Muda Tudo

Tudo que você construiu nos módulos anteriores — landing page, App Web, integração com a Kiwify — existe em arquivos locais e em URLs temporárias de desenvolvimento. Nesta aula, você vai fazer o deploy definitivo: transformar esses arquivos em URLs reais, acessíveis por qualquer pessoa no mundo, com deploy automático para cada atualização futura.

A Vercel é o padrão de mercado para hospedar projetos Next.js. Em abril de 2026, o plano gratuito suporta uso real para infoprodutos em fase de lançamento: 100GB de bandwidth/mês, 100k Function invocations, deploys ilimitados via GitHub, HTTPS automático e CDN em 76 regiões globais. Para os primeiros 100-500 alunos, esse plano é mais do que suficiente.

O GitHub é o elo entre seu código e a Vercel — cada `git push` dispara um deploy automático. Você não precisa abrir o painel da Vercel toda vez que atualizar uma aula ou ajustar a copy da landing page.

---

## A Arquitetura de Deploy: Dois Repositórios, Dois Projetos

Você tem duas aplicações para publicar:

**1. Landing Page** (`pagina-vendas/index.html`)
- Arquivo HTML/CSS/JS puro
- Hospedado na Vercel como site estático
- URL: `https://[nome-do-produto].vercel.app`

**2. App Web** (`app-web/`)
- Next.js 16.2 com App Router
- Hospedado na Vercel como projeto Next.js
- URL: `https://[nome-do-app].vercel.app`

Cada um tem seu repositório GitHub separado — porque têm ciclos de atualização diferentes. A landing page muda raramente (ajustes de copy, novo depoimento). O App Web muda frequentemente (novas aulas, correções, novos módulos).

```
Crie um guia de deploy para publicar a landing page e o App Web na Vercel.

Estrutura:
1. Criar repositório GitHub para a landing page: [NOME_DO_PRODUTO]-landing
2. Criar repositório GitHub para o App Web: [NOME_DO_PRODUTO]-app
3. Conectar ambos à Vercel
4. Configurar variáveis de ambiente no App Web
5. Testar que ambos estão no ar

Considere:
- O arquivo app-web/data/alunos.json NÃO deve ir para o git (dados pessoais)
- As variáveis de ambiente da Vercel: ALUNOS_JSON, KIWIFY_WEBHOOK_SECRET, RESEND_API_KEY, JWT_SECRET
- O .gitignore do App Web deve incluir: .env.local, data/alunos.json, .next/

Gere os comandos git completos e o arquivo .gitignore adequado.
```

---

## Passo 1: Publicando a Landing Page

```bash
# Inicializa git na pasta da landing page
cd pagina-vendas/
git init
git add index.html
# Não adicionar nada mais — sem dados sensíveis
git commit -m "Landing page inicial"

# Cria o repositório no GitHub (requer gh CLI instalado)
gh repo create [NOME_DO_PRODUTO]-landing --public
git branch -M main
git remote add origin https://github.com/[SEU_USER]/[NOME_DO_PRODUTO]-landing.git
git push -u origin main
```

No painel da Vercel (`vercel.com/new`):
1. **Import Git Repository** → selecione `[NOME_DO_PRODUTO]-landing`
2. **Framework Preset**: selecione **Other** (não é Next.js — é HTML puro)
3. **Root Directory**: deixe vazio (ou `/`)
4. **Build Command**: deixe vazio
5. **Output Directory**: deixe vazio (ou `.`)
6. Clique **Deploy**

Em 30 segundos, a landing page está no ar em `https://[nome-do-produto]-landing.vercel.app`.

Para publicar cada atualização futura:
```bash
cd pagina-vendas/
git add index.html
git commit -m "Atualização da copy — seção de garantia"
git push
# Vercel faz o deploy automaticamente em < 1 minuto
```

---

## Passo 2: Publicando o App Web

O App Web tem mais complexidade: variáveis de ambiente, arquivo de dados de alunos, e dependências npm.

```bash
# Cria .gitignore adequado
cat > app-web/.gitignore << 'EOF'
.next/
node_modules/
.env.local
data/alunos.json
.vercel/
*.log
EOF

# Inicializa git no App Web
cd app-web/
git init
git add .
git commit -m "App Web inicial — Next.js 16.2"

# Cria repositório no GitHub
gh repo create [NOME_DO_PRODUTO]-app --private
# Use privado — o código do curso é seu produto

git branch -M main
git remote add origin https://github.com/[SEU_USER]/[NOME_DO_PRODUTO]-app.git
git push -u origin main
```

Na Vercel:
1. **Import Git Repository** → selecione `[NOME_DO_PRODUTO]-app`
2. **Framework Preset**: **Next.js** (detectado automaticamente)
3. **Root Directory**: deixe vazio
4. **Environment Variables**: adicione cada variável:

```
ALUNOS_JSON = [{"email":"admin@example.com","senha":"HASH_AQUI","nome":"Admin"}]
JWT_SECRET = [gere um token aleatório de 64 caracteres]
KIWIFY_WEBHOOK_SECRET = [o mesmo token configurado na Kiwify]
RESEND_API_KEY = [chave da sua conta Resend]
NEXT_PUBLIC_APP_URL = https://[NOME_DO_PRODUTO]-app.vercel.app
```

Clique **Deploy**. O build do Next.js 16.2 com Turbopack leva 60-90 segundos na primeira vez.

```
Gere os valores iniciais para as variáveis de ambiente:

1. JWT_SECRET: gere um token hexadecimal aleatório de 64 caracteres
2. ALUNOS_JSON inicial com um único usuário admin:
   - email: admin@[SEU_DOMINIO].com
   - senha: uma senha segura aleatória de 16 caracteres
   - nome: Admin
3. Mostre como fazer o hash bcrypt da senha para armazenar no JSON

Formato de saída: variáveis prontas para copiar no painel da Vercel
```

---

## Passo 3: Configurando Domínio Customizado

As URLs `.vercel.app` funcionam, mas um domínio próprio aumenta a credibilidade e a memorabilidade. Em 2026, um domínio `.com.br` custa R$40-60/ano no Registro.br.

**Estrutura de domínio recomendada:**
- Landing page: `[seuproduto].com.br`
- App Web (área de membros): `app.[seuproduto].com.br` ou `membros.[seuproduto].com.br`

Para configurar na Vercel:
1. No painel do projeto → **Settings → Domains**
2. Adicione o domínio: `[seuproduto].com.br`
3. A Vercel mostrará os registros DNS para configurar no Registro.br:
   - **Tipo A**: `@` → IP da Vercel (ex: `76.76.21.21`)
   - **Tipo CNAME**: `www` → `cname.vercel-dns.com`
4. No painel do Registro.br, adicione esses registros
5. Aguarde a propagação: 10 minutos a 24 horas

Para o subdomínio `app.[seuproduto].com.br`:
- No Registro.br: **Tipo CNAME**: `app` → `cname.vercel-dns.com`
- Na Vercel: adicione `app.[seuproduto].com.br` nas configurações de domínio do projeto App Web

A Vercel provisiona HTTPS automaticamente via Let's Encrypt — você não precisa comprar ou configurar certificado SSL.

```
Preciso configurar o domínio [SEU_DOMINIO].com.br na Vercel para a landing page
e app.[SEU_DOMINIO].com.br para o App Web.

Gere:
1. Lista completa dos registros DNS a configurar no Registro.br
2. Checklist para verificar que o domínio está funcionando após configuração
3. Como atualizar a variável NEXT_PUBLIC_APP_URL no App Web para o domínio definitivo
4. Como atualizar os links da landing page (login, obrigado) para o domínio definitivo
```

---

## Checklist Final de Pré-Lançamento

Antes de anunciar o produto e começar a vender, verifique cada item:

```
Faça o checklist completo de pré-lançamento para o infoproduto descrito no CLAUDE.md.

Verifique cada item a seguir e, para cada um, indique: ✅ OK ou ❌ Pendente + o que falta fazer.

LANDING PAGE (pagina-vendas/index.html)
□ Headline principal está no arquivo e é impactante
□ Todos os botões CTA apontam para o link de checkout da Kiwify
□ Countdown timer está configurado com data real de encerramento
□ Depoimentos têm conteúdo real (não placeholder)
□ Vídeo de apresentação está embedado (ou placeholder removido)
□ Preço está correto e visível
□ Garantia está descrita com prazo específico
□ FAQ responde as principais objeções do público do CLAUDE.md
□ Footer tem CNPJ/nome real e links de termos/privacidade funcionais
□ Página abre em < 2 segundos (teste com PageSpeed Insights)
□ Mobile: todos os elementos legíveis e clicáveis em iPhone 14

APP WEB
□ Login funciona com credencial de teste
□ Dashboard carrega e mostra os módulos corretos
□ Pelo menos 3 aulas completas estão renderizando corretamente
□ Download do ebook PDF funciona
□ Progresso de aula é salvo (localStorage)
□ A URL /obrigado existe e está funcional
□ O webhook da Kiwify foi testado com script local

KIWIFY
□ Produto criado com preço correto
□ URL de entrega aponta para o App Web
□ URL de obrigado aponta para [APP_WEB]/obrigado
□ Webhook configurado com o secret correto
□ Venda de teste realizada com sucesso (modo sandbox)

EMAIL
□ RESEND_API_KEY está configurada na Vercel
□ Email de boas-vindas chegou na venda de teste
□ Email tem o link correto do App Web e as credenciais

Após verificar todos os itens, liste as 3 pendências mais críticas para resolver antes de abrir as vendas.
```

---

## Sincronizando Conteúdo Entre Sessões

Quando você atualizar aulas no futuro — corrigir um erro, adicionar uma seção, criar um novo módulo — precisa sincronizar os arquivos do curso para o App Web.

```bash
# Script de sincronização: curso/ → app-web/content/
# Salve como app-web/scripts/sync-content.sh

#!/bin/bash
echo "Sincronizando conteúdo do curso para o App Web..."
cp -r ../curso/modulo-*/ content/
echo "Sincronização concluída."
echo "Módulos sincronizados:"
ls content/
```

```
Crie um script Node.js em app-web/scripts/sync-content.ts que:

1. Lê todos os arquivos .md em ../curso/modulo-*/
2. Copia para app-web/content/modulo-*/ mantendo a estrutura de pastas
3. Detecta e reporta arquivos modificados desde o último sync
   (usando timestamps ou um arquivo de controle sync-manifest.json)
4. Exibe um relatório: "X arquivos atualizados, Y novos, Z sem alteração"

Objetivo: evitar que o App Web fique desatualizado quando o conteúdo é editado.
Execute com: npx ts-node scripts/sync-content.ts
```

Para automatizar a sincronização antes de cada deploy:

```json
// package.json do App Web — adicione ao scripts:
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "npm run sync && next build",
    "sync": "npx ts-node scripts/sync-content.ts",
    "start": "next start"
  }
}
```

Com isso, cada `git push` que aciona o deploy na Vercel também sincroniza o conteúdo automaticamente.

---

## Fluxo Completo de Atualização Futura

Após o lançamento, quando quiser atualizar qualquer coisa:

**Para atualizar uma aula:**
```bash
# Edite o arquivo na pasta curso/
# (use Claude Code para criar/melhorar o conteúdo)

# Sincronize para o App Web
cd app-web && npm run sync

# Commit e push — Vercel faz deploy automático
git add .
git commit -m "Aula 3.2 — exemplos atualizados"
git push
# Em 90 segundos, alunos já veem o conteúdo atualizado
```

**Para atualizar a landing page:**
```bash
# Edite pagina-vendas/index.html

cd pagina-vendas/
git add index.html
git commit -m "Copy — novo depoimento adicionado"
git push
# Landing page atualizada em < 30 segundos
```

**Para adicionar um aluno manualmente (antes de ter o webhook):**
```
Adicione um novo aluno ao ALUNOS_JSON nas variáveis de ambiente da Vercel.

Aluno:
- Nome: [NOME]
- Email: [EMAIL]
- Senha: gere uma senha aleatória de 12 caracteres (letras + números)

Retorne:
1. O ALUNOS_JSON atualizado com o novo aluno (com a senha em hash bcrypt)
2. A senha em texto claro para enviar por email ao aluno
3. O texto do email de boas-vindas para enviar manualmente
```

---

## Exercício Prático

1. Crie os repositórios GitHub para landing page e App Web
2. Faça o deploy de ambos na Vercel
3. Configure as variáveis de ambiente no App Web
4. Faça uma venda de teste via webhook local (`npm run test:webhook`)
5. Verifique que o aluno de teste consegue fazer login após a venda
6. Execute o checklist completo de pré-lançamento
7. (Opcional) Configure o domínio customizado

Quando todos os itens do checklist estiverem ✅, você tem uma vitrine digital completa no ar. O próximo módulo cobre a configuração definitiva do produto na Kiwify — preço, checkout, afiliados e a integração final que fecha o ciclo de venda.

---

## Dicas e Pontos de Atenção

> **Sobre o repositório privado vs. público:** O App Web deve ser privado no GitHub — ele contém a estrutura do seu produto. A landing page pode ser pública (é HTML que qualquer pessoa pode ver via inspect de qualquer forma). O repositório privado no GitHub é gratuito e sem limite de colaboradores desde 2022.

> **Ponto de atenção — redeploy após mudar variáveis de ambiente:** Quando você alterar qualquer variável de ambiente na Vercel (como ALUNOS_JSON para adicionar um aluno), o App Web precisa ser redepleyado para que a mudança entre em vigor. Na Vercel: **Deployments → Redeploy**. Isso leva 90 segundos. Durante o lançamento, quando você estiver adicionando alunos manualmente com frequência, considere disparar o redeploy via API da Vercel para automatizar.

> **Limite do ALUNOS_JSON em variável de ambiente:** As variáveis de ambiente da Vercel têm limite de 4KB por variável. Um JSON com 100 alunos (nome + email + senha hash) ocupa aproximadamente 10-12KB — já excede o limite. Para mais de 60-70 alunos, migre para Supabase. O Claude pode fazer essa migração em menos de 2 horas: cria a tabela, migra os dados existentes, atualiza o código de auth para consultar o banco. Faça isso antes de atingir o limite — não depois.
