import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { HousingOfferingServiceBase } from "./base/housingOffering.service.base";

@Injectable()
export class HousingOfferingService extends HousingOfferingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
