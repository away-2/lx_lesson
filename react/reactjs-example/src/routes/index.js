import Signin from "../pages/welcome/signin";
import Home from "../pages/home/Home";
// import { Navigate } from "react-router-dom";
const routes = [
    { 
        path: '/signin',
        element: <Signin />
    },
    {
        path: '/home',
        element: <Home />
    },
]

export default routes;