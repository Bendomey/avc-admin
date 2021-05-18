import * as React from "react";
import { Package } from "../../../../shared/interfaces/package";

interface Props {
  data: Package;
  period: "monthly" | "yearly";
}

const PackageCard: React.FC<Props> = ({ data, period }) => {
  return (
    <React.Fragment>
      <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
        <div className="p-6">
          <h2 className="text-lg leading-6 font-medium text-gray-900">
            {data?.name}
          </h2>
          <p className="mt-4 text-sm text-gray-500">{data.description}</p>
          <p className="mt-8">
            <span className="text-4xl font-extrabold text-gray-900">
              $
              {period === "monthly"
                ? data?.amountPerMonth
                : data?.amountPerYear}
            </span>{" "}
            <span className="text-base font-medium text-gray-500">
              /{period === "monthly" ? "mon" : "year"}
            </span>
          </p>
          <button className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
            Edit {data?.name}
          </button>
          <button className="mt-2 block w-full bg-red-800 border border-red-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-red-900">
            Delete {data?.name}
          </button>
        </div>
        <div className="pt-6 pb-8 px-6">
          <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
            What's included
          </h3>
          <ul className="mt-6 space-y-4">
            {/* {data.includedFeatures.map((feature: any) => (
              <li key={feature} className="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 h-5 w-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm text-gray-500">{feature}</span>
              </li>
            ))} */}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
export default PackageCard;
