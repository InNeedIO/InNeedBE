import { JobOfferingWhereUniqueInput } from "../jobOffering/JobOfferingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type JobApplicantCreateInput = {
  isAccepted: boolean;
  jobOffering: JobOfferingWhereUniqueInput;
  user: UserWhereUniqueInput;
};
