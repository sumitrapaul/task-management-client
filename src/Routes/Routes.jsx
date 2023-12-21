import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Dashboard from "../Layout/Dashboard";
import TaskCreate from "../Pages/Dashboard/TaskCreate/TaskCreate";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Profile from "../Pages/Dashboard/Profile/profile";
import AllTasks from "../Pages/AllTasks/AllTasks";
import Update from "../Pages/Dashboard/Profile/Update";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/tasks",
        element: <AllTasks />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>,
      },
      {
        path: "createTask",
        element: <TaskCreate></TaskCreate>,
      },
      {
        path: "updateTask/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          `http://localhost:5000/tasks/${params.id}`,
      },
    ],
  },
]);

export default router;
