import * as React from "react";
import { EmptyAlertComponent } from "../../../components/atoms/alertComponents";
import ErrorAssetComponent from "../../../components/atoms/alertComponents/error";
import { DataLoader } from "../../../components/atoms/loadingComponents";
import DataView from "./Dataview";
import AddComponent from "./Add";
import { useQuery } from "@apollo/client";
import {
  Admin,
  GetAdminsInputProps,
  GetAdminsOutputProps,
} from "../../../shared/interfaces/admin";
import { GET_ADMINS } from "../../../services/graphql/queries";
import ViewAdmin from "./View";
import Updatedmin from "./Update";
import SuspendAdmin from "./Suspend";
import RestoreAdmin from "./Restore";

interface Props {
  add: boolean;
  setAdd: React.Dispatch<React.SetStateAction<boolean>>;
}

const ManageAdmins: React.FC<Props> = ({ add, setAdd }) => {
  const [view, setView] = React.useState<boolean>(false);
  const [update, setUpdate] = React.useState<boolean>(false);
  const [suspend, setSuspend] = React.useState<boolean>(false);
  const [restore, setRestore] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<Admin | null>(null);

  //for pagination
  const [limit, setLimit] = React.useState<number>(12);
  const [skip, setSkip] = React.useState<number>(0);
  const [end, setEnd] = React.useState<number>(0);

  React.useEffect(() => {
    setEnd(skip + limit);
  }, [limit, skip]);

  const { data, loading, refetch } = useQuery<
    GetAdminsOutputProps,
    GetAdminsInputProps
  >(GET_ADMINS);
  return (
    <React.Fragment>
      {loading ? (
        <React.Fragment>
          <DataLoader />
        </React.Fragment>
      ) : (
        <React.Fragment>
          {data ? (
            <React.Fragment>
              {data?.adminsLength === 0 ? (
                <React.Fragment>
                  <EmptyAlertComponent model={"administrators"} />
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <div className={"mt-5"}>
                    <DataView
                      refetch={refetch}
                      setLimit={setLimit}
                      limit={limit}
                      data={data}
                      total={data?.admins}
                      skip={skip}
                      setSkip={setSkip}
                      end={end}
                      setEnd={setEnd}
                      view={(dataFromDataView: Admin) => {
                        setSelected(dataFromDataView);
                        setView(true);
                      }}
                      edit={(dataFromDataView: any) => {
                        setSelected(dataFromDataView);
                        setUpdate(true);
                      }}
                      remove={(dataFromDataView: Admin) => {
                        setSelected(dataFromDataView);
                        if (dataFromDataView?.suspendedAt) {
                          setRestore(true);
                        } else {
                          setSuspend(true);
                        }
                      }}
                    />
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          ) : (
            <React.Fragment>
              <ErrorAssetComponent model={"administrators"} />
            </React.Fragment>
          )}
        </React.Fragment>
      )}
      <AddComponent show={add} setShow={setAdd} refetch={refetch} />
      <ViewAdmin show={view} setShow={setView} data={selected} />
      <Updatedmin
        show={update}
        setShow={setUpdate}
        refetch={refetch}
        data={selected}
      />
      <SuspendAdmin
        show={suspend}
        setShow={setSuspend}
        refetch={refetch}
        data={selected}
      />
      <RestoreAdmin
        show={restore}
        setShow={setRestore}
        refetch={refetch}
        data={selected}
      />
    </React.Fragment>
  );
};

export default ManageAdmins;
