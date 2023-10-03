import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './book.entity';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  async findAll(): Promise<Book[]> {
    return this.booksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Book> {
    return this.booksService.findOne(id);
  }

  @Post()
  async create(@Body() book: CreateBookDto): Promise<Book> {
    return this.booksService.create(book);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() book: UpdateBookDto,
  ): Promise<Book> {
    return this.booksService.update(id, book);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ deleted: Boolean }> {
    return this.booksService.delete(id);
  }
}
