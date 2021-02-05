import * as React from "react";
import logo from "../../assets/images/logo.png";
// import userPng from "../../assets/images/male.jpeg";
import { useOutsideListener } from "../../components/atoms/Hooks";
import Transition from "../../components/atoms/transitions";
import { Link, useLocation } from "react-router-dom";

const SideNav = () => {
  const { pathname } = useLocation();
  const wrapperContainer = React.useRef(null);
  const [showDropdown, setShowDropdown] = React.useState(false);
  useOutsideListener(wrapperContainer, () => setShowDropdown(false));
  return (
    <React.Fragment>
      {/* <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. --> */}

      <div className="lg:hidden">
        <div className="fixed inset-0 flex z-40">
          {/* <!--
        Off-canvas menu overlay, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      --> */}
          <div className="fixed inset-0" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
          </div>
          {/* <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      --> */}
          <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Close sidebar</span>
                {/* <!-- Heroicon name: outline/x --> */}
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-shrink-0 flex items-center px-4">
              <img
                className="h-8 w-auto"
                src={logo}
                // src="https://tailwindui.com/img/logos/workflow-logo-red-500-mark-gray-700-text.svg"
                alt="Workflow"
              />
            </div>
            <div className="mt-5 flex-1 h-0 overflow-y-auto">
              <nav className="px-2">
                <div className="space-y-1">
                  {/* <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:text-gray-900 hover:bg-gray-50" --> */}
                  <Link
                    to="/"
                    className={`${
                      pathname === "/"
                        ? "bg-gray-200"
                        : "hover:text-gray-900 hover:bg-gray-50"
                    } text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                  >
                    <svg
                      className="text-gray-500 mr-3 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Overview
                  </Link>

                  <Link
                    to="/members"
                    className={`${
                      pathname === "/members"
                        ? "bg-gray-200"
                        : "hover:text-gray-900 hover:bg-gray-50"
                    } text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                  >
                    <svg
                      className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Members
                  </Link>

                  <Link
                    to="/jobs"
                    className={`${
                      pathname === "/jobs"
                        ? "bg-gray-200"
                        : "hover:text-gray-900 hover:bg-gray-50"
                    } text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                  >
                    <svg
                      className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Jobs
                  </Link>
                </div>
                <div className="mt-8">
                  <h3
                    className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
                    id="teams-headline"
                  >
                    Teams
                  </h3>
                  <div
                    className="mt-1 space-y-1"
                    role="group"
                    aria-labelledby="teams-headline"
                  >
                    <Link
                      to="/countries"
                      className={`${
                        pathname === "/countries"
                          ? "bg-gray-200"
                          : "hover:text-gray-900 hover:bg-gray-50"
                      } group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-700 rounded-md `}
                    >
                      <span
                        className="w-2.5 h-2.5 mr-4 bg-red-500 rounded-full"
                        aria-hidden="true"
                      ></span>
                      <span className="truncate">Countries</span>
                    </Link>

                    <Link
                      to="/legal-areas"
                      className={`${
                        pathname === "/legal-areas"
                          ? "bg-gray-200"
                          : "hover:text-gray-900 hover:bg-gray-50"
                      } group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-700 rounded-md `}
                    >
                      <span
                        className="w-2.5 h-2.5 mr-4 bg-green-500 rounded-full"
                        aria-hidden="true"
                      ></span>
                      <span className="truncate">Legal Areas</span>
                    </Link>
                    <Link
                      to="/tags"
                      className={`${
                        pathname === "/tags"
                          ? "bg-gray-200"
                          : "hover:text-gray-900 hover:bg-gray-50"
                      } group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-700 rounded-md `}
                    >
                      <span
                        className="w-2.5 h-2.5 mr-4 bg-yellow-500 rounded-full"
                        aria-hidden="true"
                      ></span>
                      <span className="truncate">Tags</span>
                    </Link>
                    <Link
                      to="/blog-posts"
                      className={`${
                        pathname === "/blog-posts"
                          ? "bg-gray-200"
                          : "hover:text-gray-900 hover:bg-gray-50"
                      } group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-700 rounded-md `}
                    >
                      <span
                        className="w-2.5 h-2.5 mr-4 bg-blue-500 rounded-full"
                        aria-hidden="true"
                      ></span>
                      <span className="truncate">Blog Posts</span>
                    </Link>

                    <Link
                      to="/faqs"
                      className={`${
                        pathname === "/faqs"
                          ? "bg-gray-200"
                          : "hover:text-gray-900 hover:bg-gray-50"
                      } group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-700 rounded-md `}
                    >
                      <span
                        className="w-2.5 h-2.5 mr-4 bg-purple-500 rounded-full"
                        aria-hidden="true"
                      ></span>
                      <span className="truncate">FAQs</span>
                    </Link>
                    <Link
                      to="/send-newletter"
                      className={`${
                        pathname === "/send-newsletter"
                          ? "bg-gray-200"
                          : "hover:text-gray-900 hover:bg-gray-50"
                      } group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-700 rounded-md `}
                    >
                      <span
                        className="w-2.5 h-2.5 mr-4 bg-gray-500 rounded-full"
                        aria-hidden="true"
                      ></span>
                      <span className="truncate">Send Newsletter</span>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* <!-- Dummy element to force sidebar to shrink to fit close icon --> */}
          </div>
        </div>
      </div>

      {/* <!-- Static sidebar for desktop --> */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64 border-r border-gray-200 pt-5 pb-4 bg-gray-100">
          <div className="flex items-center flex-shrink-0 px-6">
            <img
              className="h-8 w-auto"
              src={logo}
              //   src="https://tailwindui.com/img/logos/workflow-logo-red-500-mark-gray-700-text.svg"
              alt="Workflow"
            />
            <span className={"ml-2 font-bold text-2xl text-red-600"}>
              Administrator
            </span>
          </div>
          {/* <!-- Sidebar component, swap this element with another sidebar if you like --> */}
          <div className="h-0 flex-1 flex flex-col overflow-y-auto">
            {/* <!-- User account dropdown --> */}
            <div
              ref={wrapperContainer}
              className="px-3 mt-6 relative inline-block text-left"
            >
              {/* <!-- Dropdown menu toggle, controlling the show/hide state of dropdown menu. --> */}
              <div>
                <button
                  onClick={() => {
                    setShowDropdown(!showDropdown);
                  }}
                  type="button"
                  className="group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-red-500"
                  id="options-menu"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  <span className="flex w-full justify-between items-center">
                    <span className="flex min-w-0 items-center justify-between space-x-3">
                      <img
                        className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
                        // src={userPng}
                        src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                        alt=""
                      />
                      <span className="flex-1 min-w-0 flex flex-col justify-start">
                        <span className="text-gray-900 text-sm font-medium truncate">
                          Domey Benjamin
                        </span>
                        <span className="text-gray-500 text-sm truncate">
                          domeybenjamin1@gmail.com
                        </span>
                      </span>
                    </span>
                    {/* <!-- Heroicon name: solid selector --> */}
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <Transition
                show={showDropdown}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <div
                  className="z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div className="py-1">
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      View profile
                    </a>
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Update Profile
                    </a>
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Update Password
                    </a>
                  </div>
                  <div className="py-1">
                    <span className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                      Logout
                    </span>
                  </div>
                </div>
              </Transition>
            </div>
            {/* <!-- Sidebar Search --> */}
            <div className="px-3 mt-5">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div
                  className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                  aria-hidden="true"
                >
                  {/* <!-- Heroicon name: solid/search --> */}
                  <svg
                    className="mr-3 h-4 w-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="focus:ring-red-500 focus:border-red-500 block w-full pl-9 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Search"
                />
              </div>
            </div>
            {/* <!-- Navigation --> */}
            <nav className="px-3 mt-6">
              <div className="space-y-1">
                <Link
                  to="/"
                  className={`${
                    pathname === "/"
                      ? "bg-gray-200"
                      : "hover:text-gray-900 hover:bg-gray-50"
                  } text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                >
                  <svg
                    className="text-gray-500 mr-3 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Overview
                </Link>

                <Link
                  to="/members"
                  className={`${
                    pathname === "/members"
                      ? "bg-gray-200"
                      : "hover:text-gray-900 hover:bg-gray-50"
                  } text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                >
                  <svg
                    className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Members
                </Link>

                <Link
                  to="/jobs"
                  className={`${
                    pathname === "/jobs"
                      ? "bg-gray-200"
                      : "hover:text-gray-900 hover:bg-gray-50"
                  } text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                >
                  <svg
                    className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Jobs
                </Link>
              </div>
              <div className="mt-8">
                <h3
                  className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
                  id="teams-headline"
                >
                  Configurations
                </h3>
                <div
                  className="mt-1 space-y-1"
                  role="group"
                  aria-labelledby="teams-headline"
                >
                  <Link
                    to="/countries"
                    className={`${
                      pathname === "/countries"
                        ? "bg-gray-200"
                        : "hover:text-gray-900 hover:bg-gray-50"
                    } group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md `}
                  >
                    <span
                      className="w-2.5 h-2.5 mr-4 bg-red-500 rounded-full"
                      aria-hidden="true"
                    ></span>
                    <span className="truncate">Countries</span>
                  </Link>

                  <Link
                    to="/legal-areas"
                    className={`${
                      pathname === "/legal-areas"
                        ? "bg-gray-200"
                        : "hover:text-gray-900 hover:bg-gray-50"
                    } group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md `}
                  >
                    <span
                      className="w-2.5 h-2.5 mr-4 bg-green-500 rounded-full"
                      aria-hidden="true"
                    ></span>
                    <span className="truncate">Legal Areas</span>
                  </Link>
                  <Link
                    to="/tags"
                    className={`${
                      pathname === "/tags"
                        ? "bg-gray-200"
                        : "hover:text-gray-900 hover:bg-gray-50"
                    } group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md `}
                  >
                    <span
                      className="w-2.5 h-2.5 mr-4 bg-yellow-500 rounded-full"
                      aria-hidden="true"
                    ></span>
                    <span className="truncate">Tags</span>
                  </Link>
                  <Link
                    to="/blog-posts"
                    className={`${
                      pathname === "/blog-posts"
                        ? "bg-gray-200"
                        : "hover:text-gray-900 hover:bg-gray-50"
                    } group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md `}
                  >
                    <span
                      className="w-2.5 h-2.5 mr-4 bg-blue-500 rounded-full"
                      aria-hidden="true"
                    ></span>
                    <span className="truncate">Blog Posts</span>
                  </Link>

                  <Link
                    to="/faqs"
                    className={`${
                      pathname === "/faqs"
                        ? "bg-gray-200"
                        : "hover:text-gray-900 hover:bg-gray-50"
                    } group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md `}
                  >
                    <span
                      className="w-2.5 h-2.5 mr-4 bg-purple-500 rounded-full"
                      aria-hidden="true"
                    ></span>
                    <span className="truncate">FAQs</span>
                  </Link>
                  <Link
                    to="/send-newsletter"
                    className={`${
                      pathname === "/send-newsletter"
                        ? "bg-gray-200"
                        : "hover:text-gray-900 hover:bg-gray-50"
                    } group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md `}
                  >
                    <span
                      className="w-2.5 h-2.5 mr-4 bg-gray-500 rounded-full"
                      aria-hidden="true"
                    ></span>
                    <span className="truncate">Send Newsletter</span>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SideNav;
