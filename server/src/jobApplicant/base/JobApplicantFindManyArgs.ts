import {ArgsType, Field} from "@nestjs/graphql";
import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {JobApplicantOrderByInput} from "./JobApplicantOrderByInput";
import {JobApplicantWhereInput} from "./JobApplicantWhereInput";

@ArgsType()
class JobApplicantFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => JobApplicantWhereInput,
  })
  @Field(() => JobApplicantWhereInput, { nullable: true })
  @Type(() => JobApplicantWhereInput)
  where?: JobApplicantWhereInput;

  @ApiProperty({
    required: false,
    type: [JobApplicantOrderByInput],
  })
  @Field(() => [JobApplicantOrderByInput], { nullable: true })
  @Type(() => JobApplicantOrderByInput)
  orderBy?: Array<JobApplicantOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { JobApplicantFindManyArgs };
