import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  DateField,
  BooleanField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { HOUSINGOFFERING_TITLE_FIELD } from "../housingOffering/HousingOfferingTitle";
import { JOBOFFERING_TITLE_FIELD } from "../jobOffering/JobOfferingTitle";

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
        <ReferenceManyField
          reference="HousingApplicant"
          target="UserId"
          label="Housing applicants"
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="HousingOffering"
          target="UserId"
          label="Housing Offerings"
        >
          <Datagrid rowClick="show">
            <TextField label="Address" source="address" />
            <ReferenceField label="Author" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="City" source="city" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="Price" source="price" />
            <TextField label="Rooms number" source="roomsNumber" />
            <TextField label="Size" source="size" />
            <TextField label="Title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="JobApplicant"
          target="UserId"
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
        <ReferenceManyField
          reference="JobOffering"
          target="UserId"
          label="Job Offerings"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
