import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import HomePage from "../../Pages/HomePage/HomePage";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <HomePage />
            }
        ]
    }
])

export default routes;