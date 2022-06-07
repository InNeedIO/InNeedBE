import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { JobOfferingService } from "./jobOffering.service";
import { JobOfferingControllerBase } from "./base/jobOffering.controller.base";

@swagger.ApiTags("jobOfferings")
@common.Controller("jobOfferings")
export class JobOfferingController extends JobOfferingControllerBase {
  constructor(
    protected readonly service: JobOfferingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
