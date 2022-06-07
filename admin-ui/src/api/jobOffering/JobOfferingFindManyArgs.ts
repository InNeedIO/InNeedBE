import { JobOfferingWhereInput } from "./JobOfferingWhereInput";
import { JobOfferingOrderByInput } from "./JobOfferingOrderByInput";

export type JobOfferingFindManyArgs = {
  where?: JobOfferingWhereInput;
  orderBy?: Array<JobOfferingOrderByInput>;
  skip?: number;
  take?: number;
};
