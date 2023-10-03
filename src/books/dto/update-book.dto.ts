import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsEmpty,
  IsOptional,
} from 'class-validator';

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
}
