import {ArgsType, Field} from "@nestjs/graphql";
import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {HousingApplicantOrderByInput} from "./HousingApplicantOrderByInput";
import {HousingApplicantWhereInput} from "./HousingApplicantWhereInput";

@ArgsType()
class HousingApplicantFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => HousingApplicantWhereInput,
  })
  @Field(() => HousingApplicantWhereInput, { nullable: true })
  @Type(() => HousingApplicantWhereInput)
  where?: HousingApplicantWhereInput;

  @ApiProperty({
    required: false,
    type: [HousingApplicantOrderByInput],
  })
  @Field(() => [HousingApplicantOrderByInput], { nullable: true })
  @Type(() => HousingApplicantOrderByInput)
  orderBy?: Array<HousingApplicantOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { HousingApplicantFindManyArgs };
