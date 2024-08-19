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
import Purchase from "../pages/purchase/Purchase";
import UpdateFood from "../pages/myfoodItem/UpdateFood";
import PrivateRoute from './../private/PrivateRoute';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element:  <Login></Login>,
            },
            {
                path: "/kali",
                element: <Resister></Resister>
            },
            {
                path: "/allfoodItem",
                element: <PrivateRoute> <AllFood></AllFood></PrivateRoute> ,
                loader: () => fetch('http://localhost:5000/allfood')
            },
            {
                path: "/gallery",
                element: <PrivateRoute><Gallery></Gallery></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/allgalleryfood'),
            },
            {
                path: "/additem",
                element: <PrivateRoute><AddItem></AddItem></PrivateRoute>
            },
            {
                path: "/myordered",
                element: <PrivateRoute><Myorder></Myorder></PrivateRoute>
            },
            {
                path: "/myfooditem",
                element: <PrivateRoute><MyfoodItem></MyfoodItem></PrivateRoute>
            },
            {
                path: "/singlefoodpage/:id",
                element: <PrivateRoute><SingleFoodPage></SingleFoodPage></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/singlefoodpage/${params.id}`),
            },
            {
                path: "/purchase/:id",
                element: <PrivateRoute><Purchase></Purchase></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/singlefoodpage/${params.id}`),
            },
            {
                path:"/updatefood/:id",
                element: <PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/singlefoodpage/${params.id}`),
            }
        ],
    },
]);

export default router;