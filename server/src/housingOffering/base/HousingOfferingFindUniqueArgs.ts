import {ArgsType, Field} from "@nestjs/graphql";
import {HousingOfferingWhereUniqueInput} from "./HousingOfferingWhereUniqueInput";

@ArgsType()
class HousingOfferingFindUniqueArgs {
  @Field(() => HousingOfferingWhereUniqueInput, { nullable: false })
  where!: HousingOfferingWhereUniqueInput;
}

export { HousingOfferingFindUniqueArgs };
