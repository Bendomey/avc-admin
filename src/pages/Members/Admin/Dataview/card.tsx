import * as React from "react";
import { format } from "date-fns";

interface Props {
  data: any;
  edit: (data: any) => void;
  remove: (data: any) => void;
  view: (data: any) => void;
}

const AdminCard: React.FC<Props> = ({ data, edit, remove, view }) => {
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
              {data?.fullname || "Not Speficied"}
            </span>
          </div>
        </td>
        <td className="px-6 py-3 text-sm text-gray-500 font-medium">
          {data?.email || "N/A"}
        </td>
        <td className="px-6 py-3 text-sm text-gray-500 font-medium">
          {data?.phone || "N/A"}
        </td>
        <td className="px-6 py-3 text-sm text-gray-500 font-medium">
          {data?.role || "N/A"}
        </td>
        <td className="px-6 py-3 text-sm font-bold text-gray-600 ">
          {data?.suspendedAt ? (
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
            {/* <button
              onClick={() => {
                remove(data);
              }}
              id="project-options-menu-0"
              aria-haspopup="true"
              type="button"
              className="w-8 h-8 bg-white inline-flex items-center justify-center text-red-400 rounded-full hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
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
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button> */}
          </div>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default AdminCard;
