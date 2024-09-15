## Introdução

Este é um projeto desenvolvido com [Next.js](https://nextjs.org) e a api [FakeStoreAPI](https://fakestoreapi.in/).
Eu nunca usei o Jest no Next e não consegui configurar ele em tempo hábil para entregar o teste (minhas tentativas estão registradas na branch feature/jest).
Para não ficar sem testes, usei o [Cypress](www.cypress.io), que é o que eu uso no dia a dia e sei configurar.
Ao longo das instruções abaixo está escrito como executar os testes no Cypress.
Não consegui fazer muitos porque depois do tempo que eu gastei tentando configurar o Jest, realmente não sobrou muito tempo pra fazer uma grande cobertura de testes.
Mas o do product-view tá completinho.

A api não tem filtro por descrição, então fiz o filtro local (no front).
A api tem filtro para categoria mas eu não tinha certeza se era para filtrar fazendo a request na api, então fiz local também.

Não coloquei a baseUrl em uma variável de ambiente para não complicar o processo de rodar e publicar o app.

Se meu teste não puder ser considerado por causa dessas coisas, eu entendo totalmente =)

### Projeto publicado na Vercel

[https://myside-gyq4.vercel.app/](https://myside-gyq4.vercel.app/)

### Requisitos

Antes de começar, você precisará ter o seguinte instalado:

Node.js (versão LTS recomendada)
npm ou Yarn

## Instalação

Siga os passos abaixo para instalar as dependências e rodar o projeto localmente:

### Clone o repositório:

```bash
git clone https://github.com/fernandamaiait/myside.git
```

Entre no diretório do projeto:

```bash
cd myside
```

### Instale as dependências:

Com npm:

```bash
npm install
```

com Yarn:

```bash
yarn
```

### Executando o Projeto Localmente

Para rodar o servidor de desenvolvimento do Next.js, execute:

Com npm:

```bash
npm run dev
```

Ou com Yarn:

```bash
yarn dev
```

O projeto estará disponível em: [http://localhost:3000](http://localhost:3000).

### Build de Produção

Para gerar uma build otimizada para produção, execute:

Com npm:

```bash
npm run build
```

Ou com Yarn:

```bash
yarn build
```

Após a build, você pode iniciar a aplicação com:

```bash
npm start
```

Ou:

```bash
yarn start
```

### Rodando os Testes com Cypress

Para rodar os testes, siga os passos abaixo:

Abrir a interface gráfica do Cypress:

Com npm:

```bash
npm run cypress:open
```

Ou com Yarn:

```bash
yarn cypress:open
```

Isso abrirá o Cypress Test Runner, onde você pode selecionar e executar os testes de forma interativa.

Executar os testes em modo headless (linha de comando):

Com npm:

```bash
npm run cypress:run
```

Ou com Yarn:

```bash
yarn cypress:run
```

Isso executará todos os testes em modo headless (sem abrir o navegador).

Obrigada pela oportunidade ;)
