import { Router } from 'express';
import { InMemoryBookRepository } from '../../infrastructure/repositories/inMemoryBookRepository';
import { GetAllBooks } from '../../use-cases/getAllBooks';
import { BookController } from '../controllers/bookController';
import { authenticateToken } from '../middleware/auth';

const router = Router();

const bookRepository = new InMemoryBookRepository();
const getAllBooks = new GetAllBooks(bookRepository);
const bookController = new BookController();

router.get('/books', authenticateToken, (req, res) =>
  bookController.getAll(req, res)
);

export { router as bookRoutes };
