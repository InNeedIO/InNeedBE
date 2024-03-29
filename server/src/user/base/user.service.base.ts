import {HousingApplicant, HousingOffering, JobApplicant, JobOffering, Prisma, User,} from "@prisma/client";
import {PrismaService} from "nestjs-prisma";
import {PasswordService} from "../../auth/password.service";
import {transformStringFieldUpdateInput} from "../../prisma.util";

export class UserServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly passwordService: PasswordService
  ) {}

  async count<T extends Prisma.UserFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindManyArgs>
  ): Promise<number> {
    return this.prisma.user.count(args);
  }

  async findMany<T extends Prisma.UserFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindManyArgs>
  ): Promise<User[]> {
    return this.prisma.user.findMany(args);
  }
  async findOne<T extends Prisma.UserFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindUniqueArgs>
  ): Promise<User | null> {
    return this.prisma.user.findUnique(args);
  }
  async create<T extends Prisma.UserCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserCreateArgs>
  ): Promise<User> {
    return this.prisma.user.create<T>({
      ...args,

      data: {
        ...args.data,
        password: await this.passwordService.hash(args.data.password),
      },
    });
  }
  async update<T extends Prisma.UserUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserUpdateArgs>
  ): Promise<User> {
    return this.prisma.user.update<T>({
      ...args,

      data: {
        ...args.data,

        password:
          args.data.password &&
          (await transformStringFieldUpdateInput(
            args.data.password,
            (password) => this.passwordService.hash(password)
          )),
      },
    });
  }
  async delete<T extends Prisma.UserDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserDeleteArgs>
  ): Promise<User> {
    return this.prisma.user.delete(args);
  }

  async findHousingApplicants(
    parentId: string,
    args: Prisma.HousingApplicantFindManyArgs
  ): Promise<HousingApplicant[]> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .housingApplicants(args);
  }

  async findHousingOfferings(
    parentId: string,
    args: Prisma.HousingOfferingFindManyArgs
  ): Promise<HousingOffering[]> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .housingOfferings(args);
  }

  async findJobApplicants(
    parentId: string,
    args: Prisma.JobApplicantFindManyArgs
  ): Promise<JobApplicant[]> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .jobApplicants(args);
  }

  async findJobOfferings(
    parentId: string,
    args: Prisma.JobOfferingFindManyArgs
  ): Promise<JobOffering[]> {
    return this.prisma.user
      .findUnique({
        where: { id: parentId },
      })
      .jobOfferings(args);
  }
}
