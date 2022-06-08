import {Field, InputType} from "@nestjs/graphql";
import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {IsOptional, IsString, ValidateNested} from "class-validator";
import {HousingApplicantCreateNestedManyWithoutUsersInput} from "./HousingApplicantCreateNestedManyWithoutUsersInput";
import {HousingOfferingCreateNestedManyWithoutUsersInput} from "./HousingOfferingCreateNestedManyWithoutUsersInput";
import {JobApplicantCreateNestedManyWithoutUsersInput} from "./JobApplicantCreateNestedManyWithoutUsersInput";
import {JobOfferingCreateNestedManyWithoutUsersInput} from "./JobOfferingCreateNestedManyWithoutUsersInput";

@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: () => HousingApplicantCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => HousingApplicantCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => HousingApplicantCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  housingApplicants?: HousingApplicantCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => HousingOfferingCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => HousingOfferingCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => HousingOfferingCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  housingOfferings?: HousingOfferingCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => JobApplicantCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => JobApplicantCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => JobApplicantCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  jobApplicants?: JobApplicantCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => JobOfferingCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => JobOfferingCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => JobOfferingCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  jobOfferings?: JobOfferingCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  mail?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

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
  telephoneNumber?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}
export { UserCreateInput };
