// import AllCommission from "@/Pages/Dashboard/Commission/AllCommission";
// import WithdrawAdd from "@/Pages/Dashboard/PaymentCashout/WithdrawAdd";
// import MyProfile from "@/Pages/Dashboard/User/MyProfile";
// import AllWallet from "@/Pages/Dashboard/Wallet/AllWallet";
// import type { ISidebarItem } from "@/types/sidebar.type";
// import { lazy } from "react";





// const Overview = lazy(
//      () => import("@/Pages/Dashboard/Overview/Overview")
// );

// export const agentSidebarItems: ISidebarItem[] = [
// {
//      title: "Dashboard",
//      items: [
//      {
//           title: "Quick Actions",
//           url: "/agent/dashboard/quick-actions",
//           component: Overview,
//           icon: "FiBell",
//      },
//      {
//           title: "My Profile",
//           url: "/agent/dashboard/my-profile",
//           component: MyProfile,
//           icon: "FiUser",
//      },
// ],
// },
// {
//      title: "Commission",
//      items: [
//      {
//           title: "All Commission",
//           url: "/agent/dashboard/agent-com",
//           component: AllCommission,
//           icon: "FiDollarSign",
//      },
// ],
// },
// {
//      title: "Wallet",
//      items: [
//      {
//           title: "Your Wallet",
//           url: "/agent/dashboard/my-wallet",
//           component: AllWallet,
//           icon: "FiCreditCard",
//      },
//      {
//           title: "Add Money",
//           url: "/agent/dashboard/wallet/add",
//           component: WithdrawAdd,
//           icon: "FiPlusCircle",
//      },
// ],
// },
// ];












import { lazy } from "react";
import type { ISidebarItem } from "@/types/sidebar.type";
import { 
     LayoutDashboard, User, DollarSign, 
     Wallet, PlusCircle 
} from "lucide-react";

// Lazy load components
const Overview = lazy(() => import("@/Pages/Dashboard/Agent/AgentOverview"));
const MyProfile = lazy(() => import("@/Pages/Dashboard/User/MyProfile"));
const AllCommission = lazy(() => import("@/Pages/Dashboard/Agent/AllCommission"));
const AllWallet = lazy(() => import("@/Pages/Dashboard/Wallet/AllWallet"));
const CashIn = lazy(() => import("@/Pages/Dashboard/Agent/CashIn"));

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
     title: "Finance",
     items: [
     {
          title: "My Wallet",
          url: "/agent/dashboard/my-wallet",
          component: AllWallet,
          icon: Wallet,
     },
     {
          title: "Cash In",
          url: "/agent/dashboard/wallet/add",
          component: CashIn,
          icon: PlusCircle,
     },
],
},
];