import {Field, InputType} from "@nestjs/graphql";
import {ApiProperty} from "@nestjs/swagger";
import {HousingOfferingWhereUniqueInput} from "../../housingOffering/base/HousingOfferingWhereUniqueInput";

@InputType()
class HousingOfferingCreateNestedManyWithoutUsersInput {
  @Field(() => [HousingOfferingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HousingOfferingWhereUniqueInput],
  })
  connect?: Array<HousingOfferingWhereUniqueInput>;
}
export { HousingOfferingCreateNestedManyWithoutUsersInput };
