import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import {GqlDefaultAuthGuard} from "../../auth/gqlDefaultAuth.guard";
import {HousingOffering} from "../../housingOffering/base/HousingOffering";
import {AclFilterResponseInterceptor} from "../../interceptors/aclFilterResponse.interceptor";
import {AclValidateRequestInterceptor} from "../../interceptors/aclValidateRequest.interceptor";
import {isRecordNotFoundError} from "../../prisma.util";
import {User} from "../../user/base/User";
import {MetaQueryPayload} from "../../util/MetaQueryPayload";
import {HousingApplicantService} from "../housingApplicant.service";
import {CreateHousingApplicantArgs} from "./CreateHousingApplicantArgs";
import {DeleteHousingApplicantArgs} from "./DeleteHousingApplicantArgs";
import {HousingApplicant} from "./HousingApplicant";
import {HousingApplicantFindManyArgs} from "./HousingApplicantFindManyArgs";
import {HousingApplicantFindUniqueArgs} from "./HousingApplicantFindUniqueArgs";
import {UpdateHousingApplicantArgs} from "./UpdateHousingApplicantArgs";

@graphql.Resolver(() => HousingApplicant)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class HousingApplicantResolverBase {
  constructor(
    protected readonly service: HousingApplicantService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "HousingApplicant",
    action: "read",
    possession: "any",
  })
  async _housingApplicantsMeta(
    @graphql.Args() args: HousingApplicantFindManyArgs
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
  @graphql.Query(() => [HousingApplicant])
  @nestAccessControl.UseRoles({
    resource: "HousingApplicant",
    action: "read",
    possession: "any",
  })
  async housingApplicants(
    @graphql.Args() args: HousingApplicantFindManyArgs
  ): Promise<HousingApplicant[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => HousingApplicant, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "HousingApplicant",
    action: "read",
    possession: "own",
  })
  async housingApplicant(
    @graphql.Args() args: HousingApplicantFindUniqueArgs
  ): Promise<HousingApplicant | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => HousingApplicant)
  @nestAccessControl.UseRoles({
    resource: "HousingApplicant",
    action: "create",
    possession: "any",
  })
  async createHousingApplicant(
    @graphql.Args() args: CreateHousingApplicantArgs
  ): Promise<HousingApplicant> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        author: args.data.author
          ? {
              connect: args.data.author,
            }
          : undefined,

        housingOffering: {
          connect: args.data.housingOffering,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => HousingApplicant)
  @nestAccessControl.UseRoles({
    resource: "HousingApplicant",
    action: "update",
    possession: "any",
  })
  async updateHousingApplicant(
    @graphql.Args() args: UpdateHousingApplicantArgs
  ): Promise<HousingApplicant | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          author: args.data.author
            ? {
                connect: args.data.author,
              }
            : undefined,

          housingOffering: {
            connect: args.data.housingOffering,
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

  @graphql.Mutation(() => HousingApplicant)
  @nestAccessControl.UseRoles({
    resource: "HousingApplicant",
    action: "delete",
    possession: "any",
  })
  async deleteHousingApplicant(
    @graphql.Args() args: DeleteHousingApplicantArgs
  ): Promise<HousingApplicant | null> {
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
  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async author(
    @graphql.Parent() parent: HousingApplicant
  ): Promise<User | null> {
    const result = await this.service.getAuthor(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => HousingOffering, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "HousingOffering",
    action: "read",
    possession: "any",
  })
  async housingOffering(
    @graphql.Parent() parent: HousingApplicant
  ): Promise<HousingOffering | null> {
    const result = await this.service.getHousingOffering(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
