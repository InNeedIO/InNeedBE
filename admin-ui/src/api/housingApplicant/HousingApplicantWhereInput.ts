import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { HousingOfferingWhereUniqueInput } from "../housingOffering/HousingOfferingWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type HousingApplicantWhereInput = {
  author?: UserWhereUniqueInput;
  housingOffering?: HousingOfferingWhereUniqueInput;
  id?: StringFilter;
  isAccepted?: BooleanNullableFilter;
};
