import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobOfferingListRelationFilter } from "../jobOffering/JobOfferingListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  jobOfferings?: JobOfferingListRelationFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
