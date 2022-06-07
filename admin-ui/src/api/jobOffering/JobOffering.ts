import { User } from "../user/User";
import { JobApplicant } from "../jobApplicant/JobApplicant";

export type JobOffering = {
  author?: User;
  city: string;
  createdAt: Date;
  description: string | null;
  id: string;
  jobApplicants?: Array<JobApplicant>;
  maxSalary: number;
  minSalary: number;
  positionLevel?: "Junior" | "Mid" | "Senior" | null;
  title: string;
  workingMode?: "Remote" | "Onsite" | "Hybrid";
};
