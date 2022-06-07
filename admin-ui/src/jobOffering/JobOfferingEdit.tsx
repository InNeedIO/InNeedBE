import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const JobOfferingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="user.id" reference="User" label="Author">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="City" source="city" />
        <TextInput label="Description" multiline source="description" />
        <NumberInput step={1} label="Max salary" source="maxSalary" />
        <NumberInput step={1} label="Min salary" source="minSalary" />
        <SelectInput
          source="positionLevel"
          label="Position level"
          choices={[
            { label: "Junior", value: "Junior" },
            { label: "Mid", value: "Mid" },
            { label: "Senior", value: "Senior" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Title" source="title" />
        <SelectInput
          source="workingMode"
          label="Working mode"
          choices={[
            { label: "Remote", value: "Remote" },
            { label: "Onsite", value: "Onsite" },
            { label: "Hybrid", value: "Hybrid" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
