import { HousingOffering as THousingOffering } from "../api/housingOffering/HousingOffering";

export const HOUSINGOFFERING_TITLE_FIELD = "title";

export const HousingOfferingTitle = (record: THousingOffering): string => {
  return record.title || record.id;
};
