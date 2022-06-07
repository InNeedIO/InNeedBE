import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { JobApplicantService } from "./jobApplicant.service";
import { JobApplicantControllerBase } from "./base/jobApplicant.controller.base";

@swagger.ApiTags("jobApplicants")
@common.Controller("jobApplicants")
export class JobApplicantController extends JobApplicantControllerBase {
  constructor(
    protected readonly service: JobApplicantService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
