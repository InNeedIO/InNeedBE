import { SortOrder } from "../../util/SortOrder";

export type JobOfferingOrderByInput = {
  authorId?: SortOrder;
  city?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  maxSalary?: SortOrder;
  minSalary?: SortOrder;
  positionLevel?: SortOrder;
  title?: SortOrder;
  workingMode?: SortOrder;
};
