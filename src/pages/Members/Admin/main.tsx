import * as React from "react";
import { EmptyAlertComponent } from "../../../components/atoms/alertComponents";
import ErrorAssetComponent from "../../../components/atoms/alertComponents/error";
import { DataLoader } from "../../../components/atoms/loadingComponents";
import DataView from "./Dataview";

import AddComponent from "./Add";
import { useQuery } from "@apollo/client";
import {
  GetAdminsInputProps,
  GetAdminsOutputProps,
} from "../../../shared/interfaces/admin";
import { GET_ADMINS } from "../../../services/graphql/queries";

interface Props {
  add: boolean;
  setAdd: React.Dispatch<React.SetStateAction<boolean>>;
}

const ManageAdmins: React.FC<Props> = ({ add, setAdd }) => {
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
                      view={(dataFromDataView: any) => {
                        // setSelected(dataFromDataView);
                        // setView(true);
                      }}
                      edit={(dataFromDataView: any) => {
                        // setSelected(dataFromDataView);
                        // setEdit(true);
                      }}
                      remove={(dataFromDataView: any) => {
                        // setSelected(dataFromDataView);
                        // setRemove(true);
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
    </React.Fragment>
  );
};

export default ManageAdmins;
