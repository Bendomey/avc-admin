import React, { Fragment } from "react";
import TopTableComponent from "./top";
import DataCards from "./main";

const DataView = ({
  refetch,
  setLimit,
  limit,
  data,
  skip,
  setSkip,
  end,
  setEnd,
  edit,
  view,
  remove,
}: any) => {
  return (
    <Fragment>
      <TopTableComponent
        limit={limit}
        refetch={refetch}
        setLimit={setLimit}
        setSkip={setSkip}
        setEnd={setEnd}
        skip={skip}
        // setSearch={setSearch}
      />
      <DataCards
        refetch={refetch}
        limit={limit}
        data={data?.customers}
        total={data?.customersLength}
        skip={skip}
        setSkip={setSkip}
        end={end}
        setEnd={setEnd}
        view={view}
        edit={edit}
        remove={remove}
      />
    </Fragment>
  );
};

export default DataView;
