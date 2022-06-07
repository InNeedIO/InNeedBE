import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { JOBOFFERING_TITLE_FIELD } from "./JobOfferingTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const JobOfferingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Author" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="City" source="city" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Max salary" source="maxSalary" />
        <TextField label="Min salary" source="minSalary" />
        <TextField label="Position level" source="positionLevel" />
        <TextField label="Title" source="title" />
        <TextField label="Working mode" source="workingMode" />
        <ReferenceManyField
          reference="JobApplicant"
          target="JobOfferingId"
          label="Job applicants"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Accepted" source="isAccepted" />
            <ReferenceField
              label="Job Offering"
              source="joboffering.id"
              reference="JobOffering"
            >
              <TextField source={JOBOFFERING_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
