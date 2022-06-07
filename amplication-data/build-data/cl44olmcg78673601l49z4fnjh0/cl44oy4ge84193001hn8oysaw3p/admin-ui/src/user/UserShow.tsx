import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Location" source="location" />
        <TextField label="Mail" source="mail" />
        <TextField label="Roles" source="roles" />
        <TextField label="Telephone number" source="telephoneNumber" />
        <TextField label="Username" source="username" />
      </SimpleShowLayout>
    </Show>
  );
};
