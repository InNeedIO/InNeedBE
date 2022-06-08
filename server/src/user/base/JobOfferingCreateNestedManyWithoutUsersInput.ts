import {Field, InputType} from "@nestjs/graphql";
import {ApiProperty} from "@nestjs/swagger";
import {JobOfferingWhereUniqueInput} from "../../jobOffering/base/JobOfferingWhereUniqueInput";

@InputType()
class JobOfferingCreateNestedManyWithoutUsersInput {
  @Field(() => [JobOfferingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [JobOfferingWhereUniqueInput],
  })
  connect?: Array<JobOfferingWhereUniqueInput>;
}
export { JobOfferingCreateNestedManyWithoutUsersInput };
