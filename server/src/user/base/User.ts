import {Field, ObjectType} from "@nestjs/graphql";
import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {IsOptional, IsString, ValidateNested} from "class-validator";
import {HousingApplicant} from "../../housingApplicant/base/HousingApplicant";
import {HousingOffering} from "../../housingOffering/base/HousingOffering";
import {JobApplicant} from "../../jobApplicant/base/JobApplicant";
import {JobOffering} from "../../jobOffering/base/JobOffering";

@ObjectType()
class User {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName!: string | null;

  @ApiProperty({
    required: false,
    type: () => [HousingApplicant],
  })
  @ValidateNested()
  @Type(() => HousingApplicant)
  @IsOptional()
  housingApplicants?: Array<HousingApplicant>;

  @ApiProperty({
    required: false,
    type: () => [HousingOffering],
  })
  @ValidateNested()
  @Type(() => HousingOffering)
  @IsOptional()
  housingOfferings?: Array<HousingOffering>;

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
    required: false,
    type: () => [JobOffering],
  })
  @ValidateNested()
  @Type(() => JobOffering)
  @IsOptional()
  jobOfferings?: Array<JobOffering>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  mail!: string | null;

  @ApiProperty({
    required: true,
    type: [String],
  })
  @IsString({
    each: true,
  })
  @Field(() => [String])
  roles!: Array<string>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  telephoneNumber!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}
export { User };
