import {Field, InputType} from "@nestjs/graphql";
import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {IsEnum, IsInt, IsOptional, IsString, ValidateNested,} from "class-validator";
import {UserWhereUniqueInput} from "../../user/base/UserWhereUniqueInput";
import {EnumJobOfferingPositionLevel} from "./EnumJobOfferingPositionLevel";
import {EnumJobOfferingWorkingMode} from "./EnumJobOfferingWorkingMode";
import {JobApplicantUpdateManyWithoutJobOfferingsInput} from "./JobApplicantUpdateManyWithoutJobOfferingsInput";

@InputType()
class JobOfferingUpdateInput {
  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  author?: UserWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  city?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => JobApplicantUpdateManyWithoutJobOfferingsInput,
  })
  @ValidateNested()
  @Type(() => JobApplicantUpdateManyWithoutJobOfferingsInput)
  @IsOptional()
  @Field(() => JobApplicantUpdateManyWithoutJobOfferingsInput, {
    nullable: true,
  })
  jobApplicants?: JobApplicantUpdateManyWithoutJobOfferingsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  maxSalary?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  minSalary?: number;

  @ApiProperty({
    required: false,
    enum: EnumJobOfferingPositionLevel,
  })
  @IsEnum(EnumJobOfferingPositionLevel)
  @IsOptional()
  @Field(() => EnumJobOfferingPositionLevel, {
    nullable: true,
  })
  positionLevel?: "Junior" | "Mid" | "Senior" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string;

  @ApiProperty({
    required: false,
    enum: EnumJobOfferingWorkingMode,
  })
  @IsEnum(EnumJobOfferingWorkingMode)
  @IsOptional()
  @Field(() => EnumJobOfferingWorkingMode, {
    nullable: true,
  })
  workingMode?: "Remote" | "Onsite" | "Hybrid";
}
export { JobOfferingUpdateInput };
