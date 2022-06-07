import { JobOffering } from "../jobOffering/JobOffering";
import { User } from "../user/User";

export type JobApplicant = {
  createdAt: Date;
  id: string;
  isAccepted: boolean;
  jobOffering?: JobOffering;
  updatedAt: Date;
  user?: User;
};
