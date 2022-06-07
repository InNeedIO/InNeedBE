import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  PasswordInput,
} from "react-admin";

import { JobApplicantTitle } from "../jobApplicant/JobApplicantTitle";
import { JobOfferingTitle } from "../jobOffering/JobOfferingTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <ReferenceArrayInput
          source="jobApplicants"
          reference="JobApplicant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={JobApplicantTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="jobOfferings"
          reference="JobOffering"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={JobOfferingTitle} />
        </ReferenceArrayInput>
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Location" multiline source="location" />
        <TextInput label="Mail" source="mail" type="email" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Telephone number" source="telephoneNumber" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
