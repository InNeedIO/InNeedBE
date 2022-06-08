import {ArgsType, Field} from "@nestjs/graphql";
import {JobApplicantWhereUniqueInput} from "./JobApplicantWhereUniqueInput";

@ArgsType()
class JobApplicantFindUniqueArgs {
  @Field(() => JobApplicantWhereUniqueInput, { nullable: false })
  where!: JobApplicantWhereUniqueInput;
}

export { JobApplicantFindUniqueArgs };
