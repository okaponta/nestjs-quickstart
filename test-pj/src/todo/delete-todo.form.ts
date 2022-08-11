import { Field, ID, InputType } from "@nestjs/graphql";
import { TodoStatus } from "./todo.models";

@InputType()
export class DeleteTodoForm {
    @Field((type) => ID)
    id: string;
}
