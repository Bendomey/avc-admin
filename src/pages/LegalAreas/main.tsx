import { useQuery } from "@apollo/client";
import * as React from "react";
import { EmptyAlertComponent } from "../../components/atoms/alertComponents";
import Dataview from "./Dataview";
import { usePagination } from "../../components/atoms/Hooks";
import { DataLoader } from "../../components/atoms/loadingComponents";
import BreadCrumb from "../../components/breadcrumb";
import Header from "../../components/header";
import { GET_LEGAL_AREAS } from "../../services/graphql/queries";
import EditComponent from "./Edit";
import DeleteComponent from "./Delete";
import ViewComponent from "./View";
import AddComponent from "./Add";
import ErrorAssetComponent from "../../components/atoms/alertComponents/error";
import {
  GetLegalAreasInputProps,
  GetLegalAreasOutputProps,
} from "../../shared/interfaces/legal-area";

const LegalAreas = () => {
  const [view, setView] = React.useState<boolean>(false);
  const [add, setAdd] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<any>(null);
  const [edit, setEdit] = React.useState<any>(null);
  const [remove, setRemove] = React.useState<any>(null);

  //for pagination
  const { limit, setLimit, skip, setSkip, end, setEnd } = usePagination(12);

  const { data, loading, refetch } = useQuery<
    GetLegalAreasOutputProps,
    GetLegalAreasInputProps
  >(GET_LEGAL_AREAS);

  return (
    <React.Fragment>
      <Header
        title={"Manage Legal Areas"}
        isBtnAvail
        btnLabel={"Add A New Area"}
        onBtnClick={() => setAdd(true)}
      />
      <BreadCrumb model={"Legal Areas"} />

      <div className="hidden mt-8 sm:block">
        {loading ? (
          <React.Fragment>
            <DataLoader />
          </React.Fragment>
        ) : (
          <React.Fragment>
            {data ? (
              <React.Fragment>
                {data?.legalAreasLength === 0 ? (
                  <React.Fragment>
                    <EmptyAlertComponent model={"legal areas"} />
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <Dataview
                      refetch={refetch}
                      setLimit={setLimit}
                      limit={limit}
                      data={data}
                      total={data?.legalAreasLength}
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
                        setRemove(true);
                      }}
                    />
                  </React.Fragment>
                )}
              </React.Fragment>
            ) : (
              <React.Fragment>
                <ErrorAssetComponent model={"legal areas"} />
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </div>
      <AddComponent show={add} setShow={setAdd} refetch={refetch} />
      <ViewComponent show={view} setShow={setView} data={selected} />
      <EditComponent
        show={edit}
        setShow={setEdit}
        refetch={refetch}
        data={selected}
      />
      <DeleteComponent
        show={remove}
        setShow={setRemove}
        refetch={refetch}
        data={selected}
      />
    </React.Fragment>
  );
};

export default LegalAreas;
