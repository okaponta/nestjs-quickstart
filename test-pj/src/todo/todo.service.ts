import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoForm } from './create-todo.form';
import { Todo, TodoStatus } from './todo.models';
import { v4 } from 'uuid'

@Injectable()
export class TodoService {

    // インメモリDBみたいな感じで使う
    private todos: Todo[] = [];

    findAll(): Todo[] {
        return this.todos;
    }

    findOneById(id: string): Todo {
        const result = this.todos.find((todo) => id === todo.id)
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }

    create(createTodoForm: CreateTodoForm): Todo {
        const date: Date = new Date();
        const todo: Todo = {
            ...createTodoForm,
            id: v4(),
            status: TodoStatus.NEW,
            createdAt: date,
            updatedAt: date,
        }
        this.todos.push(todo);
        return todo;
    }
}
