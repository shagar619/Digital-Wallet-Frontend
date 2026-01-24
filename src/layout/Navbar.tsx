// import { Link, useLocation } from "react-router-dom";
// import {
//   UserIcon,
//   MenuIcon,
//   LogOutIcon,
//   AlignStartVertical,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuList,
// } from "@/components/ui/navigation-menu";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Skeleton } from "@/components/ui/skeleton";
// import { useDispatch } from "react-redux";
// import { handleApiError } from "@/utils/handleApiError";
// import { toast } from "react-toastify";
// import { getDashboardPath } from "@/utils/getDashboardPath";
// import { ModeToggle } from "./ModeToggler";
// import { motion } from "framer-motion";
// import { authApi, useLogoutUserMutation } from "@/redux/features/auth/auth.api";
// import { useGetMyProfileQuery } from "@/redux/features/user/user.api";


// const navigationLinks = [
//   { href: "/", label: "Home",  },
//   { href: "/about", label: "About",},
//   { href: "/feature", label: "Feature" },
//   { href: "/pricing", label: "Pricing" },
//   { href: "/faq", label: "FAQ" },
//   { href: "/contact", label: "Contact" },
// ];

// export default function Navbar() {

//   const { data: profileData, isLoading } = useGetMyProfileQuery(undefined);
//   // console.log(profileData)

//   const [logout] = useLogoutUserMutation();
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const userData = profileData?.data;

//   const isAuthenticated = !!userData;

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

//   return (
//     <motion.header
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       className="fixed top-0 left-0 w-full border-b border-border bg-background/95 backdrop-blur-sm text-foreground z-50 px-4 md:px-6"
//     >
//       <div className="flex h-16 items-center justify-between gap-4 max-w-7xl mx-auto">
//         {/* Left: Logo */}
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="flex items-center gap-2"
//         >
//           <Link
//             to="/"
//             className="text-xl font-bold flex items-center gap-2 relative group"
//             style={{ color: "var(--primary)" }}
//           >
//             {/* Text with gradient animation */}
//             <motion.span
//               className="hidden sm:inline-block bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
//               initial={{ opacity: 0, x: -10 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2 }}
//             >
//               DIGI WALLET
//             </motion.span>


//           </Link>
//         </motion.div>

//         {/* Middle: Navigation */}
//         <NavigationMenu className="hidden md:flex">
//           <NavigationMenuList className="gap-6">
//             {navigationLinks.map((link, index) => {
//               const isActive = location.pathname === link.href;

//               return (
//                 <NavigationMenuItem key={index}>
//                   <Link
//                     to={link.href}
//                     className={`relative px-2 py-1 font-medium transition-colors
//               ${
//                 isActive
//                   ? "text-primary after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-primary"
//                   : "text-muted-foreground hover:text-foreground hover:after:absolute hover:after:left-0 hover:after:-bottom-1 hover:h-[2px] hover:w-full hover:after:bg-muted-foreground"
//               }`}
//                   >
//                     {link.label}
//                   </Link>
//                 </NavigationMenuItem>
//               );
//             })}
//           </NavigationMenuList>
//         </NavigationMenu>

//         {/* Right: Auth Section */}
//         <div className="flex items-center gap-2">
//           {isLoading ? (
//             <div className="flex items-center gap-4">
//               <Skeleton className="h-8 w-20 rounded-md bg-muted" />
//               <Skeleton className="h-8 w-20 rounded-md bg-muted" />
//             </div>
//           ) : !isAuthenticated ? (
//             <>
//               <Link to="/login">
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Button variant="ghost" className="text-foreground ">
//                     Login
//                   </Button>
//                 </motion.div>
//               </Link>
//               <Link to="/signup">
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
//                     Sign Up
//                   </Button>
//                 </motion.div>
//               </Link>
//               <ModeToggle />
//             </>
//           ) : (
//             <>
//               <DropdownMenu>
//                 <DropdownMenuTrigger className="outline-none">
//                   <motion.div whileHover={{ scale: 1.05 }}>
//                     <Avatar className="border border-border cursor-pointer hover:border-primary transition-colors">
//                       <AvatarImage
//                         src={
//                           userData.profilePic ||
//                           "https://via.placeholder.com/40"
//                         }
//                         alt={userData.name}
//                       />
//                       <AvatarFallback className="bg-muted">
//                         <UserIcon className="text-muted-foreground" size={18} />
//                       </AvatarFallback>
//                     </Avatar>
//                   </motion.div>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent
//                   align="end"
//                   className="bg-card text-card-foreground border-border w-56"
//                 >
//                   <DropdownMenuLabel className="flex flex-col p-4">
//                     <span className="font-semibold">{userData.name}</span>
//                     <span className="text-sm text-muted-foreground font-normal">
//                       {userData.email}
//                     </span>
//                   </DropdownMenuLabel>
//                   <DropdownMenuSeparator className="bg-border" />
//                   {userData && (
//                     <>
//                       <DropdownMenuItem
//                         asChild
//                         className="cursor-pointer focus:bg-secondary focus:text-foreground"
//                       >
//                         <Link
//                           to={getDashboardPath(userData.role)}
//                           className="flex items-center gap-2"
//                         >
//                           <AlignStartVertical size={16} />
//                           Dashboard
//                         </Link>
//                       </DropdownMenuItem>
//                     </>
//                   )}

//                   <DropdownMenuItem
//                     asChild
//                     className="cursor-pointer focus:bg-secondary focus:text-foreground"
//                   >
                
//                   </DropdownMenuItem>
//                   <DropdownMenuSeparator className="bg-border" />
//                   <DropdownMenuItem
//                     onClick={handleLogout}
//                     className="cursor-pointer text-destructive focus:bg-secondary focus:text-destructive"
//                   >
//                     <LogOutIcon size={16} className="mr-2" />
//                     Logout
//                   </DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//               <ModeToggle />
//             </>
//           )}
//         </div>
//         {/* Mobile Menu (Hamburger) */}
//         <div className="md:hidden z-20">
//           <Popover>
//             <PopoverTrigger asChild>
//               <motion.div whileTap={{ scale: 0.95 }}>
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   className="text-foreground hover:text-primary hover:bg-transparent"
//                 >
//                   <MenuIcon size={20} />
//                 </Button>
//               </motion.div>
//             </PopoverTrigger>
//             <PopoverContent
//               align="end"
//               className="w-56 bg-card p-3 rounded-lg border-border"
//             >
//               <div className="flex flex-col gap-2">
//                 {navigationLinks.map((link, index) => {
//                   const isActive = location.pathname === link.href;

//                   return (
//                     <Link
//                       key={index}
//                       to={link.href}
//                       className={`relative px-2 py-1 font-medium transition-colors hover:bg-transparent
//                 ${
//                   isActive
//                     ? "text-primary after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-primary"
//                     : "text-muted-foreground hover:text-foreground hover:after:absolute hover:after:left-0 hover:after:-bottom-1 hover:h-[2px] hover:w-full hover:after:bg-muted-foreground"
//                 }`}
//                     >
//                       {link.label}
//                     </Link>
//                   );
//                 })}
//               </div>
//             </PopoverContent>
//           </Popover>
//         </div>
//       </div>
//     </motion.header>
//   );
// }


















import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../assets/digi-wallet.png";
import { Menu, X, Sun, Moon, User, LogOut, Settings, ChevronDown } from 'lucide-react';

// --- CONFIGURATION ---
const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/feature", label: "Feature" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true); // Default to dark mode theme
  
  // SIMULATED AUTH STATE
  // Change this to true/false to see the different states
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const location = useLocation();

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Theme Toggle
  const toggleTheme = () => {
    setIsDark(!isDark);
    // In a real app, you would toggle a class on the document body here
    // document.documentElement.classList.toggle('dark');
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-slate-950/80 backdrop-blur-xl border-slate-800 py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* --- 1. LOGO (Left) --- */}
        <Link to="/" className="flex items-center gap-2 group">
          <div >
            {/* <Wallet size={20} /> */}
            <img className='h-12 w-12 rounded-full' src={logo} alt="" />
          </div>
          <span className="hidden font-bold text-xl text-white tracking-tight">
            Gigi Wallet
          </span>
        </Link>

        {/* --- 2. NAVIGATION LINKS (Center - Desktop) --- */}
        <div className="hidden lg:flex items-center gap-1 bg-slate-900/50 p-1.5 rounded-full border border-slate-800/50 backdrop-blur-md">
          {navigationLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link 
                key={link.label} 
                to={link.href}
                className="relative px-5 py-2 text-sm font-medium rounded-full transition-colors"
              >
                {isActive && (
                  <motion.div 
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-slate-800 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={`relative z-10 ${isActive ? 'text-emerald-400' : 'text-slate-400 hover:text-white'}`}>
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* --- 3. ACTIONS (Right) --- */}
        <div className="hidden lg:flex items-center gap-4">
          
          {/* Theme Toggler */}
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 flex items-center justify-center transition-all"
            aria-label="Toggle Theme"
          >
            <motion.div
              initial={false}
              animate={{ rotate: isDark ? 0 : 180 }}
            >
              {isDark ? <Moon size={18} /> : <Sun size={18} />}
            </motion.div>
          </button>

          {isLoggedIn ? (
            /* LOGGED IN STATE: USER DROPDOWN */
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-3 pl-2 pr-4 py-1.5 bg-slate-900 border border-slate-800 rounded-full hover:border-slate-700 transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 flex items-center justify-center text-white font-bold text-xs">
                  JD
                </div>
                <div className="text-left hidden xl:block">
                  <p className="text-xs font-bold text-white leading-none mb-0.5">John Doe</p>
                  <p className="text-[10px] text-slate-400 leading-none">User</p>
                </div>
                <ChevronDown size={14} className={`text-slate-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full right-0 mt-2 w-64 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden p-2"
                  >
                    <div className="p-3 border-b border-slate-800 mb-2">
                      <p className="text-white font-bold">John Doe</p>
                      <p className="text-slate-400 text-xs">john.doe@example.com</p>
                    </div>
                    
                    <Link to="/profile" className="flex items-center gap-3 px-3 py-2 text-slate-300 hover:bg-slate-800 rounded-lg text-sm transition-colors">
                      <User size={16} /> Profile
                    </Link>
                    <Link to="/settings" className="flex items-center gap-3 px-3 py-2 text-slate-300 hover:bg-slate-800 rounded-lg text-sm transition-colors">
                      <Settings size={16} /> Settings
                    </Link>
                    
                    <div className="h-px bg-slate-800 my-2" />
                    
                    <button 
                      onClick={() => setIsLoggedIn(false)} 
                      className="w-full flex items-center gap-3 px-3 py-2 text-red-400 hover:bg-red-500/10 rounded-lg text-sm transition-colors"
                    >
                      <LogOut size={16} /> Sign Out
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            /* LOGGED OUT STATE: AUTH BUTTONS */
            <div className="flex items-center gap-3">
              <Link to="/login" className="text-sm font-bold text-slate-300 hover:text-white transition-colors">
                Log In
              </Link>
              <Link to="/signup" className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-emerald-500/20 transition-all hover:scale-105">
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* --- MOBILE TOGGLE --- */}
        <div className="lg:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="text-slate-400">
            {isDark ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2 bg-slate-900 rounded-lg border border-slate-800"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-950 border-b border-slate-800 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6">
              <div className="flex flex-col space-y-2">
                {navigationLinks.map((link) => (
                  <Link 
                    key={link.label}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-medium py-2 ${
                      location.pathname === link.href ? 'text-emerald-400' : 'text-slate-400'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="h-px bg-slate-800" />

              {isLoggedIn ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 flex items-center justify-center text-white font-bold">
                      JD
                    </div>
                    <div>
                      <p className="text-white font-bold">John Doe</p>
                      <p className="text-slate-400 text-sm">john.doe@example.com</p>
                    </div>
                  </div>
                  <button className="w-full py-3 border border-slate-700 rounded-xl text-slate-300 flex items-center justify-center gap-2">
                    <LogOut size={16} /> Log Out
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  <Link to="/login" className="py-3 text-center rounded-xl border border-slate-700 text-slate-300 font-bold" onClick={() => setIsMobileMenuOpen(false)}>
                    Log In
                  </Link>
                  <Link to="/signup" className="py-3 text-center rounded-xl bg-emerald-500 text-white font-bold" onClick={() => setIsMobileMenuOpen(false)}>
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;