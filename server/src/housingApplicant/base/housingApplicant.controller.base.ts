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
import {HousingApplicantService} from "../housingApplicant.service";
import {HousingApplicant} from "./HousingApplicant";
import {HousingApplicantCreateInput} from "./HousingApplicantCreateInput";
import {HousingApplicantFindManyArgs} from "./HousingApplicantFindManyArgs";
import {HousingApplicantUpdateInput} from "./HousingApplicantUpdateInput";
import {HousingApplicantWhereUniqueInput} from "./HousingApplicantWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class HousingApplicantControllerBase {
  constructor(
    protected readonly service: HousingApplicantService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "HousingApplicant",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: HousingApplicant })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: HousingApplicantCreateInput
  ): Promise<HousingApplicant> {
    return await this.service.create({
      data: {
        ...data,

        author: data.author
          ? {
              connect: data.author,
            }
          : undefined,

        housingOffering: {
          connect: data.housingOffering,
        },
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "HousingApplicant",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [HousingApplicant] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(HousingApplicantFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<HousingApplicant[]> {
    const args = plainToClass(HousingApplicantFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "HousingApplicant",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: HousingApplicant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: HousingApplicantWhereUniqueInput
  ): Promise<HousingApplicant | null> {
    const result = await this.service.findOne({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "HousingApplicant",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: HousingApplicant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: HousingApplicantWhereUniqueInput,
    @common.Body() data: HousingApplicantUpdateInput
  ): Promise<HousingApplicant | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          author: data.author
            ? {
                connect: data.author,
              }
            : undefined,

          housingOffering: {
            connect: data.housingOffering,
          },
        },
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
    resource: "HousingApplicant",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: HousingApplicant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: HousingApplicantWhereUniqueInput
  ): Promise<HousingApplicant | null> {
    try {
      return await this.service.delete({
        where: params,
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
