// /* eslint-disable @typescript-eslint/no-explicit-any */
// import * as React from "react";
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarRail,
// } from "@/components/ui/sidebar";
// import { Link, useLocation } from "react-router";
// import { getSidebarItems } from "@/utils/getSidebarItems";
// import logo from "../../../public/logo.png";
// import { FiChevronDown, FiBell, FiList } from "react-icons/fi";
// import { ModeToggle } from "@/layout/ModeToggler";
// import { Button } from "@/components/ui/button";
// import { LogOutIcon } from "lucide-react";
// import { useDispatch } from "react-redux";
// import { toast } from "react-toastify";
// import { handleApiError } from "@/utils/handleApiError";
// import type { TRole } from "@/types/auth.type";
// import { getIcon } from "@/utils/getIcon";
// import { useGetMyProfileQuery } from "@/redux/api/userApi";
// import { authApi, useLogoutMutation } from "@/redux/api/authApi";

// export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

//   const { data: userData } = useGetMyProfileQuery(undefined);
//   const location = useLocation();

//   const [expandedGroups, setExpandedGroups] = React.useState<
//     Record<string, boolean>
//   >({});

//   const role = userData?.data?.role;
//   const data = {
//     navMain: getSidebarItems(role as TRole),
//   };
//   const [logout] = useLogoutMutation();
//   const dispatch = useDispatch();

//   const handleLogout = async () => {
//     try {
//       await logout(undefined).unwrap();
//       dispatch(authApi.util.resetApiState());
//       toast.success("Logout successfully!");
//     } catch (err) {
//       console.error("Failed to logout:", err);
//       handleApiError(err);
//     }
//   };

//   const toggleGroup = (title: string) => {
//     setExpandedGroups((prev) => ({
//       ...prev,
//       [title]: !prev[title],
//     }));
//   };

//   return (
//     <Sidebar
//       {...props}
//       className="transition-all duration-300 w-64 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 border-r border-gray-200 dark:border-gray-800"
//     >
//       {/* Header */}
//       <SidebarHeader className="items-center p-4 border-b border-gray-200 dark:border-gray-800">
//         <div className="flex items-center justify-between w-full">
//           <Link to="/" className="flex items-center space-x-2">
//             <img
//               src={logo}
//               alt="WalletApp Logo"
//               className="h-10 w-10 rounded-full object-cover"
//             />
//             <span className="text-xl font-bold text-gray-900 dark:text-white">
//               Digital Wallet
//             </span>
//           </Link>
//         </div>
//       </SidebarHeader>

//       {/* User info */}
//       <div className="p-4 border-b border-gray-200 dark:border-gray-800">
//         <div className="flex items-center space-x-3">
//           <div className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center text-white font-bold text-lg">
//             {userData?.data?.name?.charAt(0) || "U"}
//           </div>
//           <div className="flex-1 min-w-0">
//             <p className="font-medium truncate">
//               {userData?.data?.name || "User"}
//             </p>
//             <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
//               {userData?.data?.role || "Member"}
//             </p>
//           </div>
//           <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
//             <FiBell className="text-gray-600 dark:text-gray-300" />
//             Here
//           </button>
//         </div>
//       </div>

//       {/* Navigation */}
//       <SidebarContent className="custom-scrollbar">
//         {data.navMain.map((group) => (
//           <SidebarGroup key={group.title} className="border-none">
//             <SidebarGroupLabel
//               className="flex items-center justify-between px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer"
//               onClick={() => toggleGroup(group.title)}
//             >
//               <span>{group.title}</span>
//               <FiChevronDown
//                 className={`transform transition-transform ${
//                   expandedGroups[group.title] ? "rotate-0" : "-rotate-90"
//                 }`}
//               />
//             </SidebarGroupLabel>

//             <SidebarGroupContent
//               className={expandedGroups[group.title] ? "" : "hidden"}
//             >
//               <SidebarMenu>
//                 {group.items.map((item: any) => (
//                   <SidebarMenuItem key={item.title}>
//                     <SidebarMenuButton
//                       size="default"
//                       asChild
//                       className={`mx-2 my-1 rounded-md transition-all duration-200 ${
//                         location.pathname === item.url
//                           ? "bg-pink-600 text-white shadow-sm"
//                           : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
//                       }`}
//                     >
//                       <Link
//                         to={item.url}
//                         className="flex items-center px-4 py-3"
//                       >
//                         <span className="mr-3 text-lg">
//                           {(() => {
//                             const IconComponent = getIcon(item.icon);
//                             return IconComponent ? (
//                               <IconComponent />
//                             ) : (
//                               <FiList />
//                             );
//                           })()}
//                         </span>
//                         <span>{item.title}</span>
//                       </Link>
//                     </SidebarMenuButton>
//                   </SidebarMenuItem>
//                 ))}
//               </SidebarMenu>
//             </SidebarGroupContent>
//           </SidebarGroup>
//         ))}
//       </SidebarContent>

//       {/* Footer */}
//       <div className="mt-auto p-4 flex items-center justify-between border-t  border-gray-200 dark:border-gray-800">
//         <Button
//           onClick={handleLogout}
//           className="cursor-pointer text-red-500 hover:text-red-400 focus:text-red-300 dark:text-red-400 dark:hover:text-red-300"
//           variant="ghost"
//         >
//           <LogOutIcon size={16} className="mr-2" />
//           Logout
//         </Button>
//         <ModeToggle />
//       </div>

//       <SidebarRail />

//       <style>
//         {`
//           .custom-scrollbar::-webkit-scrollbar {
//             width: 4px;
//           }
//           .custom-scrollbar::-webkit-scrollbar-track {
//             background: transparent;
//           }
//           .custom-scrollbar::-webkit-scrollbar-thumb {
//             background: #cbd5e1;
//             border-radius: 10px;
//           }
//           .dark .custom-scrollbar::-webkit-scrollbar-thumb {
//             background: #475569;
//           }
//         `}
//       </style>
//     </Sidebar>
//   );
// }













import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useLocation } from "react-router-dom"; // Use react-router-dom
import { useGetMyProfileQuery } from "@/redux/api/userApi";
import { authApi, useLogoutMutation } from "@/redux/api/authApi";
import { useDispatch } from "react-redux";
import { toast } from "sonner"; // Use sonner for better looking toasts
import { getSidebarItems } from "@/utils/getSidebarItems";
import type { TRole } from "@/types/auth.type";
import { 
  ChevronsUpDown, LogOut, Settings, 
  BadgeCheck, Bell, Sparkles, Wallet 
} from "lucide-react";
import logo from "./../../assets/digi-wallet.png";



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const { data: userData } = useGetMyProfileQuery(undefined);
  const user = userData?.data;
  
  const location = useLocation();
  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();

  // Get dynamic menu based on role
  const navMain = getSidebarItems(user?.role as TRole);

  const handleLogout = async () => {
    try {
      await logout(undefined).unwrap();
      dispatch(authApi.util.resetApiState());
      toast.success("Logged out successfully");
    } catch (err) {
      console.error("Logout failed", err);
      toast.error("Failed to logout");
    }
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      {/* HEADER: LOGO */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/">
                <div >
                  {/* <Wallet className="size-4 text-white" /> */}
                  <img src={logo} alt="Gigi Wallet Logo" className="w-8 h-8 rounded-full" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold text-green-500">DIGI WALLET</span>
                  <span className="truncate text-xs">Fintech Dashboard</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* BODY: NAVIGATION */}
      <SidebarContent>
        {navMain.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const isActive = location.pathname === item.url;
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild 
                        tooltip={item.title} 
                        isActive={isActive}
                        className={isActive ? "text-emerald-600 font-medium bg-emerald-50 dark:bg-emerald-950/30" : ""}
                      >
                        <Link to={item.url}>
                          {item.icon && <item.icon />}
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      {/* FOOTER: USER DROPDOWN */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={user?.profilePhoto} alt={user?.name} />
                    <AvatarFallback className="rounded-lg bg-emerald-100 text-emerald-700 font-bold">
                      {user?.name?.slice(0, 2)?.toUpperCase() || "CN"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">{user?.name}</span>
                    <span className="truncate text-xs">{user?.email}</span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="bottom"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={user?.profilePhoto} alt={user?.name} />
                      <AvatarFallback className="rounded-lg bg-emerald-100 text-emerald-700">
                        {user?.name?.slice(0, 2)?.toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">{user?.name}</span>
                      <span className="truncate text-xs">{user?.email}</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Upgrade to Pro
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <BadgeCheck className="mr-2 h-4 w-4" />
                    Account
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Bell className="mr-2 h-4 w-4" />
                    Notifications
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-red-500 focus:text-red-500">
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}