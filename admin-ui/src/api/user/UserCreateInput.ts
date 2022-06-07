import { HousingApplicantCreateNestedManyWithoutUsersInput } from "./HousingApplicantCreateNestedManyWithoutUsersInput";
import { HousingOfferingCreateNestedManyWithoutUsersInput } from "./HousingOfferingCreateNestedManyWithoutUsersInput";
import { JobApplicantCreateNestedManyWithoutUsersInput } from "./JobApplicantCreateNestedManyWithoutUsersInput";
import { JobOfferingCreateNestedManyWithoutUsersInput } from "./JobOfferingCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  housingApplicants?: HousingApplicantCreateNestedManyWithoutUsersInput;
  housingOfferings?: HousingOfferingCreateNestedManyWithoutUsersInput;
  jobApplicants?: JobApplicantCreateNestedManyWithoutUsersInput;
  jobOfferings?: JobOfferingCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  location?: string | null;
  mail?: string | null;
  password: string;
  roles: Array<string>;
  telephoneNumber?: string | null;
  username: string;
};
