export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  location?: string | null;
  mail?: string | null;
  password: string;
  roles: Array<string>;
  telephoneNumber?: string | null;
  username: string;
};
