import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import {plainToClass} from "class-transformer";
import {Request} from "express";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import {ApiNestedQuery} from "../../decorators/api-nested-query.decorator";
import {CurrentUser} from "../../decorators/currentUser.decorator";
import * as errors from "../../errors";
import {HousingApplicant} from "../../housingApplicant/base/HousingApplicant";
import {HousingApplicantFindManyArgs} from "../../housingApplicant/base/HousingApplicantFindManyArgs";
import {HousingApplicantWhereUniqueInput} from "../../housingApplicant/base/HousingApplicantWhereUniqueInput";
import {AclFilterResponseInterceptor} from "../../interceptors/aclFilterResponse.interceptor";
import {AclValidateRequestInterceptor} from "../../interceptors/aclValidateRequest.interceptor";
import {isRecordNotFoundError} from "../../prisma.util";
import {User} from "../../user/base/User";
import {HousingOfferingService} from "../housingOffering.service";
import {HousingOffering} from "./HousingOffering";
import {HousingOfferingCreateInput} from "./HousingOfferingCreateInput";
import {HousingOfferingFindManyArgs} from "./HousingOfferingFindManyArgs";
import {HousingOfferingUpdateInput} from "./HousingOfferingUpdateInput";
import {HousingOfferingWhereUniqueInput} from "./HousingOfferingWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class HousingOfferingControllerBase {
	constructor(
		protected readonly service: HousingOfferingService,
		protected readonly rolesBuilder: nestAccessControl.RolesBuilder
	) {}

	@common.UseInterceptors(AclValidateRequestInterceptor)
	@nestAccessControl.UseRoles({
		resource: "HousingOffering",
		action: "create",
		possession: "any",
	})
	@common.Post()
	@swagger.ApiCreatedResponse({type: HousingOffering})
	@swagger.ApiForbiddenResponse({type: errors.ForbiddenException})
	async create(
		@common.Body() data: HousingOfferingCreateInput
	): Promise<HousingOffering> {
		return await this.service.create({
			data: {
				...data,

				author: {
					connect: data.author,
				},
			},
			select: {
				address: true,

				author: {
					select: {
						id: true,
						firstName: true,
						lastName: true,
						roles: true
					},
				},

				housingApplicants: {
					select: {
						id: true,
						author:true
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
	}

	@common.UseInterceptors(AclFilterResponseInterceptor)
	@nestAccessControl.UseRoles({
		resource: "HousingOffering",
		action: "read",
		possession: "any",
	})
	@common.Get()
	@swagger.ApiOkResponse({type: [HousingOffering]})
	@swagger.ApiForbiddenResponse()
	@ApiNestedQuery(HousingOfferingFindManyArgs)
	async findMany(@common.Req() request: Request, @CurrentUser() user: User): Promise<HousingOffering[]> {
		const args = plainToClass(HousingOfferingFindManyArgs, request.query);

		const userRole = user.roles[0];

		const data = await this.service.findMany({
			...args,
			select: {
				address: true,

				author: {
					select: {
						id: true,
						firstName: true,
						lastName: true,
						roles: true
					},
				},

				housingApplicants: {
					select: {
						id: true,
						author:true
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

		const filteredOfferings: HousingOffering[] = data.filter(
			(item: HousingOffering) => (!item?.author?.roles.includes(userRole) && item?.author?.id != user.id) ?? true);

		return filteredOfferings;
	}

	@common.UseInterceptors(AclFilterResponseInterceptor)
	@nestAccessControl.UseRoles({
		resource: "HousingOffering",
		action: "read",
		possession: "own",
	})
	@common.Get("/:id")
	@swagger.ApiOkResponse({type: HousingOffering})
	@swagger.ApiNotFoundResponse({type: errors.NotFoundException})
	@swagger.ApiForbiddenResponse({type: errors.ForbiddenException})
	async findOne(
		@common.Param() params: HousingOfferingWhereUniqueInput
	): Promise<HousingOffering | null> {
		const result = await this.service.findOne({
			where: params,
			select: {
				address: true,

				author: {
					select: {
						id: true,
						firstName: true,
						lastName: true,
						roles: true
					},
				},

				housingApplicants: {
					select: {
						id: true,
						author:true
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
		if (result === null) {
			throw new errors.NotFoundException(
				`No resource was found for ${JSON.stringify(params)}`
			);
		}
		return result;
	}

	@common.UseInterceptors(AclValidateRequestInterceptor)
	@nestAccessControl.UseRoles({
		resource: "HousingOffering",
		action: "update",
		possession: "any",
	})
	@common.Patch("/:id")
	@swagger.ApiOkResponse({type: HousingOffering})
	@swagger.ApiNotFoundResponse({type: errors.NotFoundException})
	@swagger.ApiForbiddenResponse({type: errors.ForbiddenException})
	async update(
		@common.Param() params: HousingOfferingWhereUniqueInput,
		@common.Body() data: HousingOfferingUpdateInput
	): Promise<HousingOffering | null> {
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
					address: true,

					author: {
						select: {
							id: true,
							firstName: true,
							lastName: true,
							roles: true
						},
					},

					housingApplicants: {
						select: {
							id: true,
							author:true
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
		resource: "HousingOffering",
		action: "delete",
		possession: "any",
	})
	@common.Delete("/:id")
	@swagger.ApiOkResponse({type: HousingOffering})
	@swagger.ApiNotFoundResponse({type: errors.NotFoundException})
	@swagger.ApiForbiddenResponse({type: errors.ForbiddenException})
	async delete(
		@common.Param() params: HousingOfferingWhereUniqueInput
	): Promise<HousingOffering | null> {
		try {
			return await this.service.delete({
				where: params,
				select: {
					address: true,

					author: {
						select: {
							id: true,
							firstName: true,
							lastName: true,
							roles: true
						},
					},

					housingApplicants: {
						select: {
							id: true,
							author:true
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
		@common.Param() params: HousingOfferingWhereUniqueInput
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
		resource: "HousingOffering",
		action: "update",
		possession: "any",
	})
	@common.Post("/:id/housingApplicants")
	async connectHousingApplicants(
		@common.Param() params: HousingOfferingWhereUniqueInput,
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
			select: {id: true},
		});
	}

	@nestAccessControl.UseRoles({
		resource: "HousingOffering",
		action: "update",
		possession: "any",
	})
	@common.Patch("/:id/housingApplicants")
	async updateHousingApplicants(
		@common.Param() params: HousingOfferingWhereUniqueInput,
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
			select: {id: true},
		});
	}

	@nestAccessControl.UseRoles({
		resource: "HousingOffering",
		action: "update",
		possession: "any",
	})
	@common.Delete("/:id/housingApplicants")
	async disconnectHousingApplicants(
		@common.Param() params: HousingOfferingWhereUniqueInput,
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
			select: {id: true},
		});
	}
}
