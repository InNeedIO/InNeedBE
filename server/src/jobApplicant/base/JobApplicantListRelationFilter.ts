import {Field, InputType} from "@nestjs/graphql";
import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {IsOptional, ValidateNested} from "class-validator";
import {JobApplicantWhereInput} from "./JobApplicantWhereInput";

@InputType()
class JobApplicantListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => JobApplicantWhereInput,
  })
  @ValidateNested()
  @Type(() => JobApplicantWhereInput)
  @IsOptional()
  @Field(() => JobApplicantWhereInput, {
    nullable: true,
  })
  every?: JobApplicantWhereInput;

  @ApiProperty({
    required: false,
    type: () => JobApplicantWhereInput,
  })
  @ValidateNested()
  @Type(() => JobApplicantWhereInput)
  @IsOptional()
  @Field(() => JobApplicantWhereInput, {
    nullable: true,
  })
  some?: JobApplicantWhereInput;

  @ApiProperty({
    required: false,
    type: () => JobApplicantWhereInput,
  })
  @ValidateNested()
  @Type(() => JobApplicantWhereInput)
  @IsOptional()
  @Field(() => JobApplicantWhereInput, {
    nullable: true,
  })
  none?: JobApplicantWhereInput;
}
export { JobApplicantListRelationFilter };
