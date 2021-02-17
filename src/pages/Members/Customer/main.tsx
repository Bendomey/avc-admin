import { useQuery } from "@apollo/client";
import * as React from "react";
import { EmptyAlertComponent } from "../../../components/atoms/alertComponents";
import ErrorAssetComponent from "../../../components/atoms/alertComponents/error";
import { DataLoader } from "../../../components/atoms/loadingComponents";
import { GET_CUSTOMERS } from "../../../services/graphql/queries";
import {
  Customer,
  GetCustomersInputProps,
  GetCustomersOutputProps,
} from "../../../shared/interfaces/customer";
import DataView from "./Dataview";

import SuspendCustomer from "./Suspend";
import RestoreCustomer from "./Restore";
import ViewCustomer from "./View";

const ManageCustomers = () => {
  const [view, setView] = React.useState<boolean>(false);
  const [suspend, setSuspend] = React.useState<boolean>(false);
  const [restore, setRestore] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<Customer | null>(null);

  //for pagination
  const [limit, setLimit] = React.useState<number>(12);
  const [skip, setSkip] = React.useState<number>(0);
  const [end, setEnd] = React.useState<number>(0);

  React.useEffect(() => {
    setEnd(skip + limit);
  }, [limit, skip]);

  const { data, loading, refetch } = useQuery<
    GetCustomersOutputProps,
    GetCustomersInputProps
  >(GET_CUSTOMERS);

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
              {data?.customersLength === 0 ? (
                <React.Fragment>
                  <EmptyAlertComponent model={"customers"} />
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <div className={"mt-5"}>
                    <DataView
                      refetch={refetch}
                      setLimit={setLimit}
                      limit={limit}
                      data={data}
                      total={data?.customersLength}
                      skip={skip}
                      setSkip={setSkip}
                      end={end}
                      setEnd={setEnd}
                      view={(dataFromDataView: Customer) => {
                        setSelected(dataFromDataView);
                        setView(true);
                      }}
                      edit={(dataFromDataView: Customer) => {
                        // setSelected(dataFromDataView);
                        // setApprove(true);
                      }}
                      remove={(dataFromDataView: Customer) => {
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
              <ErrorAssetComponent model={"customers"} />
            </React.Fragment>
          )}
        </React.Fragment>
      )}

      <SuspendCustomer
        show={suspend}
        setShow={setSuspend}
        refetch={refetch}
        data={selected}
      />
      <RestoreCustomer
        show={restore}
        setShow={setRestore}
        refetch={refetch}
        data={selected}
      />

      <ViewCustomer show={view} setShow={setView} data={selected} />
    </React.Fragment>
  );
};

export default ManageCustomers;
