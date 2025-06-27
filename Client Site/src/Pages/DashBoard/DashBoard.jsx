import React, { use } from "react";
import { Link, Outlet, useNavigation } from "react-router";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const DashBoard = () => {

    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";
    const {user} = use(AuthContext)
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        {/* Top Navbar for Mobile */}
        <div className="navbar bg-base-300 w-full lg:hidden">
          <div className="flex-none">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2">Dashboard</div>
        </div>

        {/* 🔥 Here child routes render */}
        <div className="p-4 min-h-screen">
          {isLoading ? (
            <div className="text-center mt-10">
              <span className="loading loading-dots loading-lg text-primary"></span>
            </div>
          ) : (
            <Outlet />
          )}
        </div>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content */}
          <li>
            <Link to="/dashboard">Overview</Link>
          </li>
          <li>
            <Link to="/dashboard/add-task">Add a Task</Link>
          </li>
          <li>
            <Link to={`/dashboard/mypost/${user.displayName}`}>My Posted Tasks</Link>
          </li>
          <li>
            <Link to="/dashboard/profile">My Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
