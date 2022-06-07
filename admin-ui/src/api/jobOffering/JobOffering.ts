import { User } from "../user/User";

export type JobOffering = {
  author?: User;
  city: string;
  createdAt: Date;
  description: string | null;
  id: string;
  maxSalary: number;
  minSalary: number;
  positionLevel?: "Junior" | "Mid" | "Senior" | null;
  title: string;
  workingMode?: "Remote" | "Onsite" | "Hybrid";
};
