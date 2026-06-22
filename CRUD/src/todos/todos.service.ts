import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';


@Injectable()
export class TodoService {
  
  Todo = [];

  findAllTodos() {
    return this.users;
  }

  getUserById(id: string) {
    return "User by ID";
  }
}