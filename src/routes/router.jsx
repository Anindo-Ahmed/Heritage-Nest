import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Buy from "../pages/Buy/Buy";
import About from "../pages/About/About";
import CardDetails from "../pages/CardDetails/CardDetails";
import ErrorPages from "../pages/errorPages";
import Signin from "../components/Signin";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPages/>,
      children: [
        {
            path: '/home',
            element: <Home/>
        },
        {
            path: '/buy',
            element: <Buy/>
        },
        {
            path: '/buy/:id',
            element: <CardDetails/>
        },
        {
            path: '/about',
            element: <About/>
        },
        {
            path: '/signin',
            element: <Signin/>
        }
      ]
    },
  ]);

export default router;