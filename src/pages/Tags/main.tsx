import { useQuery } from "@apollo/client";
import * as React from "react";
import { EmptyAlertComponent } from "../../components/atoms/alertComponents";
import Dataview from "./Dataview";
import { usePagination } from "../../components/atoms/Hooks";
import { DataLoader } from "../../components/atoms/loadingComponents";
import BreadCrumb from "../../components/breadcrumb";
import Header from "../../components/header";
import { GET_TAGS } from "../../services/graphql/queries";
import {
  GetTagsInputProps,
  GetTagsOutputProps,
} from "../../shared/interfaces/tag";
import EditComponent from "./Edit";
import DeleteComponent from "./Delete";
import AddComponent from "./Add";
import ErrorAssetComponent from "../../components/atoms/alertComponents/error";

const Tags = () => {
  const [add, setAdd] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<any>(null);
  const [edit, setEdit] = React.useState<any>(null);
  const [remove, setRemove] = React.useState<any>(null);

  //for pagination
  const { limit, setLimit, skip, setSkip, end, setEnd } = usePagination(12);

  const { data, loading, refetch } = useQuery<
    GetTagsOutputProps,
    GetTagsInputProps
  >(GET_TAGS);

  return (
    <React.Fragment>
      <Header
        title={"Manage Blog Tags"}
        isBtnAvail
        btnLabel={"Add A New Tag"}
        onBtnClick={() => setAdd(true)}
      />
      <BreadCrumb model={"Tags"} />

      <div className="hidden mt-8 sm:block">
        {loading ? (
          <React.Fragment>
            <DataLoader />
          </React.Fragment>
        ) : (
          <React.Fragment>
            {data ? (
              <React.Fragment>
                {data?.tagsLength === 0 ? (
                  <React.Fragment>
                    <EmptyAlertComponent model={"tags"} />
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <Dataview
                      refetch={refetch}
                      setLimit={setLimit}
                      limit={limit}
                      data={data}
                      total={data?.tagsLength}
                      skip={skip}
                      setSkip={setSkip}
                      end={end}
                      setEnd={setEnd}
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
                <ErrorAssetComponent model={"tags"} />
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
    </React.Fragment>
  );
};

export default Tags;
