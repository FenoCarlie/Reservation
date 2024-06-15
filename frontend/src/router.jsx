import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import AdminLayout from "./layouts/AdminLayout";
import GuestLayout from "./layouts/GuestLayout";
import NotFundPage from "./pages/NotFundPage";

// Defining routes with their respective layouts
const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />, // Default layout
  },
  {
    path: "/admin",
    element: <AdminLayout />, // Layout for admins
    children: [],
  },
  {
    path: "/guest",
    element: <GuestLayout />, // Layout for guests
    children: [],
  },
  {
    path: "*",
    element: <NotFundPage />, // Page for undefined routes
  },
]);

export default router;
