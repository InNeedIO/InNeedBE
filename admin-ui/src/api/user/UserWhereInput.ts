import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HousingOfferingListRelationFilter } from "../housingOffering/HousingOfferingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobApplicantListRelationFilter } from "../jobApplicant/JobApplicantListRelationFilter";
import { JobOfferingListRelationFilter } from "../jobOffering/JobOfferingListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  housingOfferings?: HousingOfferingListRelationFilter;
  id?: StringFilter;
  jobApplicants?: JobApplicantListRelationFilter;
  jobOfferings?: JobOfferingListRelationFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
