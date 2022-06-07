import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { JobApplicantCreateNestedManyWithoutJobOfferingsInput } from "./JobApplicantCreateNestedManyWithoutJobOfferingsInput";

export type JobOfferingCreateInput = {
  author: UserWhereUniqueInput;
  city: string;
  description?: string | null;
  jobApplicants?: JobApplicantCreateNestedManyWithoutJobOfferingsInput;
  maxSalary: number;
  minSalary: number;
  positionLevel?: "Junior" | "Mid" | "Senior" | null;
  title: string;
  workingMode: "Remote" | "Onsite" | "Hybrid";
};
