import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
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
      </SimpleShowLayout>
    </Show>
  );
};
