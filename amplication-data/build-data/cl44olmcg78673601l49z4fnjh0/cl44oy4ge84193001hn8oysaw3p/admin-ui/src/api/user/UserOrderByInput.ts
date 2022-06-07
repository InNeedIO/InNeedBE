import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  location?: SortOrder;
  mail?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  telephoneNumber?: SortOrder;
  username?: SortOrder;
};
