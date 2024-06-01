import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from './../pages/Login/Login';
import Resister from "../pages/Resister/Resister";
import AllFood from "../pages/Allfood/AllFood";
import Gallery from "../pages/Gallery/Gallery";
import AddItem from "../pages/AddItem/AddItem";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage> ,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/kali",
                element: <Resister></Resister>
            },
            {
                path: "/allfood",
                element:<AllFood></AllFood>
            },
            {
                path:"/gallery",
                element:<Gallery></Gallery>
            },
            {
                path: "/additem",
                element: <AddItem></AddItem>
            }
        ],
    },
]);

export default router;