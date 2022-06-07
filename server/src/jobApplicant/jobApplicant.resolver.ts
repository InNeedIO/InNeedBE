import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { JobApplicantResolverBase } from "./base/jobApplicant.resolver.base";
import { JobApplicant } from "./base/JobApplicant";
import { JobApplicantService } from "./jobApplicant.service";

@graphql.Resolver(() => JobApplicant)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class JobApplicantResolver extends JobApplicantResolverBase {
  constructor(
    protected readonly service: JobApplicantService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
