import { motion } from 'framer-motion';
import { Star, CheckCircle2, Twitter, Linkedin } from 'lucide-react';


// --- DATA ---
const reviews = [
{
     name: "Alex Rivera",
     handle: "@arivera_design",
     role: "Freelance Designer",
     content: "I used to dread tax season. Gigi Wallet's auto-categorization feature literally saved me 40 hours this year. The UI is just stunning.",
     platform: "twitter"
},
{
     name: "Sarah Chen",
     handle: "@chen_crypto",
     role: "DeFi Investor",
     content: "Finally, a dashboard that handles my Wells Fargo account AND my MetaMask wallet in one view. The gas fee alerts are a game changer.",
     platform: "twitter"
},
{
     name: "Marcus Johnson",
     handle: "marcus-j-fin",
     role: "Small Business Owner",
     content: "The virtual cards feature is essential for my team. I can issue a card for a specific software subscription and freeze it instantly if needed.",
     platform: "linkedin"
},
{
     name: "Elena Rodriguez",
     handle: "@elena_builds",
     role: "Software Engineer",
     content: "The API access allowed me to build my own custom alerts. Truly the most developer-friendly fintech app out there.",
     platform: "twitter"
},
{
     name: "David Kim",
     handle: "@dkim_ventures",
     role: "Angel Investor",
     content: "Clean, fast, and secure. I moved all my expense tracking to Gigi Pro last month and haven't looked back.",
     platform: "twitter"
},
{
     name: "Jessica Foster",
     handle: "jess-foster-99",
     role: "Digital Nomad",
     content: "Global transfers with zero fees? This app pays for itself. I use it in 3 different countries every month.",
     platform: "linkedin"
}
];

// --- COMPONENTS ---

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (

     <div className="w-[350px] md:w-[450px] bg-slate-900/50 backdrop-blur-md border border-slate-800 p-6 rounded-2xl mx-4 hover:border-emerald-500/50 hover:bg-slate-800 transition-all duration-300 group cursor-default">
     {/* Header */}
     <div className="flex justify-between items-start mb-4">
     <div className="flex items-center gap-3">
     <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-slate-700 to-slate-600 flex items-center justify-center text-white font-bold text-sm">
          {review.name.charAt(0)}
     </div>
     <div>
          <h4 className="text-white font-bold text-sm flex items-center gap-1">
          {review.name}
          <CheckCircle2 size={14} className="text-blue-500 fill-blue-500/20" />
          </h4>
          <p className="text-xs text-slate-500">{review.role}</p>
     </div>
     </div>
     {review.platform === 'twitter' ? (
     <Twitter size={16} className="text-slate-600 group-hover:text-[#1DA1F2] transition-colors" />
     ) : (
     <Linkedin size={16} className="text-slate-600 group-hover:text-[#0077b5] transition-colors" />
     )}
     </div>

     {/* Content */}
     <p className="text-slate-300 text-sm leading-relaxed mb-4">
     "{review.content}"
     </p>

     {/* Footer */}
     <div className="flex items-center gap-1 text-amber-500">
          <Star size={14} fill="currentColor" />
          <Star size={14} fill="currentColor" />
          <Star size={14} fill="currentColor" />
          <Star size={14} fill="currentColor" />
          <Star size={14} fill="currentColor" />
     </div>
     </div>
);


const InfiniteMarquee = ({ items, direction = "left", speed = 25 }: { items: typeof reviews, direction?: "left" | "right", speed?: number }) => {

     return (
     <div className="relative flex overflow-hidden group">
     <motion.div
          initial={{ x: direction === "left" ? 0 : "-50%" }}
          animate={{ x: direction === "left" ? "-50%" : 0 }}
          transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
          className="flex py-4 group-hover:[animation-play-state:paused]" // Note: standard framer motion doesn't support pause on hover easily, so we rely on the visual effect or standard CSS. 
          // actually, a better way for pause-on-hover in Framer Motion is simpler:
     >
     {/* We duplicate the items 3 times to ensure smooth infinite scroll without gaps */}
     {[...items, ...items, ...items].map((review, i) => (
          <ReviewCard key={i} review={review} />
     ))}
     </motion.div>
     {/* Hack to force pause on hover using pure CSS class injection if Framer Motion is tricky, 
          but usually, just having the motion div is enough. 
          To truly pause, we can use CSS animation instead of Framer Motion for the marquee loop 
          if interactivity is key. Below is the Framer Motion approach. 
      */}
     </div>
);
};

const Testimonials = () => {

     return (
     <section className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
     {/* Background Glows */}
     <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px]" />
     <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px]" />

     <div className="container mx-auto px-6 mb-16 text-center relative z-10">
     <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-full px-4 py-1.5 mb-6"
     >
     <div className="flex -space-x-2">
          {[1,2,3].map(i => <div key={i} className={`w-6 h-6 rounded-full border-2 border-slate-900 bg-slate-700`} />)}
     </div>
          <span className="text-sm text-slate-300 ml-2">Trusted by <span className="text-white font-bold">50,000+</span> users</span>
     </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Don't just take our <span className="text-emerald-400">word for it.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          See what founders, investors, and daily savers are saying about the new financial standard.
          </p>
     </div>

     {/* --- MARQUEE WRAPPER --- */}
     <div className="relative w-full overflow-hidden space-y-8">
     {/* Gradient Masks to fade edges */}
     <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 z-20 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />
     <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 z-20 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />

     {/* Row 1: Moving Left */}
     <div className="hover:cursor-grab active:cursor-grabbing">
          {/* We use a CSS animation class here for smoother infinite loop that pauses on hover easily */}
     <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...reviews, ...reviews, ...reviews].map((review, i) => (
          <ReviewCard key={`row1-${i}`} review={review} />
          ))}
     </div>
     </div>

     {/* Row 2: Moving Right (Slower) */}
     <div className="hover:cursor-grab active:cursor-grabbing">
     <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused]">
          {[...reviews.slice().reverse(), ...reviews.slice().reverse(), ...reviews.slice().reverse()].map((review, i) => (
               <ReviewCard key={`row2-${i}`} review={review} />
          ))}
     </div>
     </div>

     </div>

     {/* Style tag for Custom CSS Animation (Tailwind config usually handles this, but injecting here ensures it works instantly) */}
     <style>{`
     @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
     }
     @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
     }
     .animate-marquee {
          animation: marquee 50s linear infinite;
     }
     .animate-marquee-reverse {
          animation: marquee-reverse 60s linear infinite;
     }
     `}</style>
     </section>
);
};

export default Testimonials;