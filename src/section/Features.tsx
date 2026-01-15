import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, ShieldCheck, Globe2, Wallet, 
  ArrowUpRight, CreditCard, Zap, PieChart,
  RefreshCcw, Layers
} from 'lucide-react';

// --- DATA FOR TABBED SECTION ---
const featuresTabs = [
  {
    id: 'overview',
    label: 'Overview',
    icon: <Layers size={18} />,
    title: "All your assets. One dashboard.",
    desc: "Stop switching between apps. See your bank accounts, stocks, and crypto side-by-side in real-time.",
    visual: (
      <div className="relative w-full h-full p-6 flex flex-col gap-4">
        {/* Fake UI Rows */}
        {[1, 2, 3].map((i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 border border-slate-700/50"
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${i === 1 ? 'bg-blue-500/20 text-blue-400' : i === 2 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-purple-500/20 text-purple-400'}`}>
                {i === 1 ? <Wallet size={18} /> : i === 2 ? <ArrowUpRight size={18} /> : <Zap size={18} />}
            </div>
            <div>
            <div className="h-2 w-24 bg-slate-600 rounded-full mb-1" />
            <div className="h-1.5 w-12 bg-slate-700 rounded-full" />
            </div>
            </div>
            <div className="h-4 w-16 bg-slate-600 rounded-full" />
          </motion.div>
        ))}
        {/* Floating Total */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-6 right-6 bg-emerald-500 text-white px-4 py-2 rounded-lg shadow-lg shadow-emerald-500/20 font-bold"
        >
          +$2,450.00
        </motion.div>
      </div>
    )
  },
  {
    id: 'crypto',
    label: 'Crypto',
    icon: <Zap size={18} />,
    title: "Web3 native support.",
    desc: "Connect your MetaMask or Phantom wallet to track DeFi positions alongside your traditional savings.",
    visual: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10" />
        {/* Floating Coins */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, delay: i, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute w-16 h-16 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-md shadow-2xl ${i===0 ? 'bg-orange-500/20 top-10 left-10' : i===1 ? 'bg-blue-500/20 bottom-12 right-12' : 'bg-slate-700/50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'}`}
          >
            <span className="font-bold text-white text-xs">{i===0 ? "BTC" : i===1 ? "ETH" : "SOL"}</span>
          </motion.div>
        ))}
      </div>
    )
  },
  {
    id: 'cards',
    label: 'Cards',
    icon: <CreditCard size={18} />,
    title: "Intelligent Virtual Cards.",
    desc: "Create single-use cards for subscriptions. Set spending limits and freeze them instantly.",
    visual: (
      <div className="relative w-full h-full flex items-center justify-center perspective-1000">
        <motion.div 
          animate={{ rotateY: [0, 180, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-64 h-40 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-emerald-500/30 shadow-2xl relative preserve-3d"
        >
          <div className="absolute inset-0 flex flex-col justify-between p-5 backface-hidden">
          <div className="flex justify-between items-start">
            <div className="w-8 h-8 rounded bg-emerald-500/20" />
              <CreditCard className="text-emerald-400" />
            </div>
          <div className="text-slate-400 font-mono tracking-widest text-sm">**** 4421</div>
          </div>
        </motion.div>
      </div>
    )
  }
];

const Features = () => {
  const [activeTab, setActiveTab] = useState(featuresTabs[0]);

  return (
    <div className="bg-slate-950 py-24 relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-emerald-400 text-sm font-medium mb-6"
          >
            <Zap size={14} className="fill-emerald-400" /> Power Features
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Built for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">financially obsessed.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-slate-400"
          >
            Gigi Wallet isn't just a tracker. It's a command center for your entire financial life, engineered with speed and precision.
          </motion.p>
        </div>

        {/* --- SECTION 1: INTERACTIVE TABS SHOWCASE --- */}
        <div className="grid lg:grid-cols-12 gap-12 mb-32 items-center">
           {/* Left: Tab Buttons */}
          <div className="lg:col-span-5 space-y-4">
              {featuresTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border group ${
                    activeTab.id === tab.id 
                    ? 'bg-slate-800 border-emerald-500/50 shadow-lg shadow-emerald-900/10' 
                    : 'bg-transparent border-transparent hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className={`p-2 rounded-lg transition-colors ${activeTab.id === tab.id ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-400 group-hover:text-emerald-400'}`}>
                      {tab.icon}
                    </div>
                    <h3 className={`text-xl font-bold ${activeTab.id === tab.id ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>
                      {tab.label}
                    </h3>
                  </div>
                  <p className={`text-sm pl-[52px] ${activeTab.id === tab.id ? 'text-slate-300' : 'text-slate-500'}`}>
                    {tab.title}
                  </p>
                </button>
              ))}
        </div>

        {/* Right: Changing Visual */}
        <div className="lg:col-span-7">
              <div className="relative h-[400px] bg-slate-900 rounded-3xl border border-slate-700 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-slate-950/50" />
                <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab.id}
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 1.05, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 p-8"
                    >
                    <div className="h-full w-full bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden relative">
                          <div className="absolute top-0 left-0 right-0 h-10 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500/20" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                          <div className="w-3 h-3 rounded-full bg-green-500/20" />
                          </div>
                          <div className="pt-12 px-6 pb-6 h-full">
                            <h4 className="text-xl font-bold text-white mb-2">{activeTab.title}</h4>
                            <p className="text-slate-400 text-sm mb-6">{activeTab.desc}</p>
                            <div className="relative h-[200px] w-full bg-slate-900/50 rounded-xl border border-slate-800 overflow-hidden">
                              {activeTab.visual}
                            </div>
                          </div>
                      </div>
                    </motion.div>
                </AnimatePresence>
              </div>
          </div>
        </div>

        {/* --- SECTION 2: BENTO GRID --- */}
        <div className="grid md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* Card 1: Large Span - Spending Graph */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-slate-900 rounded-3xl p-8 border border-slate-800 relative overflow-hidden group hover:border-slate-700 transition-colors"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -mr-16 -mt-16 transition-all group-hover:bg-emerald-500/20" />
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500"><BarChart3 size={24} /></div>
                  <h3 className="text-xl font-bold text-white">Deep Analytics</h3>
                </div>
                <p className="text-slate-400 max-w-sm mb-8">We categorize your transactions automatically. See exactly where every cent goes with interactive breakdowns.</p>
                
                {/* Animated Graph Visual */}
                <div className="flex items-end gap-3 h-32 w-full">
                  {[40, 75, 50, 95, 60, 85, 100, 70, 45].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: "10%" }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ delay: i * 0.05, duration: 1, type: "spring" }}
                        className="flex-1 bg-slate-800 rounded-t-md hover:bg-emerald-500 transition-colors cursor-pointer"
                      />
                  ))}
                </div>
            </div>
          </motion.div>

          {/* Card 2: Security Radar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-3xl p-8 border border-slate-800 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500"><ShieldCheck size={24} /></div>
                  <h3 className="text-xl font-bold text-white">Active Defense</h3>
                </div>
                <p className="text-slate-400 text-sm">24/7 fraud monitoring scans your account for suspicious activity.</p>
            </div>
             {/* Radar Animation */}
            <div className="absolute bottom-0 right-0 w-48 h-48 translate-x-12 translate-y-12">
                <div className="relative w-full h-full">
                <div className="absolute inset-0 rounded-full border border-slate-700" />
                <div className="absolute inset-4 rounded-full border border-slate-700/50" />
                <div className="absolute inset-8 rounded-full border border-slate-700/30" />
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent to-blue-500/20 rounded-full" 
                    style={{ clipPath: "polygon(50% 50%, 100% 0, 100% 50%)" }}
                  />
                </div>
            </div>
          </motion.div>

          {/* Card 3: Global Transfers */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-3xl p-8 border border-slate-800 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500"><Globe2 size={24} /></div>
              <h3 className="text-xl font-bold text-white">Borderless</h3>
            </div>
            <p className="text-slate-400 text-sm mb-6">Send money to 140+ countries instantly with zero hidden fees.</p>
            <div className="flex justify-between items-center text-sm font-bold text-white bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span>🇺🇸 USD</span>
                <RefreshCcw className="w-4 h-4 text-slate-500" />
                <span>🇪🇺 EUR</span>
            </div>
          </motion.div>

          {/* Card 4: Smart Budgeting (Large Span) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-8 border border-slate-800 flex flex-col md:flex-row items-center gap-8"
          >
            <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500"><PieChart size={24} /></div>
                  <h3 className="text-xl font-bold text-white">Smart Budgets</h3>
                </div>
                <p className="text-slate-400">Set monthly limits for specific categories like Dining or Shopping. We'll notify you before you overspend.</p>
                <button className="text-emerald-400 font-bold hover:text-emerald-300 transition-colors flex items-center gap-2">
                  Set a budget <ArrowUpRight size={16} />
                </button>
            </div>
             {/* Interactive Slider Visual */}
            <div className="w-full md:w-1/2 bg-slate-950 p-5 rounded-2xl border border-slate-800">
                <div className="flex justify-between text-sm mb-2 text-slate-400">
                  <span>Dining Out</span>
                  <span className="text-white">$450 / $500</span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden mb-6">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-orange-500 rounded-full"
                  />
                </div>
                <div className="flex gap-2">
                <div className="flex-1 h-2 bg-slate-800 rounded-full" />
                <div className="flex-1 h-2 bg-slate-800 rounded-full" />
                <div className="flex-1 h-2 bg-emerald-500/20 rounded-full border border-emerald-500/50" />
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;