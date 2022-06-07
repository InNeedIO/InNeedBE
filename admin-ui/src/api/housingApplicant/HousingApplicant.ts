import { User } from "../user/User";
import { HousingOffering } from "../housingOffering/HousingOffering";

export type HousingApplicant = {
  author?: User | null;
  createdAt: Date;
  housingOffering?: HousingOffering;
  id: string;
  isAccepted: boolean | null;
  updatedAt: Date;
};
