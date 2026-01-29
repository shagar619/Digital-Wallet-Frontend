import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { Home, RefreshCcw, Activity } from "lucide-react";

const ErrorPage = () => {
  const error = useRouteError();

  // Defaults
  let title = "System Malfunction";
  let message = "An anomaly has been detected in the spacetime continuum.";
  let statusCode = 500;
  let errorType = "server"; 

  // Error Logic
  if (isRouteErrorResponse(error)) {
    statusCode = error.status;
    if (error.status === 404) {
      title = "Lost in Space";
      message = "The financial node you are looking for has disconnected from the grid.";
      errorType = "404";
    } else if (error.status === 401) {
      title = "Unauthorized Access";
      message = "Your biometric signature was not recognized. Access denied.";
      errorType = "auth";
    } else if (error.status === 403) {
      title = "Restricted Area";
      message = "You do not have the required clearance level for this asset.";
      errorType = "auth";
    } else if (error.status === 500) {
      title = "Server Critical";
      message = "Our core systems are experiencing heavy load. Rerouting...";
      errorType = "server";
    } else {
      title = error.statusText || title;
      message = error.data || message;
    }
  }

  // Choose Animation based on Error Type
  const getAnimation = () => {
    if (errorType === '404') {
      // Floating Astronaut (Perfect for Dark Mode)
      return "https://lottie.host/9e503348-185d-4952-959c-6b5832714c6d/G3w4b54y3R.json"; 
    } else if (errorType === 'auth') {
      // Security Shield Lock
      return "https://lottie.host/5b5e5c5d-5c6d-4c3e-8a7f-7a3d3c6a9c3d/6XwUqg2XpW.json"; 
    } else {
      // Server Maintenance / Gears
      return "https://lottie.host/8d3c6c7a-4a4e-4a3e-8a7f-7a3d3c6a9c3d/5XwUqg2XpW.json"; 
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans selection:bg-emerald-500/30">
      
      {/* --- BACKGROUND FX --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        {/* Glowing Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-emerald-500/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full animate-pulse delay-1000" />
        {/* Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full text-center relative z-10"
      >
        
        {/* --- ANIMATION CONTAINER --- */}
        <div className="mb-8 relative flex justify-center">
          {/* Glowing Backlight behind animation */}
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent blur-3xl rounded-full opacity-50" />
          
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 20 }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            className="relative z-10 drop-shadow-2xl"
          >
            <Player
              autoplay
              loop
              src={getAnimation()}
              style={{ height: '300px', width: '300px' }}
            />
          </motion.div>
        </div>

        {/* --- ERROR DETAILS --- */}
        <div className="space-y-6 mb-12">
          <div className="flex items-center justify-center gap-3">
          <div className={`h-px w-12 ${errorType === '404' ? 'bg-emerald-500/50' : 'bg-red-500/50'}`} />
          <span className={`font-mono text-sm tracking-widest uppercase ${errorType === '404' ? 'text-emerald-400' : 'text-red-400'}`}>
            Error {statusCode}
          </span>
          <div className={`h-px w-12 ${errorType === '404' ? 'bg-emerald-500/50' : 'bg-red-500/50'}`} />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            {title}
          </h1>
          
          <p className="text-slate-400 text-lg max-w-md mx-auto leading-relaxed">
            {message}
          </p>
        </div>

        {/* --- ACTIONS --- */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:scale-105"
          >
            <Home size={18} className="group-hover:-translate-y-0.5 transition-transform" />
            Return to Base
          </Link>
          
          <button 
            onClick={() => window.location.reload()}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 hover:text-white font-medium rounded-xl transition-all hover:border-slate-600"
          >
            <RefreshCcw size={18} />
            Re-Initialize
          </button>
        </div>

      </motion.div>

      {/* --- FOOTER STATUS --- */}
      <div className="absolute bottom-8 flex items-center gap-2 text-xs font-mono text-slate-600 uppercase tracking-widest">
      <Activity size={12} className="text-emerald-500 animate-pulse" />
      System Status: Critical
      </div>

    </div>
  );
};

export default ErrorPage;