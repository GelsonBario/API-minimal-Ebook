Books API 📚

Uma API RESTful simples para gerenciar livros, construída com Node.js, Fastify e TypeScript. Este projeto utiliza um banco de dados em memória para simplicidade e demonstração.

✨ Funcionalidades

CRUD Completo: Crie, Leia, Atualize e Delete livros.

Validação de Dados: Utiliza schemas do Fastify para validar os dados de entrada nas rotas.

Banco de Dados em Memória: Nenhuma configuração de banco de dados externo é necessária.

Desenvolvimento Moderno: Configurado com TypeScript e tsx para uma experiência de desenvolvimento rápida com hot-reload.

🛠️ Tecnologias Utilizadas

Node.js: Ambiente de execução JavaScript.

Fastify: Framework web de alta performance.

TypeScript: Superset de JavaScript com tipagem estática.

tsx: Executor de TypeScript para Node.js focado em performance.

tsup: Ferramenta para empacotar (bundle) código TypeScript.

@fastify/cors: Plugin para habilitar CORS.

🚀 Começando

Siga os passos abaixo para ter o projeto rodando em sua máquina local.

Pré-requisitos

Node.js (versão 18 ou superior)

npm (geralmente vem com o Node.js)

Instalação e Execução

Clone o repositório:

Bash

git clone https://github.com/SEU-USUARIO/books-api.git
cd books-api

Instale as dependências:

Bash

npm install

Inicie o servidor em modo de desenvolvimento:

Bash

npm run start:dev

O servidor será iniciado em http://localhost:3333 e será reiniciado automaticamente a cada alteração nos arquivos.

📜 Scripts Disponíveis

npm run start:dev: Inicia o servidor em modo de desenvolvimento com hot-reload.

npm run dist: Compila o código TypeScript para JavaScript (gera a pasta dist).

npm start: Inicia o servidor em modo de produção (requer a execução prévia do script dist).

npm run build-and-start: Executa o build e inicia o servidor em produção.

🛣️ Endpoints da API

A API fornece os seguintes endpoints para gerenciar os livros:

Método	Rota	Descrição	Corpo da Requisição (Exemplo)

GET	/books	Retorna uma lista de todos os livros.	N/A

GET	/books/:id	Retorna um livro específico pelo seu UUID.	N/A

POST	/books	Cria um novo livro.	{ "title": "...", "author": "...", "year": 2024 }

PUT	/books/:id	Atualiza um livro existente.	{ "title": "...", "author": "...", "year": 2025 }

DELETE	/books/:id	Deleta um livro pelo seu UUID.	N/A
