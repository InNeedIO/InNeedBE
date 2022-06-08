import {registerEnumType} from "@nestjs/graphql";

export enum EnumJobOfferingWorkingMode {
  Remote = "Remote",
  Onsite = "Onsite",
  Hybrid = "Hybrid",
}

registerEnumType(EnumJobOfferingWorkingMode, {
  name: "EnumJobOfferingWorkingMode",
});
