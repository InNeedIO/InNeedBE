import {Field, InputType} from "@nestjs/graphql";
import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {IsOptional, ValidateNested} from "class-validator";
import {UserWhereInput} from "./UserWhereInput";

@InputType()
class UserListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UserWhereInput,
  })
  @ValidateNested()
  @Type(() => UserWhereInput)
  @IsOptional()
  @Field(() => UserWhereInput, {
    nullable: true,
  })
  every?: UserWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereInput,
  })
  @ValidateNested()
  @Type(() => UserWhereInput)
  @IsOptional()
  @Field(() => UserWhereInput, {
    nullable: true,
  })
  some?: UserWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereInput,
  })
  @ValidateNested()
  @Type(() => UserWhereInput)
  @IsOptional()
  @Field(() => UserWhereInput, {
    nullable: true,
  })
  none?: UserWhereInput;
}
export { UserListRelationFilter };
