import {ArgsType, Field} from "@nestjs/graphql";
import {HousingApplicantWhereUniqueInput} from "./HousingApplicantWhereUniqueInput";

@ArgsType()
class HousingApplicantFindUniqueArgs {
  @Field(() => HousingApplicantWhereUniqueInput, { nullable: false })
  where!: HousingApplicantWhereUniqueInput;
}

export { HousingApplicantFindUniqueArgs };
