import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import {GqlDefaultAuthGuard} from "../../auth/gqlDefaultAuth.guard";
import {AclFilterResponseInterceptor} from "../../interceptors/aclFilterResponse.interceptor";
import {AclValidateRequestInterceptor} from "../../interceptors/aclValidateRequest.interceptor";
import {JobOffering} from "../../jobOffering/base/JobOffering";
import {isRecordNotFoundError} from "../../prisma.util";
import {User} from "../../user/base/User";
import {MetaQueryPayload} from "../../util/MetaQueryPayload";
import {JobApplicantService} from "../jobApplicant.service";
import {CreateJobApplicantArgs} from "./CreateJobApplicantArgs";
import {DeleteJobApplicantArgs} from "./DeleteJobApplicantArgs";
import {JobApplicant} from "./JobApplicant";
import {JobApplicantFindManyArgs} from "./JobApplicantFindManyArgs";
import {JobApplicantFindUniqueArgs} from "./JobApplicantFindUniqueArgs";
import {UpdateJobApplicantArgs} from "./UpdateJobApplicantArgs";

@graphql.Resolver(() => JobApplicant)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class JobApplicantResolverBase {
  constructor(
    protected readonly service: JobApplicantService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "JobApplicant",
    action: "read",
    possession: "any",
  })
  async _jobApplicantsMeta(
    @graphql.Args() args: JobApplicantFindManyArgs
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
  @graphql.Query(() => [JobApplicant])
  @nestAccessControl.UseRoles({
    resource: "JobApplicant",
    action: "read",
    possession: "any",
  })
  async jobApplicants(
    @graphql.Args() args: JobApplicantFindManyArgs
  ): Promise<JobApplicant[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => JobApplicant, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "JobApplicant",
    action: "read",
    possession: "own",
  })
  async jobApplicant(
    @graphql.Args() args: JobApplicantFindUniqueArgs
  ): Promise<JobApplicant | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => JobApplicant)
  @nestAccessControl.UseRoles({
    resource: "JobApplicant",
    action: "create",
    possession: "any",
  })
  async createJobApplicant(
    @graphql.Args() args: CreateJobApplicantArgs
  ): Promise<JobApplicant> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        jobOffering: {
          connect: args.data.jobOffering,
        },

        user: {
          connect: args.data.user,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => JobApplicant)
  @nestAccessControl.UseRoles({
    resource: "JobApplicant",
    action: "update",
    possession: "any",
  })
  async updateJobApplicant(
    @graphql.Args() args: UpdateJobApplicantArgs
  ): Promise<JobApplicant | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          jobOffering: {
            connect: args.data.jobOffering,
          },

          user: {
            connect: args.data.user,
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

  @graphql.Mutation(() => JobApplicant)
  @nestAccessControl.UseRoles({
    resource: "JobApplicant",
    action: "delete",
    possession: "any",
  })
  async deleteJobApplicant(
    @graphql.Args() args: DeleteJobApplicantArgs
  ): Promise<JobApplicant | null> {
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
  @graphql.ResolveField(() => JobOffering, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "JobOffering",
    action: "read",
    possession: "any",
  })
  async jobOffering(
    @graphql.Parent() parent: JobApplicant
  ): Promise<JobOffering | null> {
    const result = await this.service.getJobOffering(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async user(@graphql.Parent() parent: JobApplicant): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
