import {Field, InputType} from "@nestjs/graphql";
import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {IsInt, IsNumber, IsOptional, IsString, ValidateNested,} from "class-validator";
import {UserWhereUniqueInput} from "../../user/base/UserWhereUniqueInput";
import {
  HousingApplicantCreateNestedManyWithoutHousingOfferingsInput
} from "./HousingApplicantCreateNestedManyWithoutHousingOfferingsInput";

@InputType()
class HousingOfferingCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  address!: string;

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
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  description!: string;

  @ApiProperty({
    required: false,
    type: () => HousingApplicantCreateNestedManyWithoutHousingOfferingsInput,
  })
  @ValidateNested()
  @Type(() => HousingApplicantCreateNestedManyWithoutHousingOfferingsInput)
  @IsOptional()
  @Field(() => HousingApplicantCreateNestedManyWithoutHousingOfferingsInput, {
    nullable: true,
  })
  housingApplicants?: HousingApplicantCreateNestedManyWithoutHousingOfferingsInput;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  price!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  roomsNumber!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  size!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  title!: string;
}
export { HousingOfferingCreateInput };
