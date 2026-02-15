import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
     Building2, Wallet, Layers, Globe, CheckCircle2, Link as LinkIcon 
} from 'lucide-react';

// --- DATA CONFIGURATION ---
const categories = [
{
     id: 'banking',
     label: 'Banking & Fiat',
     icon: <Building2 />,
     color: 'emerald',
     stats: '12,000+ Institutions',
     desc: 'Connect your checking, savings, and credit accounts via Plaid and Teller. We support nearly every major bank in North America and Europe.',
     features: ['Real-time Balance Sync', 'Transaction Categorization', 'ACH Payments']
},
{
     id: 'crypto',
     label: 'Web3 & Crypto',
     icon: <Wallet />,
     color: 'blue',
     stats: '25+ Blockchains',
     desc: 'Native support for MetaMask, Phantom, and Ledger. Track your DeFi positions, NFTs, and stake rewards directly from your dashboard.',
     features: ['Multi-chain Support', 'Gas Fee Tracking', 'Cold Storage Watch-only']
},
{
     id: 'saas',
     label: 'Apps & SaaS',
     icon: <Layers />,
     color: 'purple',
     stats: '200+ Integrations',
     desc: 'Sync with your favorite tools. Send invoices via Stripe, export data to QuickBooks, or trigger automations via Zapier.',
     features: ['Accounting Exports', 'Subscription Monitoring', 'Custom Webhooks']
}
];

     const EcosystemSection = () => {
     const [activeTab, setActiveTab] = useState(categories[0].id);
     const activeData = categories.find(c => c.id === activeTab) || categories[0];

     console.log(activeData)

     // Auto-rotate tabs every 6 seconds
     useEffect(() => {
     const timer = setInterval(() => {
     const currentIndex = categories.findIndex(c => c.id === activeTab);
     const nextIndex = (currentIndex + 1) % categories.length;
     setActiveTab(categories[nextIndex].id);
     }, 6000);
     return () => clearInterval(timer);
     }, [activeTab]);


     return (
     <section className="py-32 bg-slate-950 relative overflow-hidden border-t border-slate-900">
     {/* Background Gradients */}
     <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
     <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

     <div className="container mx-auto px-6 relative z-10">

          {/* Header */}
          <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm font-medium mb-6">
          <Globe size={14} className="text-emerald-400" />
          <span>Universal API Compatibility</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Connects with <span className="text-emerald-400">everything.</span>
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
          Gigi Wallet acts as the central hub for your financial life. We've built direct integrations with the tools you already use.
          </p>
     </div>

     <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT COLUMN: Content Selector */}
          <div className="lg:col-span-5 space-y-4">
          {categories.map((cat) => (
          <div 
               key={cat.id}
               onClick={() => setActiveTab(cat.id)}
               className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 group ${
               activeTab === cat.id 
                    ? 'bg-slate-900 border border-slate-700 shadow-xl' 
                    : 'bg-transparent border border-transparent hover:bg-slate-900/50'
               }`}
          >
               {/* Active Progress Bar */}
               {activeTab === cat.id && (
               <motion.div 
                    layoutId="active-ecosystem-bar"
                    className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl ${
                    cat.color === 'emerald' ? 'bg-emerald-500' : 
                    cat.color === 'blue' ? 'bg-blue-500' : 'bg-purple-500'
                    }`}
               />
               )}

          <div className="flex items-start gap-4">
          <div className={`p-3 rounded-xl transition-colors ${
               activeTab === cat.id 
               ? 'bg-slate-800 text-white' 
               : 'bg-slate-900 text-slate-500 group-hover:text-slate-300'
               }`}>
               {React.cloneElement(cat.icon as React.ReactElement, {  })}
          </div>
          <div>
               <h3 className={`text-lg font-bold mb-1 ${activeTab === cat.id ? 'text-white' : 'text-slate-400'}`}>
               {cat.label}
               </h3>
               <p className={`text-sm ${activeTab === cat.id ? 'text-slate-400' : 'text-slate-600'}`}>
               {cat.stats}
               </p>
               <AnimatePresence>
                    {activeTab === cat.id && (
               <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
               >
                         <p className="mt-4 text-sm text-slate-400 leading-relaxed mb-4">
                         {cat.desc}
                         </p>
                         <ul className="space-y-2">
                         {cat.features.map((feat, i) => (
                         <li key={i} className="flex items-center gap-2 text-xs font-medium text-slate-300">
                         <CheckCircle2 size={14} className={`
                              ${cat.color === 'emerald' ? 'text-emerald-500' : 
                              cat.color === 'blue' ? 'text-blue-500' : 'text-purple-500'}
                              `} /> 
                              {feat}
                         </li>
                         ))}
                         </ul>
                    </motion.div>
                    )}
                    </AnimatePresence>
               </div>
               </div>
          </div>
          ))}
          </div>

          {/* RIGHT COLUMN: Interactive Orbit Visual */}
          <div className="lg:col-span-7 relative flex items-center justify-center h-[600px]">
          {/* Center Hub */}
          <div className="relative z-20 w-32 h-32 bg-slate-950 rounded-full border-4 border-slate-800 flex items-center justify-center shadow-2xl">
          <div className="absolute inset-0 bg-slate-900 rounded-full flex items-center justify-center">
          <div className="w-16 h-16 bg-gradient-to-tr from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center text-white shadow-lg">
          <LinkIcon size={32} />
          </div>
          </div>
          {/* Hub Pulsing Rings */}
          <div className="absolute -inset-4 border border-slate-800 rounded-full animate-ping opacity-20" />
          <div className="absolute -inset-12 border border-slate-800/50 rounded-full animate-[spin_10s_linear_infinite]" />
          </div>

          {/* Orbit Rings */}
          {[1, 2, 3].map((ring) => (
          <div 
               key={ring} 
               className="absolute rounded-full border border-slate-800/60"
               style={{ 
                   width: `${ring * 180 + 100}px`, 
                   height: `${ring * 180 + 100}px` 
               }}
          />
          ))}

          {/* Orbiting Planets */}
          {categories.map((cat, index) => {
          // Define static positions for the three main categories on the rings
          const ringSize = (index + 1) * 180 + 100;
          const isActive = activeTab === cat.id;

          return (
               <motion.div
                    key={cat.id}
                    className="absolute rounded-full flex items-center justify-center"
                    style={{ width: ringSize, height: ringSize }}
                    animate={{ rotate: isActive ? 0 : 360 }} // Stop rotation when active to focus
                    transition={{ duration: isActive ? 1 : 40 + (index * 10), ease: isActive ? "circOut" : "linear", repeat: isActive ? 0 : Infinity }}
               >
               {/* The Planet Node */}
               <motion.div 
                    className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 transition-all duration-500 z-10 flex items-center justify-center
                    ${isActive 
                    ? 'w-20 h-20 bg-slate-900 border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.3)] scale-110' 
                    : 'w-12 h-12 bg-slate-950 border-slate-800'
                    }
                    `}
                    // Counter-rotate to keep icon upright
                    animate={{ rotate: isActive ? 0 : -360 }}
                      transition={{ duration: isActive ? 1 : 40 + (index * 10), ease: isActive ? "circOut" : "linear", repeat: isActive ? 0 : Infinity }}
               >
                    <div className={`transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-500'}`}>
                         {cat.id === 'banking' ? <Building2 size={isActive ? 32 : 18} /> : 
                         cat.id === 'crypto' ? <Wallet size={isActive ? 32 : 18} /> : 
                         <Layers size={isActive ? 32 : 18} />}
                    </div>

                    {/* Active Label Tooltip */}
                    <AnimatePresence>
                    {isActive && (
                    <motion.div 
                         initial={{ opacity: 0, y: 10 }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0, y: 10 }}
                         className="absolute top-full mt-4 bg-slate-800 text-xs px-3 py-1 rounded-full whitespace-nowrap border border-slate-700 text-white font-bold"
                         >
                    {cat.stats}
                    </motion.div>
                    )}
                    </AnimatePresence>
                    </motion.div>

                    {/* Connection Line (Only visible when active) */}
                    {isActive && (
                    <motion.div 
                         initial={{ height: 0, opacity: 0 }}
                         animate={{ height: '50%', opacity: 1 }}
                         className="absolute top-0 left-1/2 w-[2px] origin-bottom bg-gradient-to-t from-slate-900 via-emerald-500/50 to-emerald-500"
                         style={{ transform: 'translateX(-50%)' }}
                    >
                    {/* Moving Data Packets */}
                    {[1, 2, 3].map(i => (
                    <motion.div 
                         key={i}
                         animate={{ top: ['100%', '0%'], opacity: [0, 1, 0] }}
                         transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4, ease: "linear" }}
                         className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white] left-1/2 -translate-x-1/2"
                    />
                    ))}
                    </motion.div>
                    )}
               </motion.div>
               );
          })}
          </div>

     </div>

     {/* Bottom Logo Strip */}
     <div className="mt-20 pt-10 border-t border-slate-900 grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-50 hover:opacity-100 transition-opacity">
          {['Chase', 'Wells Fargo', 'Coinbase', 'Binance', 'Slack', 'Zapier'].map((brand, i) => (
     <div key={i} className="text-center font-bold text-slate-500 text-xl tracking-tight uppercase">
          {brand}
     </div>
     ))}
     </div>
     </div>
     </section>
);
};

export default EcosystemSection;