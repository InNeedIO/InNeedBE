import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import {plainToClass} from "class-transformer";
import {Request} from "express";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import {ApiNestedQuery} from "../../decorators/api-nested-query.decorator";
import * as errors from "../../errors";
import {AclFilterResponseInterceptor} from "../../interceptors/aclFilterResponse.interceptor";
import {AclValidateRequestInterceptor} from "../../interceptors/aclValidateRequest.interceptor";
import {isRecordNotFoundError} from "../../prisma.util";
import {JobApplicantService} from "../jobApplicant.service";
import {JobApplicant} from "./JobApplicant";
import {JobApplicantCreateInput} from "./JobApplicantCreateInput";
import {JobApplicantFindManyArgs} from "./JobApplicantFindManyArgs";
import {JobApplicantUpdateInput} from "./JobApplicantUpdateInput";
import {JobApplicantWhereUniqueInput} from "./JobApplicantWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class JobApplicantControllerBase {
  constructor(
    protected readonly service: JobApplicantService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "JobApplicant",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: JobApplicant })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: JobApplicantCreateInput
  ): Promise<JobApplicant> {
    return await this.service.create({
      data: {
        ...data,

        jobOffering: {
          connect: data.jobOffering,
        },

        user: {
          connect: data.user,
        },
      },
      select: {
        createdAt: true,
        id: true,
        isAccepted: true,

        jobOffering: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "JobApplicant",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [JobApplicant] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(JobApplicantFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<JobApplicant[]> {
    const args = plainToClass(JobApplicantFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,
        isAccepted: true,

        jobOffering: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "JobApplicant",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: JobApplicant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: JobApplicantWhereUniqueInput
  ): Promise<JobApplicant | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,
        isAccepted: true,

        jobOffering: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "JobApplicant",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: JobApplicant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: JobApplicantWhereUniqueInput,
    @common.Body() data: JobApplicantUpdateInput
  ): Promise<JobApplicant | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          jobOffering: {
            connect: data.jobOffering,
          },

          user: {
            connect: data.user,
          },
        },
        select: {
          createdAt: true,
          id: true,
          isAccepted: true,

          jobOffering: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "JobApplicant",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: JobApplicant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: JobApplicantWhereUniqueInput
  ): Promise<JobApplicant | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,
          isAccepted: true,

          jobOffering: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
