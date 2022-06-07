import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JobApplicantListRelationFilter } from "../jobApplicant/JobApplicantListRelationFilter";
import { IntFilter } from "../../util/IntFilter";

export type JobOfferingWhereInput = {
  author?: UserWhereUniqueInput;
  city?: StringFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  jobApplicants?: JobApplicantListRelationFilter;
  maxSalary?: IntFilter;
  minSalary?: IntFilter;
  positionLevel?: "Junior" | "Mid" | "Senior";
  title?: StringFilter;
  workingMode?: "Remote" | "Onsite" | "Hybrid";
};
