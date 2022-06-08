import {Field, InputType} from "@nestjs/graphql";
import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {IsOptional, ValidateNested} from "class-validator";
import {HousingApplicantListRelationFilter} from "../../housingApplicant/base/HousingApplicantListRelationFilter";
import {UserWhereUniqueInput} from "../../user/base/UserWhereUniqueInput";
import {FloatFilter} from "../../util/FloatFilter";
import {IntFilter} from "../../util/IntFilter";
import {StringFilter} from "../../util/StringFilter";

@InputType()
class HousingOfferingWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  address?: StringFilter;

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
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  description?: StringFilter;

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
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  price?: IntFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  roomsNumber?: IntFilter;

  @ApiProperty({
    required: false,
    type: FloatFilter,
  })
  @Type(() => FloatFilter)
  @IsOptional()
  @Field(() => FloatFilter, {
    nullable: true,
  })
  size?: FloatFilter;

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
}
export { HousingOfferingWhereInput };
