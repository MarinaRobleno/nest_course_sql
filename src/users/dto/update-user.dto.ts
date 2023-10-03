import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsEmpty,
  IsOptional,
} from 'class-validator';
import { Book } from 'src/books/book.entity';

export class UpdateUserDto {
  @IsEmpty({ message: 'ID must be empty' })
  id: string;

  @IsOptional()
  @IsString()
  email: string;

  @IsOptional()
  @IsNumber()
  password: string;

  @IsEmpty({ message: 'ID must be empty' })
  books: Book[];
}
