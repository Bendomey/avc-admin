import * as React from "react";
import PuffLoader from "react-spinners/PuffLoader";

const DataLoader = () => {
  return (
    <React.Fragment>
      <div
        style={{
          height: "55vh",
          width: "80vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        className={"font-light"}
      >
        <PuffLoader color={"#E21E47"} size={40} />
      </div>
    </React.Fragment>
  );
};

export default DataLoader;
