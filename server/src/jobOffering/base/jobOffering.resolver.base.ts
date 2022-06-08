import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import {GqlDefaultAuthGuard} from "../../auth/gqlDefaultAuth.guard";
import {AclFilterResponseInterceptor} from "../../interceptors/aclFilterResponse.interceptor";
import {AclValidateRequestInterceptor} from "../../interceptors/aclValidateRequest.interceptor";
import {JobApplicant} from "../../jobApplicant/base/JobApplicant";
import {JobApplicantFindManyArgs} from "../../jobApplicant/base/JobApplicantFindManyArgs";
import {isRecordNotFoundError} from "../../prisma.util";
import {User} from "../../user/base/User";
import {MetaQueryPayload} from "../../util/MetaQueryPayload";
import {JobOfferingService} from "../jobOffering.service";
import {CreateJobOfferingArgs} from "./CreateJobOfferingArgs";
import {DeleteJobOfferingArgs} from "./DeleteJobOfferingArgs";
import {JobOffering} from "./JobOffering";
import {JobOfferingFindManyArgs} from "./JobOfferingFindManyArgs";
import {JobOfferingFindUniqueArgs} from "./JobOfferingFindUniqueArgs";
import {UpdateJobOfferingArgs} from "./UpdateJobOfferingArgs";

@graphql.Resolver(() => JobOffering)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class JobOfferingResolverBase {
  constructor(
    protected readonly service: JobOfferingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "JobOffering",
    action: "read",
    possession: "any",
  })
  async _jobOfferingsMeta(
    @graphql.Args() args: JobOfferingFindManyArgs
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
  @graphql.Query(() => [JobOffering])
  @nestAccessControl.UseRoles({
    resource: "JobOffering",
    action: "read",
    possession: "any",
  })
  async jobOfferings(
    @graphql.Args() args: JobOfferingFindManyArgs
  ): Promise<JobOffering[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => JobOffering, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "JobOffering",
    action: "read",
    possession: "own",
  })
  async jobOffering(
    @graphql.Args() args: JobOfferingFindUniqueArgs
  ): Promise<JobOffering | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => JobOffering)
  @nestAccessControl.UseRoles({
    resource: "JobOffering",
    action: "create",
    possession: "any",
  })
  async createJobOffering(
    @graphql.Args() args: CreateJobOfferingArgs
  ): Promise<JobOffering> {
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
  @graphql.Mutation(() => JobOffering)
  @nestAccessControl.UseRoles({
    resource: "JobOffering",
    action: "update",
    possession: "any",
  })
  async updateJobOffering(
    @graphql.Args() args: UpdateJobOfferingArgs
  ): Promise<JobOffering | null> {
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

  @graphql.Mutation(() => JobOffering)
  @nestAccessControl.UseRoles({
    resource: "JobOffering",
    action: "delete",
    possession: "any",
  })
  async deleteJobOffering(
    @graphql.Args() args: DeleteJobOfferingArgs
  ): Promise<JobOffering | null> {
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
  @graphql.ResolveField(() => [JobApplicant])
  @nestAccessControl.UseRoles({
    resource: "JobApplicant",
    action: "read",
    possession: "any",
  })
  async jobApplicants(
    @graphql.Parent() parent: JobOffering,
    @graphql.Args() args: JobApplicantFindManyArgs
  ): Promise<JobApplicant[]> {
    const results = await this.service.findJobApplicants(parent.id, args);

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
  async author(@graphql.Parent() parent: JobOffering): Promise<User | null> {
    const result = await this.service.getAuthor(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
