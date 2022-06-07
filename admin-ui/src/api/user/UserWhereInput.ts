import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HousingApplicantListRelationFilter } from "../housingApplicant/HousingApplicantListRelationFilter";
import { HousingOfferingListRelationFilter } from "../housingOffering/HousingOfferingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobApplicantListRelationFilter } from "../jobApplicant/JobApplicantListRelationFilter";
import { JobOfferingListRelationFilter } from "../jobOffering/JobOfferingListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  housingApplicants?: HousingApplicantListRelationFilter;
  housingOfferings?: HousingOfferingListRelationFilter;
  id?: StringFilter;
  jobApplicants?: JobApplicantListRelationFilter;
  jobOfferings?: JobOfferingListRelationFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
