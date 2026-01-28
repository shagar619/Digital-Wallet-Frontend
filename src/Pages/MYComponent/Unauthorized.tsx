import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { ArrowLeft, ShieldAlert, Lock, LogIn } from "lucide-react";


const Unauthorized = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans selection:bg-red-500/30">
      
      {/* --- BACKGROUND FX (Red Tinted) --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      {/* Red glow for warning atmosphere */}
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-red-600/5 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-rose-600/5 blur-[120px] rounded-full animate-pulse delay-1000" />
      {/* Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl w-full text-center relative z-10"
      >
        
        {/* --- ANIMATION: SECURITY LOCK --- */}
        <div className="mb-8 relative flex justify-center">
          {/* Backlight */}
          <div className="absolute inset-0 bg-gradient-to-t from-red-500/10 to-transparent blur-3xl rounded-full opacity-50" />
          
          <div className="relative z-10 bg-slate-900/50 border border-slate-800 rounded-full p-8 shadow-2xl shadow-red-900/20 backdrop-blur-sm">
            <Player
              autoplay
              loop
              src="https://lottie.host/5b5e5c5d-5c6d-4c3e-8a7f-7a3d3c6a9c3d/6XwUqg2XpW.json" // Shield/Lock Animation
              style={{ height: '180px', width: '180px' }}
            />
            {/* Floating "Access Denied" Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-red-500/40 whitespace-nowrap border border-red-400"
            >
              Access Denied
            </motion.div>
          </div>
        </div>

        {/* --- CONTENT --- */}
        <div className="space-y-6 mb-12">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Restricted Area
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              You do not have the required clearance level (403) to access this financial resource.
            </p>
          </div>

          <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-xl text-sm text-red-200 flex items-start gap-3 text-left">
            <ShieldAlert className="shrink-0 text-red-500" size={20} />
            <span>
              <span className="font-bold text-red-400">Security Protocol:</span> This attempt has been logged. If you believe this is an error, please contact your administrator.
            </span>
          </div>
        </div>

        {/* --- ACTIONS --- */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 hover:text-white font-medium rounded-xl transition-all hover:border-slate-600"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Go Back
          </Link>
          
          <Link 
            to="/login"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] hover:scale-105"
          >
            <LogIn size={18} />
            Switch Account
          </Link>
        </div>

      </motion.div>

      {/* --- FOOTER CODE --- */}
      <div className="absolute bottom-8 flex items-center gap-4 text-xs font-mono text-slate-600 uppercase tracking-widest opacity-60">
        <span>ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
        <span>•</span>
        <span className="flex items-center gap-1.5">
          <Lock size={10} /> Encrypted
        </span>
      </div>
    </div>
  );
};

export default Unauthorized;