# Configuração Completa Kiwify — Fábrica de Infoprodutos com IA
**Checklist definitivo | Produto + Checkout + Order Bump + Upsell + Pixel + Entrega automática**

---

## VISÃO GERAL DO FUNIL

```
Anúncio Meta Ads
      ↓
Landing Page (Vercel)
      ↓
Checkout Kiwify ← Order Bump (+R$19,90)
      ↓
Página de Obrigado
      ↓
Email automático com acesso ao App Web (Vercel)
      ↓
Área de membros (App Web Next.js)
```

**Receita potencial por venda:**
- Produto principal: R$47
- Order bump (aceitação ~25–35%): +R$19,90 = R$66,90
- Ticket médio esperado: R$50–R$57

---

## PARTE 1 — CRIAR A CONTA E VERIFICAR

### 1.1 Cadastro
1. Acesse kiwify.com.br → **Criar conta grátis**
2. Use o email profissional do produto (ex: contato@fabricainfoprodutos.com.br)
3. Verifique o email antes de continuar

### 1.2 Dados bancários (obrigatório antes de receber pagamentos)
1. No painel → **Configurações → Dados bancários**
2. Preencha CPF ou CNPJ (recomendado CNPJ MEI para menor IR)
3. Conta corrente ou poupança — Kiwify suporta todos os bancos
4. Prazo de saque: D+30 padrão, D+15 disponível a partir de R$1.000/mês em vendas

### 1.3 Configurar domínio de email (recomendado)
- Em **Configurações → Email do remetente**, configurar SPF e DKIM no seu domínio
- Evita que os emails de acesso caiam no spam do aluno

---

## PARTE 2 — CRIAR O PRODUTO PRINCIPAL

### 2.1 Novo produto
1. Painel → **Produtos → Criar produto**
2. Tipo: **Produto digital — Acesso externo** (não usar área de membros nativa da Kiwify)
3. Nome: `Fábrica de Infoprodutos com IA`
4. Descrição curta (aparece no checkout):
   ```
   37 aulas em App Web profissional + 9 Skills prontas + Ebook bônus.
   Acesse imediatamente após a compra. Garantia de 7 dias.
   ```

### 2.2 Preços
| Modalidade | Valor | Quando usar |
|------------|-------|-------------|
| À vista (Pix) | R$47 | Principal — converter com desconto implícito |
| Cartão 1x | R$47 | Padrão |
| Cartão 12x | R$4,40/mês | Exibir como "12x de R$4" — ancoragem |
| Boleto | R$57 | +R$10 para cobrir custo do boleto |

**Configuração recomendada:**
- Ativar Pix com QR Code na tela de checkout
- Ativar parcelamento até 12x
- **Não ativar boleto** na fase inicial (boleto tem 40–60% de inadimplência em lançamentos)

### 2.3 Imagem do produto
- Dimensões: 800×600px ou 1200×900px
- Design: fundo preto `#07090f`, título em branco, destaque em verde `#00e87a`
- Elementos obrigatórios: nome do produto, "37 aulas", "App Web", "Garantia 7 dias"

### 2.4 Configurar entrega automática (ver Parte 5 para detalhes)
1. Em **Entrega → URL de acesso externo**
2. Cole a URL do App Web na Vercel: `https://[seu-projeto].vercel.app`
3. Ativar: **Enviar email de acesso automaticamente após compra confirmada**

---

## PARTE 3 — CHECKOUT DE ALTA CONVERSÃO

### 3.1 Aparência do checkout
1. Produto → **Checkout → Personalizar**
2. Cor primária: `#00e87a` (verde)
3. Cor de fundo: `#07090f` ou `#0d1220`
4. Logo: versão pequena do logo do produto (250×80px max)
5. Ativar **modo dark** se disponível

### 3.2 Campos do formulário
Ativar apenas os campos essenciais (cada campo extra = -5% conversão):
- ✅ Nome completo
- ✅ Email
- ✅ CPF (obrigatório para emissão de nota fiscal)
- ❌ Telefone — desativar (risco de LGPD + reduz conversão)
- ❌ Endereço — desativar (produto digital, não precisa)

### 3.3 Elementos de prova e segurança no checkout
Em **Checkout → Elementos extras**, ativar:
- ✅ Selos de segurança (Compra Segura, SSL)
- ✅ Garantia de 7 dias (ícone de escudo)
- ✅ Contador de compradores recentes ("X pessoas compraram hoje")

### 3.4 Texto de reforço abaixo do botão de compra
```
🔒 Compra 100% segura · Criptografia SSL
✅ Acesso imediato após confirmação do pagamento
↩️ Garantia incondicional de 7 dias — devolução sem perguntas
```

### 3.5 Botão de compra
- Texto: `QUERO ACESSO AGORA →` (não use "Comprar" — evoca resistência)
- Cor: `#00e87a`

---

## PARTE 4 — ORDER BUMP

**O que é:** Oferta adicional exibida dentro do próprio checkout, antes do clique em "Comprar". Taxa de aceitação esperada: 25–35%.

### 4.1 Criar o produto de order bump
1. Produtos → **Criar novo produto**
2. Nome: `Ebook MODO FÁBRICA — 47-Point Checklist + 12 Prompts Mestres`
3. Tipo: Produto digital — arquivo (PDF)
4. Preço: R$19,90
5. Descrição:
   ```
   O guia de referência rápida da Fábrica. 47 checkpoints para não esquecer
   nenhuma etapa do seu lançamento + os 12 Prompts Mestres prontos para copiar
   no Claude. Acesso imediato junto com o curso.
   ```

### 4.2 Preparar o arquivo do ebook
- Arquivo: `ebook/modo-fabrica.pdf` (o ebook já criado no curso)
- Upload em: **Produto → Arquivos digitais**
- Nome do arquivo no email de entrega: `MODO FÁBRICA — Checklist Completo.pdf`

### 4.3 Configurar o order bump no produto principal
1. Produto principal → **Order Bump → Adicionar**
2. Selecionar: `Ebook MODO FÁBRICA`
3. Preço especial: R$19,90 (já é o preço único — não precisa de "desconto")

### 4.4 Texto do order bump (copy)
**Título:**
```
⚡ ADICIONE AO SEU PEDIDO — Ebook MODO FÁBRICA por apenas R$19,90
```

**Descrição curta:**
```
O guia de campo para o dia a dia da sua fábrica. 47 checkpoints para nunca
travar + 12 Prompts Mestres já testados para cada etapa do lançamento.
Entregue junto com o curso. Um clique, sem novo formulário.
```

**Checkbox label:**
```
✅ Sim! Quero o Ebook MODO FÁBRICA por +R$19,90 agora
```

---

## PARTE 5 — PÁGINA DE OBRIGADO

### 5.1 Configurar em Checkout → Página de obrigado
Tipo: **Página customizada** (não usar a padrão da Kiwify)

### 5.2 Conteúdo da página de obrigado

```html
<!-- Cole como HTML customizado na Kiwify ou hospede na Vercel -->

<h1>Compra confirmada! Seu acesso está a caminho. ✅</h1>

<p>Confira seu email — enviamos as instruções de acesso para <strong>[email do aluno]</strong>.</p>

<h2>Seus próximos passos:</h2>
<ol>
  <li><strong>Abra o email de acesso</strong> (verifique o spam se não aparecer em 5 min)</li>
  <li><strong>Acesse o App Web</strong> usando o link enviado</li>
  <li><strong>Comece pelo Módulo 1, Aula 1</strong> — "Por Que 99% das Pessoas Usam IA Errado"</li>
  <li><strong>Configure seu CLAUDE.md</strong> no Módulo 2 antes de qualquer outro passo</li>
</ol>

<p>Qualquer dúvida: <a href="mailto:suporte@fabricainfoprodutos.com.br">suporte@fabricainfoprodutos.com.br</a></p>
```

---

## PARTE 6 — EMAIL AUTOMÁTICO DE ENTREGA

### 6.1 Template do email de acesso (configurar em Kiwify → Emails → Entrega)

**Assunto:** ✅ Seu acesso à Fábrica de Infoprodutos com IA está aqui

**Preview text:** Clique aqui para começar — Módulo 1 está esperando por você.

---

```
Olá, {{nome_do_aluno}}!

Sua compra foi confirmada. 🎉

Aqui está o seu acesso:

👉 [ACESSAR O CURSO AGORA] → {{link_de_acesso}}

---

O link acima leva direto para o App Web do curso.
Salve nos favoritos do seu navegador — é por lá que você vai estudar.

Guia rápido de início:

Módulo 1 — A Virada de Chave (comece aqui)
→ Entenda o modelo mental da Fábrica antes de instalar qualquer coisa.

Módulo 2 — Setup da Fábrica (faça no primeiro dia)
→ Instale o Claude Code e configure o CLAUDE.md do seu projeto.
→ Esse passo define a qualidade de tudo que vem depois.

Módulo 3 em diante — siga a sequência.
O App Web rastreia seu progresso automaticamente.

---

Lembrete: você tem 7 dias de garantia incondicional.
Se por qualquer motivo não ficar satisfeito, responda este email com "REEMBOLSO"
e devolvemos R$47 em até 5 dias úteis.

Bom estudo,
[NOME]
Fábrica de Infoprodutos com IA

P.S. — Se você adquiriu o Ebook MODO FÁBRICA, ele está em anexo neste email.
Use o checklist de 47 pontos como guia de acompanhamento durante o curso.
```

### 6.2 Variáveis Kiwify disponíveis no template
| Variável | Valor |
|----------|-------|
| `{{nome_do_aluno}}` | Nome do comprador |
| `{{email_do_aluno}}` | Email do comprador |
| `{{link_de_acesso}}` | URL do App Web (configurado na entrega) |
| `{{nome_do_produto}}` | Fábrica de Infoprodutos com IA |
| `{{data_da_compra}}` | Data formatada |

---

## PARTE 7 — PIXEL DO META ADS

### 7.1 Instalar o Pixel na landing page (Vercel)

Adicionar no `<head>` do [app-web/app/layout.tsx](../app-web/app/layout.tsx):

```tsx
// Substituir PIXEL_ID pelo ID real do Meta
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'SEU_PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body>
        <Sidebar />
        <main className="main-content">{children}</main>
      </body>
    </html>
  );
}
```

### 7.2 Evento ViewContent na landing page
Adicionar em [app-web/app/page.tsx](../app-web/app/page.tsx) (client component ou script):

```tsx
// No topo da home page (SSR-safe)
useEffect(() => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'ViewContent', {
      content_name: 'Fábrica de Infoprodutos com IA',
      content_category: 'Curso Digital',
      value: 47,
      currency: 'BRL',
    });
  }
}, []);
```

### 7.3 Pixel via Kiwify (recomendado — mais confiável)
1. Kiwify → **Configurações → Integrações → Meta Pixel**
2. Cole o Pixel ID (formato: `123456789012345`)
3. A Kiwify dispara automaticamente:
   - `InitiateCheckout` quando o comprador abre o checkout
   - `Purchase` quando a compra é confirmada (com valor e moeda)
4. Ativar **Conversions API** (CAPI) em seguida:
   - Kiwify → **Configurações → Conversions API**
   - Gerar token de acesso no Meta Business Manager
   - Cole o token na Kiwify — a CAPI envia eventos server-side, ignorando bloqueadores de anúncio e impacto do iOS 14+

### 7.4 Verificar instalação
1. Instale a extensão **Meta Pixel Helper** no Chrome
2. Abra a landing page e o checkout
3. Confirme que `PageView`, `ViewContent` e `InitiateCheckout` disparam nos momentos certos
4. Faça uma compra de teste e confirme o evento `Purchase`

---

## PARTE 8 — CONFIGURAR AFILIADOS (OPCIONAL)

Ativar apenas após 30 dias de vendas diretas para ter provas e dados.

1. Produto → **Afiliados → Ativar programa**
2. Comissão: 40% (R$18,80 por venda) — padrão competitivo no mercado brasileiro
3. Aprovação: **Manual** inicialmente (não automático — evita fraudes)
4. Cookie: 30 dias
5. Material de divulgação para afiliados: pasta `criativos/` + copy dos anúncios adaptada

---

## PARTE 9 — CHECKLIST FINAL DE LANÇAMENTO

### Produto
- [ ] Produto criado com nome, descrição e imagem
- [ ] Preços configurados (Pix, cartão, parcelamento até 12x)
- [ ] URL de entrega apontando para o App Web na Vercel
- [ ] Email automático de acesso configurado e testado

### Checkout
- [ ] Cores e logo personalizados
- [ ] Campos reduzidos (nome, email, CPF apenas)
- [ ] Selos de segurança e garantia ativados
- [ ] Texto do botão: "QUERO ACESSO AGORA →"

### Order Bump
- [ ] Produto do ebook criado (R$19,90)
- [ ] PDF do ebook upado nos arquivos digitais
- [ ] Order bump ativado no produto principal
- [ ] Copy do order bump revisada e publicada

### Pixel e Rastreamento
- [ ] Pixel ID instalado na landing page (Vercel)
- [ ] Pixel ID configurado na Kiwify
- [ ] Conversions API (CAPI) ativa com token
- [ ] Evento Purchase testado com compra de teste
- [ ] UTMs configurados nos links dos criativos

### Teste completo do funil
- [ ] Realizar uma compra completa de teste (usar cartão de teste da Kiwify)
- [ ] Confirmar que o email de acesso chegou em menos de 2 minutos
- [ ] Confirmar que o link do App Web abre corretamente
- [ ] Confirmar que o order bump aparece e funciona
- [ ] Confirmar que os eventos do Pixel dispararam no Meta Events Manager

---

## RESUMO DE RECEITA PROJETADA

### Cenário conservador (primeiros 30 dias, budget R$60/dia)
| Métrica | Valor |
|---------|-------|
| Budget total | R$1.800 |
| CPA estimado | R$30 |
| Vendas do produto principal | ~60 |
| Receita principal (60 × R$47) | R$2.820 |
| Order bump (30% × 60 × R$19,90) | R$358,20 |
| **Receita bruta total** | **R$3.178,20** |
| Taxa Kiwify (~9,99%) | -R$317,60 |
| **Receita líquida** | **~R$2.860** |
| ROI sobre budget de ads | **~59%** |

### Ponto de equilíbrio
- CPA máximo para não ter prejuízo: R$47 (cobrir só o principal)
- CPA máximo com ticket médio (R$53): R$53
- Budget mínimo diário para dados estatísticos em 7 dias: R$60/dia

---

*Gerado em: 2026-04-05 | Baseado na estrutura de preços e plataformas vigentes em 2026*
