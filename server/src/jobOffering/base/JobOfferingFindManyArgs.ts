import {ArgsType, Field} from "@nestjs/graphql";
import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {JobOfferingOrderByInput} from "./JobOfferingOrderByInput";
import {JobOfferingWhereInput} from "./JobOfferingWhereInput";

@ArgsType()
class JobOfferingFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => JobOfferingWhereInput,
  })
  @Field(() => JobOfferingWhereInput, { nullable: true })
  @Type(() => JobOfferingWhereInput)
  where?: JobOfferingWhereInput;

  @ApiProperty({
    required: false,
    type: [JobOfferingOrderByInput],
  })
  @Field(() => [JobOfferingOrderByInput], { nullable: true })
  @Type(() => JobOfferingOrderByInput)
  orderBy?: Array<JobOfferingOrderByInput>;

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

export { JobOfferingFindManyArgs };
