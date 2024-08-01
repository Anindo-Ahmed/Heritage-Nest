import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Buy from "../pages/Buy/Buy";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <errorPages/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/buy',
            element: <Buy/>
        }
      ]
    },
  ]);

export default router;