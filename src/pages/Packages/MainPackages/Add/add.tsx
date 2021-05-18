import { ApolloError, useMutation, useQuery } from "@apollo/client";
import * as React from "react";
import { Loader } from "../../../../components/atoms/loadingComponents";
import { toaster } from "evergreen-ui";
import { CREATE_PACKAGE } from "../../../../services/graphql/mutations";
import { GET_SERVICES } from "../../../../services/graphql/queries";
import {
  CreatePackageInputProps,
  CreatePackageOutputProps,
  PackageService,
} from "../../../../shared/interfaces/package";
import {
  GetServicesInputProps,
  GetServicesOutputProps,
  Service,
} from "../../../../shared/interfaces/service";
import _ from "lodash";

interface Props {
  setAdd: React.Dispatch<React.SetStateAction<boolean>>;
  refetch: any;
}

interface PackageServicesProps {
  serviceId: string;
  quantity: number | null;
  isActive: boolean | null;
}

const AddPackage: React.FC<Props> = ({ setAdd, refetch }) => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [pricePerMonth, setPricePerMonth] = React.useState("");
  const [pricePerYear, setPricePerYear] = React.useState("");
  const [packageServices, setPackageServices] = React.useState<
    PackageServicesProps[]
  >([]);
  const [holdPackageServices, setHoldPackageServices] = React.useState<
    PackageServicesProps[]
  >([]);

  const { data: services, loading } =
    useQuery<GetServicesOutputProps, GetServicesInputProps>(GET_SERVICES);

  const [invokeCreation, { loading: loadAdd }] =
    useMutation<CreatePackageOutputProps, CreatePackageInputProps>(
      CREATE_PACKAGE
    );

  React.useEffect(() => {
    if (services?.services) {
      let newPackageServices: PackageServicesProps[] = [];
      services?.services?.map((s: Service) =>
        newPackageServices.push({
          serviceId: s.id,
          quantity: null,
          isActive: null,
        })
      );

      setPackageServices(newPackageServices);
      setHoldPackageServices(newPackageServices);
    }
  }, [services]);

  const HandleSubmit = (e: any) => {
    e?.preventDefault();
    let newPackacages: PackageService[] = [];
    packageServices?.map((ps) =>
      newPackacages?.push({
        serviceId: ps?.serviceId,
        quantity: ps?.quantity ? ps?.quantity : undefined,
        isActive: ps?.isActive ? true : undefined,
      })
    );

    invokeCreation({
      variables: {
        name,
        amountPerMonth: parseFloat(pricePerMonth) / 100,
        amountPerYear: parseFloat(pricePerYear) / 100,
        packageServices: newPackacages,
        description: description || undefined,
      },
    })
      .then(() => {
        refetch();
        toaster.success("You successfully added this package");
        setAdd(false);
        setName("");
        setPricePerMonth("");
        setPricePerYear("");
        setDescription("");
        setPackageServices(holdPackageServices);
      })
      .catch((e: ApolloError) => {
        toaster.danger(_.startCase(_.camelCase(e?.graphQLErrors[0]?.message)));
      });
  };

  return (
    <React.Fragment>
      <div className="border-4 border-dashed border-gray-300 rounded-lg shadow-sm divide-y divide-gray-200">
        <form onSubmit={HandleSubmit} className="p-6">
          <div>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e?.target?.value)}
              className="shadow-sm focus:ring-red-500 bg-gray-50 focus:border-red-500 block w-full sm:text-sm border-gray-200 rounded-none"
              placeholder="Name here - required"
            />
          </div>
          <div className={"mt-3"}>
            <textarea
              value={description}
              onChange={(e) => setDescription(e?.target?.value)}
              className="shadow-sm focus:ring-red-500 bg-gray-50 focus:border-red-500 block w-full sm:text-sm border-gray-200 rounded-none"
              placeholder="Description here... - optional"
            ></textarea>
          </div>
          <div className={"mt-3"}>
            <input
              type="number"
              step={0.01}
              required
              value={pricePerMonth}
              onChange={(e) => setPricePerMonth(e?.target?.value)}
              className="shadow-sm focus:ring-red-500 bg-gray-50 focus:border-red-500 block w-full sm:text-sm border-gray-200 rounded-none"
              placeholder="Price per month here - required"
            />
          </div>
          <div className={"mt-3"}>
            <input
              type="number"
              step={0.01}
              required
              value={pricePerYear}
              onChange={(e) => setPricePerYear(e?.target?.value)}
              className="shadow-sm focus:ring-red-500 bg-gray-50 focus:border-red-500 block w-full sm:text-sm border-gray-200 rounded-none"
              placeholder="Price per year here - required"
            />
          </div>
          <button
            type={"submit"}
            disabled={loadAdd}
            className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
          >
            {loadAdd ? "Loading..." : "Submit"}
          </button>
          <button
            type={"button"}
            disabled={loadAdd}
            onClick={() => setAdd(false)}
            className="mt-1 block w-full bg-red-600 border border-red-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-red-900"
          >
            Cancel
          </button>
        </form>
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
                {services?.services.map((service: Service, i: number) => {
                  let getService = packageServices?.find(
                    (s: PackageServicesProps) => s?.serviceId === service?.id
                  );
                  return (
                    <React.Fragment key={i}>
                      <li className="flex space-x-3 items-center">
                        <div>
                          {service?.variant === "BOOLEAN" ? (
                            <input
                              id="remember_me"
                              name="remember_me"
                              checked={getService?.isActive === true}
                              type="checkbox"
                              onChange={(e: any) => {
                                let old = [...packageServices];
                                let data = e?.target?.checked;
                                let id = old?.findIndex(
                                  (o) => o?.serviceId === service?.id
                                );
                                old[id].isActive = data;
                                setPackageServices(old);
                              }}
                              className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                            />
                          ) : (
                            <input
                              type="number"
                              value={getService?.quantity || ""}
                              onChange={(e: any) => {
                                let old = [...packageServices];
                                let data = parseFloat(e?.target?.value);
                                let id = old?.findIndex(
                                  (o) => o?.serviceId === service?.id
                                );
                                old[id].quantity = data;
                                setPackageServices(old);
                              }}
                              className="shadow-sm focus:ring-red-500 w-20 bg-gray-50 focus:border-red-500 block sm:text-sm border-gray-200 rounded-none"
                              placeholder="No."
                            />
                          )}
                        </div>
                        <span className="text-sm text-gray-500">
                          {service?.name}
                        </span>
                      </li>
                    </React.Fragment>
                  );
                })}
              </ul>
            </div>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};

export default AddPackage;
