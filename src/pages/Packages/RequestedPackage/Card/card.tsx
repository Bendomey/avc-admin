import * as React from "react";
import { Package } from "../../../../shared/interfaces/package";

interface Props {
  data: Package;
}

const PackageCard: React.FC<Props> = ({ data }) => {
  const handleSubmit = (e: any) => {
    e?.preventDefault();
  };
  return (
    <React.Fragment>
      <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
        <div className="p-6">
          <h2 className="text-lg leading-6 font-medium text-gray-900">
            {data?.name}
          </h2>
          <p className="mt-4 text-sm text-gray-500">{data?.description}</p>
          <form onSubmit={handleSubmit}>
            <div className={"mt-3"}>
              <input
                type="number"
                step={0.01}
                required
                className="shadow-sm focus:ring-red-500 bg-gray-50 focus:border-red-500 block w-full sm:text-sm border-gray-200 rounded-none"
                placeholder="Price per month here - required"
              />
            </div>
            <div className={"mt-3"}>
              <input
                type="number"
                required
                step={0.01}
                className="shadow-sm focus:ring-red-500 bg-gray-50 focus:border-red-500 block w-full sm:text-sm border-gray-200 rounded-none"
                placeholder="Price per year here - required"
              />
            </div>

            <button className="mt-8 block w-full bg-red-600 border border-red-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-red-900">
              Update {data.name}
            </button>
          </form>
        </div>
        <div className="pt-6 px-6">
          <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
            What's included
          </h3>
          <ul className="mt-6  pb-4 space-y-4">
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
          <h3 className="text-xs pb-3 font-medium mt-2 text-gray-900 tracking-wide">
            Requested By:{" "}
            <span className={"text-gray-500"}>
              {data?.requestedBy?.lastName} {data?.requestedBy?.firstName}
            </span>
          </h3>
        </div>
      </div>
    </React.Fragment>
  );
};
export default PackageCard;
