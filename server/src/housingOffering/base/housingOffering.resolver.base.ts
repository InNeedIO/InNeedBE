import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import {GqlDefaultAuthGuard} from "../../auth/gqlDefaultAuth.guard";
import {HousingApplicant} from "../../housingApplicant/base/HousingApplicant";
import {HousingApplicantFindManyArgs} from "../../housingApplicant/base/HousingApplicantFindManyArgs";
import {AclFilterResponseInterceptor} from "../../interceptors/aclFilterResponse.interceptor";
import {AclValidateRequestInterceptor} from "../../interceptors/aclValidateRequest.interceptor";
import {isRecordNotFoundError} from "../../prisma.util";
import {User} from "../../user/base/User";
import {MetaQueryPayload} from "../../util/MetaQueryPayload";
import {HousingOfferingService} from "../housingOffering.service";
import {CreateHousingOfferingArgs} from "./CreateHousingOfferingArgs";
import {DeleteHousingOfferingArgs} from "./DeleteHousingOfferingArgs";
import {HousingOffering} from "./HousingOffering";
import {HousingOfferingFindManyArgs} from "./HousingOfferingFindManyArgs";
import {HousingOfferingFindUniqueArgs} from "./HousingOfferingFindUniqueArgs";
import {UpdateHousingOfferingArgs} from "./UpdateHousingOfferingArgs";

@graphql.Resolver(() => HousingOffering)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class HousingOfferingResolverBase {
  constructor(
    protected readonly service: HousingOfferingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "HousingOffering",
    action: "read",
    possession: "any",
  })
  async _housingOfferingsMeta(
    @graphql.Args() args: HousingOfferingFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [HousingOffering])
  @nestAccessControl.UseRoles({
    resource: "HousingOffering",
    action: "read",
    possession: "any",
  })
  async housingOfferings(
    @graphql.Args() args: HousingOfferingFindManyArgs
  ): Promise<HousingOffering[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => HousingOffering, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "HousingOffering",
    action: "read",
    possession: "own",
  })
  async housingOffering(
    @graphql.Args() args: HousingOfferingFindUniqueArgs
  ): Promise<HousingOffering | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => HousingOffering)
  @nestAccessControl.UseRoles({
    resource: "HousingOffering",
    action: "create",
    possession: "any",
  })
  async createHousingOffering(
    @graphql.Args() args: CreateHousingOfferingArgs
  ): Promise<HousingOffering> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        author: {
          connect: args.data.author,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => HousingOffering)
  @nestAccessControl.UseRoles({
    resource: "HousingOffering",
    action: "update",
    possession: "any",
  })
  async updateHousingOffering(
    @graphql.Args() args: UpdateHousingOfferingArgs
  ): Promise<HousingOffering | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          author: {
            connect: args.data.author,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => HousingOffering)
  @nestAccessControl.UseRoles({
    resource: "HousingOffering",
    action: "delete",
    possession: "any",
  })
  async deleteHousingOffering(
    @graphql.Args() args: DeleteHousingOfferingArgs
  ): Promise<HousingOffering | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [HousingApplicant])
  @nestAccessControl.UseRoles({
    resource: "HousingApplicant",
    action: "read",
    possession: "any",
  })
  async housingApplicants(
    @graphql.Parent() parent: HousingOffering,
    @graphql.Args() args: HousingApplicantFindManyArgs
  ): Promise<HousingApplicant[]> {
    const results = await this.service.findHousingApplicants(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async author(
    @graphql.Parent() parent: HousingOffering
  ): Promise<User | null> {
    const result = await this.service.getAuthor(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
