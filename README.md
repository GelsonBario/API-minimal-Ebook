# API-minimal-Ebook
API de livros

Uma API simples para gerenciar livros, construída com Node.js, Fastify e TypeScript, com a ajuda do professor Felipão Aguiar.

Descrição

Este projeto é uma API RESTful que permite a criação, leitura, atualização e exclusão de livros. Utilize um banco de dados em memória para armazenar os livros e forneça endpoints para interagir com esses dados.

Tecnologias Utilizadas

Node.js : Ambiente de execução para JavaScript no lado do servidor.

Fastify : Framework web altamente eficiente para construir APIs.

TypeScript : Superset de JavaScript que adiciona tipagem estática.

Tsup : Ferramenta de empacotamento para compilação TypeScript.

@fastify/cors : Plugin para gerenciar Cross-Origin Resource Sharing (CORS).

Estrutura do Projeto
src/ : Diretório onde o código-fonte da aplicação está localizado.

lib/database.ts : Implementação do banco de dados em memória.

Routes.ts : Definição das rotas da API.

server.ts : Ponto de entrada da aplicação, onde o servidor Fastify é configurado e iniciado.

package.json : Gerenciador de dependências e scripts do projeto.

package-lock.json : Bloqueio de versão das dependências.

tsconfig.json : Configurações do compilador TypeScript.

.env.txt : Variáveis de ambiente para configuração do servidor.

.gitignore.txt : Arquivo que especifica quais arquivos e pastas devem ser ignorados pelo Git.

Instalação

Clone ou repositório:

festança

Copiar
git clone <url-do-repositorio>
cd books-api
Instalar as dependências:

festança

Copiar
npm install
Renomeie o arquivo .env.txtpara .envcarregar as variáveis de ambiente:

festança

Copiar
mv .env.txt .env

Roteiros

npm run dist : Compila o código TypeScript para JavaScript no diretório dist.

npm run start:dev : Inicia o servidor em modo de desenvolvimento, exibindo alterações nos arquivos.

npm run start:watch : Inicia o servidor em modo de observação.

npm run start : Inicia o servidor a partir dos arquivos compilados.

npm run build-and-start : Compila o projeto e inicia o servidor.

Pontos finais
GET /books : Lista todos os livros.

GET /books/:id : Obtém um livro específico pelo ID.

POST /books : Cria um novo livro.

PUT /books/:id : Atualiza um livro existente pelo ID.

DELETE /books/:id : Exclui um livro pelo ID.
