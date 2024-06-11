import { router } from "../routes/Routes";
import { RouterProvider } from "react-router-dom";

const Layout = () => {
  return <RouterProvider router={router} />;
};

export default Layout;
