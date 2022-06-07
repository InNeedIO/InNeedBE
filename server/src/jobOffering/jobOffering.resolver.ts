import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { JobOfferingResolverBase } from "./base/jobOffering.resolver.base";
import { JobOffering } from "./base/JobOffering";
import { JobOfferingService } from "./jobOffering.service";

@graphql.Resolver(() => JobOffering)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class JobOfferingResolver extends JobOfferingResolverBase {
  constructor(
    protected readonly service: JobOfferingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
