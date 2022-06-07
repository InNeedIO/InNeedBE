import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HousingOfferingService } from "./housingOffering.service";
import { HousingOfferingControllerBase } from "./base/housingOffering.controller.base";

@swagger.ApiTags("housingOfferings")
@common.Controller("housingOfferings")
export class HousingOfferingController extends HousingOfferingControllerBase {
  constructor(
    protected readonly service: HousingOfferingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
