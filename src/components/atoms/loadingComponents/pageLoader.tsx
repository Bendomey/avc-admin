import * as React from "react";
import PuffLoader from "react-spinners/PuffLoader";

const PageLoader = () => {
  return (
    <React.Fragment>
      <div className={"w-full h-full flex justify-center items-center"}>
        <PuffLoader color={"#E21E47"} size={50} />
      </div>
    </React.Fragment>
  );
};

export default PageLoader;
