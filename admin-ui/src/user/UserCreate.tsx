import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  PasswordInput,
} from "react-admin";

import { HousingApplicantTitle } from "../housingApplicant/HousingApplicantTitle";
import { HousingOfferingTitle } from "../housingOffering/HousingOfferingTitle";
import { JobApplicantTitle } from "../jobApplicant/JobApplicantTitle";
import { JobOfferingTitle } from "../jobOffering/JobOfferingTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <ReferenceArrayInput
          source="housingApplicants"
          reference="HousingApplicant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={HousingApplicantTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="housingOfferings"
          reference="HousingOffering"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={HousingOfferingTitle} />
        </ReferenceArrayInput>
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
    </Create>
  );
};
