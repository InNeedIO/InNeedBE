import { Module } from "@nestjs/common";
import { JobApplicantModuleBase } from "./base/jobApplicant.module.base";
import { JobApplicantService } from "./jobApplicant.service";
import { JobApplicantController } from "./jobApplicant.controller";
import { JobApplicantResolver } from "./jobApplicant.resolver";

@Module({
  imports: [JobApplicantModuleBase],
  controllers: [JobApplicantController],
  providers: [JobApplicantService, JobApplicantResolver],
  exports: [JobApplicantService],
})
export class JobApplicantModule {}
