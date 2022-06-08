import {Field, InputType} from "@nestjs/graphql";
import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {IsBoolean, IsOptional, ValidateNested} from "class-validator";
import {JobOfferingWhereUniqueInput} from "../../jobOffering/base/JobOfferingWhereUniqueInput";
import {UserWhereUniqueInput} from "../../user/base/UserWhereUniqueInput";

@InputType()
class JobApplicantUpdateInput {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isAccepted?: boolean;

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
export { JobApplicantUpdateInput };
