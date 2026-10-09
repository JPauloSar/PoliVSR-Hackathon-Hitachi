Aqui está um rascunho de `README.md` feito sob medida para a dinâmica atual da equipe (All Hands on Deck). Ele foca no essencial para que qualquer pessoa do grupo consiga rodar o site, fazer alterações e subir para a Vercel sem quebrar o projeto.

```markdown:README.md
# PoliVSR - Hackathon Hitachi 2026 ⚡

Bem-vindos ao repositório do **PoliVSR**! Este é o código-fonte do nosso site de validação técnica e econômica para a introdução do Variable Shunt Reactor (VSR) no Brasil.

Como estamos na reta final e operando no modelo *"All Hands on Deck"* (todo mundo ajudando onde pode), este guia rápido serve para mantermos a organização básica sem perder a agilidade.

---

## 🛠️ Como rodar o site no seu computador

Para fazer alterações e ver como o site fica antes de mandar para o ar, siga os passos abaixo. (Certifique-se de ter o [Node.js](https://nodejs.org/) instalado).

1. **Clone o repositório e entre na pasta:**
   
```bash
   git clone [COLE O LINK DO REPOSITÓRIO AQUI]
   cd [NOME DA PASTA DO PROJETO]
   

```

2. **Instale as dependências:**
Isso vai baixar todas as bibliotecas necessárias para o site funcionar.

```bash
   npm install
   

```

3. **Rode o servidor de desenvolvimento:**

```bash
   npm run dev
   

```

Abra o seu navegador e acesse `http://localhost:3000`. Agora, toda vez que você salvar um arquivo, o site atualizará automaticamente na sua tela!

---

## 🤝 Boas Práticas (Dinâmica Reta Final)

Como **não** estamos usando regras rígidas de proteção de branch para ir mais rápido, precisamos de muito cuidado para um não sobrescrever o trabalho do outro. Sigam estas regras de ouro:

1. **SEMPRE puxe as atualizações antes de começar a mexer:**
Antes de digitar qualquer linha de código no seu turno, atualize sua máquina com o que os outros já fizeram:

```bash
   git pull origin main
   

```

2. **Mensagens de Commit claras:**
Escreva o que você fez para que o resto do grupo entenda rápido olhando o histórico. Usem estes prefixos:
* `feat:` (se adicionou algo novo. Ex: `feat: adiciona aba de calculo de OPEX`)
* `fix:` (se consertou um erro. Ex: `fix: corrige texto sobre efeito ferranti`)
* `style:` (se mudou apenas visual. Ex: `style: ajusta cor do botão do VSR`)


3. **Arquivos Proibidos:**
**NUNCA** suba arquivos que terminam com `.env` ou pastas como `node_modules/`. O arquivo `.gitignore` já está configurado para barrar isso, então por favor, não alterem o `.gitignore`.

---

## 🚀 Como atualizar o site oficial (Deploy na Vercel)

A mágica da Vercel é que ela está conectada diretamente a este repositório do GitHub. Você não precisa fazer login na Vercel para atualizar o site!

Para colocar a sua nova versão no ar, basta enviar suas alterações para a branch `main` aqui no GitHub:

1. **Adicione seus arquivos:**

```bash
   git add .
   

```

2. **Faça o commit:**

```bash
   git commit -m "feat: atualiza texto da proposta de valor"
   

```

3. **Envie para o GitHub:**

```bash
   git push origin main
   

```

**E pronto!** Assim que o comando `git push` terminar, a Vercel vai detectar a mudança automaticamente, construir o site e colocar a nova versão no ar em poucos minutos.

🔗 **Link do site no ar:** https://polivsr.vercel.app

