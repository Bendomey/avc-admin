import * as React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const PageLoader = () => {
  return (
    <React.Fragment>
      <div className={"w-full h-full flex justify-center items-center"}>
        <ClipLoader color={"#E21E47"} size={50} />
      </div>
    </React.Fragment>
  );
};

export default PageLoader;
