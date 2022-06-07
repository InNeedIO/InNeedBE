import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { HousingApplicantServiceBase } from "./base/housingApplicant.service.base";

@Injectable()
export class HousingApplicantService extends HousingApplicantServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
