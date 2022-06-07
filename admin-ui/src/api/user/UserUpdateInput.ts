import { HousingApplicantUpdateManyWithoutUsersInput } from "./HousingApplicantUpdateManyWithoutUsersInput";
import { HousingOfferingUpdateManyWithoutUsersInput } from "./HousingOfferingUpdateManyWithoutUsersInput";
import { JobApplicantUpdateManyWithoutUsersInput } from "./JobApplicantUpdateManyWithoutUsersInput";
import { JobOfferingUpdateManyWithoutUsersInput } from "./JobOfferingUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  housingApplicants?: HousingApplicantUpdateManyWithoutUsersInput;
  housingOfferings?: HousingOfferingUpdateManyWithoutUsersInput;
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
