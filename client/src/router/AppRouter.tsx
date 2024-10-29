import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "@/layouts/DefaultLayout";
import LogIn from "@/components/auth/LogIn";
import SignUp from "@/components/auth/SignUp";
import ForgetPassword from "@/components/auth/ForgetPassword";
import OTP from "@/components/auth/OTP";
import PrivateRoute from "@/layouts/PrivateRoute";
import Profile from "@/pages/Profile";
import PublicRoute from "@/layouts/PublicRoute";
import Home from "@/pages/Home";
import Panier from "@/pages/panier";
import Menu from "@/pages/Menu"

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        element: <PrivateRoute />,
        children: [

          {
            path: "/profile",
            element: <Profile />,
          },
        ],
      },
      {
        element: <PublicRoute />,
        children: [
          {
            path: "/login",
            element: <LogIn />,
          },
          {
            path: "/signup",
            element: <SignUp />,
          },
          {
            path: "/forgetpassword",
            element: <ForgetPassword />,
          },
          {
            path: "/otp",
            element: <OTP />,
          },
        ],
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/card",
        element: <Panier/>,
      },
      {
        path: "/menu/:restaurantId",
        element: <Menu/>
      }
      
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default AppRouter;
