import {ArgsType, Field} from "@nestjs/graphql";
import {JobApplicantUpdateInput} from "./JobApplicantUpdateInput";
import {JobApplicantWhereUniqueInput} from "./JobApplicantWhereUniqueInput";

@ArgsType()
class UpdateJobApplicantArgs {
  @Field(() => JobApplicantWhereUniqueInput, { nullable: false })
  where!: JobApplicantWhereUniqueInput;
  @Field(() => JobApplicantUpdateInput, { nullable: false })
  data!: JobApplicantUpdateInput;
}

export { UpdateJobApplicantArgs };
