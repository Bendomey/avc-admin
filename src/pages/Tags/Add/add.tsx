import { ApolloError, useMutation } from "@apollo/client";
import { toaster } from "evergreen-ui";
import * as React from "react";
import { BasicModal } from "../../../components/atoms/modal";
import { CREATE_TAG } from "../../../services/graphql/mutations";
import _ from "lodash";
import {
  CreateTagInputProps,
  CreateTagOutputProps,
} from "../../../shared/interfaces/tag";
interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  refetch: any;
}

const AddCountry: React.FC<Props> = ({ setShow, show, refetch }) => {
  const [name, setName] = React.useState<string>("");

  const [addInvoker, { loading }] = useMutation<
    CreateTagOutputProps,
    CreateTagInputProps
  >(CREATE_TAG);

  const HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addInvoker({
      variables: {
        name: name.trim(),
      },
    })
      .then(() => {
        refetch();
        toaster.success("Added " + name + " successfully");
        setShow(false);
        setName("");
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
            <span className={"font-bold"}>Add New Tag</span>
            <form onSubmit={HandleSubmit} className={"mt-3"}>
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Tag <span className={"text-red-400"}>*</span>
                  </label>
                  <div className="mt-1 rounded-none shadow-sm">
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setName(e.target.value);
                      }}
                      className="shadow-sm font-light focus:outline-none block w-full sm:text-sm border-gray-300 rounded-none"
                      placeholder="tag name here ..."
                    />
                  </div>
                </div>
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
                    {loading ? "Adding..." : "Add Tag"}
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

export default AddCountry;
