import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoForm } from './create-todo.form';
import { Todo, TodoStatus } from './todo.models';
import { v4 } from 'uuid'
import { UpdateTodoForm } from './update-todo.form';

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

    update(updateTodoForm: UpdateTodoForm): Todo {
        const target = this.findOneById(updateTodoForm.id);
        const newTodo = {
            ...target,
            status: updateTodoForm.status,
            updatedAt: new Date(),
        };
        this.todos = this.todos.map((todo) =>
            todo.id === newTodo.id ? newTodo : todo,
        );
        return newTodo;
    }
}
