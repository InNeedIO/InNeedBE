import {Field, ObjectType} from "@nestjs/graphql";
import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {IsBoolean, IsDate, IsString, ValidateNested} from "class-validator";
import {JobOffering} from "../../jobOffering/base/JobOffering";
import {User} from "../../user/base/User";

@ObjectType()
class JobApplicant {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isAccepted!: boolean;

  @ApiProperty({
    required: true,
    type: () => JobOffering,
  })
  @ValidateNested()
  @Type(() => JobOffering)
  jobOffering?: JobOffering;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  user?: User;
}
export { JobApplicant };
