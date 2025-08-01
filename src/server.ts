import fastify from "fastify";
import cors from "@fastify/cors";
import { booksRoutes } from "./routes";

// Carrega as variáveis de ambiente
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3333;
const HOST = process.env.HOST || '127.0.0.1';

// Cria a instância do servidor com logger
const app = fastify({ logger: true });

// Registra o plugin de CORS
app.register(cors, {
    origin: "*", // Em produção, restrinja para origens confiáveis
});

// Registra as rotas de livros
app.register(booksRoutes);

// Função para iniciar o servidor
const start = async () => {
    try {
        await app.listen({ port: PORT, host: HOST });
        app.log.info(`Server listening on http://${HOST}:${PORT}`);
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};

start();