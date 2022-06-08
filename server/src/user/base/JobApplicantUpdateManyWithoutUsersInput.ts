import {Field, InputType} from "@nestjs/graphql";
import {ApiProperty} from "@nestjs/swagger";
import {JobApplicantWhereUniqueInput} from "../../jobApplicant/base/JobApplicantWhereUniqueInput";

@InputType()
class JobApplicantUpdateManyWithoutUsersInput {
  @Field(() => [JobApplicantWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [JobApplicantWhereUniqueInput],
  })
  connect?: Array<JobApplicantWhereUniqueInput>;

  @Field(() => [JobApplicantWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [JobApplicantWhereUniqueInput],
  })
  disconnect?: Array<JobApplicantWhereUniqueInput>;

  @Field(() => [JobApplicantWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [JobApplicantWhereUniqueInput],
  })
  set?: Array<JobApplicantWhereUniqueInput>;
}
export { JobApplicantUpdateManyWithoutUsersInput };
