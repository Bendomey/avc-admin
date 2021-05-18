import * as React from "react";
import PuffLoader from "react-spinners/PuffLoader";

const CenterLoaders = () => {
  return (
    <React.Fragment>
      <div className={"w-screen h-screen flex justify-center items-center"}>
        <PuffLoader color={"#E21E47"} size={50} />
      </div>
    </React.Fragment>
  );
};

export default CenterLoaders;
