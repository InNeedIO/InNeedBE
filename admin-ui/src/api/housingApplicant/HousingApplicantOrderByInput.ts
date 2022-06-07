import { SortOrder } from "../../util/SortOrder";

export type HousingApplicantOrderByInput = {
  authorId?: SortOrder;
  createdAt?: SortOrder;
  housingOfferingId?: SortOrder;
  id?: SortOrder;
  isAccepted?: SortOrder;
  updatedAt?: SortOrder;
};
