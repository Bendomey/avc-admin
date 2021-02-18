import * as React from "react";
import { format } from "date-fns";
import _ from "lodash";
import { Customer } from "../../../../shared/interfaces/customer";

interface Props {
  data: Customer;
  edit: (data: Customer) => void;
  remove: (data: Customer) => void;
  view: (data: Customer) => void;
}

const CustomerCard: React.FC<Props> = ({ data, edit, remove, view }) => {
  return (
    <React.Fragment>
      <tr>
        <td className="px-6 py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium text-gray-900">
          <div className="flex items-center space-x-3 lg:pl-2">
            <div
              className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-blue-600"
              aria-hidden="true"
            ></div>
            <span className="truncate hover:text-gray-600">
              {_.truncate(
                `${data?.user?.lastName} ${data?.user?.firstName} ${
                  data?.user?.otherNames || ""
                }`,
                {
                  length: 30,
                }
              ) || "Not Speficied"}
            </span>
          </div>
        </td>
        <td className="px-6 py-3 text-sm text-gray-500 font-medium">
          {data?.user?.email || "N/A"}
        </td>
        <td className="px-6 py-3 text-sm text-gray-500 font-medium">
          {data?.user?.phone || "N/A"}
        </td>
        <td className="px-6 py-3 text-sm text-gray-500 font-medium">
          {data?.type || "N/A"}
        </td>

        <td className="px-6 py-3 text-sm font-bold text-gray-600 ">
          {data?.user?.suspendedAt ? (
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
              Suspended
            </span>
          ) : (
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
              Active
            </span>
          )}
        </td>
        <td className="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right">
          {format(new Date(data?.createdAt), "MMMM dd, yyyy")}
        </td>

        <td className="pr-6">
          <div className="relative flex justify-end items-center">
            <button
              onClick={() => {
                view(data);
              }}
              id="project-options-menu-0"
              aria-haspopup="true"
              type="button"
              className="w-8 h-8 mr-2 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </button>

            <button
              onClick={() => {
                remove(data);
              }}
              id="project-options-menu-0"
              aria-haspopup="true"
              type="button"
              className="w-8 h-8 mr-2 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                />
              </svg>
            </button>
          </div>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default CustomerCard;
