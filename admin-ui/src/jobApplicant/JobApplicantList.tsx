import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { JOBOFFERING_TITLE_FIELD } from "../jobOffering/JobOfferingTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const JobApplicantList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Job applicants"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
