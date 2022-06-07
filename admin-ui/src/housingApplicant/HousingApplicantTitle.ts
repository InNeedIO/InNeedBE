import { HousingApplicant as THousingApplicant } from "../api/housingApplicant/HousingApplicant";

export const HOUSINGAPPLICANT_TITLE_FIELD = "id";

export const HousingApplicantTitle = (record: THousingApplicant): string => {
  return record.id || record.id;
};
