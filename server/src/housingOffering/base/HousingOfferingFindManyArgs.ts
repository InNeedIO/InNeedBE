import {ArgsType, Field} from "@nestjs/graphql";
import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {HousingOfferingOrderByInput} from "./HousingOfferingOrderByInput";
import {HousingOfferingWhereInput} from "./HousingOfferingWhereInput";

@ArgsType()
class HousingOfferingFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => HousingOfferingWhereInput,
  })
  @Field(() => HousingOfferingWhereInput, { nullable: true })
  @Type(() => HousingOfferingWhereInput)
  where?: HousingOfferingWhereInput;

  @ApiProperty({
    required: false,
    type: [HousingOfferingOrderByInput],
  })
  @Field(() => [HousingOfferingOrderByInput], { nullable: true })
  @Type(() => HousingOfferingOrderByInput)
  orderBy?: Array<HousingOfferingOrderByInput>;

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

export { HousingOfferingFindManyArgs };
