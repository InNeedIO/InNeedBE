import {Field, InputType} from "@nestjs/graphql";
import {ApiProperty} from "@nestjs/swagger";
import {HousingApplicantWhereUniqueInput} from "../../housingApplicant/base/HousingApplicantWhereUniqueInput";

@InputType()
class HousingApplicantUpdateManyWithoutHousingOfferingsInput {
  @Field(() => [HousingApplicantWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HousingApplicantWhereUniqueInput],
  })
  connect?: Array<HousingApplicantWhereUniqueInput>;

  @Field(() => [HousingApplicantWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HousingApplicantWhereUniqueInput],
  })
  disconnect?: Array<HousingApplicantWhereUniqueInput>;

  @Field(() => [HousingApplicantWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HousingApplicantWhereUniqueInput],
  })
  set?: Array<HousingApplicantWhereUniqueInput>;
}
export { HousingApplicantUpdateManyWithoutHousingOfferingsInput };
