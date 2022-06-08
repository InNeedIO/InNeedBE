import {ArgsType, Field} from "@nestjs/graphql";
import {HousingOfferingCreateInput} from "./HousingOfferingCreateInput";

@ArgsType()
class CreateHousingOfferingArgs {
  @Field(() => HousingOfferingCreateInput, { nullable: false })
  data!: HousingOfferingCreateInput;
}

export { CreateHousingOfferingArgs };
