import * as React from "react";

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

const EmptyTemplate: React.FC<Props> = ({ setAdd }) => {
  return (
    <React.Fragment>
      <div
        key={tier.name}
        className="border-4 border-dashed border-gray-300 rounded-lg shadow-sm divide-y divide-gray-200"
      >
        <div className="p-6">
          <div className={"h-5 w-1/2 bg-gray-200"} />
          <div className={"h-2 w-full mt-8 bg-gray-200"} />
          <div className={"h-2 w-2/3 mt-2 bg-gray-200"} />
          <p className="mt-8">
            <div className={"h-10 w-1/2 bg-gray-200"} />
          </p>
          <button
            onClick={() => setAdd(true)}
            className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
          >
            Create Package
          </button>
        </div>
        <div className="pt-6 pb-8 px-6">
          <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
            What's included
          </h3>
          <ul className="mt-6 space-y-4">
            {tier.includedFeatures.map((feature: string) => (
              <li key={feature} className="flex space-x-3">
                <div className={"h-5 w-10 bg-green-200"} />
                <div className={"h-5 w-full bg-gray-200"} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export { EmptyTemplate };
