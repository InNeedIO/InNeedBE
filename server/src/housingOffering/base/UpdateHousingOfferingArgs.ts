import {ArgsType, Field} from "@nestjs/graphql";
import {HousingOfferingUpdateInput} from "./HousingOfferingUpdateInput";
import {HousingOfferingWhereUniqueInput} from "./HousingOfferingWhereUniqueInput";

@ArgsType()
class UpdateHousingOfferingArgs {
  @Field(() => HousingOfferingWhereUniqueInput, { nullable: false })
  where!: HousingOfferingWhereUniqueInput;
  @Field(() => HousingOfferingUpdateInput, { nullable: false })
  data!: HousingOfferingUpdateInput;
}

export { UpdateHousingOfferingArgs };
