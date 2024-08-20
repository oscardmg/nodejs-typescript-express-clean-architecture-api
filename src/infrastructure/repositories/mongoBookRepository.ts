import { Book } from '../../domain/entities/book';
import { BookRepository } from '../../domain/interfaces/bookRepository';
import { BookModel } from '../models/bookModel';

export class MongoBookRepository implements BookRepository {
  async findAll(): Promise<Book[]> {
    return await BookModel.find();
  }

  async findById(id: string): Promise<Book | null> {
    return await BookModel.findById(id);
  }

  async create(book: Book): Promise<Book> {
    const newBook = new BookModel(book);
    await newBook.save();
    return {
      id: newBook.id,
      title: newBook.title,
      author: newBook.author,
      publishedDate: newBook.publishedDate,
    };
  }

  async update(book: Book): Promise<void> {
    await BookModel.findByIdAndUpdate(book.id, book);
  }

  async delete(id: string): Promise<void> {
    await BookModel.findByIdAndDelete(id);
  }
}
