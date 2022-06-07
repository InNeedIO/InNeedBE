import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HousingApplicantService } from "./housingApplicant.service";
import { HousingApplicantControllerBase } from "./base/housingApplicant.controller.base";

@swagger.ApiTags("housingApplicants")
@common.Controller("housingApplicants")
export class HousingApplicantController extends HousingApplicantControllerBase {
  constructor(
    protected readonly service: HousingApplicantService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
