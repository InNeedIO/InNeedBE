import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { JOBOFFERING_TITLE_FIELD } from "../jobOffering/JobOfferingTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const JobApplicantShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
