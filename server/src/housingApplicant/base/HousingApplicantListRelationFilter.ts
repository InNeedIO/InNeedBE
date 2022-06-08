import {Field, InputType} from "@nestjs/graphql";
import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {IsOptional, ValidateNested} from "class-validator";
import {HousingApplicantWhereInput} from "./HousingApplicantWhereInput";

@InputType()
class HousingApplicantListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => HousingApplicantWhereInput,
  })
  @ValidateNested()
  @Type(() => HousingApplicantWhereInput)
  @IsOptional()
  @Field(() => HousingApplicantWhereInput, {
    nullable: true,
  })
  every?: HousingApplicantWhereInput;

  @ApiProperty({
    required: false,
    type: () => HousingApplicantWhereInput,
  })
  @ValidateNested()
  @Type(() => HousingApplicantWhereInput)
  @IsOptional()
  @Field(() => HousingApplicantWhereInput, {
    nullable: true,
  })
  some?: HousingApplicantWhereInput;

  @ApiProperty({
    required: false,
    type: () => HousingApplicantWhereInput,
  })
  @ValidateNested()
  @Type(() => HousingApplicantWhereInput)
  @IsOptional()
  @Field(() => HousingApplicantWhereInput, {
    nullable: true,
  })
  none?: HousingApplicantWhereInput;
}
export { HousingApplicantListRelationFilter };
