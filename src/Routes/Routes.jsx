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
import AllTasks from "../Pages/AllTasks/AllTasks";
import Update from "../Pages/Dashboard/Profile/Update";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "../Pages/Dashboard/UserProfile/UserProfile";
import Profile from "../Pages/Dashboard/Profile/Profile";

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
        element: (
          <PrivateRoute>
            <AllTasks />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "tasks",
        element: <Profile></Profile>,
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "createTask",
        element: <TaskCreate></TaskCreate>,
      },
      {
        path: "updateTask/:id",
        element: <Update></Update>,
        loader: ({ params }) => `http://localhost:5000/tasks/${params.id}`,
      },
    ],
  },
]);

export default router;
