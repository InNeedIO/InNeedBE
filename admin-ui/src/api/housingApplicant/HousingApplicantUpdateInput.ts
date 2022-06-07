import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { HousingOfferingWhereUniqueInput } from "../housingOffering/HousingOfferingWhereUniqueInput";

export type HousingApplicantUpdateInput = {
  author?: UserWhereUniqueInput | null;
  housingOffering?: HousingOfferingWhereUniqueInput;
  isAccepted?: boolean | null;
};
