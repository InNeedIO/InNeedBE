import {Field, InputType} from "@nestjs/graphql";
import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {IsOptional, ValidateNested} from "class-validator";
import {HousingOfferingWhereUniqueInput} from "../../housingOffering/base/HousingOfferingWhereUniqueInput";
import {UserWhereUniqueInput} from "../../user/base/UserWhereUniqueInput";
import {BooleanNullableFilter} from "../../util/BooleanNullableFilter";
import {StringFilter} from "../../util/StringFilter";

@InputType()
class HousingApplicantWhereInput {
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
    type: () => HousingOfferingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HousingOfferingWhereUniqueInput)
  @IsOptional()
  @Field(() => HousingOfferingWhereUniqueInput, {
    nullable: true,
  })
  housingOffering?: HousingOfferingWhereUniqueInput;

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
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  isAccepted?: BooleanNullableFilter;
}
export { HousingApplicantWhereInput };
