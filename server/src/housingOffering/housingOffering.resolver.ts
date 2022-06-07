import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { HousingOfferingResolverBase } from "./base/housingOffering.resolver.base";
import { HousingOffering } from "./base/HousingOffering";
import { HousingOfferingService } from "./housingOffering.service";

@graphql.Resolver(() => HousingOffering)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class HousingOfferingResolver extends HousingOfferingResolverBase {
  constructor(
    protected readonly service: HousingOfferingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
