import {Field, InputType} from "@nestjs/graphql";
import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {IsOptional, ValidateNested} from "class-validator";
import {HousingOfferingWhereInput} from "./HousingOfferingWhereInput";

@InputType()
class HousingOfferingListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => HousingOfferingWhereInput,
  })
  @ValidateNested()
  @Type(() => HousingOfferingWhereInput)
  @IsOptional()
  @Field(() => HousingOfferingWhereInput, {
    nullable: true,
  })
  every?: HousingOfferingWhereInput;

  @ApiProperty({
    required: false,
    type: () => HousingOfferingWhereInput,
  })
  @ValidateNested()
  @Type(() => HousingOfferingWhereInput)
  @IsOptional()
  @Field(() => HousingOfferingWhereInput, {
    nullable: true,
  })
  some?: HousingOfferingWhereInput;

  @ApiProperty({
    required: false,
    type: () => HousingOfferingWhereInput,
  })
  @ValidateNested()
  @Type(() => HousingOfferingWhereInput)
  @IsOptional()
  @Field(() => HousingOfferingWhereInput, {
    nullable: true,
  })
  none?: HousingOfferingWhereInput;
}
export { HousingOfferingListRelationFilter };
