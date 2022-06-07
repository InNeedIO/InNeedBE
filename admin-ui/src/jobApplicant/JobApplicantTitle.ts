import { JobApplicant as TJobApplicant } from "../api/jobApplicant/JobApplicant";

export const JOBAPPLICANT_TITLE_FIELD = "id";

export const JobApplicantTitle = (record: TJobApplicant): string => {
  return record.id || record.id;
};
