import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsEmpty,
  IsOptional,
} from 'class-validator';

export class UpdateUserDto {
  @IsEmpty({ message: 'ID must be empty' })
  id: string;

  @IsOptional()
  @IsString()
  email: string;

  @IsOptional()
  @IsNumber()
  password: string;
}
