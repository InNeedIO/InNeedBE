import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { JobOfferingList } from "./jobOffering/JobOfferingList";
import { JobOfferingCreate } from "./jobOffering/JobOfferingCreate";
import { JobOfferingEdit } from "./jobOffering/JobOfferingEdit";
import { JobOfferingShow } from "./jobOffering/JobOfferingShow";
import { JobApplicantList } from "./jobApplicant/JobApplicantList";
import { JobApplicantCreate } from "./jobApplicant/JobApplicantCreate";
import { JobApplicantEdit } from "./jobApplicant/JobApplicantEdit";
import { JobApplicantShow } from "./jobApplicant/JobApplicantShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"InNeedBE"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="JobOffering"
          list={JobOfferingList}
          edit={JobOfferingEdit}
          create={JobOfferingCreate}
          show={JobOfferingShow}
        />
        <Resource
          name="JobApplicant"
          list={JobApplicantList}
          edit={JobApplicantEdit}
          create={JobApplicantCreate}
          show={JobApplicantShow}
        />
      </Admin>
    </div>
  );
};

export default App;
