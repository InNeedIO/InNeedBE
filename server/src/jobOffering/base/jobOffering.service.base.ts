import {JobApplicant, JobOffering, Prisma, User} from "@prisma/client";
import {PrismaService} from "nestjs-prisma";

export class JobOfferingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.JobOfferingFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobOfferingFindManyArgs>
  ): Promise<number> {
    return this.prisma.jobOffering.count(args);
  }

  async findMany<T extends Prisma.JobOfferingFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobOfferingFindManyArgs>
  ): Promise<JobOffering[]> {
    return this.prisma.jobOffering.findMany(args);
  }
  async findOne<T extends Prisma.JobOfferingFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobOfferingFindUniqueArgs>
  ): Promise<JobOffering | null> {
    return this.prisma.jobOffering.findUnique(args);
  }
  async create<T extends Prisma.JobOfferingCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobOfferingCreateArgs>
  ): Promise<JobOffering> {
    return this.prisma.jobOffering.create<T>(args);
  }
  async update<T extends Prisma.JobOfferingUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobOfferingUpdateArgs>
  ): Promise<JobOffering> {
    return this.prisma.jobOffering.update<T>(args);
  }
  async delete<T extends Prisma.JobOfferingDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.JobOfferingDeleteArgs>
  ): Promise<JobOffering> {
    return this.prisma.jobOffering.delete(args);
  }

  async findJobApplicants(
    parentId: string,
    args: Prisma.JobApplicantFindManyArgs
  ): Promise<JobApplicant[]> {
    return this.prisma.jobOffering
      .findUnique({
        where: { id: parentId },
      })
      .jobApplicants(args);
  }

  async getAuthor(parentId: string): Promise<User | null> {
    return this.prisma.jobOffering
      .findUnique({
        where: { id: parentId },
      })
      .author();
  }
}
