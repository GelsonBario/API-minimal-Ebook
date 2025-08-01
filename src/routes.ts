import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { database, Book } from './lib/database';

// Schema para validação dos parâmetros de rota (UUID)
const paramsSchema = {
  type: 'object',
  properties: {
    id: { type: 'string', format: 'uuid' }
  },
  required: ['id']
};

// Schema para validação do corpo da requisição de criação
const createBodySchema = {
    type: 'object',
    properties: {
        title: { type: 'string' },
        author: { type: 'string' },
        year: { type: 'number' }
    },
    required: ['title', 'author', 'year']
};

// Schema para validação do corpo da requisição de atualização
const updateBodySchema = {
    type: 'object',
    properties: {
        title: { type: 'string' },
        author: { type: 'string' },
        year: { type: 'number' }
    },
    // Nenhum campo é obrigatório na atualização
};


export async function booksRoutes(app: FastifyInstance) {

  // Rota para listar todos os livros
  app.get('/books', async (request: FastifyRequest, reply: FastifyReply) => {
    const books = database.list();
    return reply.send(books);
  });

  // Rota para obter um livro por ID
  app.get('/books/:id', { schema: { params: paramsSchema } }, async (request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
    const book = database.getById(request.params.id);
    if (!book) {
      return reply.status(404).send({ message: 'Book not found' });
    }
    return reply.send(book);
  });

  // Rota para criar um novo livro
  app.post<{ Body: Omit<Book, 'id'> }>('/books', { schema: { body: createBodySchema } }, async (request, reply) => {
    const newBook = database.create(request.body);
    return reply.status(201).send(newBook);
  });

  // Rota para atualizar um livro
  app.put<{ Body: Partial<Omit<Book, 'id'>>, Params: { id: string } }>('/books/:id', { schema: { params: paramsSchema, body: updateBodySchema } }, async (request, reply) => {
    const updatedBook = database.update(request.params.id, request.body);
    if (!updatedBook) {
      return reply.status(404).send({ message: 'Book not found' });
    }
    return reply.send(updatedBook);
  });

  // Rota para deletar um livro
  app.delete<{ Params: { id: string } }>('/books/:id', { schema: { params: paramsSchema } }, async (request, reply) => {
    const success = database.delete(request.params.id);
    if (!success) {
      return reply.status(404).send({ message: 'Book not found' });
    }
    return reply.status(204).send(); // 204 No Content
  });
}