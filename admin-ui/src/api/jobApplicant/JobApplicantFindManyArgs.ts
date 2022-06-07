import { JobApplicantWhereInput } from "./JobApplicantWhereInput";
import { JobApplicantOrderByInput } from "./JobApplicantOrderByInput";

export type JobApplicantFindManyArgs = {
  where?: JobApplicantWhereInput;
  orderBy?: Array<JobApplicantOrderByInput>;
  skip?: number;
  take?: number;
};
