import {ArgsType, Field} from "@nestjs/graphql";
import {JobApplicantWhereUniqueInput} from "./JobApplicantWhereUniqueInput";

@ArgsType()
class DeleteJobApplicantArgs {
  @Field(() => JobApplicantWhereUniqueInput, { nullable: false })
  where!: JobApplicantWhereUniqueInput;
}

export { DeleteJobApplicantArgs };
