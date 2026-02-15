/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';
import { motion, useScroll, useInView } from 'framer-motion';
import { 
  Globe, ArrowRight, 
  Linkedin, Twitter, Sparkles,  
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// --- SUB-COMPONENTS ---

// 1. Animated Counter for Stats
const Counter = ({ value, label, suffix = "" }: { value: number, label: string, suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // A simple spring animation for the number would be complex to implement from scratch 
  // without a library like 'framer-motion-number', so we cheat visually with a scale/fade in
  // for the 'awesome' feel, we use a text-gradient pop.
  
  return (
    <div ref={ref} className="text-center p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:bg-slate-800 transition-colors">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ type: "spring", duration: 1.5 }}
        className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400 mb-2"
      >
        {value}{suffix}
      </motion.div>
      <p className="text-emerald-400 font-medium uppercase tracking-wider text-sm">{label}</p>
    </div>
  );
};

// 2. Team Member Card
const TeamCard = ({ name, role, img, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className="group relative"
  >
    <div className="relative h-80 w-full overflow-hidden rounded-3xl bg-slate-800 mb-4">
      {/* Image Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 z-10" />
      
      {/* Placeholder Image (CSS Pattern) */}
      <div className={`w-full h-full bg-slate-700 bg-[url('${img}')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110`} />

      {/* Social Icons Overlay */}
      <div className="absolute bottom-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
        <Button className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-slate-900 transition-colors">
          <Linkedin size={16} />
        </Button>
        <Button className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-slate-900 transition-colors">
          <Twitter size={16} />
        </Button>
      </div>
    </div>
    <h3 className="text-xl font-bold text-white">{name}</h3>
    <p className="text-emerald-400 text-sm">{role}</p>
  </motion.div>
);

// --- MAIN PAGE COMPONENT ---

const About = () => {

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  console.log(scrollYProgress)

  return (
    <div className="bg-slate-950 min-h-screen font-sans overflow-x-hidden" ref={containerRef}>
      
      {/* =======================
          1. HERO SECTION
      ======================== */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px]" 
          />
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 border border-slate-700 bg-slate-800/50 backdrop-blur-sm px-4 py-1.5 rounded-full text-slate-300 text-sm mb-8">
              <Sparkles size={14} className="text-yellow-400" />
              <span>Founded in 2024</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tight mb-8">
              We are building the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
                operating system
              </span> <br/>
              for your wealth.
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Gigi Wallet started with a simple question: Why is managing money still so complicated? We're on a mission to simplify finance for the next billion users.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-slate-500 to-transparent" />
        </motion.div>
      </section>


      {/* =======================
          2. MANIFESTO (Scroll Trigger)
      ======================== */}
      <section className="py-32 bg-slate-950 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-12">Our Philosophy</h2>
            <div className="space-y-16">
              {[
                "Financial freedom shouldn't require a finance degree.",
                "Privacy is a human right, not a feature setting.",
                "Your data belongs to you. Not advertisers.",
                "Fast is better than slow. Simple is better than complex."
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0.2, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="text-3xl md:text-5xl font-bold text-white leading-tight"
                >
                  {text}
                </motion.p>
              ))}
          </div>
          </div>
        </div>
      </section>


      {/* =======================
          3. STATS & IMPACT
      ======================== */}
      <section className="py-20 border-y border-slate-900 bg-slate-900/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Counter value={2} suffix="M+" label="Active Users" />
            <Counter value={150} suffix="+" label="Countries Supported" />
            <Counter value={45} suffix="B" label="Transaction Volume" />
            <Counter value={99} suffix="%" label="Customer Satisfaction" />
          </div>
        </div>
      </section>


      {/* =======================
          4. THE TEAM (Parallax Grid)
      ======================== */}
      <section className="py-32 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-4">Meet the <span className="text-emerald-400">Builders</span></h2>
            <p className="text-slate-400">A diverse team of engineers, designers, and dreamers.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-y-16">
            {/* Fake data for the team */}
            {[
              { name: "Sarah Connor", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" },
              { name: "John Reese", role: "CTO", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600" },
              { name: "Elliot Alderson", role: "Lead Security", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600" },
              { name: "Darlene A.", role: "Product Design", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600" },
              { name: "Tyrell W.", role: "VP of Engineering", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" },
              { name: "Angela Moss", role: "Head of Marketing", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=600" },
            ].map((member, i) => (
               <TeamCard key={i} {...member} delay={i * 0.1} />
            ))}
          </div>

          <div className="mt-20 text-center">
            <a href="#" className="inline-flex items-center gap-2 text-white border-b border-emerald-500 pb-1 hover:text-emerald-400 transition-colors">
              See open positions <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>


      {/* =======================
          5. OFFICE / CULTURE (Visual Break)
      ======================== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-900/10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-slate-900 border border-slate-800 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
             {/* Decorative Map Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                {/* Abstract grid representing a map */}
                <div className="w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]" />
            </div>

            <div className="md:w-1/2 space-y-8">
              <div className="inline-block p-3 bg-slate-800 rounded-2xl mb-4">
                <Globe className="text-blue-400 w-8 h-8" />
            </div>
                <h2 className="text-4xl font-bold text-white">Remote first.<br/>Global always.</h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  We don't believe in cubicles. Our team is spread across 12 countries and 8 timezones. We hire the best talent, regardless of where they live.
                </p>
                <ul className="space-y-4">
                {['Headquarters in San Francisco', 'Hubs in London, Tokyo, Singapore', 'Annual company-wide retreats'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> {item}
                </li>
                ))}
              </ul>
            </div>

            <div className="md:w-1/2 relative h-[400px] w-full bg-slate-800/50 rounded-2xl border border-slate-700 flex items-center justify-center overflow-hidden">
                {/* Abstract World Animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full border border-slate-600/30 animate-[spin_10s_linear_infinite]" />
                <div className="w-80 h-80 rounded-full border border-slate-600/20 absolute animate-[spin_15s_linear_infinite_reverse]" />
                <div className="w-48 h-48 bg-blue-500/20 rounded-full blur-3xl absolute" />
                </div>
                
                {/* Floating Location Dots */}
                {[
                  { top: '30%', left: '20%' }, { top: '40%', left: '80%' }, 
                  { top: '60%', left: '50%' }, { top: '25%', left: '60%' }
                ].map((pos, i) => (
                  <motion.div 
                    key={i}
                    style={pos}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: i * 0.2 }}
                    className="absolute w-4 h-4 bg-emerald-500 rounded-full border-2 border-slate-900 shadow-[0_0_15px_rgba(16,185,129,0.5)] z-10"
                  >
                    <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-75" />
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* =======================
          6. CTA
      ======================== */}
      <section className="py-32 bg-slate-950 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="container mx-auto px-6"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
            Ready to join the <br/> <span className="text-emerald-500">revolution?</span>
          </h2>
          <p className="text-slate-400 text-xl mb-12 max-w-xl mx-auto">
            Whether you want to work with us or just manage your money better, there's a place for you at Gigi.
          </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="px-8 py-4 bg-white text-slate-950 rounded-xl font-bold hover:bg-slate-200 transition-all transform hover:scale-105">
              View Open Roles
            </button>
            <button className="px-8 py-4 bg-transparent border border-slate-700 text-white rounded-xl font-bold hover:border-emerald-500 hover:text-emerald-400 transition-all">
              Download the App
            </button>
        </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;