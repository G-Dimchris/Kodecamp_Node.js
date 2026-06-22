import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './todo.entity';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    findAll(): Todo[];
    findOne(id: string): Todo;
    create(createTodoDto: CreateTodoDto): Todo;
    update(id: string, updateTodoDto: UpdateTodoDto): Todo;
    remove(id: string): {
        message: string;
    };
}
