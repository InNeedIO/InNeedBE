import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";
import { HousingOfferingTitle } from "../housingOffering/HousingOfferingTitle";

export const HousingApplicantCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="user.id" reference="User" label="Author">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="housingoffering.id"
          reference="HousingOffering"
          label="Housing Offering"
        >
          <SelectInput optionText={HousingOfferingTitle} />
        </ReferenceInput>
        <BooleanInput label="IsAccepted" source="isAccepted" />
      </SimpleForm>
    </Create>
  );
};
