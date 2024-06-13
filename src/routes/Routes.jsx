import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import DashboardUsers from "../pages/dashboard/DashboardUsers";
import DashboardProducts from "../pages/dashboard/DashboardProducts";
import DashBoardPage from "../pages/dashboard/DashboardPage";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardProfile from "../pages/dashboard/DashboardProfile";
import EmptyPage from "../pages/dashboard/EmptyPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <DashBoardPage />,
      },
      {
        path: "/dashboard/profile",
        element: <DashboardProfile />,
      },

      {
        path: "/dashboard/users",
        element: <DashboardUsers />,
      },
      {
        path: "/dashboard/products",
        element: <DashboardProducts />,
      },
      {
        path: "/dashboard/empty",
        element: <EmptyPage />,
      },
    ],
  },
]);
