import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodoService {
    private todos;
    findAll(): Todo[];
    findOne(id: string): Todo;
    create(createTodoDto: CreateTodoDto): Todo;
    update(id: string, updateTodoDto: UpdateTodoDto): Todo;
    remove(id: string): {
        message: string;
    };
}
