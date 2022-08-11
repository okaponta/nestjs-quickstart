import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.models';

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
}
