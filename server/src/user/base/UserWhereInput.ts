import {Field, InputType} from "@nestjs/graphql";
import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {IsOptional, ValidateNested} from "class-validator";
import {HousingApplicantListRelationFilter} from "../../housingApplicant/base/HousingApplicantListRelationFilter";
import {HousingOfferingListRelationFilter} from "../../housingOffering/base/HousingOfferingListRelationFilter";
import {JobApplicantListRelationFilter} from "../../jobApplicant/base/JobApplicantListRelationFilter";
import {JobOfferingListRelationFilter} from "../../jobOffering/base/JobOfferingListRelationFilter";
import {StringFilter} from "../../util/StringFilter";
import {StringNullableFilter} from "../../util/StringNullableFilter";

@InputType()
class UserWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  firstName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => HousingApplicantListRelationFilter,
  })
  @ValidateNested()
  @Type(() => HousingApplicantListRelationFilter)
  @IsOptional()
  @Field(() => HousingApplicantListRelationFilter, {
    nullable: true,
  })
  housingApplicants?: HousingApplicantListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => HousingOfferingListRelationFilter,
  })
  @ValidateNested()
  @Type(() => HousingOfferingListRelationFilter)
  @IsOptional()
  @Field(() => HousingOfferingListRelationFilter, {
    nullable: true,
  })
  housingOfferings?: HousingOfferingListRelationFilter;

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
    type: () => JobOfferingListRelationFilter,
  })
  @ValidateNested()
  @Type(() => JobOfferingListRelationFilter)
  @IsOptional()
  @Field(() => JobOfferingListRelationFilter, {
    nullable: true,
  })
  jobOfferings?: JobOfferingListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  lastName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  username?: StringFilter;
}
export { UserWhereInput };
