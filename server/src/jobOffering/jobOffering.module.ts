import { Module } from "@nestjs/common";
import { JobOfferingModuleBase } from "./base/jobOffering.module.base";
import { JobOfferingService } from "./jobOffering.service";
import { JobOfferingController } from "./jobOffering.controller";
import { JobOfferingResolver } from "./jobOffering.resolver";

@Module({
  imports: [JobOfferingModuleBase],
  controllers: [JobOfferingController],
  providers: [JobOfferingService, JobOfferingResolver],
  exports: [JobOfferingService],
})
export class JobOfferingModule {}
