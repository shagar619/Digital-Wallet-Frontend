import { motion } from 'framer-motion';
import { 
  Wallet, Twitter, Instagram, Linkedin, Github, 
  Globe, Apple, Play 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 relative overflow-hidden font-sans">
      
      {/* --- PART 1: PRE-FOOTER CTA (Call to Action) --- */}
      <div className="relative border-b border-white/10">
        <div className="absolute inset-0 bg-emerald-900/10" />
        <div className="container mx-auto px-6 py-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-10 bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 rounded-3xl p-10 shadow-2xl"
          >
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl font-bold text-white">Ready to take control?</h2>
              <p className="text-slate-400 max-w-md">
                Join 2 million+ users tracking their wealth with Gigi Wallet today.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center gap-3 bg-white text-slate-950 px-6 py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors">
                <Apple size={20} className="mb-1" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] font-medium uppercase text-slate-500">Download on the</div>
                  <div className="-mt-1">App Store</div>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-slate-950 border border-slate-700 text-white px-6 py-3 rounded-xl font-bold hover:border-emerald-500 transition-colors">
                <Play size={20} className="mb-1 fill-white" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] font-medium uppercase text-slate-400">Get it on</div>
                  <div className="-mt-1">Google Play</div>
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- PART 2: MAIN LINKS --- */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 mb-16">
          
          {/* Brand Column (Span 4) */}
          <div className="col-span-2 md:col-span-4 space-y-6">
            <div className="flex items-center gap-2 font-bold text-2xl text-white">
              <div className="w-10 h-10 bg-gradient-to-tr from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-900/20">
                <Wallet size={20} />
              </div>
              Gigi Wallet
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              The financial operating system for the modern internet. Secure, fast, and built for scale.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              {['Features', 'Security', 'Business', 'Crypto', 'Early Access'].map(link => (
                <li key={link}><a href="#" className="hover:text-emerald-400 transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              {['About', 'Careers', 'Brand Center', 'Press', 'Contact'].map(link => (
                <li key={link}><a href="#" className="hover:text-emerald-400 transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              {['Community', 'Help Center', 'API Docs', 'Status', 'Blog'].map(link => (
                <li key={link}><a href="#" className="hover:text-emerald-400 transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Licenses'].map(link => (
                <li key={link}><a href="#" className="hover:text-emerald-400 transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- PART 3: BOTTOM BAR & LEGAL TEXT --- */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-medium text-emerald-400">All Systems Operational</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm font-medium text-slate-400">
               <button className="flex items-center gap-2 hover:text-white">
                 <Globe size={16} /> English (US)
               </button>
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-2xl p-6 text-xs text-slate-500 leading-relaxed border border-slate-800/50">
            <p className="mb-4">
              © 2026 Gigi Technologies Inc. All rights reserved.
            </p>
            <p>
              Gigi Wallet is a financial technology company, not a bank. Banking services are provided by Gigi Bank's partner banks who are Member FDIC. The Gigi Visa® Debit Card is issued by Partner Bank pursuant to a license from Visa U.S.A. Inc. and may be used everywhere Visa debit cards are accepted.
            </p>
            <p className="mt-2">
              Cryptocurrency services are provided by Gigi Crypto LLC. Cryptocurrency assets are speculative and involve a high degree of risk.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;