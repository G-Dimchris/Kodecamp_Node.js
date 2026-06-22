import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): { message: string } {
    return this.todoService.remove(id);
  }
}

/*
  1. A resource controller in NestJS is a class that handles incoming HTTP requests and returns responses to the client. It is decorated with the @Controller() decorator, which defines the base route for all the endpoints in that controller.
  2. The @Post() decorator is used to define a route that handles HTTP POST requests. In this case, it is used to create a new todo item.
  3. The @Get() decorator is used to define a route that handles HTTP GET requests. It is used to retrieve all todo items or a specific todo item by its ID.
  4. The @Put() decorator is used to define a route that handles HTTP PUT requests. It is used to update an existing todo item by its ID.
  5. The @Delete() decorator is used to define a route that handles HTTP DELETE requests. It is used to delete a specific todo item by its ID.
*/