import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import {GqlDefaultAuthGuard} from "../../auth/gqlDefaultAuth.guard";
import {Public} from "../../decorators/public.decorator";
import {HousingApplicant} from "../../housingApplicant/base/HousingApplicant";
import {HousingApplicantFindManyArgs} from "../../housingApplicant/base/HousingApplicantFindManyArgs";
import {HousingOffering} from "../../housingOffering/base/HousingOffering";
import {HousingOfferingFindManyArgs} from "../../housingOffering/base/HousingOfferingFindManyArgs";
import {AclFilterResponseInterceptor} from "../../interceptors/aclFilterResponse.interceptor";
import {AclValidateRequestInterceptor} from "../../interceptors/aclValidateRequest.interceptor";
import {JobApplicant} from "../../jobApplicant/base/JobApplicant";
import {JobApplicantFindManyArgs} from "../../jobApplicant/base/JobApplicantFindManyArgs";
import {JobOffering} from "../../jobOffering/base/JobOffering";
import {JobOfferingFindManyArgs} from "../../jobOffering/base/JobOfferingFindManyArgs";
import {isRecordNotFoundError} from "../../prisma.util";
import {MetaQueryPayload} from "../../util/MetaQueryPayload";
import {UserService} from "../user.service";
import {CreateUserArgs} from "./CreateUserArgs";
import {DeleteUserArgs} from "./DeleteUserArgs";
import {UpdateUserArgs} from "./UpdateUserArgs";
import {User} from "./User";
import {UserFindManyArgs} from "./UserFindManyArgs";
import {UserFindUniqueArgs} from "./UserFindUniqueArgs";

@graphql.Resolver(() => User)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class UserResolverBase {
  constructor(
    protected readonly service: UserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async _usersMeta(
    @graphql.Args() args: UserFindManyArgs
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
  @graphql.Query(() => [User])
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async users(@graphql.Args() args: UserFindManyArgs): Promise<User[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "own",
  })
  async user(@graphql.Args() args: UserFindUniqueArgs): Promise<User | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @Public()
  @graphql.Mutation(() => User)
  async createUser(@graphql.Args() args: CreateUserArgs): Promise<User> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => User)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateUser(@graphql.Args() args: UpdateUserArgs): Promise<User | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => User)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "delete",
    possession: "any",
  })
  async deleteUser(@graphql.Args() args: DeleteUserArgs): Promise<User | null> {
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
    @graphql.Parent() parent: User,
    @graphql.Args() args: HousingApplicantFindManyArgs
  ): Promise<HousingApplicant[]> {
    const results = await this.service.findHousingApplicants(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [HousingOffering])
  @nestAccessControl.UseRoles({
    resource: "HousingOffering",
    action: "read",
    possession: "any",
  })
  async housingOfferings(
    @graphql.Parent() parent: User,
    @graphql.Args() args: HousingOfferingFindManyArgs
  ): Promise<HousingOffering[]> {
    const results = await this.service.findHousingOfferings(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [JobApplicant])
  @nestAccessControl.UseRoles({
    resource: "JobApplicant",
    action: "read",
    possession: "any",
  })
  async jobApplicants(
    @graphql.Parent() parent: User,
    @graphql.Args() args: JobApplicantFindManyArgs
  ): Promise<JobApplicant[]> {
    const results = await this.service.findJobApplicants(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [JobOffering])
  @nestAccessControl.UseRoles({
    resource: "JobOffering",
    action: "read",
    possession: "any",
  })
  async jobOfferings(
    @graphql.Parent() parent: User,
    @graphql.Args() args: JobOfferingFindManyArgs
  ): Promise<JobOffering[]> {
    const results = await this.service.findJobOfferings(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
