import {Field, InputType} from "@nestjs/graphql";
import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {IsOptional, ValidateNested} from "class-validator";
import {JobOfferingWhereUniqueInput} from "../../jobOffering/base/JobOfferingWhereUniqueInput";
import {UserWhereUniqueInput} from "../../user/base/UserWhereUniqueInput";
import {BooleanFilter} from "../../util/BooleanFilter";
import {StringFilter} from "../../util/StringFilter";

@InputType()
class JobApplicantWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: BooleanFilter,
  })
  @Type(() => BooleanFilter)
  @IsOptional()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  isAccepted?: BooleanFilter;

  @ApiProperty({
    required: false,
    type: () => JobOfferingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => JobOfferingWhereUniqueInput)
  @IsOptional()
  @Field(() => JobOfferingWhereUniqueInput, {
    nullable: true,
  })
  jobOffering?: JobOfferingWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput;
}
export { JobApplicantWhereInput };
