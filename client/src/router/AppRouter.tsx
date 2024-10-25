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
import DashboardLayout from "@/layouts/DashboardLayout";
import HomePage from "@/pages/dashboard/HomePage";
import OrdersPage from "@/pages/dashboard/OrdersPage";

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
            path: "/",
            element: <Home />,
          },
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
    ],

  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '/dashboard/home',
        element: <HomePage />
      },
      {
        path: '/dashboard/orders',
        element: <OrdersPage />
      }
    ]
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default AppRouter;
