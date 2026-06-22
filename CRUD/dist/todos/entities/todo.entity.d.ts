export declare class Todo {
    id: string;
    title: string;
    description: string;
    status: 'pending' | 'in-progress' | 'completed';
    createdAt: Date;
    updatedAt: Date;
    constructor(partial: Partial<Todo>);
}
