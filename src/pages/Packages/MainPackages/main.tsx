import * as React from "react";
import PackageCard from "./Card";
import { EmptyTemplate } from "./components/emptyTemplate";
import { SetPeriod } from "./components/set-period";

import { AddPackage } from "./Add";

interface Props {}

const tiers = [
  {
    name: "Hobby",
    href: "#",
    priceMonthly: 12,
    description: "All the basics for starting a new business",
    includedFeatures: [
      "Potenti felis, in cras at at ligula nunc.",
      "Orci neque eget pellentesque.",
    ],
  },
  {
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
  },
];

const MainPackage: React.FC<Props> = () => {
  const [period, setPeriod] = React.useState<"monthly" | "yearly">("monthly");
  const [add, setAdd] = React.useState<boolean>(false);

  return (
    <React.Fragment>
      <div className={" mx-5"}>
        <div className="max-w-7xl pb-3 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center">
            <SetPeriod period={period} setPeriod={setPeriod} />
          </div>
          <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
            {tiers.map((tier) => (
              <React.Fragment>
                <PackageCard data={tier} />
              </React.Fragment>
            ))}
            {add ? (
              <AddPackage setAdd={setAdd} />
            ) : (
              <EmptyTemplate setAdd={setAdd} />
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainPackage;
