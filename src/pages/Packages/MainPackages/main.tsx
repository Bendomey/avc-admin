import * as React from "react";
import PackageCard from "./Card";
import { EmptyTemplate } from "./components/emptyTemplate";
import { SetPeriod } from "./components/set-period";
import { DataLoader } from "../../../components/atoms/loadingComponents";
import ErrorAssetComponent from "../../../components/atoms/alertComponents/error";

import { AddPackage } from "./Add";
import { useQuery } from "@apollo/client";
import { GET_PACKAGES } from "../../../services/graphql/queries";
import {
  GetPackagesInputProps,
  GetPackagesOutputProps,
  Package,
} from "../../../shared/interfaces/package";

interface Props {}

const MainPackage: React.FC<Props> = () => {
  const [period, setPeriod] = React.useState<"monthly" | "yearly">("monthly");
  const [add, setAdd] = React.useState<boolean>(false);

  const { data, loading } = useQuery<
    GetPackagesOutputProps,
    GetPackagesInputProps
  >(GET_PACKAGES, {
    variables: {
      filter: {
        type: "MAIN",
      },
    },
  });

  return (
    <React.Fragment>
      <div className={" mx-5"}>
        {loading ? (
          <DataLoader />
        ) : (
          <React.Fragment>
            {data ? (
              <React.Fragment>
                <div className="max-w-7xl pb-3 mx-auto px-4 sm:px-6 lg:px-8">
                  {data?.packagesLength > 0 && (
                    <div className="sm:flex sm:flex-col sm:align-center">
                      <SetPeriod period={period} setPeriod={setPeriod} />
                    </div>
                  )}
                  <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
                    {data?.packages.map((singlePackage: Package) => (
                      <React.Fragment>
                        <PackageCard data={singlePackage} period={period} />
                      </React.Fragment>
                    ))}
                    {add ? (
                      <AddPackage setAdd={setAdd} />
                    ) : (
                      <EmptyTemplate setAdd={setAdd} />
                    )}
                  </div>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <ErrorAssetComponent model={"packages"} />
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};

export default MainPackage;
