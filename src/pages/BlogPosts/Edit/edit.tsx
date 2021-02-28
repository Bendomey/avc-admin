import { ApolloError, useMutation } from "@apollo/client";
import { toaster } from "evergreen-ui";
import * as React from "react";
import { BasicModal } from "../../../components/atoms/modal";
import { UPDATE_POST } from "../../../services/graphql/mutations";
import _ from "lodash";
import ReactQuill from "react-quill";
import {
  Post,
  UpdatePostInputProps,
  UpdatePostOutputProps,
} from "../../../shared/interfaces/blog-post";
import TagSelect from "./tag";

interface Props {
  data: Post | null;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  refetch: any;
}

const AddCountry: React.FC<Props> = ({ setShow, show, refetch, data }) => {
  const [title, setTitle] = React.useState<string>("");
  const [details, setDetails] = React.useState<string>("");
  const [tag, setTag] = React.useState<string>("");
  const [status, setStatus] = React.useState<string>("Active");
  const [id, setId] = React.useState<string>("");

  React.useEffect(() => {
    if (data) {
      setTitle(data?.title);
      setDetails(data?.details);
      setTag(data?.tag?.id);
      setStatus(data?.status);
      setId(data?.id);
    }
  }, [data]);

  const [addInvoker, { loading }] = useMutation<
    UpdatePostOutputProps,
    UpdatePostInputProps
  >(UPDATE_POST);

  const HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (details.trim() === "") {
      return toaster.notify("Please add your post details");
    }
    addInvoker({
      variables: {
        id,
        title: title || undefined,
        details: details || undefined,
        tag: tag || undefined,
        status: status || undefined,
      },
    })
      .then(() => {
        refetch();
        toaster.success("Updated post successfully");
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

          <div className="mt-2 p-5">
            <span className={"font-bold"}>Update Legal Area</span>
            <form onSubmit={HandleSubmit} className={"mt-3"}>
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Post Title <span className={"text-red-400"}>*</span>
                  </label>
                  <div className="mt-1 rounded-none shadow-sm">
                    <input
                      type="text"
                      required
                      value={title}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setTitle(e.target.value);
                      }}
                      className="shadow-sm font-light focus:outline-none block w-full sm:text-sm border-gray-300 rounded-none"
                      placeholder="Title here ..."
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Post Tag <span className={"text-red-400"}>*</span>
                  </label>
                  <div className="mt-1 rounded-none shadow-sm">
                    <TagSelect tag={tag} setTag={setTag} />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Post Status <span className={"text-red-400"}>*</span>
                  </label>
                  <div className="mt-1 rounded-none shadow-sm">
                    <select
                      required
                      value={status}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        setStatus(e.target.value);
                      }}
                      className="shadow-sm font-light focus:outline-none block w-full sm:text-sm border-gray-300 rounded-none"
                    >
                      <option value="">Please Select</option>
                      <option value="Active">Active</option>
                      <option value="Draft">Draft</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Description <span className={"text-red-400"}>*</span>
                  </label>
                  <div className="mt-1 rounded-none shadow-sm mb-10">
                    <ReactQuill
                      placeholder={"Details here"}
                      theme="snow"
                      value={details}
                      onChange={setDetails}
                      className={"font-light bg-white border-none"}
                      style={{ height: "30vh" }}
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
                    {loading ? "Updating..." : "Update Tag"}
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
