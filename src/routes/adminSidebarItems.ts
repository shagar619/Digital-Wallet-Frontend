import { lazy } from "react";
import type { ISidebarItem } from "@/types/sidebar.type";
import { 
  LayoutDashboard, User, Users, UserCheck, 
  FileText, DollarSign, Wallet 
} from "lucide-react";
import MyProfile from "@/Pages/Dashboard/User/MyProfile";
import AllUsers from "@/Pages/Dashboard/Admin/AllUsers";
import AllAgents from "@/Pages/Dashboard/Admin/AllAgents";

// Lazy load components
const Overview = lazy(() => import("@/Pages/Dashboard/Overview/Overview"));
// ... import others

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
        title: "Transactions",
        url: "/admin/dashboard/all-trans",
        component: Overview, 
        icon: FileText,
      },
      {
        title: "Commission",
        url: "/admin/dashboard/all-agent-com",
        component: Overview,
        icon: DollarSign,
      },
      {
        title: "Wallet List",
        url: "/admin/dashboard/all-wallet",
        component: Overview,
        icon: Wallet,
      },
    ],
  },
];