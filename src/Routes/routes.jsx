import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import SingUp from "../Pages/SingUp/SingUp";
import ClientSingUp from "../Pages/SingUp/ClientSingUp";
import FreelancherDashboard from "../Layouts/FreelancherDashboard";
import FreelancherHome from "../Pages/f-home/FreelancherHome";
import Login from "../Pages/login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/signup",
    element: <SingUp></SingUp>,
  },
  {
    path: "/client-sing-up",
    element: <ClientSingUp></ClientSingUp>,
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path:'/freelancherhome',
    element:<FreelancherDashboard></FreelancherDashboard>,
    children:[
      {
        path:'/freelancherhome',
        element:<FreelancherHome></FreelancherHome>
      }
    ]
  }
]);
