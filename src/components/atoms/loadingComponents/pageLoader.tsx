import * as React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const PageLoader = () => {
  return (
    <React.Fragment>
      <div className={"w-full h-full flex justify-center items-center"}>
        <ClipLoader color={"#44BCA8"} size={50} />
      </div>
    </React.Fragment>
  );
};

export default PageLoader;
