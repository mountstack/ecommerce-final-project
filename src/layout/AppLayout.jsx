import { router } from "../routes/Routes";
import { RouterProvider } from "react-router-dom";

const AppLayout = () => {
  return <RouterProvider router={router} />;
};

export default AppLayout;
