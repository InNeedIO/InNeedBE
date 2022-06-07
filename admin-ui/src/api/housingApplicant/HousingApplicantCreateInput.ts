import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { HousingOfferingWhereUniqueInput } from "../housingOffering/HousingOfferingWhereUniqueInput";

export type HousingApplicantCreateInput = {
  author?: UserWhereUniqueInput | null;
  housingOffering: HousingOfferingWhereUniqueInput;
  isAccepted?: boolean | null;
};
