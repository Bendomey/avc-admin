import * as React from "react";
import { BasicModal } from "../../../components/atoms/modal";
import { FAQ } from "../../../shared/interfaces/faq";

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  data: FAQ;
}

const ViewFaq: React.FC<Props> = ({ setShow, show, data }) => {
  return (
    <React.Fragment>
      <BasicModal show={show} setShow={setShow}>
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

          <div className="mt-2 p-5">
            <div className={"mt-3"}>
              <span className={"font-bold"}>Question</span>
              <div className={"flex flex-col mb-5"}>
                <span className={"mt-2 font-light"}>
                  {data?.question || "Not Specified"}
                </span>
              </div>
              <span className={"font-bold"}>Answer</span>
              <div className={"flex flex-col"}>
                <span className={"mt-2 font-light"}>
                  {data?.answer || "Not Specified"}
                </span>
              </div>
              <div className="pt-2 border-t border-gray-200 mt-5 flex justify-end">
                <span className="inline-flex rounded-none shadow-sm mr-2 ">
                  <button
                    type="button"
                    onClick={() => setShow(false)}
                    className="inline-flex rounded-none items-center px-6 py-2 border border-red-500 text-sm leading-5 font-light text-red-500 hover:text-white bg-white hover:bg-red-400 focus:outline-none focus:shadow-outline-blue focus:border-red-600 active:bg-blue-600 transition duration-150 ease-in-out"
                  >
                    Close
                  </button>
                </span>
              </div>
            </div>
          </div>
        </React.Fragment>
      </BasicModal>
    </React.Fragment>
  );
};

export default ViewFaq;
