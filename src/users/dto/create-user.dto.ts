import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsEmpty,
  IsOptional,
} from 'class-validator';
import { Book } from 'src/books/book.entity';

export class CreateUserDto {
  @IsEmpty({ message: 'ID must be empty' })
  id: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsNumber()
  password: string;

  @IsEmpty({ message: 'ID must be empty' })
  books: Book[];
}
