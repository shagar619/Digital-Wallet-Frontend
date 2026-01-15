import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, TrendingUp, CreditCard } from 'lucide-react';



const Hero = () => {

     return (
     <div className="relative w-full min-h-screen bg-slate-950 overflow-hidden flex items-center justify-center font-sans">
     {/* --- BACKGROUND ANIMATION --- */}
     {/* These are glowing blobs moving in the background to create an 'Aurora' effect */}
     <div className="absolute inset-0 w-full h-full">
     <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-emerald-500/20 rounded-full blur-[128px] animate-pulse" />
     <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] animate-pulse delay-1000" />
     </div>

     {/* Grid Pattern Overlay for texture */}
     <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

     <div className="relative container mx-auto px-6 md:px-12 z-10 grid lg:grid-cols-2 gap-12 items-center">
     {/* --- LEFT SIDE: CONTENT --- */}
     <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
     >
     {/* Badge */}
     <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-2 backdrop-blur-md"
     >
          <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-sm text-slate-300 font-medium">v2.0 is now live</span>
     </motion.div>

     {/* Headline */}
     <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
          Master your money with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Gigi Wallet</span>
     </h1>

     {/* Subtext */}
     <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
          The next-generation financial operating system. Track expenses, invest smartly, and achieve financial freedom—all from one beautiful dashboard.
     </p>

     {/* Buttons */}
     <div className="flex flex-col sm:flex-row gap-4">
          <motion.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
          >
          Get Started Free <ArrowRight className="w-5 h-5" />
          </motion.button>
          <motion.button 
               whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
               whileTap={{ scale: 0.95 }}
               className="px-8 py-4 bg-slate-800 text-slate-200 font-semibold rounded-xl border border-slate-700 hover:border-slate-600 flex items-center justify-center gap-2 transition-all"
          >
               View Demo
          </motion.button>
     </div>

     {/* Trust Indicators */}
     <div className="pt-8 border-t border-slate-800 flex items-center gap-6 text-slate-500 text-sm">
          <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-500" /> Bank-grade Security
          </div>
          <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-blue-500" /> Real-time Analytics
          </div>
          </div>
     </motion.div>

     {/* --- RIGHT SIDE: VISUALS (Floating Cards) --- */}
     <div className="relative h-[500px] w-full flex items-center justify-center perspective-1000">
          
          {/* Main Glass Card (Dashboard Preview) */}
          <motion.div
               initial={{ opacity: 0, rotateY: 15, rotateX: 5, scale: 0.9 }}
               animate={{ opacity: 1, rotateY: 0, rotateX: 0, scale: 1 }}
               transition={{ duration: 1, delay: 0.2 }}
               className="relative w-full max-w-md bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 shadow-2xl z-20"
          >
          {/* Fake UI Header */}
     <div className="flex justify-between items-center mb-6">
     <div className="space-y-1">
     <div className="h-2 w-20 bg-slate-600/50 rounded-full" />
     <div className="h-2 w-12 bg-slate-600/50 rounded-full" />
     </div>
     <div className="h-10 w-10 rounded-full bg-slate-700/50" />
     </div>

     {/* Total Balance */}
     <div className="mb-8">
          <p className="text-slate-400 text-sm mb-1">Total Balance</p>
          <h3 className="text-4xl font-bold text-white">$24,562.00</h3>
          <span className="inline-flex items-center gap-1 text-emerald-400 text-sm mt-2 bg-emerald-400/10 px-2 py-1 rounded-md">
               +12.5% <TrendingUp className="w-3 h-3" />
          </span>
     </div>

     {/* Fake Graph */}
     <div className="flex items-end gap-2 h-32 w-full pb-4">
          {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
          <motion.div 
               key={i}
               initial={{ height: 0 }}
               animate={{ height: `${h}%` }}
               transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
               className="flex-1 bg-gradient-to-t from-emerald-500/20 to-emerald-500 rounded-t-md"
          />
          ))}
     </div>
     </motion.div>

     {/* Floating Credit Card Element */}
     <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-0 md:-right-10 z-30"
     >
     <div className="w-64 h-40 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl shadow-2xl p-5 border border-white/10 flex flex-col justify-between">
     <div className="flex justify-between items-start">
     <div className="text-white/80 font-mono text-sm">Gigi Card</div>
          <CreditCard className="text-white/80 w-6 h-6" />
     </div>
     <div>
     <div className="flex gap-2 mb-2">
     <div className="w-2 h-2 rounded-full bg-white/50" />
     <div className="w-2 h-2 rounded-full bg-white/50" />
     <div className="w-2 h-2 rounded-full bg-white/50" />
     <div className="w-2 h-2 rounded-full bg-white/50" />
     </div>
     <div className="text-white font-mono tracking-widest">**** 4218</div>
     </div>
     </div>
     </motion.div>

     {/* Floating Notification Element */}
     <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 -left-10 z-30 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl flex items-center gap-3"
          >
     <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
          <span className="text-emerald-400 font-bold">$</span>
     </div>
     <div>
          <p className="text-xs text-slate-400">Payment Received</p>
          <p className="text-white font-bold text-sm">+$1,250.00</p>
     </div>
     </motion.div>

     </div>
     </div>
     </div>
);
};

export default Hero;

