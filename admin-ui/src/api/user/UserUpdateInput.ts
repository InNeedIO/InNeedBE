import { JobOfferingUpdateManyWithoutUsersInput } from "./JobOfferingUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  jobOfferings?: JobOfferingUpdateManyWithoutUsersInput;
  lastName?: string | null;
  location?: string | null;
  mail?: string | null;
  password?: string;
  roles?: Array<string>;
  telephoneNumber?: string | null;
  username?: string;
};
