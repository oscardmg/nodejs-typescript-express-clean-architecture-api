import { InMemoryBookRepository } from './repositories/inMemoryBookRepository';
import { GetAllBooks } from '../use-cases/getAllBooks';
import { MongoBookRepository } from './repositories/mongoBookRepository';

class DIContainer {
  // private static _bookRepository = new InMemoryBookRepository();
  private static _bookRepository = new MongoBookRepository();

  static getBookRepository() {
    return this._bookRepository;
  }

  static getGetAllBooksUseCase() {
    return new GetAllBooks(this.getBookRepository());
  }
}

export { DIContainer };
