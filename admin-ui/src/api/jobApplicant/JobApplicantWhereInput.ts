import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { JobOfferingWhereUniqueInput } from "../jobOffering/JobOfferingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type JobApplicantWhereInput = {
  id?: StringFilter;
  isAccepted?: BooleanFilter;
  jobOffering?: JobOfferingWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
