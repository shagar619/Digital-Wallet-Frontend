import { motion } from 'framer-motion';
import { PieChart, Globe, Shield, CreditCard } from 'lucide-react';

const features = [
  {
    icon: <PieChart className="w-6 h-6 text-emerald-400" />,
    title: "Smart Analytics",
    desc: "Visualize your spending habits with AI-powered categorization."
  },
  {
    icon: <Shield className="w-6 h-6 text-blue-400" />,
    title: "Bank-Grade Security",
    desc: "256-bit encryption and biometric authentication keep your data safe."
  },
  {
    icon: <Globe className="w-6 h-6 text-purple-400" />,
    title: "Global Transfers",
    desc: "Send money to 120+ countries with near-zero exchange fees."
  }
];

const Features = () => {
  return (
    <div className="bg-slate-950 text-white py-24 overflow-hidden">
      
      {/* --- SECTION 1: BENTO GRID --- */}
      <div className="container mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything you need to <br/> <span className="text-emerald-400">grow your wealth</span></h2>
          <p className="text-slate-400">Powerful features wrapped in a simple, elegant interface.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 hover:bg-slate-800/80 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- SECTION 2: ANALYTICS DEEP DIVE --- */}
      <div className="container mx-auto px-6 mb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-full" />
            <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl">
              <div className="flex justify-between items-center mb-8">
                <h4 className="text-lg font-semibold">Spending Report</h4>
                <select className="bg-slate-800 text-sm border-none rounded text-slate-400 p-1"><option>This Week</option></select>
              </div>
              {/* Abstract Bars */}
              <div className="flex items-end justify-between h-48 gap-4">
                {[40, 70, 30, 85, 50, 90, 60].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className={`w-full rounded-t-lg ${i === 5 ? 'bg-emerald-500' : 'bg-slate-800'}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold">Real-time insights for <br/>smarter decisions.</h3>
            <p className="text-slate-400 text-lg">Stop guessing where your money goes. Gigi Wallet categorizes every transaction instantly and builds easy-to-read charts so you can spot trends.</p>
            <ul className="space-y-3">
              {['Auto-categorization', 'Monthly Budget Limits', 'Subscription Tracking'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* --- SECTION 3: VIRTUAL CARDS --- */}
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden text-center md:text-left">
           {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-6">
                <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 font-medium text-sm">
                  Gigi Virtual
                </div>
                <h3 className="text-3xl md:text-5xl font-bold">Disposable cards for safer shopping.</h3>
                <p className="text-blue-100/70 text-lg">Create unlimited virtual cards for online subscriptions. Freeze them anytime with one tap.</p>
                <button className="px-6 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-colors">
                  Create a Card
                </button>
              </div>

              {/* Card Visual */}
              <motion.div 
                initial={{ rotate: 5, y: 50, opacity: 0 }}
                whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="relative flex justify-center"
              >
                <div className="w-80 h-48 bg-emerald-500 rounded-2xl shadow-2xl rotate-[-6deg] z-10 flex flex-col justify-between p-6 absolute top-0 left-10 opacity-50 scale-90" />
                <div className="w-80 h-48 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-2xl rotate-6 z-20 flex flex-col justify-between p-6 border border-white/20">
                    <div className="flex justify-between text-white/80">
                      <span>Virtual</span>
                      <CreditCard />
                    </div>
                    <div className="text-white font-mono text-xl tracking-widest">**** **** **** 8821</div>
                </div>
              </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;