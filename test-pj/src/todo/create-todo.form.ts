import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateTodoForm {
    @Field()
    title: string;

    @Field({ nullable: true })
    description: string;
}