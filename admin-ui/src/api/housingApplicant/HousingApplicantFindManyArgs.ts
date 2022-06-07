import { HousingApplicantWhereInput } from "./HousingApplicantWhereInput";
import { HousingApplicantOrderByInput } from "./HousingApplicantOrderByInput";

export type HousingApplicantFindManyArgs = {
  where?: HousingApplicantWhereInput;
  orderBy?: Array<HousingApplicantOrderByInput>;
  skip?: number;
  take?: number;
};
