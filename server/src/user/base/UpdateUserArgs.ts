import {ArgsType, Field} from "@nestjs/graphql";
import {UserUpdateInput} from "./UserUpdateInput";
import {UserWhereUniqueInput} from "./UserWhereUniqueInput";

@ArgsType()
class UpdateUserArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;
  @Field(() => UserUpdateInput, { nullable: false })
  data!: UserUpdateInput;
}

export { UpdateUserArgs };
