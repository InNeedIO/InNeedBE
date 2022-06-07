import { JobOfferingCreateNestedManyWithoutUsersInput } from "./JobOfferingCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  jobOfferings?: JobOfferingCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  location?: string | null;
  mail?: string | null;
  password: string;
  roles: Array<string>;
  telephoneNumber?: string | null;
  username: string;
};
