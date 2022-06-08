import {Field, InputType} from "@nestjs/graphql";
import {ApiProperty} from "@nestjs/swagger";
import {JobApplicantWhereUniqueInput} from "../../jobApplicant/base/JobApplicantWhereUniqueInput";

@InputType()
class JobApplicantCreateNestedManyWithoutUsersInput {
  @Field(() => [JobApplicantWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [JobApplicantWhereUniqueInput],
  })
  connect?: Array<JobApplicantWhereUniqueInput>;
}
export { JobApplicantCreateNestedManyWithoutUsersInput };
