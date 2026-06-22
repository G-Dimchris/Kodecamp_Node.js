"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
class Todo {
    constructor(partial) {
        Object.assign(this, partial);
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}
exports.Todo = Todo;
//# sourceMappingURL=todo.entity.js.map