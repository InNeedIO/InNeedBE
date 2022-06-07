import { JobOffering } from "../jobOffering/JobOffering";

export type User = {
  firstName: string | null;
  id: string;
  jobOfferings?: Array<JobOffering>;
  lastName: string | null;
  location: string | null;
  mail: string | null;
  roles: Array<string>;
  telephoneNumber: string | null;
  username: string;
};
