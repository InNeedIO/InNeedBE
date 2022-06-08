import {ArgsType, Field} from "@nestjs/graphql";
import {JobOfferingWhereUniqueInput} from "./JobOfferingWhereUniqueInput";

@ArgsType()
class JobOfferingFindUniqueArgs {
  @Field(() => JobOfferingWhereUniqueInput, { nullable: false })
  where!: JobOfferingWhereUniqueInput;
}

export { JobOfferingFindUniqueArgs };
