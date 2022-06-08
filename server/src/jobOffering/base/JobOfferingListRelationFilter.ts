import {Field, InputType} from "@nestjs/graphql";
import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {IsOptional, ValidateNested} from "class-validator";
import {JobOfferingWhereInput} from "./JobOfferingWhereInput";

@InputType()
class JobOfferingListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => JobOfferingWhereInput,
  })
  @ValidateNested()
  @Type(() => JobOfferingWhereInput)
  @IsOptional()
  @Field(() => JobOfferingWhereInput, {
    nullable: true,
  })
  every?: JobOfferingWhereInput;

  @ApiProperty({
    required: false,
    type: () => JobOfferingWhereInput,
  })
  @ValidateNested()
  @Type(() => JobOfferingWhereInput)
  @IsOptional()
  @Field(() => JobOfferingWhereInput, {
    nullable: true,
  })
  some?: JobOfferingWhereInput;

  @ApiProperty({
    required: false,
    type: () => JobOfferingWhereInput,
  })
  @ValidateNested()
  @Type(() => JobOfferingWhereInput)
  @IsOptional()
  @Field(() => JobOfferingWhereInput, {
    nullable: true,
  })
  none?: JobOfferingWhereInput;
}
export { JobOfferingListRelationFilter };
