/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  CreditCard, Smartphone, Zap, 
  Check, X, ArrowRight, LayoutDashboard, 
  Terminal, Lock
} from 'lucide-react';

// --- SUB-COMPONENT: FAKE UI FOR STICKY SCROLL ---
const FeatureVisual = ({ type }: { type: string }) => {
  return (
    <div className="w-full h-full bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden relative shadow-2xl">
      {/* Abstract Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      
      {/* 1. DASHBOARD UI */}
      {type === 'dashboard' && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-4 flex flex-col gap-4"
        >
          {/* Header */}
          <div className="flex justify-between items-center">
          <div className="h-8 w-32 bg-slate-800 rounded-lg" />
          <div className="h-8 w-8 bg-emerald-500/20 rounded-full" />
          </div>
          {/* Main Graph Area */}
          <div className="flex-1 bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end gap-2 px-6 pb-6">
                {[30, 50, 45, 80, 60, 90, 100].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: i * 0.1, duration: 1 }}
                    className="flex-1 bg-gradient-to-t from-emerald-500/10 to-emerald-500 rounded-t-sm"
                  />
                ))}
            </div>
          </div>
          {/* Row of cards */}
          <div className="h-24 flex gap-4">
          <div className="flex-1 bg-slate-800/50 rounded-xl border border-slate-700/50" />
          <div className="flex-1 bg-slate-800/50 rounded-xl border border-slate-700/50" />
          </div>
        </motion.div>
      )}

      {/* 2. CARDS UI */}
      {type === 'cards' && (
        <div className="absolute inset-0 flex items-center justify-center perspective-1000">
          <motion.div 
            initial={{ rotateX: 20, rotateY: 20, z: -50 }}
            animate={{ rotateX: 10, rotateY: -10, z: 0 }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
            className="w-72 h-44 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl shadow-2xl p-6 flex flex-col justify-between border border-white/10 z-20"
          >
          <div className="flex justify-between text-white/80"><CreditCard /> <span>Visa</span></div>
          <div className="text-white text-lg font-mono tracking-widest">**** 8821</div>
          </motion.div>
          <motion.div 
            initial={{ rotateX: 20, rotateY: 20, z: -100, x: 0 }}
            animate={{ rotateX: 10, rotateY: -10, z: -50, x: 50 }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "mirror", delay: 0.5 }}
            className="absolute w-72 h-44 bg-slate-800 rounded-2xl shadow-xl p-6 border border-slate-700 z-10 opacity-70"
          />
        </div>
      )}

      {/* 3. MOBILE UI */}
      {type === 'mobile' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="w-56 h-[90%] bg-slate-950 border-4 border-slate-800 rounded-[2rem] overflow-hidden relative"
          >
              <div className="absolute top-0 inset-x-0 h-6 bg-slate-900 z-20 flex justify-center"><div className="w-16 h-4 bg-black rounded-b-xl" /></div>
              <div className="p-4 pt-10 space-y-3">
                {[1,2,3,4,5].map(i => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="h-12 bg-slate-800 rounded-lg flex items-center px-2 gap-2"
                  >
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20" />
                  <div className="h-2 w-20 bg-slate-700 rounded" />
                </motion.div>
                ))}
              </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

// --- MAIN PAGE ---
const Feature = () => {
  const [activeFeature, setActiveFeature] = useState('dashboard');
  
  // Handlers for scroll focus
  const handleInView = (feature: string) => {
    setActiveFeature(feature);
  };

  return (
    <div className="bg-slate-950 min-h-screen font-sans selection:bg-emerald-500/30">
      
      {/* 1. HEADER HERO */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Powerful features, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">zero complexity.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              We've redesigned the banking stack from the ground up. 
              Explore the tools that give you full control over your financial destiny.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. STICKY SCROLL SHOWCASE */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            
            {/* Left Column: Scrolling Text */}
            <div className="lg:w-1/2 space-y-[40vh] py-[10vh]">
              
              {/* Feature 1 */}
              <FeatureDescription 
                id="dashboard"
                onInView={() => handleInView('dashboard')}
                icon={<LayoutDashboard />}
                title="Command Center"
                desc="A unified view of your net worth. Connect bank accounts, crypto wallets, and liability accounts in one place."
                bullets={["Real-time sync", "Multi-currency support", "Net worth calculator"]}
              />

              {/* Feature 2 */}
              <FeatureDescription 
                id="cards"
                onInView={() => handleInView('cards')}
                icon={<CreditCard />}
                title="Smart Cards"
                desc="Issue unlimited virtual cards for safer online shopping. Set strict limits and burn them when you're done."
                bullets={["Merchant-locked cards", "Auto-freeze limits", "Instant issuance"]}
              />

              {/* Feature 3 */}
              <FeatureDescription 
                id="mobile"
                onInView={() => handleInView('mobile')}
                icon={<Smartphone />}
                title="Mobile First"
                desc="Manage your wealth on the go. Our native iOS and Android apps are built for speed and biometric security."
                bullets={["FaceID Login", "Instant Push Notifications", "Offline Mode"]}
              />
            </div>

            {/* Right Column: Sticky Visual */}
            <div className="hidden lg:block lg:w-1/2 relative">
              <div className="sticky top-32 h-[500px] w-full">
                <FeatureVisual type={activeFeature} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DEVELOPER API SECTION */}
      <section className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-sm mb-4">
              <Terminal size={16} /> developer_mode: on
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Build on top of Gigi.</h2>
            <p className="text-slate-400 text-lg mb-8">
              Access your financial data programmatically. Use our REST API to build custom dashboards, automated trading bots, or complex budget rules.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                  <Zap className="text-yellow-400 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold">Webhooks</h4>
                    <p className="text-sm text-slate-500">Real-time event triggers</p>
                  </div>
              </div>
              <div className="flex items-start gap-3">
                  <Lock className="text-emerald-400 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold">Read/Write</h4>
                    <p className="text-sm text-slate-500">Granular scope control</p>
                  </div>
              </div>
            </div>
          </div>

          {/* Code Block Visual */}
          <div className="bg-slate-950 rounded-xl border border-slate-800 p-6 font-mono text-sm shadow-2xl relative overflow-hidden group">
             {/* Glow effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[50px] group-hover:bg-emerald-500/20 transition-colors" />
            <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/20" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
            <div className="w-3 h-3 rounded-full bg-green-500/20" />
            </div>
            <div className="text-slate-300 space-y-2">
                <p><span className="text-purple-400">const</span> <span className="text-blue-400">transaction</span> = <span className="text-purple-400">await</span> gigi.<span className="text-yellow-400">send</span>({`{`}</p>
                <p className="pl-4"><span className="text-emerald-400">amount</span>: <span className="text-orange-400">5000</span>,</p>
                <p className="pl-4"><span className="text-emerald-400">currency</span>: <span className="text-green-400">'USD'</span>,</p>
                <p className="pl-4"><span className="text-emerald-400">recipient</span>: <span className="text-green-400">'acc_88219x'</span>,</p>
                <p className="pl-4"><span className="text-emerald-400">note</span>: <span className="text-green-400">'Freelance payment'</span></p>
                <p>{`}`});</p>
                <p className="text-slate-500">// Transaction complete: id_9921</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. COMPARISON TABLE */}
      <section className="py-32">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why switch?</h2>
              <p className="text-slate-400">See how we stack up against traditional banking.</p>
            </div>

            <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
              <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-950/50">
                      <th className="p-6 text-slate-400 font-medium pl-8">Feature</th>
                      <th className="p-6 text-slate-400 font-medium">Traditional Banks</th>
                      <th className="p-6 text-emerald-400 font-bold text-lg bg-emerald-500/5">Gigi Wallet</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                      {[
                        { name: "Monthly Fees", old: "$12 - $25", new: "$0" },
                        { name: "International Transfers", old: "3-5 Business Days", new: "Instant" },
                        { name: "Virtual Cards", old: "Not Available", new: "Unlimited" },
                        { name: "Crypto Integration", old: "Banned", new: "Native Support" },
                        { name: "API Access", old: "Enterprise Only", new: "Open for Everyone" },
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                          <td className="p-6 text-white font-medium pl-8">{row.name}</td>
                          <td className="p-6 text-slate-500 flex items-center gap-2">
                            {row.name.includes("Fees") || row.name.includes("Days") ? row.old : <span className="flex items-center gap-2"><X size={16} /> {row.old}</span>}
                          </td>
                          <td className="p-6 text-white bg-emerald-500/5 font-bold flex items-center gap-2">
                              <Check size={16} className="text-emerald-500" /> {row.new}
                          </td>
                        </tr>
                    ))}
                  </tbody>
              </table>
            </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="pb-32 pt-10 text-center">
        <div className="container mx-auto px-6">
            <div className="bg-gradient-to-r from-emerald-900/40 to-blue-900/40 border border-white/10 rounded-3xl p-12 md:p-20 relative overflow-hidden">
              <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Experience the future today.</h2>
                  <p className="text-slate-300 mb-8 text-lg">Join the waitlist for v2.0 or start using the beta now.</p>
                  <button className="bg-white text-slate-950 px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition-colors inline-flex items-center gap-2">
                    Get Started <ArrowRight size={18} />
                  </button>
              </div>
               {/* Decorative background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none" />
            </div>
        </div>
      </section>

    </div>
  );
};

// Helper for Sticky Scroll Section
const FeatureDescription = ({ id, onInView, icon, title, desc, bullets }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  if (isInView) {
    onInView(id);
  }

  return (
    <motion.div 
      ref={ref}
      className={`transition-opacity duration-500 ${isInView ? 'opacity-100' : 'opacity-30'}`}
    >
      <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-emerald-400 mb-6 border border-slate-700">
        {icon}
      </div>
      <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
      <p className="text-xl text-slate-400 mb-8 leading-relaxed">
        {desc}
      </p>
      <ul className="space-y-3">
        {bullets.map((b: string, i: number) => (
          <li key={i} className="flex items-center gap-3 text-slate-300">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> {b}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Feature;