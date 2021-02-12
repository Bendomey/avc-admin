import * as React from "react";
import EmptyAsset from "../svgs/empty";

interface Props {
  model?: string;
}
const EmptyComponent: React.FC<Props> = ({ model = "model name" }) => {
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
        <span className={"font-light flex justify-center flex-col"}>
          <EmptyAsset className={"h-36 w-auto"} />
          <div className="mt-3 text-center sm:mt-5">
            <h3
              className="text-lg leading-6 font-medium text-gray-900"
              id="modal-headline"
            >
              Oops, it is lonely in here
            </h3>
            <div className="mt-2">
              <p className="text-sm leading-5 font-light text-gray-500">
                No {model} found
              </p>
            </div>
          </div>
        </span>
      </div>
    </React.Fragment>
  );
};

export default EmptyComponent;
