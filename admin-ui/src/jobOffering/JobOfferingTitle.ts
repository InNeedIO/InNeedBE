import { JobOffering as TJobOffering } from "../api/jobOffering/JobOffering";

export const JOBOFFERING_TITLE_FIELD = "title";

export const JobOfferingTitle = (record: TJobOffering): string => {
  return record.title || record.id;
};
