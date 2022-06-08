import {ArgsType, Field} from "@nestjs/graphql";
import {JobApplicantCreateInput} from "./JobApplicantCreateInput";

@ArgsType()
class CreateJobApplicantArgs {
  @Field(() => JobApplicantCreateInput, { nullable: false })
  data!: JobApplicantCreateInput;
}

export { CreateJobApplicantArgs };
