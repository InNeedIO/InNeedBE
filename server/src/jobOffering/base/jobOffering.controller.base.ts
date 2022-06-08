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
import {JobApplicant} from "../../jobApplicant/base/JobApplicant";
import {JobApplicantFindManyArgs} from "../../jobApplicant/base/JobApplicantFindManyArgs";
import {JobApplicantWhereUniqueInput} from "../../jobApplicant/base/JobApplicantWhereUniqueInput";
import {isRecordNotFoundError} from "../../prisma.util";
import {JobOfferingService} from "../jobOffering.service";
import {JobOffering} from "./JobOffering";
import {JobOfferingCreateInput} from "./JobOfferingCreateInput";
import {JobOfferingFindManyArgs} from "./JobOfferingFindManyArgs";
import {JobOfferingUpdateInput} from "./JobOfferingUpdateInput";
import {JobOfferingWhereUniqueInput} from "./JobOfferingWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class JobOfferingControllerBase {
  constructor(
    protected readonly service: JobOfferingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "JobOffering",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: JobOffering })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: JobOfferingCreateInput
  ): Promise<JobOffering> {
    return await this.service.create({
      data: {
        ...data,

        author: {
          connect: data.author,
        },
      },
      select: {
        author: {
          select: {
            id: true,
          },
        },

        city: true,
        createdAt: true,
        description: true,
        id: true,
        maxSalary: true,
        minSalary: true,
        positionLevel: true,
        title: true,
        workingMode: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "JobOffering",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [JobOffering] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(JobOfferingFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<JobOffering[]> {
    const args = plainToClass(JobOfferingFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        author: {
          select: {
            id: true,
          },
        },

        city: true,
        createdAt: true,
        description: true,
        id: true,
        maxSalary: true,
        minSalary: true,
        positionLevel: true,
        title: true,
        workingMode: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "JobOffering",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: JobOffering })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: JobOfferingWhereUniqueInput
  ): Promise<JobOffering | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        author: {
          select: {
            id: true,
          },
        },

        city: true,
        createdAt: true,
        description: true,
        id: true,
        maxSalary: true,
        minSalary: true,
        positionLevel: true,
        title: true,
        workingMode: true,
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
    resource: "JobOffering",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: JobOffering })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: JobOfferingWhereUniqueInput,
    @common.Body() data: JobOfferingUpdateInput
  ): Promise<JobOffering | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          author: {
            connect: data.author,
          },
        },
        select: {
          author: {
            select: {
              id: true,
            },
          },

          city: true,
          createdAt: true,
          description: true,
          id: true,
          maxSalary: true,
          minSalary: true,
          positionLevel: true,
          title: true,
          workingMode: true,
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
    resource: "JobOffering",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: JobOffering })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: JobOfferingWhereUniqueInput
  ): Promise<JobOffering | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          author: {
            select: {
              id: true,
            },
          },

          city: true,
          createdAt: true,
          description: true,
          id: true,
          maxSalary: true,
          minSalary: true,
          positionLevel: true,
          title: true,
          workingMode: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "JobApplicant",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/jobApplicants")
  @ApiNestedQuery(JobApplicantFindManyArgs)
  async findManyJobApplicants(
    @common.Req() request: Request,
    @common.Param() params: JobOfferingWhereUniqueInput
  ): Promise<JobApplicant[]> {
    const query = plainToClass(JobApplicantFindManyArgs, request.query);
    const results = await this.service.findJobApplicants(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "JobOffering",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/jobApplicants")
  async connectJobApplicants(
    @common.Param() params: JobOfferingWhereUniqueInput,
    @common.Body() body: JobApplicantWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      jobApplicants: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "JobOffering",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/jobApplicants")
  async updateJobApplicants(
    @common.Param() params: JobOfferingWhereUniqueInput,
    @common.Body() body: JobApplicantWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      jobApplicants: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "JobOffering",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/jobApplicants")
  async disconnectJobApplicants(
    @common.Param() params: JobOfferingWhereUniqueInput,
    @common.Body() body: JobApplicantWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      jobApplicants: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
