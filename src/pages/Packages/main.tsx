import * as React from "react";
import { useQueryStrings } from "../../components/atoms/Hooks";
import { Link, useHistory } from "react-router-dom";
import _ from "lodash";
import { PageLoader } from "../../components/atoms/loadingComponents";

const MainPackage = React.lazy(() => import("./MainPackages"));
const RequestedPackage = React.lazy(() => import("./RequestedPackage"));

const Packages = () => {
  const { push } = useHistory();
  const [tab, setTab] = React.useState<string>("main");
  const query = useQueryStrings();

  //listne on query change
  React.useEffect(() => {
    if (!query.get("type") || query.get("type") === "") {
      setTab("main");
    } else setTab(query.get("type") || "main");
  }, [query]);

  return (
    <React.Fragment>
      <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex-1 min-w-0">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            Packages Management
          </h1>
        </div>
        <div className="mt-4 flex sm:mt-0 sm:ml-4">
          {/* {tab === "main" && (
            <button
              type="button"
              onClick={() => setAdd(true)}
              className="order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:order-1 sm:ml-3"
            >
              Add A Package
            </button>
          )} */}
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
                Packages
              </span>
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
                {_.startCase(tab)}
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="hidden mt-8 sm:block">
        <div className={"flex justify-center w-full"}>
          <div className={"w-1/2"}>
            <div className="sm:hidden">
              <label htmlFor="tabs" className="sr-only">
                Select a tab
              </label>
              <select
                id="tabs"
                name="tabs"
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                  push(`/members?type=${event?.target?.value}`);
                }}
                className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              >
                <option value={"main"}>Main</option>
                <option value={"requested"}>Requested</option>
              </select>
            </div>
            <div className="hidden sm:block">
              <nav
                className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200"
                aria-label="Tabs"
              >
                <Link
                  to={"/packages?type=main"}
                  aria-current="page"
                  className={`text-gray-900 rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10`}
                >
                  <span>Main</span>
                  <span
                    aria-hidden="true"
                    className={`${
                      tab === "main" ? "bg-red-500" : "bg-transparent"
                    } absolute inset-x-0 bottom-0 h-0.5`}
                  ></span>
                </Link>

                <Link
                  to={"/packages?type=requested"}
                  aria-current="false"
                  className="text-gray-500 hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
                >
                  <span>Requested</span>
                  <span
                    aria-hidden="true"
                    className={`${
                      tab === "requested" ? "bg-red-500" : "bg-transparent"
                    } absolute inset-x-0 bottom-0 h-0.5`}
                  ></span>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <React.Suspense fallback={PageLoader()}>
        {tab === "main" && <MainPackage />}
        {tab === "requested" && <RequestedPackage />}
      </React.Suspense>
    </React.Fragment>
  );
};

export default Packages;
