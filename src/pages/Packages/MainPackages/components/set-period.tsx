import * as React from "react";

interface Props {
  period: "monthly" | "yearly";
  setPeriod: React.Dispatch<React.SetStateAction<"monthly" | "yearly">>;
}

const SetPeriod: React.FC<Props> = ({ period, setPeriod }) => {
  return (
    <React.Fragment>
      <div className=" self-center mt-6 bg-red-600 rounded-lg p-0.5 flex sm:mt-8">
        <button
          onClick={() => setPeriod("monthly")}
          type="button"
          className={` w-1/2 ${
            period === "monthly"
              ? "bg-white border-gray-200 text-gray-900"
              : "border border-transparent text-gray-100"
          } rounded-md shadow-sm py-2 text-sm font-medium  whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-red-500  sm:w-auto sm:px-8`}
        >
          Monthly billing
        </button>
        <button
          onClick={() => setPeriod("yearly")}
          type="button"
          className={`ml-0.5  w-1/2 ${
            period === "yearly"
              ? "bg-white border-gray-200 text-gray-900"
              : "border border-transparent text-gray-100"
          } rounded-md py-2 text-sm font-medium  whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-red-500  sm:w-auto sm:px-8`}
        >
          Yearly billing
        </button>
      </div>
    </React.Fragment>
  );
};

export { SetPeriod };
