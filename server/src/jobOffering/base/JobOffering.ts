import {Field, ObjectType} from "@nestjs/graphql";
import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {IsDate, IsEnum, IsInt, IsOptional, IsString, ValidateNested,} from "class-validator";
import {JobApplicant} from "../../jobApplicant/base/JobApplicant";
import {User} from "../../user/base/User";
import {EnumJobOfferingPositionLevel} from "./EnumJobOfferingPositionLevel";
import {EnumJobOfferingWorkingMode} from "./EnumJobOfferingWorkingMode";

@ObjectType()
class JobOffering {
  @ApiProperty({
    required: true,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  author?: User;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  city!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [JobApplicant],
  })
  @ValidateNested()
  @Type(() => JobApplicant)
  @IsOptional()
  jobApplicants?: Array<JobApplicant>;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  maxSalary!: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  minSalary!: number;

  @ApiProperty({
    required: false,
    enum: EnumJobOfferingPositionLevel,
  })
  @IsEnum(EnumJobOfferingPositionLevel)
  @IsOptional()
  @Field(() => EnumJobOfferingPositionLevel, {
    nullable: true,
  })
  positionLevel?: "Junior" | "Mid" | "Senior" | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  title!: string;

  @ApiProperty({
    required: true,
    enum: EnumJobOfferingWorkingMode,
  })
  @IsEnum(EnumJobOfferingWorkingMode)
  @Field(() => EnumJobOfferingWorkingMode, {
    nullable: true,
  })
  workingMode?: "Remote" | "Onsite" | "Hybrid";
}
export { JobOffering };
