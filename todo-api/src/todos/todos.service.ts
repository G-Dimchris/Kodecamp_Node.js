import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Todo } from './todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: string): Todo {
    const todo = this.todos.find(todo => todo.id === id);
    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    return todo;
  }

  create(createTodoDto: CreateTodoDto): Todo {
    const newTodo = new Todo({
      id: uuidv4(),
      title: createTodoDto.title,
      description: createTodoDto.description,
      status: createTodoDto.status || 'pending',
    });
    this.todos.push(newTodo);
    return newTodo;
  }

  update(id: string, updateTodoDto: UpdateTodoDto): Todo {
    const todoIndex = this.todos.findIndex(todo => todo.id === id);
    
    if (todoIndex === -1) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }

    const existingTodo = this.todos[todoIndex];
    
    // Update only the fields that are provided
    const updatedTodo = {
      ...existingTodo,
      ...updateTodoDto,
      updatedAt: new Date(),
    };

    this.todos[todoIndex] = updatedTodo;
    return updatedTodo;
  }

  remove(id: string): { message: string } {
    const todoIndex = this.todos.findIndex(todo => todo.id === id);
    
    if (todoIndex === -1) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }

    this.todos.splice(todoIndex, 1);
    return { message: `Todo with ID ${id} deleted successfully` };
  }
}