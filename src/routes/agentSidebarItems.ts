import { lazy } from "react";
import type { ISidebarItem } from "@/types/sidebar.type";
import { 
     LayoutDashboard, User, DollarSign, PlusCircle, 
     History
} from "lucide-react";

// Lazy load components
const Overview = lazy(() => import("@/Pages/Dashboard/Agent/AgentOverview"));
const MyProfile = lazy(() => import("@/Pages/Dashboard/User/MyProfile"));
const AllCommission = lazy(() => import("@/Pages/Dashboard/Agent/AllCommission"));
const CashIn = lazy(() => import("@/Pages/Dashboard/Agent/CashIn"));
const AllTrans = lazy(() => import("@/Pages/Dashboard/Users/AllTrans"));

export const agentSidebarItems: ISidebarItem[] = [
{
     title: "Main",
     items: [
     {
          title: "Overview",
          url: "/agent/dashboard/quick-actions",
          component: Overview,
          icon: LayoutDashboard,
     },
     {
          title: "My Profile",
          url: "/agent/dashboard/my-profile",
          component: MyProfile,
          icon: User,
     },
],
},
{
     title: "Earnings",
     items: [
     {
          title: "Commissions",
          url: "/agent/dashboard/agent-com",
          component: AllCommission,
          icon: DollarSign,
     },
],
},

{
     title: "Activity",
     items: [
     {
          title: "Transactions",
          url: "/agent/dashboard/my-wallet",
          component: AllTrans,
          icon: History,
     },
],
},

{
     title: "Finance",
     items: [
     {
          title: "Cash In",
          url: "/agent/dashboard/wallet/add",
          component: CashIn,
          icon: PlusCircle,
     },
],
},
];