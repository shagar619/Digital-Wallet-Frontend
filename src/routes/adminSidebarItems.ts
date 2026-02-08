import { lazy } from "react";
import type { ISidebarItem } from "@/types/sidebar.type";
import { 
  LayoutDashboard, User, Users, UserCheck, 
  Wallet 
} from "lucide-react";

// Lazy load components
const Overview = lazy(() => import("@/Pages/Dashboard/Admin/AdminOverview"));
const MyProfile = lazy(() => import("@/Pages/Dashboard/User/MyProfile"));
const AllUsers = lazy(() => import("@/Pages/Dashboard/Admin/AllUsers"));
const AllAgents = lazy(() => import("@/Pages/Dashboard/Admin/AllAgents"));
const AllWallet = lazy(() => import("@/Pages/Dashboard/Admin/AllWallet"));


export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Analytics",
    items: [
      {
        title: "Overview",
        url: "/admin/dashboard/quick-actions",
        component: Overview,
        icon: LayoutDashboard,
      },
      {
        title: "My Profile",
        url: "/admin/dashboard/my-profile",
        component: MyProfile,
        icon: User,
      },
    ],
  },
  {
    title: "Management",
    items: [
      {
        title: "All Users",
        url: "/admin/dashboard/all-users",
        component: AllUsers,
        icon: Users,
      },
      {
        title: "Agents",
        url: "/admin/dashboard/all-agents",
        component: AllAgents,
        icon: UserCheck,
      },
    ],
  },
  {
    title: "Finance",
    items: [
      {
        title: "Wallet List",
        url: "/admin/dashboard/all-wallet",
        component: AllWallet,
        icon: Wallet,
      },
    ],
  },
];