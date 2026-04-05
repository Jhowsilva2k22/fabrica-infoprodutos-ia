# Aula 6.1 — Montando a Landing Page HTML: Da Copy Para a Página Que Converte

## Por Que HTML/CSS e Não um Construtor de Páginas

Existem construtores visuais de landing page no mercado — Elementor, Wix, até o construtor nativo da própria Kiwify. Por que usar HTML/CSS puro?

**Velocidade de carregamento:** Uma landing page em HTML/CSS puro carrega em 0.8-1.5 segundos. Uma página no Elementor carrega em 3-6 segundos. A cada segundo adicional de carregamento, a taxa de conversão cai 7%. Isso não é hipótese — é dado do Google PageSpeed.

**Controle total:** O HTML/CSS que o Claude gera é seu. Você muda o que quiser, em qualquer elemento, sem depender da interface de um construtor ou dos limites do que o construtor permite.

**Sem custos recorrentes:** Construtores premium custam R$60-200/mês. O HTML que você vai gerar agora vai funcionar por anos sem custo adicional.

**O Claude consegue fazer:** Em 2026, o Claude Opus 4.6 gera landing pages HTML/CSS completas, responsivas, com dark theme e zero dependências externas em uma única solicitação. É uma das suas capacidades mais consistentes.

---

## O Que a Landing Page Precisa Ter

Antes de gerar, entenda os elementos técnicos que convertem:

**Estrutura da página (ordem dos elementos):**
1. Barra de urgência (countdown se tiver deadline real)
2. Logo/nome do produto
3. Headline principal
4. Subheadline (a promise)
5. Vídeo de apresentação (placeholder — você grava depois)
6. Lead + problema
7. A transformação
8. O mecanismo (método proprietário)
9. Bullets de benefício
10. O que você recebe (produto + bônus)
11. Prova social / depoimentos
12. Ancoragem e preço
13. Garantia
14. FAQ
15. Urgência final + CTA
16. Footer com termos e privacidade

**Elementos técnicos obrigatórios:**
- Responsivo (mobile-first — mais de 70% dos acessos são mobile)
- Dark theme (maior contraste, menor cansaço visual, conversão ligeiramente maior)
- CTA buttons em verde ou laranja (cores de ação)
- Font sem serifa para corpo (Inter, Roboto)
- Font display para headlines (pode ser serifada para autoridade)
- Tempo de carregamento abaixo de 2 segundos

---

## O Prompt Para Gerar a Landing Page

```
Crie uma landing page HTML/CSS completa para o curso descrito no CLAUDE.md.

Fonte de conteúdo:
- pagina-vendas/copy.md — toda a copy que você vai usar
- CLAUDE.md — nome, preço, produto, público

Especificações técnicas:
- HTML5 semântico, CSS3, zero dependências externas (sem Bootstrap, sem jQuery)
- Dark theme: background #0f0f0f ou #111111, texto #f0f0f0
- Mobile-first e 100% responsivo
- Botões CTA em #22c55e (verde) ou #f97316 (laranja)
- Font-family: 'Inter', sans-serif para corpo; pode usar Google Fonts 
  via link no head
- Countdown timer funcional em JavaScript (definir para 72h a partir 
  da abertura da página — se a data de lançamento não está definida, 
  use localStorage para persistir o timer)
- Placeholders claros para: vídeo de apresentação, foto do criador, 
  fotos de depoimentos

Elementos que deve incluir (nesta ordem):
1. Sticky header com logo e botão "Quero acesso"
2. Barra de urgência com countdown timer
3. Hero section: headline + subheadline + CTA
4. Vídeo placeholder (div com aspect-ratio 16:9)
5. Seção do problema (lead)
6. Seção da solução/método
7. Bullets de benefício em grid responsivo (2 colunas desktop, 1 mobile)
8. Seção "O que você recebe" com ícones ou checkmarks
9. Seção de prova social (3 cards de depoimento com placeholder)
10. Seção de preço (1 plano ou 3 planos conforme copy.md)
11. Bloco de garantia com ícone de escudo
12. FAQ em acordeão (JavaScript para expandir/colapsar)
13. CTA final com countdown
14. Footer com termos de uso, política de privacidade (links placeholder), 
    CNPJ/nome, e texto de conformidade LGPD

Salve em pagina-vendas/index.html
```

---

## Revisando e Ajustando o HTML Gerado

Após a geração, abra o arquivo no navegador:

```bash
# Windows
start pagina-vendas/index.html

# Mac
open pagina-vendas/index.html
```

Checklist de revisão visual:

```
Abri a landing page gerada em pagina-vendas/index.html no navegador.
Encontrei os seguintes problemas:

[Liste os problemas visuais que você observou]

Corrija diretamente no arquivo HTML. Para cada correção, identifique 
o elemento específico pelo ID ou classe CSS.
```

**Teste de responsividade no Chrome:**
1. Pressione F12 para abrir DevTools
2. Clique no ícone de dispositivo móvel (Ctrl+Shift+M)
3. Selecione "iPhone 14" ou "Samsung Galaxy"
4. Verifique se todos os elementos estão legíveis e clicáveis

Se encontrar problemas de responsividade:
```
A landing page em pagina-vendas/index.html tem os seguintes problemas 
em mobile (testado em iPhone 14):

[Descreva os problemas específicos]

Corrija o CSS responsivo. Use max-width: 430px como breakpoint mobile.
```

---

## Integrando o Botão de Compra da Kiwify

O botão de compra da landing page precisa apontar para o link de checkout da Kiwify. Você vai configurar isso no Módulo 7, mas prepare a estrutura agora:

```
Na landing page pagina-vendas/index.html, todos os botões CTA 
atualmente têm href="#". 

Substitua por href="[LINK_KIWIFY_PLACEHOLDER]" e adicione um comentário 
HTML: <!-- Substituir pelo link de checkout da Kiwify -->

Adicione também a tag data-kiwify="checkout" em todos os botões de CTA 
para facilitar a substituição automática depois.
```

Quando você tiver o link da Kiwify (Módulo 7), substitui de uma vez:
```
Substitua todos os placeholders [LINK_KIWIFY_PLACEHOLDER] em 
pagina-vendas/index.html pelo link real: [SEU_LINK_KIWIFY]
```

---

## Hospedagem e Deploy

A landing page HTML puro pode ser publicada de 3 formas:

### Opção 1: GitHub Pages (gratuito, sem configuração de servidor)

```bash
# Crie um repositório no GitHub chamado "meu-infoproduto-landing"
git init pagina-vendas/
cd pagina-vendas/
git add index.html
git commit -m "Landing page inicial"
git branch -M main
git remote add origin https://github.com/SEU_USER/meu-infoproduto-landing.git
git push -u origin main
```

No GitHub, vá em Settings → Pages → Source: main branch. Em 2 minutos, sua landing page está em `https://SEU_USER.github.io/meu-infoproduto-landing`.

### Opção 2: Vercel (gratuito, deploy automático, domínio customizado)

O Vercel é a opção recomendada — suporta domínio personalizado gratuito, HTTPS automático e CDN global.

```bash
npm install -g vercel
cd pagina-vendas/
vercel
```

Siga o wizard. Em 3 minutos, a página está online com URL própria.

### Opção 3: Kiwify Pages (direto na plataforma)

A Kiwify tem um construtor de página integrado. Mas para HTML personalizado, use a opção de código customizado no painel da Kiwify (coberto no Módulo 7).

---

## Exercício Prático

1. Execute o Prompt de geração da landing page
2. Abra o arquivo no navegador e liste os problemas visuais
3. Aplique o checklist de revisão com o Claude para corrigir os problemas
4. Teste em mobile com o DevTools do Chrome
5. Adicione os placeholders do link Kiwify nos botões
6. Faça o deploy no Vercel (opção mais simples)
7. Compartilhe o link com alguém do público-alvo e peça: "Essa página faria você querer saber mais?" — observe a reação, não apenas a resposta verbal

A landing page publicada é o ativo central do seu lançamento. Na Aula 6.2, você vai integrar o App Web do curso a esse ecossistema.

---

## Dicas e Pontos de Atenção

> **Sobre o vídeo de apresentação:** O placeholder de vídeo na landing page é para um vídeo de 2-5 minutos onde você aparece apresentando o curso e fazendo a promessa principal. Esse vídeo aumenta a conversão em 30-80% dependendo do nicho — porque cria conexão pessoal. Grave com o celular em ambiente bem iluminado, usando o roteiro que o Claude vai gerar na Aula 8.4. Por enquanto, o placeholder fica.

> **Ponto de atenção — LGPD e cookies:** A landing page gerada inclui aviso de cookies e link para política de privacidade como placeholder. Antes de publicar, crie um texto real de política de privacidade. O Claude pode gerar um texto padrão adequado para infoprodutos brasileiros. Publicar sem política de privacidade real é infração à LGPD.

> **Performance antes de investir em tráfego:** Antes de colocar dinheiro em Meta Ads, teste a landing page com tráfego orgânico. Compartilhe nos Stories com o link, peça para pessoas do seu grupo de WhatsApp acessar. Se a taxa de clique no CTA for abaixo de 1%, a landing page precisa de ajuste antes de escalar com tráfego pago.
