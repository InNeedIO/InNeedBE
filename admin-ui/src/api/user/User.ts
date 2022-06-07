import { HousingOffering } from "../housingOffering/HousingOffering";
import { JobApplicant } from "../jobApplicant/JobApplicant";
import { JobOffering } from "../jobOffering/JobOffering";

export type User = {
  firstName: string | null;
  housingOfferings?: Array<HousingOffering>;
  id: string;
  jobApplicants?: Array<JobApplicant>;
  jobOfferings?: Array<JobOffering>;
  lastName: string | null;
  location: string | null;
  mail: string | null;
  roles: Array<string>;
  telephoneNumber: string | null;
  username: string;
};
