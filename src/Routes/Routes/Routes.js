import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Layout/Dashboard";
import Main from "../../Layout/Main";
import AllCategories from "../../Pages/AllCategories/AllCategories";
import CategoryItems from "../../Pages/CategoryItems/CategoryItems";
import HomePage from "../../Pages/HomePage/HomePage";
import Login from "../../Pages/Login";
import AddProduct from "../../Pages/SellerDashboard/AddProduct";
import MyProducts from "../../Pages/SellerDashboard/MyProducts";
import SignUp from "../../Pages/SignUp";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/allcategories',
                element: <AllCategories />
            },
            {
                path: '/category/:id',
                element: <PrivetRoute><CategoryItems /></PrivetRoute>
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivetRoute><Dashboard /></PrivetRoute>,
        children: [
            {
                path: '/dashboard/addproduct',
                element: <AddProduct />
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts />
            },
        ]
    }
])

export default routes;