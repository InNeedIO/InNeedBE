import {Field, InputType} from "@nestjs/graphql";
import {ApiProperty} from "@nestjs/swagger";
import {HousingApplicantWhereUniqueInput} from "../../housingApplicant/base/HousingApplicantWhereUniqueInput";

@InputType()
class HousingApplicantCreateNestedManyWithoutUsersInput {
  @Field(() => [HousingApplicantWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HousingApplicantWhereUniqueInput],
  })
  connect?: Array<HousingApplicantWhereUniqueInput>;
}
export { HousingApplicantCreateNestedManyWithoutUsersInput };
