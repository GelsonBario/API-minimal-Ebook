import { randomUUID } from "node:crypto";

// Interface para definir a estrutura de um livro
export interface Book {
  id: string;
  title: string;
  author: string;
  year: number;
}

// Classe para gerenciar o banco de dados em memória
class DatabaseMemory {
  #books: Map<string, Book> = new Map();

  constructor() {
    // Adiciona alguns livros iniciais
    const book1 = { id: randomUUID(), title: "O Senhor dos Anéis", author: "J.R.R. Tolkien", year: 1954 };
    const book2 = { id: randomUUID(), title: "O Hobbit", author: "J.R.R. Tolkien", year: 1937 };
    const book3 = { id: randomUUID(), title: "1984", author: "George Orwell", year: 1949 };
    
    this.#books.set(book1.id, book1);
    this.#books.set(book2.id, book2);
    this.#books.set(book3.id, book3);
  }

  list() {
    return Array.from(this.#books.values());
  }

  create(book: Omit<Book, 'id'>) {
    const bookId = randomUUID();
    const newBook = { id: bookId, ...book };
    this.#books.set(bookId, newBook);
    return newBook;
  }

  update(id: string, book: Partial<Omit<Book, 'id'>>) {
    const currentBook = this.#books.get(id);
    if (!currentBook) {
        return null;
    }
    const updatedBook = { ...currentBook, ...book };
    this.#books.set(id, updatedBook);
    return updatedBook;
  }

  delete(id: string) {
    if (this.#books.has(id)) {
      this.#books.delete(id);
      return true;
    }
    return false;
  }

  getById(id: string) {
    return this.#books.get(id);
  }
}

export const database = new DatabaseMemory();