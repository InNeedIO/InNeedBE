import {registerEnumType} from "@nestjs/graphql";

export enum EnumJobOfferingPositionLevel {
  Junior = "Junior",
  Mid = "Mid",
  Senior = "Senior",
}

registerEnumType(EnumJobOfferingPositionLevel, {
  name: "EnumJobOfferingPositionLevel",
});
