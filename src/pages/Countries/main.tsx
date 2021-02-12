import * as React from "react";
import { Link } from "react-router-dom";
import { EmptyAlertComponent } from "../../components/atoms/alertComponents";
import ErrorAssetComponent from "../../components/atoms/alertComponents/error";
import { DataLoader } from "../../components/atoms/loadingComponents";
import Dataview from "./Dataview";
import AddComponent from "./Add";
import EditComponent from "./Edit";
import DeleteComponent from "./Delete";
import ViewComponent from "./View";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../../services/graphql/queries";
import {
  GetCountriesInputProps,
  GetCountriesOutputProps,
} from "../../shared/interfaces/country";

const Countries = () => {
  const [add, setAdd] = React.useState<boolean>(false);
  const [view, setView] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<any>(null);
  const [edit, setEdit] = React.useState<any>(null);
  const [remove, setRemove] = React.useState<any>(null);

  //for pagination
  const [limit, setLimit] = React.useState<number>(12);
  const [skip, setSkip] = React.useState<number>(0);
  const [end, setEnd] = React.useState<number>(0);

  React.useEffect(() => {
    setEnd(skip + limit);
  }, [limit, skip]);

  const { data, loading, refetch } = useQuery<
    GetCountriesOutputProps,
    GetCountriesInputProps
  >(GET_COUNTRIES);

  return (
    <React.Fragment>
      {/* <!-- Page title & actions --> */}
      <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex-1 min-w-0">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            Manage Countries
          </h1>
        </div>
        <div className="mt-4 flex sm:mt-0 sm:ml-4">
          <button
            type="button"
            onClick={() => setAdd(true)}
            className="order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:order-1 sm:ml-3"
          >
            Add A New Country
          </button>
        </div>
      </div>
      <nav
        className="bg-white border-b border-gray-200 flex"
        aria-label="Breadcrumb"
      >
        <ol className="max-w-screen-xl w-full mx-auto px-4 flex space-x-4 sm:px-6 lg:px-8">
          <li className="flex">
            <div className="flex items-center">
              <Link to={`/`} className="text-gray-400 hover:text-gray-500">
                <svg
                  className="flex-shrink-0 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <span className="sr-only">Home</span>
              </Link>
            </div>
          </li>
          <li className="flex">
            <div className="flex items-center">
              <svg
                className="flex-shrink-0 w-6 h-full text-gray-200"
                viewBox="0 0 24 44"
                preserveAspectRatio="none"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
              </svg>
              <span className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                Countries
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div className="hidden mt-8 sm:block">
        {loading ? (
          <React.Fragment>
            <DataLoader />
          </React.Fragment>
        ) : (
          <React.Fragment>
            {data ? (
              <React.Fragment>
                {data?.countriesLength === 0 ? (
                  <React.Fragment>
                    <EmptyAlertComponent model={"countries"} />
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <Dataview
                      refetch={refetch}
                      setLimit={setLimit}
                      limit={limit}
                      data={data}
                      total={data?.countriesLength}
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
                <ErrorAssetComponent model={"countries"} />
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </div>
      <AddComponent show={add} setShow={setAdd} refetch={refetch} />
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
