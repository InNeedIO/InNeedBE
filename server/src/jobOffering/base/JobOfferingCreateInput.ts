import {Field, InputType} from "@nestjs/graphql";
import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {IsEnum, IsInt, IsOptional, IsString, ValidateNested,} from "class-validator";
import {UserWhereUniqueInput} from "../../user/base/UserWhereUniqueInput";
import {EnumJobOfferingPositionLevel} from "./EnumJobOfferingPositionLevel";
import {EnumJobOfferingWorkingMode} from "./EnumJobOfferingWorkingMode";
import {
  JobApplicantCreateNestedManyWithoutJobOfferingsInput
} from "./JobApplicantCreateNestedManyWithoutJobOfferingsInput";

@InputType()
class JobOfferingCreateInput {
  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  author!: UserWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  city!: string;

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
    type: () => JobApplicantCreateNestedManyWithoutJobOfferingsInput,
  })
  @ValidateNested()
  @Type(() => JobApplicantCreateNestedManyWithoutJobOfferingsInput)
  @IsOptional()
  @Field(() => JobApplicantCreateNestedManyWithoutJobOfferingsInput, {
    nullable: true,
  })
  jobApplicants?: JobApplicantCreateNestedManyWithoutJobOfferingsInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  maxSalary!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  minSalary!: number;

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
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  title!: string;

  @ApiProperty({
    required: true,
    enum: EnumJobOfferingWorkingMode,
  })
  @IsEnum(EnumJobOfferingWorkingMode)
  @Field(() => EnumJobOfferingWorkingMode)
  workingMode!: "Remote" | "Onsite" | "Hybrid";
}
export { JobOfferingCreateInput };
