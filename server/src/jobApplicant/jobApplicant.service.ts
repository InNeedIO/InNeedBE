import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { JobApplicantServiceBase } from "./base/jobApplicant.service.base";

@Injectable()
export class JobApplicantService extends JobApplicantServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
