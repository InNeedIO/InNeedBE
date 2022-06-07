import { Module } from "@nestjs/common";
import { HousingApplicantModuleBase } from "./base/housingApplicant.module.base";
import { HousingApplicantService } from "./housingApplicant.service";
import { HousingApplicantController } from "./housingApplicant.controller";
import { HousingApplicantResolver } from "./housingApplicant.resolver";

@Module({
  imports: [HousingApplicantModuleBase],
  controllers: [HousingApplicantController],
  providers: [HousingApplicantService, HousingApplicantResolver],
  exports: [HousingApplicantService],
})
export class HousingApplicantModule {}
