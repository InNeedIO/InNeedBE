import { User } from "../user/User";
import { HousingApplicant } from "../housingApplicant/HousingApplicant";

export type HousingOffering = {
  address: string;
  author?: User;
  city: string;
  createdAt: Date;
  description: string;
  housingApplicants?: Array<HousingApplicant>;
  id: string;
  price: number;
  roomsNumber: number;
  size: number;
  title: string;
  updatedAt: Date;
};
