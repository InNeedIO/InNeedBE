import {Field, InputType} from "@nestjs/graphql";
import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {IsEnum, IsOptional, ValidateNested} from "class-validator";
import {JobApplicantListRelationFilter} from "../../jobApplicant/base/JobApplicantListRelationFilter";
import {UserWhereUniqueInput} from "../../user/base/UserWhereUniqueInput";
import {IntFilter} from "../../util/IntFilter";
import {StringFilter} from "../../util/StringFilter";
import {StringNullableFilter} from "../../util/StringNullableFilter";
import {EnumJobOfferingPositionLevel} from "./EnumJobOfferingPositionLevel";
import {EnumJobOfferingWorkingMode} from "./EnumJobOfferingWorkingMode";

@InputType()
class JobOfferingWhereInput {
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
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  city?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => JobApplicantListRelationFilter,
  })
  @ValidateNested()
  @Type(() => JobApplicantListRelationFilter)
  @IsOptional()
  @Field(() => JobApplicantListRelationFilter, {
    nullable: true,
  })
  jobApplicants?: JobApplicantListRelationFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  maxSalary?: IntFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  minSalary?: IntFilter;

  @ApiProperty({
    required: false,
    enum: EnumJobOfferingPositionLevel,
  })
  @IsEnum(EnumJobOfferingPositionLevel)
  @IsOptional()
  @Field(() => EnumJobOfferingPositionLevel, {
    nullable: true,
  })
  positionLevel?: "Junior" | "Mid" | "Senior";

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  title?: StringFilter;

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
export { JobOfferingWhereInput };
