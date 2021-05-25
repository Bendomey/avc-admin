import * as React from "react";
import PackageCard from "./Card";
import { EmptyAlertComponent } from "../../../components/atoms/alertComponents";
import { useQuery } from "@apollo/client";
import { DataLoader } from "../../../components/atoms/loadingComponents";
import { GET_PACKAGES } from "../../../services/graphql/queries";
import {
  GetPackagesInputProps,
  GetPackagesOutputProps,
  Package,
} from "../../../shared/interfaces/package";
import ErrorAssetComponent from "../../../components/atoms/alertComponents/error";

interface Props {}

const MainPackage: React.FC<Props> = () => {
  const { data, loading, refetch } = useQuery<
    GetPackagesOutputProps,
    GetPackagesInputProps
  >(GET_PACKAGES, {
    variables: {
      filter: {
        type: "REQUESTED",
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
                  {data?.packagesLength === 0 ? (
                    <React.Fragment>
                      <EmptyAlertComponent model={"requested packages"} />
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
                        {data?.packages.map((singlepackage: Package) => (
                          <React.Fragment>
                            <PackageCard
                              data={singlepackage}
                              refetch={refetch}
                            />
                          </React.Fragment>
                        ))}
                      </div>
                    </React.Fragment>
                  )}
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <ErrorAssetComponent model={"requested packages"} />
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};

export default MainPackage;
