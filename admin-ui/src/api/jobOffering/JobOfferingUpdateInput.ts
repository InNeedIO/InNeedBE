import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type JobOfferingUpdateInput = {
  author?: UserWhereUniqueInput;
  city?: string;
  description?: string | null;
  maxSalary?: number;
  minSalary?: number;
  positionLevel?: "Junior" | "Mid" | "Senior" | null;
  title?: string;
  workingMode?: "Remote" | "Onsite" | "Hybrid";
};
