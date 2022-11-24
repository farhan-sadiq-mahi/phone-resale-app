import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import HomePage from "../../Pages/HomePage/HomePage";
import Login from "../../Pages/Login";
import SignUp from "../../Pages/SignUp";

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
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
])

export default routes;