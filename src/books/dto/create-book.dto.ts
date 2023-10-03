import { IsNotEmpty, IsString, IsNumber, IsEmpty } from 'class-validator';
import { User } from 'src/users/users.entity';

export class CreateBookDto {
  @IsEmpty({ message: 'ID must be empty' })
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsEmpty({ message: 'ID must be empty' })
  user: User;
}
