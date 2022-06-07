import { HousingOfferingWhereInput } from "./HousingOfferingWhereInput";
import { HousingOfferingOrderByInput } from "./HousingOfferingOrderByInput";

export type HousingOfferingFindManyArgs = {
  where?: HousingOfferingWhereInput;
  orderBy?: Array<HousingOfferingOrderByInput>;
  skip?: number;
  take?: number;
};
