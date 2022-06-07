import { JobOfferingWhereUniqueInput } from "../jobOffering/JobOfferingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type JobApplicantUpdateInput = {
  isAccepted?: boolean;
  jobOffering?: JobOfferingWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
