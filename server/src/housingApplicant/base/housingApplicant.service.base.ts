import {HousingApplicant, HousingOffering, Prisma, User,} from "@prisma/client";
import {PrismaService} from "nestjs-prisma";

export class HousingApplicantServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.HousingApplicantFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.HousingApplicantFindManyArgs>
  ): Promise<number> {
    return this.prisma.housingApplicant.count(args);
  }

  async findMany<T extends Prisma.HousingApplicantFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.HousingApplicantFindManyArgs>
  ): Promise<HousingApplicant[]> {
    return this.prisma.housingApplicant.findMany(args);
  }
  async findOne<T extends Prisma.HousingApplicantFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.HousingApplicantFindUniqueArgs>
  ): Promise<HousingApplicant | null> {
    return this.prisma.housingApplicant.findUnique(args);
  }
  async create<T extends Prisma.HousingApplicantCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.HousingApplicantCreateArgs>
  ): Promise<HousingApplicant> {
    return this.prisma.housingApplicant.create<T>(args);
  }
  async update<T extends Prisma.HousingApplicantUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.HousingApplicantUpdateArgs>
  ): Promise<HousingApplicant> {
    return this.prisma.housingApplicant.update<T>(args);
  }
  async delete<T extends Prisma.HousingApplicantDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.HousingApplicantDeleteArgs>
  ): Promise<HousingApplicant> {
    return this.prisma.housingApplicant.delete(args);
  }

  async getAuthor(parentId: string): Promise<User | null> {
    return this.prisma.housingApplicant
      .findUnique({
        where: { id: parentId },
      })
      .author();
  }

  async getHousingOffering(parentId: string): Promise<HousingOffering | null> {
    return this.prisma.housingApplicant
      .findUnique({
        where: { id: parentId },
      })
      .housingOffering();
  }
}
