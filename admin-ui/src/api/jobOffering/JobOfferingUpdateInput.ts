import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { JobApplicantUpdateManyWithoutJobOfferingsInput } from "./JobApplicantUpdateManyWithoutJobOfferingsInput";

export type JobOfferingUpdateInput = {
  author?: UserWhereUniqueInput;
  city?: string;
  description?: string | null;
  jobApplicants?: JobApplicantUpdateManyWithoutJobOfferingsInput;
  maxSalary?: number;
  minSalary?: number;
  positionLevel?: "Junior" | "Mid" | "Senior" | null;
  title?: string;
  workingMode?: "Remote" | "Onsite" | "Hybrid";
};
