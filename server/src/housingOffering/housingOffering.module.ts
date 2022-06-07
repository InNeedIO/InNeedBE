import { Module } from "@nestjs/common";
import { HousingOfferingModuleBase } from "./base/housingOffering.module.base";
import { HousingOfferingService } from "./housingOffering.service";
import { HousingOfferingController } from "./housingOffering.controller";
import { HousingOfferingResolver } from "./housingOffering.resolver";

@Module({
  imports: [HousingOfferingModuleBase],
  controllers: [HousingOfferingController],
  providers: [HousingOfferingService, HousingOfferingResolver],
  exports: [HousingOfferingService],
})
export class HousingOfferingModule {}
