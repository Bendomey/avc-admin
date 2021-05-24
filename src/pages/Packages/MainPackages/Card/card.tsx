import { useQuery } from "@apollo/client";
import * as React from "react";
import { GET_PACKAGE_SERVICES } from "../../../../services/graphql/queries";
import { Loader } from "../../../../components/atoms/loadingComponents";
import {
  GetPackageServicesInputProps,
  GetPackageServicesOutputProps,
  IPackageService,
  Package,
} from "../../../../shared/interfaces/package";
import { convertToDollars } from "../../../../services/broker";

interface Props {
  data: Package;
  period: "monthly" | "yearly";
}

const PackageCard: React.FC<Props> = ({ data, period }) => {
  const { data: packageServices, loading } = useQuery<
    GetPackageServicesOutputProps,
    GetPackageServicesInputProps
  >(GET_PACKAGE_SERVICES, {
    variables: {
      filter: {
        package: data?.id,
      },
    },
  });
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
                ? convertToDollars(data?.amountPerMonth || 0)
                : convertToDollars(data?.amountPerYear || 0)}
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
        {loading ? (
          <React.Fragment>
            <div className={"py-5 flex justify-center"}>
              <Loader />
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="pt-6 pb-8 px-6">
              <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                What's included
              </h3>
              <ul className="mt-6 space-y-4">
                {packageServices?.packageServices?.map(
                  (packageService: IPackageService, i: number) => (
                    <li key={i} className="flex space-x-3">
                      {packageService?.type === "BOOLEAN" ? (
                        <React.Fragment>
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
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <span>{packageService?.quantity || 0}</span>
                        </React.Fragment>
                      )}
                      <span className="text-sm text-gray-500">
                        {packageService?.service?.name}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};
export default PackageCard;
