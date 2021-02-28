import * as React from "react";

interface Props {
  title: string;
  isBtnAvail?: boolean;
  onBtnClick?: VoidFunction;
  btnLabel?: string;
}

const Header: React.FC<Props> = ({
  title,
  isBtnAvail,
  onBtnClick,
  btnLabel,
}) => {
  return (
    <React.Fragment>
      <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex-1 min-w-0">
          <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
            {title}
          </h1>
        </div>
        <div className="mt-4 flex sm:mt-0 sm:ml-4">
          {isBtnAvail && (
            <button
              type="button"
              onClick={onBtnClick}
              className="order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:order-1 sm:ml-3"
            >
              {btnLabel}
            </button>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

Header.defaultProps = {
  isBtnAvail: false,
};

export default Header;
