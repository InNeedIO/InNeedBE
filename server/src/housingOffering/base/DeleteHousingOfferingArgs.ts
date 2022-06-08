import {ArgsType, Field} from "@nestjs/graphql";
import {HousingOfferingWhereUniqueInput} from "./HousingOfferingWhereUniqueInput";

@ArgsType()
class DeleteHousingOfferingArgs {
  @Field(() => HousingOfferingWhereUniqueInput, { nullable: false })
  where!: HousingOfferingWhereUniqueInput;
}

export { DeleteHousingOfferingArgs };
