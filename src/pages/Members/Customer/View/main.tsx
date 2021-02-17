import * as React from "react";
import { BasicModal } from "../../../../components/atoms/modal";
import { Customer } from "../../../../shared/interfaces/customer";
import PersonalInformation from "./personal";
import ProfessionalInformation from "./professional";

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  data: Customer | null;
}

const ViewLawyer: React.FC<Props> = ({ setShow, show, data }) => {
  const [tab, setTab] = React.useState<string>("personal");
  return (
    <React.Fragment>
      <BasicModal show={show} setShow={setShow} size={50}>
        <React.Fragment>
          <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
            <button
              onClick={() => setShow(false)}
              type="button"
              className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
              aria-label="Close"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Customer Information
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Personal and professional details.
              </p>
            </div>
          </div>

          <div className={"my-2"}>
            <div className="sm:hidden">
              <label htmlFor="tabs" className="sr-only">
                Select a tab
              </label>
              <select
                id="tabs"
                name="tabs"
                value={tab}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                  setTab(event?.target?.value)
                }
                className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              >
                <option value={"personal"}>Personal Information</option>
                <option value={"professional"}>Professional Information</option>
              </select>
            </div>
            <div className="hidden sm:block">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex" aria-label="Tabs">
                  <span
                    onClick={() => {
                      setTab("personal");
                    }}
                    className={`${
                      tab === "personal"
                        ? "border-red-400"
                        : "border-transparent  hover:border-gray-300"
                    } text-gray-500 cursor-pointer hover:text-gray-700 w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm`}
                  >
                    Personal Information
                  </span>
                  <span
                    onClick={() => {
                      setTab("professional");
                    }}
                    className={`${
                      tab === "professional"
                        ? "border-red-400"
                        : "border-transparent  hover:border-gray-300"
                    } text-gray-500 cursor-pointer hover:text-gray-700 w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm`}
                  >
                    Other Information
                  </span>
                </nav>
              </div>
            </div>
          </div>
          {data && (
            <React.Fragment>
              {tab === "personal" && <PersonalInformation data={data} />}
              {tab === "professional" && (
                <ProfessionalInformation data={data} />
              )}
            </React.Fragment>
          )}
        </React.Fragment>
      </BasicModal>
    </React.Fragment>
  );
};

export default ViewLawyer;
