import * as React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const CenterLoaders = () => {
  return (
    <React.Fragment>
      <div className={"w-screen h-screen flex justify-center items-center"}>
        <ClipLoader color={"#E21E47"} size={40} />
      </div>
    </React.Fragment>
  );
};

export default CenterLoaders;
