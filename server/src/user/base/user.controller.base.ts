import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import {plainToClass} from "class-transformer";
import {Request} from "express";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import {ApiNestedQuery} from "../../decorators/api-nested-query.decorator";
import {CurrentUser} from "../../decorators/currentUser.decorator";
import {Public} from "../../decorators/public.decorator";
import * as errors from "../../errors";
import {HousingApplicant} from "../../housingApplicant/base/HousingApplicant";
import {HousingApplicantFindManyArgs} from "../../housingApplicant/base/HousingApplicantFindManyArgs";
import {HousingApplicantWhereUniqueInput} from "../../housingApplicant/base/HousingApplicantWhereUniqueInput";
import {HousingOffering} from "../../housingOffering/base/HousingOffering";
import {HousingOfferingFindManyArgs} from "../../housingOffering/base/HousingOfferingFindManyArgs";
import {HousingOfferingWhereUniqueInput} from "../../housingOffering/base/HousingOfferingWhereUniqueInput";
import {AclFilterResponseInterceptor} from "../../interceptors/aclFilterResponse.interceptor";
import {AclValidateRequestInterceptor} from "../../interceptors/aclValidateRequest.interceptor";
import {JobApplicant} from "../../jobApplicant/base/JobApplicant";
import {JobApplicantFindManyArgs} from "../../jobApplicant/base/JobApplicantFindManyArgs";
import {JobApplicantWhereUniqueInput} from "../../jobApplicant/base/JobApplicantWhereUniqueInput";
import {JobOffering} from "../../jobOffering/base/JobOffering";
import {JobOfferingFindManyArgs} from "../../jobOffering/base/JobOfferingFindManyArgs";
import {JobOfferingWhereUniqueInput} from "../../jobOffering/base/JobOfferingWhereUniqueInput";
import {isRecordNotFoundError} from "../../prisma.util";
import {UserService} from "../user.service";
import {User} from "./User";
import {UserCreateInput} from "./UserCreateInput";
import {UserFindManyArgs} from "./UserFindManyArgs";
import {UserUpdateInput} from "./UserUpdateInput";
import {UserWhereUniqueInput} from "./UserWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserControllerBase {
  constructor(
    protected readonly service: UserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @Public()
  @common.Post()
  @swagger.ApiCreatedResponse({ type: User })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: UserCreateInput): Promise<User> {
    return await this.service.create({
      data: data,
      select: {
        firstName: true,
        id: true,
        lastName: true,
        location: true,
        mail: true,
        roles: true,
        telephoneNumber: true,
        username: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [User] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(UserFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<User[]> {
    const args = plainToClass(UserFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        firstName: true,
        id: true,
        lastName: true,
        location: true,
        mail: true,
        roles: true,
        telephoneNumber: true,
        username: true,
        housingOfferings: true,
        jobOfferings: true
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "own",
  })
  @common.Get("/me")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findMe(
      @CurrentUser() user: User
  ): Promise<User | null> {
    const result = await this.service.findOne({
      where: {
        id: user.id
      },
      select: {
        firstName: true,
        id: true,
        lastName: true,
        location: true,
        mail: true,
        roles: true,
        telephoneNumber: true,
        username: true,
        housingOfferings: true,
        jobOfferings: true
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
          `No resource was found for ${user?.id}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        firstName: true,
        id: true,
        lastName: true,
        location: true,
        mail: true,
        roles: true,
        telephoneNumber: true,
        username: true,
        housingOfferings: true,
        jobOfferings: true
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
    resource: "User",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() data: UserUpdateInput
  ): Promise<User | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          firstName: true,
          id: true,
          lastName: true,
          location: true,
          mail: true,
          roles: true,
          telephoneNumber: true,
          username: true,
          housingOfferings: true,
          jobOfferings: true
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
    resource: "User",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          firstName: true,
          id: true,
          lastName: true,
          location: true,
          mail: true,
          roles: true,
          telephoneNumber: true,
          username: true,
          housingOfferings: true,
          jobOfferings: true
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
    resource: "HousingApplicant",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/housingApplicants")
  @ApiNestedQuery(HousingApplicantFindManyArgs)
  async findManyHousingApplicants(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<HousingApplicant[]> {
    const query = plainToClass(HousingApplicantFindManyArgs, request.query);
    const results = await this.service.findHousingApplicants(params.id, {
      ...query,
      select: {
        author: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        housingOffering: {
          select: {
            id: true,
          },
        },

        id: true,
        isAccepted: true,
        updatedAt: true,
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
    resource: "User",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/housingApplicants")
  async connectHousingApplicants(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: HousingApplicantWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      housingApplicants: {
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
    resource: "User",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/housingApplicants")
  async updateHousingApplicants(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: HousingApplicantWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      housingApplicants: {
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
    resource: "User",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/housingApplicants")
  async disconnectHousingApplicants(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: HousingApplicantWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      housingApplicants: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "HousingOffering",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/housingOfferings")
  @ApiNestedQuery(HousingOfferingFindManyArgs)
  async findManyHousingOfferings(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<HousingOffering[]> {
    const query = plainToClass(HousingOfferingFindManyArgs, request.query);
    const results = await this.service.findHousingOfferings(params.id, {
      ...query,
      select: {
        address: true,

        author: {
          select: {
            id: true,
          },
        },

        housingApplicants: {
          select: {
            id: true,
          },
        },

        city: true,
        createdAt: true,
        description: true,
        id: true,
        price: true,
        roomsNumber: true,
        size: true,
        title: true,
        updatedAt: true,
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
    resource: "User",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/housingOfferings")
  async connectHousingOfferings(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: HousingOfferingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      housingOfferings: {
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
    resource: "User",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/housingOfferings")
  async updateHousingOfferings(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: HousingOfferingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      housingOfferings: {
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
    resource: "User",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/housingOfferings")
  async disconnectHousingOfferings(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: HousingOfferingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      housingOfferings: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
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
    @common.Param() params: UserWhereUniqueInput
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
    resource: "User",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/jobApplicants")
  async connectJobApplicants(
    @common.Param() params: UserWhereUniqueInput,
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
    resource: "User",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/jobApplicants")
  async updateJobApplicants(
    @common.Param() params: UserWhereUniqueInput,
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
    resource: "User",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/jobApplicants")
  async disconnectJobApplicants(
    @common.Param() params: UserWhereUniqueInput,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "JobOffering",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/jobOfferings")
  @ApiNestedQuery(JobOfferingFindManyArgs)
  async findManyJobOfferings(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<JobOffering[]> {
    const query = plainToClass(JobOfferingFindManyArgs, request.query);
    const results = await this.service.findJobOfferings(params.id, {
      ...query,
      select: {
        author: {
          select: {
            id: true,
          },
        },

        jobApplicants: {
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/jobOfferings")
  async connectJobOfferings(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: JobOfferingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      jobOfferings: {
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
    resource: "User",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/jobOfferings")
  async updateJobOfferings(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: JobOfferingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      jobOfferings: {
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
    resource: "User",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/jobOfferings")
  async disconnectJobOfferings(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: JobOfferingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      jobOfferings: {
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
