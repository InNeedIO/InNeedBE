import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { HousingApplicantResolverBase } from "./base/housingApplicant.resolver.base";
import { HousingApplicant } from "./base/HousingApplicant";
import { HousingApplicantService } from "./housingApplicant.service";

@graphql.Resolver(() => HousingApplicant)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class HousingApplicantResolver extends HousingApplicantResolverBase {
  constructor(
    protected readonly service: HousingApplicantService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
