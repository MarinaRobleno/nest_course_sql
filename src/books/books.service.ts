import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  // get all books
  async findAll(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  // get a book by id
  async findOne(id: string): Promise<Book> {
    const book = this.booksRepository.findOne({ where: { id } });

    if (!book) {
      throw new NotFoundException('Book not found');
    }

    return book;
  }

  // create a new book
  async create(book: Book): Promise<Book> {
    const newBook = this.booksRepository.create({
      name: book.name,
      price: book.price,
      author: book.author,
    });

    return this.booksRepository.save(newBook);
  }

  // update a book
  async update(id: string, book: Book): Promise<Book> {
    const updateBook = await this.booksRepository.preload({
      id: id,
      name: book.name,
      price: book.price,
    });

    if (!updateBook) {
      throw new NotFoundException('Book not found');
    }

    return this.booksRepository.save(updateBook);
  }

  // delete a book
  async delete(id: string): Promise<{ deleted: Boolean }> {
    const book = await this.booksRepository.findOne({ where: { id } });

    if (!book) {
      throw new NotFoundException('Book not found');
    }

    this.booksRepository.remove(book);

    return { deleted: true };
  }
}
