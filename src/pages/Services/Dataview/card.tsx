import * as React from "react";
import { format } from "date-fns";
import { Service } from "../../../shared/interfaces/service";

interface Props {
  data: Service;
  edit: (data: Service) => void;
  remove: (data: Service) => void;
  view: (data: Service) => void;
}

const ServiceCard: React.FC<Props> = ({ data, edit, remove, view }) => {
  return (
    <React.Fragment>
      <tr>
        <td className="px-6 py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium text-gray-900">
          <div className="flex items-center space-x-3 lg:pl-2">
            <div
              className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-pink-600"
              aria-hidden="true"
            ></div>
            <span className="truncate hover:text-gray-600">
              {data?.name || "Not Speficied"}
            </span>
          </div>
        </td>
        <td className="px-6 py-3 text-sm text-gray-500 font-medium">
          {(data?.price * 100)?.toFixed(2) || "N/A"}
        </td>
        <td className="px-6 py-3 text-sm text-gray-500 font-medium">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            {data?.type || "N/A"}
          </span>
        </td>
        <td className="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right">
          {format(new Date(data?.createdAt), "MMMM dd, yyyy")}
        </td>
        <td className="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right">
          {format(new Date(data?.updatedAt), "MMMM dd, yyyy")}
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
                edit(data);
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
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>
          </div>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default ServiceCard;
