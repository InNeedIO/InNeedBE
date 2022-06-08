import {ArgsType, Field} from "@nestjs/graphql";
import {HousingApplicantUpdateInput} from "./HousingApplicantUpdateInput";
import {HousingApplicantWhereUniqueInput} from "./HousingApplicantWhereUniqueInput";

@ArgsType()
class UpdateHousingApplicantArgs {
  @Field(() => HousingApplicantWhereUniqueInput, { nullable: false })
  where!: HousingApplicantWhereUniqueInput;
  @Field(() => HousingApplicantUpdateInput, { nullable: false })
  data!: HousingApplicantUpdateInput;
}

export { UpdateHousingApplicantArgs };
