import { useMutation, ApolloError } from "@apollo/client";
import * as React from "react";
import { BasicModal } from "../../../components/atoms/modal";
import DeleteAsset from "../../../components/atoms/svgs/delete";
import { DELETE_COUNTRY } from "../../../services/graphql/mutations";
import {
  Country,
  DeleteCountryInputProps,
  DeleteCountryOutputProps,
} from "../../../shared/interfaces/country";
import { toaster } from "evergreen-ui";
import _ from "lodash";

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  refetch: any;
  data: Country;
}

const DeleteCountry: React.FC<Props> = ({ setShow, show, data, refetch }) => {
  const [deleteInvoker, { loading }] = useMutation<
    DeleteCountryOutputProps,
    DeleteCountryInputProps
  >(DELETE_COUNTRY);

  const HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    deleteInvoker({
      variables: {
        id: data?.id,
      },
    })
      .then(() => {
        refetch();
        toaster.success(data?.name + " has been deleted successfully");
        setShow(false);
      })
      .catch((e: ApolloError) => {
        if (e?.graphQLErrors?.length > 0) {
          return toaster.warning(
            _.startCase(_.camelCase(e?.graphQLErrors[0]?.message))
          );
        }
      });
  };

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
            <span className={"font-bold"}>Delete Country</span>
            <form onSubmit={HandleSubmit} className={"mt-3"}>
              <div className="flex items-center flex-col">
                <DeleteAsset className={" h-40 w-40"} />
                <span>Are you sure you want to delete `{data?.name}`</span>
              </div>
              <div className="pt-2 border-t border-gray-200 mt-5 flex justify-end">
                <span className="inline-flex rounded-none shadow-sm mr-2 ">
                  <button
                    disabled={loading}
                    type="button"
                    onClick={() => setShow(false)}
                    className="inline-flex rounded-none items-center px-6 py-2 border border-red-500 text-sm leading-5 font-light text-red-500 hover:text-white bg-white hover:bg-red-400 focus:outline-none focus:shadow-outline-blue focus:border-red-600 active:bg-blue-600 transition duration-150 ease-in-out"
                  >
                    Cancel
                  </button>
                </span>
                <span className="inline-flex rounded-none shadow-sm ">
                  <button
                    disabled={loading}
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-light rounded-none text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:shadow-outline-teal focus:border-red-600 active:bg-blue-600 transition duration-150 ease-in-out"
                  >
                    {loading ? " Deleting..." : "Yes, delete"}
                  </button>
                </span>
              </div>
            </form>
          </div>
        </React.Fragment>
      </BasicModal>
    </React.Fragment>
  );
};

export default DeleteCountry;
