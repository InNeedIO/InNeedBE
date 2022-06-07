import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { JobOfferingServiceBase } from "./base/jobOffering.service.base";

@Injectable()
export class JobOfferingService extends JobOfferingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
