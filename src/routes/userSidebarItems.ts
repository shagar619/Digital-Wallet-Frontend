import { lazy } from "react";
import type { ISidebarItem } from "@/types/sidebar.type";
import { 
     LayoutDashboard, User, History, 
     Wallet, ArrowDownLeft, Send 
} from "lucide-react";

// Lazy load components
const Overview = lazy(() => import("@/Pages/Dashboard/Users/Overview"));
const MyProfile = lazy(() => import("@/Pages/Dashboard/User/MyProfile"));
const AllTrans = lazy(() => import("@/Pages/Dashboard/Users/AllTrans"));
const AllWallet = lazy(() => import("@/Pages/Dashboard/Wallet/AllWallet"));
const WithdrawAdd = lazy(() => import("@/Pages/Dashboard/Users/WithdrawAdd"));
const TransferMoney = lazy(() => import("@/Pages/Dashboard/Users/TransferMoney"));

export const userSidebarItems: ISidebarItem[] = [
{
     title: "Dashboard",
     items: [
     {
          title: "Overview",
          url: "/user/dashboard/quick-actions",
          component: Overview,
          icon: LayoutDashboard,
     },
     {
          title: "My Profile",
          url: "/user/dashboard/my-profile",
          component: MyProfile,
          icon: User,
     },
],
},
{
     title: "Activity",
     items: [
     {
          title: "Transactions",
          url: "/user/dashboard/your-trans",
          component: AllTrans,
          icon: History,
     },
],
},
{
     title: "Payments",
     items: [
     {
          title: "My Wallet",
          url: "/user/dashboard/my-wallet",
          component: AllWallet,
          icon: Wallet,
     },
     {
          title: "Withdraw",
          url: "/user/dashboard/wallet/withdraw",
          component: WithdrawAdd,
          icon: ArrowDownLeft,
     },
     {
          title: "Send Money",
          url: "/user/dashboard/wallet/transfer",
          component: TransferMoney,
          icon: Send,
     },
],
},
];