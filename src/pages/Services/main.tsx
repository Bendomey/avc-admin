import * as React from "react";
import { EmptyAlertComponent } from "../../components/atoms/alertComponents";
import ErrorAssetComponent from "../../components/atoms/alertComponents/error";
import { DataLoader } from "../../components/atoms/loadingComponents";
import Dataview from "./Dataview";
// import AddComponent from "./Add";
import EditComponent from "./Edit";
// import DeleteComponent from "./Delete";
import ViewComponent from "./View";
import { useQuery } from "@apollo/client";
import { GET_SERVICES } from "../../services/graphql/queries";
import Header from "../../components/header";
import { usePagination } from "../../components/atoms/Hooks";
import BreadCrumb from "../../components/breadcrumb";
import {
  GetServicesInputProps,
  GetServicesOutputProps,
} from "../../shared/interfaces/service";

const Countries = () => {
  // const [add, setAdd] = React.useState<boolean>(false);
  const [view, setView] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<any>(null);
  const [edit, setEdit] = React.useState<any>(null);
  // const [remove, setRemove] = React.useState<any>(null);

  //for pagination
  const { limit, setLimit, skip, setSkip, end, setEnd } = usePagination(12);

  const { data, loading, refetch } =
    useQuery<GetServicesOutputProps, GetServicesInputProps>(GET_SERVICES);

  return (
    <React.Fragment>
      <Header
        title={"Manage Services"}
        // isBtnAvail
        // btnLabel={"Add A New Country"}
        // onBtnClick={() => setAdd(true)}
      />

      <BreadCrumb model={"Services"} />

      <div className="hidden mt-8 sm:block">
        {loading ? (
          <React.Fragment>
            <DataLoader />
          </React.Fragment>
        ) : (
          <React.Fragment>
            {data ? (
              <React.Fragment>
                {data?.servicesLength === 0 ? (
                  <React.Fragment>
                    <EmptyAlertComponent model={"services"} />
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <Dataview
                      refetch={refetch}
                      setLimit={setLimit}
                      limit={limit}
                      data={data}
                      total={data?.servicesLength}
                      skip={skip}
                      setSkip={setSkip}
                      end={end}
                      setEnd={setEnd}
                      view={(dataFromDataView: any) => {
                        setSelected(dataFromDataView);
                        setView(true);
                      }}
                      edit={(dataFromDataView: any) => {
                        setSelected(dataFromDataView);
                        setEdit(true);
                      }}
                      remove={(dataFromDataView: any) => {
                        setSelected(dataFromDataView);
                        // setRemove(true);
                      }}
                    />
                  </React.Fragment>
                )}
              </React.Fragment>
            ) : (
              <React.Fragment>
                <ErrorAssetComponent model={"services"} />
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </div>
      {/* <AddComponent show={add} setShow={setAdd} refetch={refetch} /> */}
      <EditComponent
        show={edit}
        setShow={setEdit}
        refetch={refetch}
        data={selected}
      />
      {/* <DeleteComponent
        show={remove}
        setShow={setRemove}
        refetch={refetch}
        data={selected}
      /> */}
      <ViewComponent
        show={view}
        setShow={setView}
        refetch={refetch}
        data={selected}
      />
    </React.Fragment>
  );
};

export default Countries;
