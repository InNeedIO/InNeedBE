import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const HousingOfferingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address" multiline source="address" />
        <ReferenceInput source="user.id" reference="User" label="Author">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="City" source="city" />
        <TextInput label="Description" multiline source="description" />
        <NumberInput step={1} label="Price" source="price" />
        <NumberInput step={1} label="Rooms number" source="roomsNumber" />
        <NumberInput label="Size" source="size" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
