import { ApolloError, useMutation } from "@apollo/client";
import { toaster } from "evergreen-ui";
import * as React from "react";
import { BasicModal } from "../../../components/atoms/modal";
import { UPDATE_POST } from "../../../services/graphql/mutations";
import _ from "lodash";
import { storage } from "../../../services/firebase";
import {
  Post,
  UpdatePostInputProps,
  UpdatePostOutputProps,
} from "../../../shared/interfaces/blog-post";
interface Props {
  data: Post | null;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  refetch: any;
}

const AddCountry: React.FC<Props> = ({ setShow, show, refetch, data }) => {
  const [id, setId] = React.useState<string>("");

  //for file upload
  const [upload, setUpload] = React.useState<boolean>(false);
  const [file, setFile] = React.useState<any>(null);

  React.useEffect(() => {
    if (data) {
      setId(data?.id);
    }
  }, [data]);

  const [addInvoker, { loading }] = useMutation<
    UpdatePostOutputProps,
    UpdatePostInputProps
  >(UPDATE_POST);

  const HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (file === null) {
      return toaster.notify("Please add an image");
    }

    //upload file and then save link
    setUpload(true);
    const fileNewName: string = new Date().toString() + "/" + file.name;
    const uploadTask = storage.ref(`blog_posts/${fileNewName}`).put(file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        setUpload(false);
        return toaster.warning("Error", {
          description: error?.message,
        });
      },
      () => {
        storage
          .ref("blog_posts")
          .child(fileNewName)
          .getDownloadURL()
          .then((url) => {
            setUpload(false);
            addInvoker({
              variables: {
                id,
                image: url,
              },
            })
              .then(() => {
                refetch();
                toaster.success("Update post image successfully");
                setShow(false);
              })
              .catch((e: ApolloError) => {
                if (e?.graphQLErrors?.length > 0) {
                  return toaster.warning(
                    _.startCase(_.camelCase(e?.graphQLErrors[0]?.message))
                  );
                }
              });
          })
          .catch((e) => {
            setUpload(false);
            toaster.warning("Error", {
              description: e?.message,
            });
          });
      }
    );
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
            <span className={"font-bold"}>Update Post Image</span>
            <form onSubmit={HandleSubmit} className={"mt-3"}>
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Post Image <span className={"text-red-400"}>*</span>
                  </label>
                  <div className="mt-1 ">
                    <input
                      type="file"
                      accept={"image/*"}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        e?.target?.files
                          ? setFile(e?.target?.files[0])
                          : setFile(file);
                      }}
                      className=" font-light focus:outline-none block w-full sm:text-sm border-gray-300 rounded-none"
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
                    disabled={loading || upload}
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-light rounded-none text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:shadow-outline-teal focus:border-red-600 active:bg-blue-600 transition duration-150 ease-in-out"
                  >
                    {loading
                      ? "Updating..."
                      : upload
                      ? "Uploading image..."
                      : "Update Post"}
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
