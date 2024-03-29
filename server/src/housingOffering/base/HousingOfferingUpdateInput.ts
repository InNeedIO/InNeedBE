import {Field, InputType} from "@nestjs/graphql";
import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {IsInt, IsNumber, IsOptional, IsString, ValidateNested,} from "class-validator";
import {UserWhereUniqueInput} from "../../user/base/UserWhereUniqueInput";
import {
  HousingApplicantUpdateManyWithoutHousingOfferingsInput
} from "./HousingApplicantUpdateManyWithoutHousingOfferingsInput";

@InputType()
class HousingOfferingUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string;

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
  description?: string;

  @ApiProperty({
    required: false,
    type: () => HousingApplicantUpdateManyWithoutHousingOfferingsInput,
  })
  @ValidateNested()
  @Type(() => HousingApplicantUpdateManyWithoutHousingOfferingsInput)
  @IsOptional()
  @Field(() => HousingApplicantUpdateManyWithoutHousingOfferingsInput, {
    nullable: true,
  })
  housingApplicants?: HousingApplicantUpdateManyWithoutHousingOfferingsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  roomsNumber?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  size?: number;

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
}
export { HousingOfferingUpdateInput };
