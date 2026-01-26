/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../assets/digi-wallet.png";
import { Menu, X, Sun, Moon, User, LogOut, Settings, ChevronDown, Loader2 } from 'lucide-react';
import { useGetMyProfileQuery } from '@/redux/api/userApi';
import { useLogoutMutation } from '@/redux/api/authApi';
import { toast } from 'sonner';

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

// --- REDUX HOOKS ---
  // 1. Fetch User Profile
  const { data: profileResponse, isLoading, isError } = useGetMyProfileQuery(undefined, {
    pollingInterval: 0, // Optional: Disable polling if not needed
    refetchOnMountOrArgChange: true 
  });

  const user = profileResponse?.data; // Extract user object from response

  // 2. Logout Mutation
  const [logoutUser, { isLoading: isLogoutLoading }] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logoutUser(undefined).unwrap();
      toast.success("Logged out successfully");
      navigate('/login');
    } catch (error: any) {
      toast.error(`Logout failed: ${error?.data?.message || error.message}`);
    }
  };


  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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

          {/* AUTH STATE CHECK */}
          {isLoading ? (
            <Loader2 className="animate-spin text-emerald-500" />
          ) : user && !isError ? (
            /* --- LOGGED IN: USER DROPDOWN --- */
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-3 pl-2 pr-4 py-1.5 bg-slate-900 border border-slate-800 rounded-full hover:border-slate-700 transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 flex items-center justify-center text-white font-bold text-xs uppercase">
                  {user.name.slice(0, 2)}
                </div>
                <div className="text-left hidden xl:block">
                  <p className="text-xs font-bold text-white leading-none mb-0.5">{user.name}</p>
                  <p className="text-[10px] text-slate-400 leading-none capitalize">{user.role}</p>
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
                      <p className="text-white font-bold">{user.name}</p>
                      <p className="text-slate-400 text-xs truncate">{user.email}</p>
                    </div>
                    
                    <Link to="/profile" className="flex items-center gap-3 px-3 py-2 text-slate-300 hover:bg-slate-800 rounded-lg text-sm transition-colors">
                      <User size={16} /> Profile
                    </Link>
                    <Link to="/settings" className="flex items-center gap-3 px-3 py-2 text-slate-300 hover:bg-slate-800 rounded-lg text-sm transition-colors">
                      <Settings size={16} /> Settings
                    </Link>
                    
                    <div className="h-px bg-slate-800 my-2" />
                    
                    <button 
                      onClick={handleLogout}
                      disabled={isLogoutLoading}
                      className="w-full flex items-center gap-3 px-3 py-2 text-red-400 hover:bg-red-500/10 rounded-lg text-sm transition-colors disabled:opacity-50"
                    >
                      {isLogoutLoading ? <Loader2 className="animate-spin" size={16} /> : <LogOut size={16} />} 
                      Sign Out
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            /* --- LOGGED OUT: AUTH BUTTONS --- */
            <div className="flex items-center gap-3">
              {/* <Link to="/login" className="text-sm font-bold text-slate-300 hover:text-white transition-colors">
                Log In
              </Link> */}
              <Link to="/signup" className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold rounded-sm shadow-lg shadow-emerald-500/20 transition-all hover:scale-105">
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* --- MOBILE TOGGLE --- */}
        <div className="lg:hidden flex items-center gap-4">
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

              {/* MOBILE AUTH STATE */}
              {user && !isError ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 flex items-center justify-center text-white font-bold uppercase">
                      {user.name.slice(0, 2)}
                    </div>
                    <div>
                      <p className="text-white font-bold">{user.name}</p>
                      <p className="text-slate-400 text-sm truncate max-w-[200px]">{user.email}</p>
                    </div>
                  </div>
                  <button 
                    onClick={handleLogout}
                    disabled={isLogoutLoading}
                    className="w-full py-3 border border-slate-700 rounded-xl text-slate-300 flex items-center justify-center gap-2"
                  >
                    {isLogoutLoading ? <Loader2 className="animate-spin" /> : <LogOut size={16} />} 
                    Log Out
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  {/* <Link to="/login" className="py-3 text-center rounded-xl border border-slate-700 text-slate-300 font-bold" onClick={() => setIsMobileMenuOpen(false)}>
                    Log In
                  </Link> */}
                  <Link to="/signup" className="py-3 text-center rounded-sm bg-emerald-500 text-white font-bold" onClick={() => setIsMobileMenuOpen(false)}>
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