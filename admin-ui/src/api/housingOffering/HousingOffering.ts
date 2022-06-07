import { User } from "../user/User";

export type HousingOffering = {
  address: string;
  author?: User;
  city: string;
  createdAt: Date;
  description: string;
  id: string;
  price: number;
  roomsNumber: number;
  size: number;
  title: string;
  updatedAt: Date;
};
