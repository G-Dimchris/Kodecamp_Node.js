import { IsString, IsOptional, IsIn, IsNotEmpty } from 'class-validator';

export class UpdateTodoDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description?: string;

  @IsOptional()
  @IsIn(['pending', 'in-progress', 'completed'])
  status?: 'pending' | 'in-progress' | 'completed';
}