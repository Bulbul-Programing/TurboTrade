import { createBrowserRouter, } from "react-router-dom";
import Home from "./Components/Home/Home";
import AddProduct from "./Components/AddProduct/AddProduct";
import Rote from "./Components/Rote/Rote";
import CartItem from "./Components/CartItem/CartItem";
import CategoryDetail from "./Components/CategoryDetail/CategoryDetail";
import CarDetails from "./Components/CarDetails/CarDetails";
import CarUpdate from "./Components/CarUpdate/CarUpdate";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import PrivetRoute from "./Components/PrivetRoute/PrivetRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Rote></Rote>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addProduct',
                element: <PrivetRoute><AddProduct></AddProduct></PrivetRoute> 
            },
            {
                path: '/myCart',
                element:<PrivetRoute><CartItem></CartItem></PrivetRoute> ,
                loader: () => fetch('https://a-ten-backend.vercel.app/cartItem')
            },
            {
                path: '/category/:category',
                element:<PrivetRoute><CategoryDetail></CategoryDetail></PrivetRoute> 
            },
            {
                path: '/details/:id',
                element:<PrivetRoute><CarDetails></CarDetails></PrivetRoute> 
            },
            {
                path: '/update/:id',
                element:<PrivetRoute><CarUpdate></CarUpdate></PrivetRoute> ,
                loader: ({params}) => fetch(`https://a-ten-backend.vercel.app/details/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
]);

export default router