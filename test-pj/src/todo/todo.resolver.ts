import { Args, ID, Mutation, Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { CreateTodoForm } from './create-todo.form';
import { Todo } from './todo.models';
import { TodoService } from './todo.service';
import { UpdateTodoForm } from './update-todo.form';

@Resolver()
export class TodoResolver {
    constructor(private todoService: TodoService) { }

    @Query(() => [Todo], { nullable: 'items' })
    findAll() {
        return this.todoService.findAll();
    }

    @Query(() => Todo)
    findOneById(@Args('id', { type: () => ID }) id: string) {
        return this.todoService.findOneById(id);
    }

    @Mutation((returns) => Todo)
    create(@Args('todo') todo: CreateTodoForm): Todo {
        return this.todoService.create(todo);
    }

    @Mutation((returns) => Todo)
    update(@Args('todo') todo: UpdateTodoForm): Todo {
        return this.todoService.update(todo);
    }
}
