import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HousingOfferingCreateInput = {
  address: string;
  author: UserWhereUniqueInput;
  city: string;
  description: string;
  price: number;
  roomsNumber: number;
  size: number;
  title: string;
};
