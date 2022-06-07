import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { HousingApplicantCreateNestedManyWithoutHousingOfferingsInput } from "./HousingApplicantCreateNestedManyWithoutHousingOfferingsInput";

export type HousingOfferingCreateInput = {
  address: string;
  author: UserWhereUniqueInput;
  city: string;
  description: string;
  housingApplicants?: HousingApplicantCreateNestedManyWithoutHousingOfferingsInput;
  price: number;
  roomsNumber: number;
  size: number;
  title: string;
};
