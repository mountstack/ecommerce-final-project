import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import DashboardUsers from "../pages/dashboard/DashboardUsers";
import DashboardProducts from "../pages/dashboard/DashboardProducts";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import DashBoardPage from "../pages/dashboard/DashboardPage";

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
    element: <DashBoardPage />,
    children: [
      {
        path: "/dashboard/users",
        element: <DashboardUsers />,
      },
      {
        path: "/dashboard/products",
        element: <DashboardProducts />,
      },
    ],
  },
]);
