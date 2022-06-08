import {ArgsType, Field} from "@nestjs/graphql";
import {HousingApplicantWhereUniqueInput} from "./HousingApplicantWhereUniqueInput";

@ArgsType()
class DeleteHousingApplicantArgs {
  @Field(() => HousingApplicantWhereUniqueInput, { nullable: false })
  where!: HousingApplicantWhereUniqueInput;
}

export { DeleteHousingApplicantArgs };
