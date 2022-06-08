import {Field, InputType} from "@nestjs/graphql";
import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {IsBoolean, IsOptional, ValidateNested} from "class-validator";
import {HousingOfferingWhereUniqueInput} from "../../housingOffering/base/HousingOfferingWhereUniqueInput";
import {UserWhereUniqueInput} from "../../user/base/UserWhereUniqueInput";

@InputType()
class HousingApplicantUpdateInput {
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
  author?: UserWhereUniqueInput | null;

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
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isAccepted?: boolean | null;
}
export { HousingApplicantUpdateInput };
