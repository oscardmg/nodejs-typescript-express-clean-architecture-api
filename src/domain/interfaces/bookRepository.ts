// src/domain/interfaces/BookRepository.ts
import { Book } from '../entities/book';

export interface BookRepository {
  findAll(): Promise<Book[]>;
  findById(id: string): Promise<Book | null>;
  create(book: Book): Promise<Book>;
  update(book: Book): Promise<void>;
  delete(id: string): Promise<void>;
}
