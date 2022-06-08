import {ArgsType, Field} from "@nestjs/graphql";
import {JobOfferingWhereUniqueInput} from "./JobOfferingWhereUniqueInput";

@ArgsType()
class DeleteJobOfferingArgs {
  @Field(() => JobOfferingWhereUniqueInput, { nullable: false })
  where!: JobOfferingWhereUniqueInput;
}

export { DeleteJobOfferingArgs };
