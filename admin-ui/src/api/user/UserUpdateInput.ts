import { JobApplicantUpdateManyWithoutUsersInput } from "./JobApplicantUpdateManyWithoutUsersInput";
import { JobOfferingUpdateManyWithoutUsersInput } from "./JobOfferingUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  jobApplicants?: JobApplicantUpdateManyWithoutUsersInput;
  jobOfferings?: JobOfferingUpdateManyWithoutUsersInput;
  lastName?: string | null;
  location?: string | null;
  mail?: string | null;
  password?: string;
  roles?: Array<string>;
  telephoneNumber?: string | null;
  username?: string;
};
