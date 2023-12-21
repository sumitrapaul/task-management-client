import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Dashboard from "../Layout/Dashboard";
import TaskCreate from "../Pages/Dashboard/TaskCreate/TaskCreate";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/register',
          element:<Register/>
        }
      ],
    },
    {
      path:'/dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'createTask',
          element:<TaskCreate></TaskCreate>
        },
      ]
      }
  ]);

  export default router