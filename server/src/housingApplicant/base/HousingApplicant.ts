import {Field, ObjectType} from "@nestjs/graphql";
import {ApiProperty} from "@nestjs/swagger";
import {Type} from "class-transformer";
import {IsBoolean, IsDate, IsOptional, IsString, ValidateNested,} from "class-validator";
import {HousingOffering} from "../../housingOffering/base/HousingOffering";
import {User} from "../../user/base/User";

@ObjectType()
class HousingApplicant {
  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  author?: User | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: () => HousingOffering,
  })
  @ValidateNested()
  @Type(() => HousingOffering)
  housingOffering?: HousingOffering;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isAccepted!: boolean | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { HousingApplicant };
