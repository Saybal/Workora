import React, { use, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from "sweetalert";

const Navbar = () => {
  const [theme, settheme] = useState(
    localStorage.getItem("Theme") ? localStorage.getItem("Theme") : "acid"
  );
  const { user, SignOutUser } = use(AuthContext);

  const navigate = useNavigate();

  const handleToggle = (e) => {
    if (e.target.checked) {
      settheme("sunset");
    } else {
      settheme("acid");
    }
  };

  useEffect(() => {
    localStorage.setItem("Theme", theme);
    const localtheme = localStorage.getItem("Theme");
    document.querySelector("html").setAttribute("data-theme", localtheme);
  }, [theme]);

  const handleLogOut = () => {
    SignOutUser()
      .then(() => {
        swal({
          text: "You have successfully signed Out",
          icon: "success",
          button: {
            text: "Okay",
            closeModal: true,
          },
        });
        localStorage.setItem("Theme", "acid");
        document.documentElement.setAttribute("data-theme", "acid");
        settheme("acid");
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  };
  const link = (
    <>
      <li>
        <NavLink className="font-semibold text-base-content text-lg" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="font-semibold text-base-content text-lg"
          to="/add task"
        >
          Add Task
        </NavLink>
      </li>
      <li>
        <NavLink className="font-semibold text-base-content text-lg" to="/browse tasks">
          Browse Tasks
        </NavLink>
      </li>
      <li>
        <NavLink className="font-semibold text-base-content text-lg" to={`/mypost/${user?.displayName || ""}`}>
          My Posted Tasks
        </NavLink>
      </li>
      <li>
        <NavLink className="font-semibold text-base-content text-lg" to="/faq">
          FAQ
        </NavLink>
      </li>
      <li className="block lg:hidden md:hidden">
        <NavLink
          className="font-semibold text-base-content text-lg"
          to="/login"
        >
          Login
        </NavLink>
      </li>
      <li className="block lg:hidden md:hidden">
        <NavLink
          className="font-semibold text-base-content text-lg"
          to="/profile"
        >
          Profile
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <a className="flex gap-2 btn btn-ghost text-xl">
          {" "}
          <img
            className="w-33 h-14 md:w-48 md:h-19 lg:w-50 lg:h-18 rounded-full"
            src="https://i.ibb.co/BKs4WFdG/logo.png"
            alt=""
          />{" "}
          
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end flex gap-2">
        {/* Theme Controller */}

        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" onChange={handleToggle} />

          {/* moon icon */}
          <svg
            className="swap-off h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>

          {/* sun icon */}
          <svg
            className="swap-on h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
        </label>

        {/* Other buttons */}
        {user ? (
          <div className="relative group flex items-center gap-4">
            <NavLink
              to="/profile"
              className="btn rounded-full w-10 h-10 bg-cover bg-center bg-no-repeat border border-base-300 shadow"
              style={{
                backgroundImage: `url(${user.photoURL})`,
              }}
            ></NavLink>

            {/* Dropdown */}
            <div
              className="absolute right-0 top-12 w-52 bg-base-100 rounded-lg shadow-lg border border-base-200
                  opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300
                  z-50"
            >
              <ul className="menu menu-sm p-3">
                <li>
                  <span className="text-sm font-semibold truncate">
                    {user.displayName}
                  </span>
                </li>
                <li>
                  <a
                    onClick={handleLogOut}
                    className="text-error hover:bg-error hover:text-white rounded"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          ""
        )}

        {user ? (
          <NavLink
            onClick={handleLogOut}
            className="btn bg-base-100 button hidden md:inline-flex lg:inline-flex"
          >
            Sign Out
          </NavLink>
        ) : (
          // hidden md:inline-flexflex lg:inline-flex
          <NavLink
            to="/login"
            className="btn bg-base-100 button hidden md:inline-flex lg:inline-flex"
          >
            Sign In
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
