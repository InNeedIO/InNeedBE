import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { HousingApplicantUpdateManyWithoutHousingOfferingsInput } from "./HousingApplicantUpdateManyWithoutHousingOfferingsInput";

export type HousingOfferingUpdateInput = {
  address?: string;
  author?: UserWhereUniqueInput;
  city?: string;
  description?: string;
  housingApplicants?: HousingApplicantUpdateManyWithoutHousingOfferingsInput;
  price?: number;
  roomsNumber?: number;
  size?: number;
  title?: string;
};
