import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Location" source="location" />
        <TextField label="Mail" source="mail" />
        <TextField label="Roles" source="roles" />
        <TextField label="Telephone number" source="telephoneNumber" />
        <TextField label="Username" source="username" />
      </Datagrid>
    </List>
  );
};
