import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "../Root/Root";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Home from "../Component/Home/Home";
import PrivateRoute from "../Component/Private/PrivateRoutes";
import Error from "../Component/Error/Error";
import Profile from "../Pages/ProfileSection/Profile";
import AddTask from "../Pages/AddTask/AddTask";
import BrowseTask from "../Pages/BrowseTask/BrowseTask";
import PostedTasks from "../Pages/PostedTasks/PostedTasks";
import TaskDetails from "../Pages/AddTask/TaskDetails";
import TaskTable from "../Pages/AddTask/TaskTable";
import UpdateTask from "../Pages/AddTask/UpdateTask";
import BrowseFilter from "../Pages/BrowseTask/BrowseFilter";
import FAQ from "../Component/FAQ/FAQ";
import DashBoard from "../Pages/DashBoard/DashBoard";
import { Component } from "react";
import Overview from "../Pages/DashBoard/Overview";
import AboutUs from "../Pages/About/AboutUs";
import ContactUs from "../Pages/Contact/ContactUs";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error />,

    children: [
      {
        index: true,
        path: "/login",
        Component: Login,
      },
      {
        index: true,
        path: "/register",
        Component: Register,
      },
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        index: true,
        path: "browse tasks",
        Component: BrowseTask,
      },
      {
        index: true,
        path: "/faq",
        Component: FAQ,
      },
      {
        index: true,
        path: 'aboutus',
        Component: AboutUs
      },
      {
        index: true,
        path: 'contactus',
        Component: ContactUs
      },
      {
        Component: PrivateRoute,
        children: [
          {
            index: true,
            path: "addtask",
            Component: AddTask
          },
          {
            index: true,
            path: "/addtask/:id",
            Component: TaskDetails,
          },
          {
            index: true,
            path: "/browsetask/:category",
            Component: BrowseFilter,
          },
         
        ],
      },
    ],
  },
  {
    path: "/dashboard",
    Component: PrivateRoute, // this renders the Outlet
    children: [
      {
        path: "",
        Component: DashBoard, // this layout will render its own <Outlet />
        children: [
          {
            index: true,
            Component: Overview,
          },
          {
            index: true,
            path: "profile",
            Component: Profile,
          },
          {
            index: true,
            path: "add-task",
            Component: AddTask,
          },
          {
            path: "mypost/:username",
            Component: PostedTasks,
          },
          {
            index: true,
            path: "updatetask/:id",
            Component: UpdateTask,
          },
        ],
      },
    ],
  },
]);
