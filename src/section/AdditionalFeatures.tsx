/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion';
import { 
     ShieldCheck, Lock, ScanFace, CheckCircle2, 
     ArrowRight, Star, Coins, TrendingUp 
} from 'lucide-react';



// ==========================================
// SECTION 1: SOCIAL PROOF (Scrolling Logos)
// ==========================================
     const PartnersSection = () => {
     const logos = ["Visa", "Mastercard", "Plaid", "Coinbase", "Stripe", "AWS Financial"];
     // Duplicate for infinite scroll effect
     const scrollingLogos = [...logos, ...logos];

     return (
     <section className="py-16 bg-slate-950 overflow-hidden border-t border-b border-slate-900/50 relative">
     {/* Gradient Fade Masks on sides */}
     <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10" />
     <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10" />
     <div className="container mx-auto px-6 mb-8 text-center">
          <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Trusted by industry leaders and powering 500K+ accounts</p>
     </div>

     <div className="flex relative overflow-hidden">
     <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          className="flex gap-16 items-center whitespace-nowrap pl-16"
     >
          {scrollingLogos.map((logo, index) => (
     <div key={index} className="text-2xl font-bold text-slate-600 hover:text-slate-300 transition-colors cursor-default flex items-center">
     {/* Using text as placeholder for real SVGs */}
          <span className="tracking-tight">{logo}</span>
     </div>
          ))}
     </motion.div>
     </div>
     </section>
);
};

// ==========================================
// SECTION 2: SAVINGS GOALS ("The Vault")
// ==========================================
const SavingsSection = () => {

     return (
     <section className="py-32 bg-slate-950 relative overflow-hidden">
       {/* Subtle background glow */}
     <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[128px]" />

     <div className="container mx-auto px-6">
     <div className="grid lg:grid-cols-2 gap-16 items-center">
          
     {/* Text Content */}
     <div className="space-y-8 order-2 lg:order-1">
     <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
          <Coins size={16} /> Smart Savings Vaults
     </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
               Reaching your goals just got <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">automatic.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
               Set a goal, and Gigi's AI algorithms will analyze your spending to find "safe-to-save" amounts, moving them into your vault automatically. You won't even miss it.
          </p>
          <ul className="space-y-4 mt-8">
               {['Round-up spare change', 'Scheduled weekly deposits', 'AI-powered "Smart stash"'].map((item, i) => (
               <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-slate-200 font-medium"
               >
               <CheckCircle2 className="text-blue-500 h-6 w-6" /> {item}
               </motion.li>
          ))}
          </ul>
          </div>

          {/* Animated Visual ("The Vault") */}
          <div className="order-1 lg:order-2 relative perspective-1000">
          <motion.div
               initial={{ transform: "rotateY(-10deg) rotateX(10deg)", opacity: 0.5 }}
               whileInView={{ transform: "rotateY(0deg) rotateX(0deg)", opacity: 1 }}
               transition={{ duration: 1.5, ease: "easeOut" }}
               className="relative z-10 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-[2.5rem] p-8 shadow-[0_0_50px_-12px_rgba(59,130,246,0.5)]"
          >
          {/* Vault Header */}
          <div className="flex justify-between items-center mb-10">
          <div>
               <p className="text-slate-400 text-sm">Goal: New Tesla Model 3</p>
               <h3 className="text-3xl font-bold text-white">$12,450 <span className="text-slate-500 text-lg">/ $45k</span></h3>
          </div>
          <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
               <TrendingUp className="text-blue-400 w-8 h-8" />
          </div>
          </div>

          {/* Progress Bar & Animation */}
          <div className="relative h-6 bg-slate-800 rounded-full overflow-hidden mb-4">
               <motion.div 
                    initial={{ width: "0%" }}
                    whileInView={{ width: "28%" }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" 
               />
          </div>
          <div className="flex justify-between text-sm text-slate-400 mb-8">
               <span>28% funded</span>
               <span>On track for Dec 2026</span>
          </div>

          {/* Floating Coins Animation */}
          <div className="absolute -top-12 -right-12 flex">
               {[1, 2, 3].map((_, i) => (
               <motion.div
                    key={i}
                    initial={{ y: 0, opacity: 1, scale: 1 }}
                    animate={{ y: 120, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.8, ease: "easeIn" }}
                    className="w-12 h-12 -ml-4 rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-600 border-2 border-yellow-300 shadow-lg flex items-center justify-center text-yellow-900 font-bold"
               >$</motion.div>
          ))}
          </div>
          </motion.div>
          </div>
          </div>
     </div>
     </section>
);
};

// ==========================================
// SECTION 3: SECURITY ARCHITECTURE
// ==========================================
const SecuritySection = () => {

     return (
     <section className="py-24 bg-slate-950 relative overflow-hidden">
     {/* Central glow */}
     <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px]" />

     <div className="container mx-auto px-6 text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Fortress-level <span className="text-emerald-400">Security Protocol</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">We utilize a multi-layered defense strategy to ensure your assets and identity remain impenetrable.</p>
     </div>

     <div className="container mx-auto px-6 relative z-10">
     <div className="grid lg:grid-cols-3 gap-8 items-center">

     {/* Left Features */}
     <div className="space-y-12 text-right">
          <SecurityFeature title="AES-256 Encryption" desc="Military-grade data encryption at rest and in transit." icon={<Lock />} align="right" delay={0.2} />
          <SecurityFeature title="Biometric Access" desc="FaceID and fingerprint support for instant, secure login." icon={<ScanFace />} align="right" delay={0.4} />
     </div>

     {/* Center Animated Visual */}
     <div className="relative flex items-center justify-center h-[500px]">
     {/* Rotating Rings */}
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute w-[450px] h-[450px] rounded-full border border-emerald-500/20 border-dashed" />
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute w-[350px] h-[350px] rounded-full border border-emerald-500/30 border-dotted" />

     {/* Central Shield */}
          <motion.div 
               initial={{ scale: 0.8, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               transition={{ type: "spring", bounce: 0.4 }}
               className="relative z-20 bg-gradient-to-tr from-emerald-600 to-emerald-400 p-8 rounded-3xl shadow-lg shadow-emerald-500/30"
          >
          <ShieldCheck className="w-24 h-24 text-white" />
          {/* Pulsing ping */}
          <span className="absolute -top-2 -right-2 flex h-6 w-6">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
               <span className="relative inline-flex rounded-full h-6 w-6 bg-white/50"></span>
          </span>
          </motion.div>
     </div>

     {/* Right Features */}
     <div className="space-y-12 text-left">
          <SecurityFeature title="Real-time Fraud AI" desc="Machine learning detects suspicious activity instantly." icon={<ShieldCheck />} align="left" delay={0.6} />
          <SecurityFeature title="FDIC Insured Partners" desc="Your funds are eligible for insurance up to $250,000." icon={<CheckCircle2 />} align="left" delay={0.8} />
     </div>
     </div>
     </div>
     </section>
);
};

// Helper component for Security Section
const SecurityFeature = ({ title, desc, icon, align, delay } : any) => (
     <motion.div 
          initial={{ opacity: 0, x: align === 'left' ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay, duration: 0.5 }}
          viewport={{ once: true }}
          className={`flex flex-col ${align === 'right' ? 'items-end' : 'items-start'}`}
     >
     <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700 mb-4 inline-block text-emerald-400 shadow-inner shadow-emerald-500/10">
     {icon}
     </div>
     <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
     <p className="text-slate-400 max-w-xs">{desc}</p>
     </motion.div>
);


// ==========================================
// SECTION 4: TESTIMONIAL CARDS
// ==========================================
const TestimonialsSection = () => {

     const testimonials = [
     { name: "Sarah J.", role: "Freelance Designer", quote: "Gigi utterly transformed how I manage my variable income. The automatic tax savings buckets are a lifesaver.", rating: 5 },
     { name: "Marcus T.", role: "Small Business Owner", quote: "The virtual cards feature allows my team to make purchases securely without risking our main account details.", rating: 5 },
     { name: "Elena R.", role: "Crypto Investor", quote: "Finally, a wallet that understands both fiat and crypto. The unified dashboard is exactly what I needed.", rating: 4 },
     ];

     return (
     <section className="py-24 bg-slate-950 border-t border-slate-900">
     <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Loved by <span className="text-emerald-400">builders & savers</span>.</h2>
     </div>
     {/* Scroll Container */}
     <div className="flex overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory gap-8 px-6 md:justify-center">
     {testimonials.map((t, i) => (
     <motion.div
          key={i}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: i * 0.2, type: "spring" }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ y: -10 }}
          className="snap-center shrink-0 w-[350px] md:w-[400px] bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-xl border border-slate-800/80 p-8 rounded-3xl relative group"
     >
     {/* Glow hover effect */}
     <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

     <div className="flex gap-1 text-amber-400 mb-6">
     {[...Array(t.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
     </div>
          <p className="text-lg text-slate-300 italic mb-8 leading-relaxed">"{t.quote}"</p>
     <div className="flex items-center gap-4">
     <div className="w-12 h-12 bg-slate-800 rounded-full border border-slate-700" /> {/* Placeholder for avatar */}
     <div>
          <h5 className="text-white font-bold">{t.name}</h5>
          <p className="text-slate-500 text-sm">{t.role}</p>
     </div>
     </div>
     </motion.div>
     ))}
     </div>
     </section>
);
};

// ==========================================
// SECTION 5: PRICING TIERS
// ==========================================
const PricingSection = () => {

     return (
     <section className="py-32 bg-slate-950 relative" id="pricing">
     <div className="container mx-auto px-6">
     <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Simple, transparent pricing.</h2>
          <p className="text-slate-400 text-lg">Start for free, upgrade as you grow.</p>
     </div>

     <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
     {/* Basic Card */}
          <PricingCard 
               title="Starter" price="$0" description="Perfect for personal tracking."
               features={['Unlimited transactions', 'Basic categorization', '1 Virtual Card', '7-day support response']}
          />
     {/* Pro Card (Highlighted) */}
          <PricingCard 
               title="Gigi Pro" price="$12" description="For power users and investors."
               features={['Everything in Starter', 'Advanced AI Insights', 'Unlimited Virtual Cards', 'Priority 24/7 Support', 'Crypto Portfolio Tracking']}
               highlighted={true}
          />
          {/* Business Card */}
          <PricingCard 
               title="Business" price="$49" description="For small teams and startups."
               features={['Everything in Pro', 'Multi-user access (up to 5)', 'Invoice Generation', 'Dedicated account manager', 'API Access']}
          />
     </div>
     </div>
     </section>
);
};

// Helper component for Pricing Section
const PricingCard = ({ title, price, description, features, highlighted = false }: any) => (
     <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ scale: 1.02 }}
          className={`relative p-8 rounded-3xl border ${highlighted ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-emerald-500/50 shadow-2xl shadow-emerald-900/20 scale-105 z-10' : 'bg-slate-900/40 border-slate-800'}`}
     >
     {highlighted && (
     <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
          Most Popular
     </div>
     )}
     <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
     <p className="text-slate-400 mb-6">{description}</p>
     <div className="mb-8">
     <span className="text-5xl font-bold text-white">{price}</span>
     <span className="text-slate-500">/month</span>
     </div>
     <ul className="space-y-4 mb-8">
     {features.map((f: string, i: number) => (
          <li key={i} className="flex items-start gap-3 text-slate-300">
               <CheckCircle2 className={`w-5 h-5 ${highlighted ? 'text-emerald-400' : 'text-slate-500'} shrink-0`} />
               <span>{f}</span>
          </li>
     ))}
     </ul>
     <button className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${highlighted ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/25' : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'}`}>
     Get Started <ArrowRight size={18} />
     </button>
     </motion.div>
);


// Exporting all as a single block for easy copy-paste, 
// or you can split them into separate files.
export { PartnersSection, SavingsSection, SecuritySection, TestimonialsSection, PricingSection };