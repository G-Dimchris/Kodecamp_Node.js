import { IsString, IsNotEmpty, IsIn, IsOptional } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  @IsIn(['pending', 'in-progress', 'completed'])
  status?: 'pending' | 'in-progress' | 'completed';
}