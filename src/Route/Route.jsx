import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from './../pages/Login/Login';
import Resister from "../pages/Resister/Resister";
import AllFood from "../pages/Allfood/AllFood";
import Gallery from "../pages/Gallery/Gallery";
import AddItem from "../pages/AddItem/AddItem";
import Myorder from "../pages/myorderPage/Myorder";
import MyfoodItem from "../pages/myfoodItem/MyfoodItem";
import SingleFoodPage from "../pages/singleFoodPage/SingleFoodPage";


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
                path: "/allfoodItem",
                element:<AllFood></AllFood>,
                loader: ()=> fetch('http://localhost:5000/allfood')
            },
            {
                path:"/gallery",
                element:<Gallery></Gallery>
            },
            {
                path: "/additem",
                element: <AddItem></AddItem>
            },
            {
                path: "/myordered",
                element: <Myorder></Myorder>
            },
            {
                path: "/myfooditem",
                element: <MyfoodItem></MyfoodItem>
            },
            {
                path: "/singlefoodpage/:id",
                element: <SingleFoodPage></SingleFoodPage>,
                loader: ({params})=> fetch(`http://localhost:5000/singlefoodpage/${params.id}`),
            }
        ],
    },
]);

export default router;