import { Field, ID, InputType } from "@nestjs/graphql";
import { TodoStatus } from "./todo.models";

@InputType()
export class UpdateTodoForm {
    @Field((type) => ID)
    id: string;

    @Field((type) => TodoStatus)
    status: TodoStatus;
}
