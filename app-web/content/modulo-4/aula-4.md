# Aula 4.4 — Criando o Ebook Bônus: Como Transformar 37 Aulas em 30 Páginas de Alto Valor

## Por Que o Bônus Fecha Vendas Que o Curso Principal Não Fecha

Existe um segmento de compradores que, diante da página de vendas, pensa: "o curso parece bom, mas não sei se tenho tempo de fazer 37 aulas." Esse comprador não compra por medo de investimento de tempo, não por medo do investimento financeiro.

O ebook bônus resolve exatamente esse medo.

Quando você diz "você também recebe o Guia Rápido de 30 páginas — se você não tiver tempo de fazer o curso completo, o guia te dá o essencial para começar agora", você transforma o risco percebido. A compra deixa de ser um compromisso de horas e vira uma aposta segura: mesmo no pior cenário (sem tempo para o curso), o comprador tem acesso ao valor mínimo garantido.

Esse mecanismo aumenta a conversão sem exigir desconto. E você vai criar esse ebook em 90 minutos com o Claude.

---

## O Que o Ebook Bônus É (e Não É)

**O ebook bônus NÃO é:**
- Um resumo do curso (resumos têm baixo valor percebido)
- Um PDF de slides (parece lazy, não parece bônus)
- Uma versão mais curta do mesmo conteúdo (canibaliza o curso)

**O ebook bônus É:**
- Um guia de referência rápida para uso durante e depois do curso
- Um conjunto de templates, checklists e prompts prontos para usar
- A "cola do especialista" — o que os profissionais experientes têm memorizado mas iniciantes precisam consultar

A diferença é posicionamento: o curso ensina o como e o porquê. O ebook é onde você consulta o quê fazer quando está no meio da tarefa e precisa de um prompt específico, de um checklist de revisão ou de um template de copy.

---

## A Estrutura do Ebook em 5 Seções

Para um curso de criação de infoprodutos com IA, a estrutura funcional do ebook:

**Seção 1 — Guia de Início Rápido (3-4 páginas)**
O essencial para ter o ambiente funcionando em 30 minutos. Lista de verificação com todos os passos de instalação e configuração do Claude Code, links diretos, comandos prontos para copiar e colar.

**Seção 2 — Os 20 Prompts Essenciais (8-10 páginas)**
Os 20 prompts mais usados ao longo do curso, formatados para cópia direta. Cada prompt com: contexto de uso, como adaptar para o seu tema, exemplo de output esperado.

**Seção 3 — Checklists de Produção (4-5 páginas)**
Checklist de validação de nicho, checklist de revisão de aula, checklist de lançamento na Kiwify, checklist de Meta Ads. Uma página por checklist, em formato de caixa de seleção.

**Seção 4 — Templates de Copy (8-10 páginas)**
Headline principal, 7 bullets de benefício, ancoragem de preço, bloco de garantia, FAQ padrão. Cada template com [PLACEHOLDERS] para preenchimento.

**Seção 5 — Cronograma de 7 Dias (2-3 páginas)**
O plano de ação para criar e publicar o primeiro curso em 7 dias usando as ferramentas do curso. Dia a dia, com tarefas específicas e estimativa de tempo.

---

## Gerando o Ebook com o Claude

### Passo 1: Gere o conteúdo em markdown

```
Crie o ebook bônus para o curso "[NOME DO CURSO]".

O ebook se chama "[TÍTULO DO GUIA]" e deve ter 5 seções:

1. GUIA DE INÍCIO RÁPIDO (3-4 páginas)
   Baseado nas instruções de setup do curso, crie um guia passo a passo
   para ter o ambiente funcionando em 30 minutos. Inclua todos os comandos
   necessários em blocos de código.

2. OS 20 PROMPTS ESSENCIAIS (8-10 páginas)
   Extraia os 20 prompts mais importantes de todo o curso em curso/modulo-*/
   Formate cada um com: título, contexto de uso, o prompt completo em 
   bloco de código, e 1 linha de dica de personalização.

3. CHECKLISTS DE PRODUÇÃO (4-5 páginas)
   Crie 4 checklists:
   - Validação de nicho (8-10 itens)
   - Revisão de aula (8 itens do checklist técnico)
   - Lançamento na Kiwify (10-12 itens)
   - Configuração de Meta Ads (8-10 itens)

4. TEMPLATES DE COPY (8-10 páginas)
   Baseado no curso/estrutura.md e no posicionamento do CLAUDE.md,
   crie templates para: headline, 7 bullets, ancoragem, garantia, FAQ

5. CRONOGRAMA DE 7 DIAS (2-3 páginas)
   Crie o plano de ação para criar e publicar o primeiro curso em 7 dias.
   Cada dia com: objetivo do dia, 3-5 tarefas específicas, tempo estimado.

Formate em markdown profissional, com hierarquia clara de títulos.
Salve em ebook/guia-rapido.md
```

### Passo 2: Gere a capa e metadados

```
Crie o conteúdo de capa para o ebook ebook/guia-rapido.md.
Adicione no início do arquivo:

- Título principal: [TÍTULO DO GUIA]
- Subtítulo: [benefício em 1 linha]
- Por [SEU NOME]
- "Material de apoio exclusivo do curso [NOME DO CURSO]"
- Data de criação: [data atual]
- Versão: 1.0

Mantenha o conteúdo existente após a capa.
```

### Passo 3: Converta para PDF

O Claude Code não converte para PDF diretamente, mas você tem duas opções:

**Opção A — Pandoc (linha de comando):**
```bash
npm install -g pandoc
pandoc ebook/guia-rapido.md -o ebook/guia-rapido.pdf \
  --pdf-engine=wkhtmltopdf \
  --margin-top=20mm --margin-bottom=20mm \
  --margin-left=25mm --margin-right=25mm
```

**Opção B — Notion/Google Docs (manual):**
Cole o markdown no Notion, selecione tudo, exporte como PDF. O Notion renderiza markdown corretamente e o PDF resultante é profissional.

**Opção C — VS Code + extensão Markdown PDF:**
Instale a extensão "Markdown PDF" no VS Code, abra `ebook/guia-rapido.md`, pressione `Ctrl+Shift+P` → "Markdown PDF: Export (pdf)".

---

## Checklist de Qualidade do Ebook

Antes de subir o PDF na Kiwify como material bônus, verifique:

```
Revise o arquivo ebook/guia-rapido.md como se fosse um comprador que 
acabou de receber o ebook.

Verifique:
1. Os prompts da Seção 2 estão prontos para copiar e colar diretamente? 
   Ou precisam de ajuste antes de usar?
2. Os checklists estão específicos o suficiente ou são genéricos demais?
3. Os templates de copy têm placeholders claros marcados com [COLCHETES]?
4. O Cronograma de 7 Dias é realista para alguém com 2-3 horas por dia?
5. Existe alguma seção que parece incompleta ou que promete mais do que entrega?

Liste todos os problemas encontrados com indicação de qual seção afeta.
```

---

## O Bônus Que Vira Produto Separado

Um ebook bem estruturado pode ser vendido separadamente como produto de entrada — por R$27-47. Muitos criadores usam essa estratégia: o ebook é o produto mais barato, que apresenta o criador ao público, e o upsell é o curso completo.

Se você planeja essa estratégia, adicione ao CLAUDE.md:

```markdown
## Estratégia de Produto
- Produto de entrada: [TÍTULO DO EBOOK] (R$27-47) — vende direto para 
  novos seguidores sem qualificação prévia
- Produto principal: [NOME DO CURSO] (R$97-297) — upsell após compra do ebook
- Sequência de email: o comprador do ebook recebe sequência de 3 emails 
  com conteúdo de valor + oferta do curso
```

Isso cria um funil de dois estágios: o ebook qualifica o comprador e demonstra sua competência, o curso converte os mais engajados.

---

## Exercício Prático

1. Execute o Passo 1 para gerar o conteúdo completo do ebook em `ebook/guia-rapido.md`
2. Execute o Passo 2 para adicionar a capa
3. Aplique o Checklist de Qualidade e corrija os problemas encontrados
4. Converta para PDF usando uma das 3 opções
5. Abra o PDF e revise visualmente — verifique se a formatação está legível em todas as seções
6. Decida: vai usar só como bônus do curso ou também como produto de entrada separado? Atualize o CLAUDE.md com a estratégia escolhida

Quando o PDF estiver aprovado, salve-o em `ebook/guia-rapido.pdf`. Esse arquivo será configurado como entregável na Kiwify no Módulo 7.

---

## Dicas e Pontos de Atenção

> **Sobre o tamanho ideal:** 25-40 páginas é o range ideal para um ebook de referência. Menos de 20 páginas parece raso. Mais de 50 páginas perde a proposta de "guia rápido". Se o Claude gerar mais de 50 páginas, peça para compactar as seções menos densas — checklists e templates podem ser apresentados mais enxutos sem perder valor.

> **Ponto de atenção — prompts desatualizados:** Os 20 prompts da Seção 2 devem ser os prompts exatos do curso, testados e aprovados. Não deixe o Claude inferir prompts genéricos — peça explicitamente para extrair os prompts dos arquivos de aulas que você já tem em `curso/modulo-*/`. Prompts que não funcionam como prometido destroem a credibilidade do ebook.

> **Design simples supera design elaborado:** Um ebook com markdown bem estruturado e convertido para PDF limpo performa melhor do que um PDF super-elaborado com imagens e design complexo. O comprador quer conteúdo usável rapidamente, não impressão visual. Não perca tempo com design — invista no conteúdo.
