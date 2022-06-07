import { SortOrder } from "../../util/SortOrder";

export type JobApplicantOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isAccepted?: SortOrder;
  jobOfferingId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
