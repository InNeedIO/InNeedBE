import {Field, InputType} from "@nestjs/graphql";
import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {IsBoolean, ValidateNested} from "class-validator";
import {JobOfferingWhereUniqueInput} from "../../jobOffering/base/JobOfferingWhereUniqueInput";
import {UserWhereUniqueInput} from "../../user/base/UserWhereUniqueInput";

@InputType()
class JobApplicantCreateInput {
  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isAccepted!: boolean;

  @ApiProperty({
    required: true,
    type: () => JobOfferingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => JobOfferingWhereUniqueInput)
  @Field(() => JobOfferingWhereUniqueInput)
  jobOffering!: JobOfferingWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  user!: UserWhereUniqueInput;
}
export { JobApplicantCreateInput };
