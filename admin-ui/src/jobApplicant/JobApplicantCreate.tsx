import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { JobOfferingTitle } from "../jobOffering/JobOfferingTitle";
import { UserTitle } from "../user/UserTitle";

export const JobApplicantCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Is Accepted" source="isAccepted" />
        <ReferenceInput
          source="joboffering.id"
          reference="JobOffering"
          label="Job Offering"
        >
          <SelectInput optionText={JobOfferingTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
