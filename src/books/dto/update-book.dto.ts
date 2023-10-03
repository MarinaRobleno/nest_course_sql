import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsEmpty,
  IsOptional,
} from 'class-validator';
import { User } from 'src/users/users.entity';

export class UpdateBookDto {
  @IsEmpty({ message: 'ID must be empty' })
  id: string;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsString()
  author: string;

  @IsEmpty({ message: 'ID must be empty' })
  user: User;
}
