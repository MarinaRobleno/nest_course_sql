import { IsNotEmpty, IsString, IsNumber, IsEmpty } from 'class-validator';

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
}
