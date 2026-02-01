// import TransferMoney from "@/Pages/Dashboard/PaymentCashout/TransferMoney";
// import WithdrawAdd from "@/Pages/Dashboard/PaymentCashout/WithdrawAdd";
// import AllTrans from "@/Pages/Dashboard/Transaction/AllTrans";
// import MyProfile from "@/Pages/Dashboard/User/MyProfile";
// import AllWallet from "@/Pages/Dashboard/Wallet/AllWallet";
// import type { ISidebarItem } from "@/types/sidebar.type";
// import { lazy } from "react";



// const Overview = lazy(() => import("@/Pages/Dashboard/Overview/Overview"));

// export const userSidebarItems: ISidebarItem[] = [
// {
//      title: "Dashboard",
//      items: [
//      {
//           title: "Quick Actions",
//           url: "/user/dashboard/quick-actions",
//           component: Overview,
//           icon: "FiBell",
//      },
//      {
//           title: "My Profile",
//           url: "/user/dashboard/my-profile",
//           component: MyProfile,
//           icon: "FiUser",
//      },
// ],
// },
// {
//      title: "Transactions",
//      items: [
//      {
//           title: "Your Transaction History",
//           url: "/user/dashboard/your-trans",
//           component: AllTrans,
//           icon: "FiList",
//      },
// ],
// },
// {
//      title: "Wallet",
//      items: [
//      {
//           title: "Your Wallet",
//           url: "/user/dashboard/my-wallet",
//           component: AllWallet,
//           icon: "FiDollarSign",
//      },
//      {
//           title: "Withdraw Money",
//           url: "/user/dashboard/wallet/withdraw",
//           component: WithdrawAdd,
//           icon: "FiArrowDown",
//      },
//      {
//           title: "Transfer Money",
//           url: "/user/dashboard/wallet/transfer",
//           component: TransferMoney,
//           icon: "FiSend",
//      },
// ],
// },
// ];;














import { lazy } from "react";
import type { ISidebarItem } from "@/types/sidebar.type";
import { 
     LayoutDashboard, User, History, 
     Wallet, ArrowDownLeft, Send 
} from "lucide-react";

// Lazy load components
const Overview = lazy(() => import("@/Pages/Dashboard/Overview/Overview"));
const MyProfile = lazy(() => import("@/Pages/Dashboard/User/MyProfile"));
const AllTrans = lazy(() => import("@/Pages/Dashboard/Transaction/AllTrans"));
const AllWallet = lazy(() => import("@/Pages/Dashboard/Wallet/AllWallet"));
const WithdrawAdd = lazy(() => import("@/Pages/Dashboard/PaymentCashout/WithdrawAdd"));
const TransferMoney = lazy(() => import("@/Pages/Dashboard/PaymentCashout/TransferMoney"));

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