import {Field, InputType} from "@nestjs/graphql";
import {ApiProperty} from "@nestjs/swagger";
import {HousingOfferingWhereUniqueInput} from "../../housingOffering/base/HousingOfferingWhereUniqueInput";

@InputType()
class HousingOfferingUpdateManyWithoutUsersInput {
  @Field(() => [HousingOfferingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HousingOfferingWhereUniqueInput],
  })
  connect?: Array<HousingOfferingWhereUniqueInput>;

  @Field(() => [HousingOfferingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HousingOfferingWhereUniqueInput],
  })
  disconnect?: Array<HousingOfferingWhereUniqueInput>;

  @Field(() => [HousingOfferingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HousingOfferingWhereUniqueInput],
  })
  set?: Array<HousingOfferingWhereUniqueInput>;
}
export { HousingOfferingUpdateManyWithoutUsersInput };
