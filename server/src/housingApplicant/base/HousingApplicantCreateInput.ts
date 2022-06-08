import {Field, InputType} from "@nestjs/graphql";
import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {IsBoolean, IsOptional, ValidateNested} from "class-validator";
import {HousingOfferingWhereUniqueInput} from "../../housingOffering/base/HousingOfferingWhereUniqueInput";
import {UserWhereUniqueInput} from "../../user/base/UserWhereUniqueInput";

@InputType()
class HousingApplicantCreateInput {
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
    required: true,
    type: () => HousingOfferingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HousingOfferingWhereUniqueInput)
  @Field(() => HousingOfferingWhereUniqueInput)
  housingOffering!: HousingOfferingWhereUniqueInput;

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
export { HousingApplicantCreateInput };
