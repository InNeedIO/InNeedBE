import {Field, InputType} from "@nestjs/graphql";
import {ApiProperty} from "@nestjs/swagger";
import {JobOfferingWhereUniqueInput} from "../../jobOffering/base/JobOfferingWhereUniqueInput";

@InputType()
class JobOfferingUpdateManyWithoutUsersInput {
  @Field(() => [JobOfferingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [JobOfferingWhereUniqueInput],
  })
  connect?: Array<JobOfferingWhereUniqueInput>;

  @Field(() => [JobOfferingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [JobOfferingWhereUniqueInput],
  })
  disconnect?: Array<JobOfferingWhereUniqueInput>;

  @Field(() => [JobOfferingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [JobOfferingWhereUniqueInput],
  })
  set?: Array<JobOfferingWhereUniqueInput>;
}
export { JobOfferingUpdateManyWithoutUsersInput };
