import App from "@/App";
import Login from "@/Pages/Auth/Login";
import Signup from "@/Pages/Auth/Signup";
import About from "@/Pages/Website/About/About";
import Contact from "@/Pages/Website/Contact/Contact";
import Faq from "@/Pages/Website/Faq/Faq";
import Feature from "@/Pages/Website/Feature/Feature";
import Home from "@/Pages/Website/Home/Home.tsx";
import Pricing from "@/Pages/Website/Pricing/Pricing";
import Unauthorized from "@/Pages/MYComponent/Unauthorized";
import ErrorPage from "@/Pages/MYComponent/ErrorPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    errorElement: <ErrorPage />, // 👈 This catches route errors

    // PUBLIC ROUTES
    children: [
      {
        Component: Home,
        path: "/",
      },
      {
        Component: About,
        path: "about",
      },
      {
        Component: Feature,
        path: "feature",
      },
      {
        Component: Pricing,
        path: "pricing",
      },
      {
        Component: Faq,
        path: "faq",
      },
      {
        Component: Contact,
        path: "contact",
      },
      {
        Component: Login,
        path: "login",
      },
      {
        Component: Signup,
        path: "signup",
      },
    ],
  },

  // {
  //   Component: withAuth(DashboardLayout, role.admin as TRole),
  //   path: "/admin/dashboard",
  //   children: [
  //     {
  //       index: true,
  //       element: <Navigate to="/admin/dashboard/quick-actions" />,
  //     },
  //     ...generateRoutes(adminSidebarItems),
  //   ],
  // },

  // {
  //   Component: withAuth(DashboardLayout, role.agent as TRole),
  //   path: "/agent/dashboard",
  //   children: [
  //     {
  //       index: true,
  //       element: <Navigate to="/agent/dashboard/quick-actions" />,
  //     },
  //     ...generateRoutes(agentSidebarItems),
  //   ],
  // },

  // {
  //   Component: withAuth(DashboardLayout, role.user as TRole),
  //   path: "/user/dashboard",
  //   children: [
  //     { index: true, element: <Navigate to="/user/dashboard/quick-actions" /> },
  //     ...generateRoutes(userSidebarItems),
  //   ],
  // },

  {
    Component: Unauthorized,
    path: "/unauthorized",
  },
]);
