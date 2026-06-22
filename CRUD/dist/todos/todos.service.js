"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const todo_entity_1 = require("./entities/todo.entity");
let TodoService = class TodoService {
    constructor() {
        this.todos = [];
    }
    findAll() {
        return this.todos;
    }
    findOne(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (!todo) {
            throw new common_1.NotFoundException(`Todo with ID ${id} not found`);
        }
        return todo;
    }
    create(createTodoDto) {
        const newTodo = new todo_entity_1.Todo({
            id: uuidv4(),
            title: createTodoDto.title,
            description: createTodoDto.description,
            status: createTodoDto.status || 'pending',
        });
        this.todos.push(newTodo);
        return newTodo;
    }
    update(id, updateTodoDto) {
        const todoIndex = this.todos.findIndex(todo => todo.id === id);
        if (todoIndex === -1) {
            throw new common_1.NotFoundException(`Todo with ID ${id} not found`);
        }
        const existingTodo = this.todos[todoIndex];
        const updatedTodo = {
            ...existingTodo,
            ...updateTodoDto,
            updatedAt: new Date(),
        };
        this.todos[todoIndex] = updatedTodo;
        return updatedTodo;
    }
    remove(id) {
        const todoIndex = this.todos.findIndex(todo => todo.id === id);
        if (todoIndex === -1) {
            throw new common_1.NotFoundException(`Todo with ID ${id} not found`);
        }
        this.todos.splice(todoIndex, 1);
        return { message: `Todo with ID ${id} deleted successfully` };
    }
};
exports.TodoService = TodoService;
exports.TodoService = TodoService = __decorate([
    (0, common_1.Injectable)()
], TodoService);
//# sourceMappingURL=todos.service.js.map