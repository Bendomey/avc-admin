import * as React from "react";
// import { CheckIcon } from "@heroicons/react/solid";

const tier = {
  name: "Startup",
  href: "#",
  priceMonthly: 32,
  description: "All the basics for starting a new business",
  includedFeatures: [
    "Potenti felis, in cras at at ligula nunc. ",
    "Orci neque eget pellentesque.",
    "Donec mauris sit in eu tincidunt etiam.",
    "Faucibus volutpat magna.",
  ],
};

interface Props {
  setAdd: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddPackage: React.FC<Props> = ({ setAdd }) => {
  return (
    <React.Fragment>
      <div
        key={tier.name}
        className="border-4 border-dashed border-gray-300 rounded-lg shadow-sm divide-y divide-gray-200"
      >
        <div className="p-6">
          <div>
            <input
              type="text"
              name="email"
              id="email"
              className="shadow-sm focus:ring-red-500 bg-gray-50 focus:border-red-500 block w-full sm:text-sm border-gray-200 rounded-none"
              placeholder="Name here - required"
            />
          </div>
          <div className={"mt-3"}>
            <textarea
              className="shadow-sm focus:ring-red-500 bg-gray-50 focus:border-red-500 block w-full sm:text-sm border-gray-200 rounded-none"
              placeholder="Description here... - optional"
            ></textarea>
          </div>
          <div className={"mt-3"}>
            <input
              type="number"
              step={0.01}
              className="shadow-sm focus:ring-red-500 bg-gray-50 focus:border-red-500 block w-full sm:text-sm border-gray-200 rounded-none"
              placeholder="Price per month here - required"
            />
          </div>
          <div className={"mt-3"}>
            <input
              type="number"
              step={0.01}
              className="shadow-sm focus:ring-red-500 bg-gray-50 focus:border-red-500 block w-full sm:text-sm border-gray-200 rounded-none"
              placeholder="Price per year here - required"
            />
          </div>
          <button className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
            Submit
          </button>
          <button
            onClick={() => setAdd(false)}
            className="mt-1 block w-full bg-red-600 border border-red-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-red-900"
          >
            Cancel
          </button>
        </div>
        <div className="pt-6 pb-8 px-6">
          <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
            What's included
          </h3>
          <ul className="mt-6 space-y-4">
            {tier.includedFeatures.map((feature: string) => (
              <li key={feature} className="flex space-x-3">
                <div>
                  {/* <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  /> */}
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="shadow-sm focus:ring-red-500 w-12 bg-gray-50 focus:border-red-500 block sm:text-sm border-gray-200 rounded-none"
                    placeholder="No."
                  />
                </div>
                <span className="text-sm text-gray-500">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddPackage;
