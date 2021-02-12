import React, { Fragment } from "react";
import TopTableComponent from "./top";
import DataCards from "./main";
// import TableComponent from "../../../../components/atoms/Table";

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
        data={data?.countries}
        total={data?.countriesLength}
        skip={skip}
        setSkip={setSkip}
        end={end}
        setEnd={setEnd}
        view={view}
        edit={edit}
      />
    </Fragment>
  );
};

export default DataView;
