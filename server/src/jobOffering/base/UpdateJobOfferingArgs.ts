import {ArgsType, Field} from "@nestjs/graphql";
import {JobOfferingUpdateInput} from "./JobOfferingUpdateInput";
import {JobOfferingWhereUniqueInput} from "./JobOfferingWhereUniqueInput";

@ArgsType()
class UpdateJobOfferingArgs {
  @Field(() => JobOfferingWhereUniqueInput, { nullable: false })
  where!: JobOfferingWhereUniqueInput;
  @Field(() => JobOfferingUpdateInput, { nullable: false })
  data!: JobOfferingUpdateInput;
}

export { UpdateJobOfferingArgs };
