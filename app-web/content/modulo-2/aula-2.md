# Aula 2.2 — Instalação e Configuração do Claude Code do Zero (Windows, Mac e Linux)

## O Que Você Vai Ter ao Final Desta Aula

Ao final desta aula, você vai ter o Claude Code v2.1.92 instalado e funcionando no seu computador, autenticado com sua conta Claude Pro, rodando o Opus 4.6 com janela de 1M tokens, e pronto para criar seu primeiro projeto.

Antes de começar, confirme que tem:
- Uma conta Claude Pro (claude.ai/settings/billing) — plano Pro (US$20/mês) ou superior
- Node.js instalado (versão 18+ recomendada — verifique com `node --version`)
- VS Code ou Cursor instalado (opcional, mas recomendado)
- Terminal aberto (Windows PowerShell, Mac Terminal ou Linux Bash)

---

## Passo 1: Instalação do Claude Code CLI

O Claude Code é instalado como um pacote npm global. Abra o terminal e execute:

```bash
npm install -g @anthropic-ai/claude-code
```

Aguarde a instalação completar (1-3 minutos dependendo da sua conexão). Após concluir, verifique se instalou corretamente:

```bash
claude --version
```

A saída deve mostrar `2.1.92` ou superior. Se aparecer uma versão mais antiga, execute `npm update -g @anthropic-ai/claude-code` para atualizar.

**Problema comum no Windows:** se o comando `claude` não for reconhecido após a instalação, você precisa adicionar o diretório npm ao PATH do sistema. Execute no PowerShell (como administrador):

```powershell
$env:PATH += ";$env:APPDATA\npm"
```

Para tornar permanente, adicione essa linha ao seu perfil do PowerShell (`$PROFILE`).

**Problema comum no Mac:** se aparecer erro de permissão, use `sudo npm install -g @anthropic-ai/claude-code` ou configure o npm para não precisar de sudo (recomendado — pesquise "npm fix permissions mac").

---

## Passo 2: Autenticação com Sua Conta Claude

Com o CLI instalado, autentique com sua conta:

```bash
claude login
```

Isso vai abrir o navegador para autenticação OAuth com a Anthropic. Faça login com a mesma conta do seu plano Pro. Após autorizar, volte ao terminal — você verá a confirmação de login.

Para verificar que está usando o modelo correto (Opus 4.6 com 1M tokens):

```bash
claude --model claude-opus-4-6 --print "Qual é seu nome e qual modelo você é?"
```

A resposta deve confirmar que você está usando o Claude Opus 4.6.

---

## Passo 3: Seu Primeiro Projeto Claude Code

Crie a pasta do seu projeto de infoprodutos:

```bash
# Windows
mkdir C:\Projetos\meu-infoproduto
cd C:\Projetos\meu-infoproduto

# Mac / Linux
mkdir ~/Projetos/meu-infoproduto
cd ~/Projetos/meu-infoproduto
```

Inicie o Claude Code dentro da pasta do projeto:

```bash
claude
```

Você verá o prompt do Claude Code no terminal. Isso é seu ambiente de trabalho. Qualquer coisa que você digitar aqui vai ser processada pelo Claude com acesso ao sistema de arquivos da pasta atual.

Teste básico:

```
Crie um arquivo teste.md com o texto "Hello, Fábrica de Infoprodutos!"
```

Verifique que o arquivo foi criado:

```bash
cat teste.md  # Mac/Linux
type teste.md  # Windows
```

Se aparecer o conteúdo esperado, seu ambiente está funcionando. Delete o arquivo de teste:

```bash
rm teste.md  # Mac/Linux
del teste.md  # Windows
```

---

## Passo 4: Configuração no VS Code (Recomendado)

Trabalhar no terminal é funcional, mas o VS Code oferece uma experiência superior: você vê os arquivos sendo criados em tempo real, tem sintaxe colorida nos markdowns e pode editar manualmente os outputs do Claude sem sair do ambiente.

**Instale a extensão Claude Code no VS Code:**

1. Abra o VS Code
2. Pressione `Ctrl+Shift+X` (Windows/Linux) ou `Cmd+Shift+X` (Mac) para abrir as extensões
3. Pesquise "Claude Code" (extensão oficial da Anthropic)
4. Instale e recarregue o VS Code

**Abra seu projeto no VS Code:**

```bash
code C:\Projetos\meu-infoproduto  # Windows
code ~/Projetos/meu-infoproduto   # Mac/Linux
```

Agora você verá o Claude Code como um painel integrado no VS Code. O terminal integrado do VS Code também funciona — você pode rodar `claude` diretamente do terminal do VS Code.

**Configuração recomendada do VS Code para este curso:**

Abra as configurações (`Ctrl+,`), pesquise "Auto Save" e mude para "afterDelay" com delay de 1000ms. Isso salva os arquivos automaticamente enquanto o Claude escreve, permitindo ver as mudanças em tempo real.

---

## Passo 5: Configuração do Cursor (Alternativa ao VS Code)

O Cursor é uma IDE construída sobre o VS Code com suporte nativo a IA mais profundo. Se você preferir, use o Cursor em vez do VS Code — o Claude Code funciona igualmente bem em ambos.

Para instalar o Claude Code no Cursor:
1. Abra o Cursor
2. `Ctrl+Shift+P` → "Extensions: Install Extensions"
3. Pesquise "Claude Code" → instale

A configuração é idêntica ao VS Code.

---

## Passo 6: Estrutura de Pastas do Projeto de Infoprodutos

Dentro da pasta do seu projeto, crie a estrutura que vai organizar toda a produção:

```bash
claude
```

No Claude Code, execute:

```
Crie a seguinte estrutura de pastas para um projeto de infoproduto:
- curso/ (para as aulas em markdown)
- pagina-vendas/ (para a landing page HTML)
- emails/ (para a sequência de lançamento)
- criativos/ (para os textos de anúncios)
- ebook/ (para o ebook bônus)
- app-web/ (para o Next.js app)
- kiwify/ (para documentação da configuração)
- .claude/skills/ (para as Skills personalizadas)

Crie um arquivo .gitkeep em cada pasta para que apareçam no Git.
Crie também um .gitignore com: node_modules/, .DS_Store, *.log, .next/, out/
```

Em menos de 30 segundos, toda a estrutura estará criada.

---

## Verificação Final: Seu Ambiente Está Pronto

Execute este checklist para confirmar que tudo está funcionando:

- [ ] `claude --version` retorna 2.1.92 ou superior
- [ ] `claude login` completado com conta Pro
- [ ] Pasta do projeto criada
- [ ] Claude Code funciona dentro da pasta (cria arquivos quando pedido)
- [ ] VS Code/Cursor com extensão instalada
- [ ] Estrutura de pastas do projeto criada

Se tudo estiver marcado, você está pronto para a próxima aula: criar o CLAUDE.md.

---

## Exercício Prático

Com o ambiente funcionando:

1. Abra o Claude Code na pasta do seu projeto
2. Peça ao Claude: *"Liste todos os arquivos e pastas criados neste projeto e me diga o que cada uma vai conter"*
3. O Claude vai ler a estrutura e descrever o propósito de cada pasta
4. Salve essa descrição em um arquivo `README.md` na raiz do projeto

Esse README vai ser o mapa do seu projeto — útil para quando você retornar após alguns dias e precisar se orientar rapidamente.

---

## Dicas e Pontos de Atenção

> **Sobre Node.js:** Se você não tem o Node.js instalado, baixe a versão LTS mais recente em nodejs.org. Em abril de 2026, a versão LTS é 22.x. O Claude Code exige Node.js 18+, mas recomendamos usar a versão mais recente para evitar incompatibilidades.

> **Ponto de atenção — Windows:** O Claude Code funciona melhor no Windows com o Windows Subsystem for Linux (WSL2) ativado. Se você encontrar problemas de caminho de arquivo ou permissão no PowerShell, considere instalar o WSL2 e usar o Ubuntu integrado. As instruções para WSL2 estão na documentação oficial do Claude Code em docs.anthropic.com/claude-code.

> **Atalho de produtividade:** Configure um alias no seu terminal para abrir o projeto rapidamente. No Mac/Linux, adicione ao seu `.bashrc` ou `.zshrc`: `alias fab='cd ~/Projetos/meu-infoproduto && claude'`. No Windows PowerShell, adicione ao `$PROFILE`: `function fab { cd C:\Projetos\meu-infoproduto; claude }`. Com isso, um único comando `fab` abre seu ambiente de trabalho completo.
