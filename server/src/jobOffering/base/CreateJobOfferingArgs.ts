import {ArgsType, Field} from "@nestjs/graphql";
import {JobOfferingCreateInput} from "./JobOfferingCreateInput";

@ArgsType()
class CreateJobOfferingArgs {
  @Field(() => JobOfferingCreateInput, { nullable: false })
  data!: JobOfferingCreateInput;
}

export { CreateJobOfferingArgs };
