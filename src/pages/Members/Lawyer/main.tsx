import * as React from "react";
import { DataLoader } from "../../../components/atoms/loadingComponents";
import ErrorAssetComponent from "../../../components/atoms/alertComponents/error";
import { EmptyAlertComponent } from "../../../components/atoms/alertComponents";
import DataView from "./Dataview";

import ViewLawyer from "./View";
import SuspendLawyer from "./Suspend";
import RestoreLawyer from "./Restore";
import ApproveLawyer from "./Approve";
import {
  GetLawyersInputProps,
  GetLawyersOutputProps,
  Lawyer,
} from "../../../shared/interfaces/lawyer";
import { useQuery } from "@apollo/client";
import { GET_LAWYERS } from "../../../services/graphql/queries";

const ManageLawyers = () => {
  const [view, setView] = React.useState<boolean>(false);
  const [suspend, setSuspend] = React.useState<boolean>(false);
  const [approve, setApprove] = React.useState<boolean>(false);
  const [restore, setRestore] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<Lawyer | null>(null);

  //for pagination
  const [limit, setLimit] = React.useState<number>(12);
  const [skip, setSkip] = React.useState<number>(0);
  const [end, setEnd] = React.useState<number>(0);

  React.useEffect(() => {
    setEnd(skip + limit);
  }, [limit, skip]);
  const { data, loading, refetch } = useQuery<
    GetLawyersOutputProps,
    GetLawyersInputProps
  >(GET_LAWYERS);
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
              {data?.lawyersLength === 0 ? (
                <React.Fragment>
                  <EmptyAlertComponent model={"lawyers"} />
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <div className={"mt-5"}>
                    <DataView
                      refetch={refetch}
                      setLimit={setLimit}
                      limit={limit}
                      data={data}
                      total={data?.lawyers}
                      skip={skip}
                      setSkip={setSkip}
                      end={end}
                      setEnd={setEnd}
                      view={(dataFromDataView: Lawyer) => {
                        setSelected(dataFromDataView);
                        setView(true);
                      }}
                      edit={(dataFromDataView: Lawyer) => {
                        setSelected(dataFromDataView);
                        setApprove(true);
                      }}
                      remove={(dataFromDataView: Lawyer) => {
                        setSelected(dataFromDataView);
                        if (dataFromDataView?.user?.suspendedAt) {
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
              <ErrorAssetComponent model={"lawyers"} />
            </React.Fragment>
          )}
        </React.Fragment>
      )}

      <ViewLawyer show={view} setShow={setView} data={selected} />

      <SuspendLawyer
        show={suspend}
        setShow={setSuspend}
        refetch={refetch}
        data={selected}
      />
      <RestoreLawyer
        show={restore}
        setShow={setRestore}
        refetch={refetch}
        data={selected}
      />
      <ApproveLawyer
        show={approve}
        setShow={setApprove}
        refetch={refetch}
        data={selected}
      />
    </React.Fragment>
  );
};

export default ManageLawyers;
