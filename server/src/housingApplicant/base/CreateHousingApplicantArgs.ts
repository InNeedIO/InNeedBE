import {ArgsType, Field} from "@nestjs/graphql";
import {HousingApplicantCreateInput} from "./HousingApplicantCreateInput";

@ArgsType()
class CreateHousingApplicantArgs {
  @Field(() => HousingApplicantCreateInput, { nullable: false })
  data!: HousingApplicantCreateInput;
}

export { CreateHousingApplicantArgs };
