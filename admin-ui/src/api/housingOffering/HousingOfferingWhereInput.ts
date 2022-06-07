import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { HousingApplicantListRelationFilter } from "../housingApplicant/HousingApplicantListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type HousingOfferingWhereInput = {
  address?: StringFilter;
  author?: UserWhereUniqueInput;
  city?: StringFilter;
  description?: StringFilter;
  housingApplicants?: HousingApplicantListRelationFilter;
  id?: StringFilter;
  price?: IntFilter;
  roomsNumber?: IntFilter;
  size?: FloatFilter;
  title?: StringFilter;
};
