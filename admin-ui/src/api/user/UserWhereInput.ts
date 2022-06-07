import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobApplicantListRelationFilter } from "../jobApplicant/JobApplicantListRelationFilter";
import { JobOfferingListRelationFilter } from "../jobOffering/JobOfferingListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  jobApplicants?: JobApplicantListRelationFilter;
  jobOfferings?: JobOfferingListRelationFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
