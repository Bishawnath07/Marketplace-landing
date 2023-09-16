import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import SingUp from "../Pages/SingUp/SingUp";
import ClientSingUp from "../Pages/SingUp/ClientSingUp";

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
]);
