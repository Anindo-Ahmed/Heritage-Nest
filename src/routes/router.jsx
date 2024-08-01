import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Buy from "../pages/Buy/Buy";
import About from "../pages/About/About";

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
        },
        {
            path: '/about',
            element: <About/>
        }
      ]
    },
  ]);

export default router;