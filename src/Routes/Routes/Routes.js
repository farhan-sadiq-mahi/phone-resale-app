import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Layout/Dashboard";
import Main from "../../Layout/Main";
import AllBuyers from "../../Pages/AdminDashboard.js/AllBuyers";
import AllSellers from "../../Pages/AdminDashboard.js/AllSellers";
import ReportedItems from "../../Pages/AdminDashboard.js/ReportedItems";
import AllCategories from "../../Pages/AllCategories/AllCategories";
import Blog from "../../Pages/Blog/Blog";
import MyOrders from "../../Pages/BuyersDashboard.js/MyOrders";
import CategoryItems from "../../Pages/CategoryItems/CategoryItems";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import HomePage from "../../Pages/HomePage/HomePage";
import Login from "../../Pages/Login";
import Payment from "../../Pages/Payment/Payment";
import AddProduct from "../../Pages/SellerDashboard/AddProduct";
import MyProducts from "../../Pages/SellerDashboard/MyProducts";
import SignUp from "../../Pages/SignUp";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
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
            },
            {
                path: '/blog',
                element: <Blog />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivetRoute><Dashboard /></PrivetRoute>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/dashboard/addproduct',
                element: <AddProduct />
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts />
            },
            {
                path: '/dashboard/allsellers',
                element: <AllSellers />
            },
            {
                path: '/dashboard/allbuyers',
                element: <AllBuyers />
            },
            {
                path: '/dashboard/reporteditems',
                element: <ReportedItems />
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders />
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment />
            },
        ]
    }
])

export default routes;