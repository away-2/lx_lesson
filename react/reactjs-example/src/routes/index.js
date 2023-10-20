import Signin from "../pages/welcome/signin";
import Home from "../pages/home/Home";
import Layout from "../pages/welcome/layout";
import Two from "../pages/two/Two";
// import { Navigate } from "react-router-dom";
const routes = [
  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "/layout",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "two",
        element: <Two />,
      },
    ],
  },
];

export default routes;
