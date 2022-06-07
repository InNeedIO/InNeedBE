import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { HOUSINGOFFERING_TITLE_FIELD } from "../housingOffering/HousingOfferingTitle";

export const HousingApplicantList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Housing applicants"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="Author" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Housing Offering"
          source="housingoffering.id"
          reference="HousingOffering"
        >
          <TextField source={HOUSINGOFFERING_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <BooleanField label="IsAccepted" source="isAccepted" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
