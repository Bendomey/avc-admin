import React, { Fragment } from "react";

export interface TopComponentProp {
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  refetch: any;
  setSkip: React.Dispatch<React.SetStateAction<number>>;
  setEnd: React.Dispatch<React.SetStateAction<number>>;
  skip: number;
}

const TopTableComponent = ({
  limit,
  setLimit,
  refetch,
  setSkip,
  setEnd,
  skip,
}: TopComponentProp) => {
  return (
    <Fragment>
      <div className="grid grid-cols-1 row-gap-1 col-gap-1 sm:grid-cols-6 mb-5">
        <div className="sm:col-span-3">
          <div className="relative rounded-none shadow-sm">
            <input
              type={"search"}
              className="shadow-sm ml-2 font-light focus:outline-none block w-full sm:text-sm border-gray-300 rounded-none"
              placeholder="Search customers by name, email or phone"
              // onChange={(e) => setSearch(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg width={20} height={20} viewBox="0 0 512 512">
                <path
                  d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                  fill="none"
                  stroke="#b4b4b4"
                  strokeMiterlimit={10}
                  strokeWidth="32px"
                />
                <path
                  fill="none"
                  stroke="#b4b4b4"
                  strokeLinecap="round"
                  strokeMiterlimit={10}
                  strokeWidth="32px"
                  d="M338.29 338.29L448 448"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="sm:col-span-3">
          <div className={"flex flex-row items-center justify-end h-11"}>
            <div className="mt-1 mr-2 rounded-none shadow-sm flex flex-row items-center">
              <select
                id="country"
                value={limit}
                onChange={(e) => {
                  setLimit(parseInt(e.target.value));
                  setSkip(0);
                  setEnd(limit + skip);
                  refetch();
                }}
                className="form-select font-light rounded-none border-gray-300 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              >
                <option value={10}>10 per page</option>
                <option value={50}>50 per page</option>
                <option value={100}>100 per page</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TopTableComponent;
