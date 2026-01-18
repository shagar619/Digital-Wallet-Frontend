import { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { 
  Search, ChevronDown, Shield, CreditCard, 
  User, Wallet, MessageCircle, Mail 
} from 'lucide-react';

// --- DATA ---
const categories = [
  { id: 'all', label: 'All Questions', icon: <Search size={16} /> },
  { id: 'general', label: 'Getting Started', icon: <User size={16} /> },
  { id: 'security', label: 'Security', icon: <Shield size={16} /> },
  { id: 'billing', label: 'Billing & Plans', icon: <CreditCard size={16} /> },
  { id: 'crypto', label: 'Crypto & Web3', icon: <Wallet size={16} /> },
];

const faqData = [
  // General
  { id: 1, category: 'general', question: "How do I verify my identity?", answer: "To verify your identity, go to Settings > Account > Verification. You will need to upload a photo of your government-issued ID (Passport or Driver's License) and take a selfie. Verification usually takes less than 5 minutes." },
  { id: 2, category: 'general', question: "Is Gigi Wallet available in my country?", answer: "We currently support over 140 countries, including the US, UK, Canada, Australia, and most of the EU. You can view the full list on our supported regions page." },
  
  // Security
  { id: 3, category: 'security', question: "What happens if I lose my phone?", answer: "Don't panic. You can freeze your account instantly by logging into our web portal from any computer. Once you have a new device, you can recover your account using your backup phrase and 2FA method." },
  { id: 4, category: 'security', question: "Is my money insured?", answer: "Yes. USD balances held in Gigi Wallet are eligible for FDIC pass-through insurance up to $250,000 through our partner banks. Crypto assets are not FDIC insured but are protected by our industry-leading cold storage protocols." },
  
  // Billing
  { id: 5, category: 'billing', question: "Can I upgrade or downgrade my plan anytime?", answer: "Absolutely. If you upgrade to Pro, the features are unlocked immediately. If you downgrade, you will keep your Pro features until the end of your current billing cycle." },
  { id: 6, category: 'billing', question: "What payment methods do you accept?", answer: "For subscription fees, we accept all major credit/debit cards (Visa, Mastercard, Amex) and direct bank debits. We do not currently accept crypto for subscription payments." },
  
  // Crypto
  { id: 7, category: 'crypto', question: "How do I connect my MetaMask wallet?", answer: "Go to the 'Assets' tab and click 'Connect Wallet'. Select MetaMask from the list. You will be asked to sign a message to verify ownership. We strictly have read-only access to your external wallets." },
  { id: 8, category: 'crypto', question: "What are the gas fees for transfers?", answer: "Transfers between Gigi users are off-chain and free. Transfers to external wallets incur standard blockchain network fees (gas), which are passed on to the network miners, not us." },
  { id: 9, category: 'crypto', question: "Which tokens do you support?", answer: "We currently support BTC, ETH, SOL, MATIC, and over 100+ ERC-20 tokens. We add new assets monthly based on community voting." },
];

// --- MAIN COMPONENT ---
const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItem, setOpenItem] = useState<number | null>(null);

  // Filter Logic
  const filteredFaqs = faqData.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });


  return (
    <div className="bg-slate-950 min-h-screen font-sans selection:bg-emerald-500/30">
      
      {/* 1. HERO SEARCH SECTION */}
      <section className="pt-40 pb-12 px-6 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            How can we <span className="text-emerald-400">help?</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg mb-10"
          >
            Search our knowledge base or browse categories below.
          </motion.p>

          {/* Search Input */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative max-w-xl mx-auto group"
          >
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="text-slate-500 group-focus-within:text-emerald-400 transition-colors" />
            </div>
            <input 
              type="text" 
              placeholder="Search for answers (e.g. 'crypto fees', 'lost card')..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all shadow-lg shadow-black/50"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. CATEGORY TABS */}
      <section className="px-6 mb-12">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat, i) => (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (i * 0.05) }}
                onClick={() => { setActiveCategory(cat.id); setOpenItem(null); }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id 
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25' 
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {cat.icon}
                {cat.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FAQ LIST */}
      <section className="pb-32 px-6 min-h-[500px]">
        <div className="container mx-auto max-w-3xl">
          <LayoutGroup>
            <motion.div layout className="space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((item) => (
                  <motion.div 
                    layout
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setOpenItem(openItem === item.id ? null : item.id)}
                    className={`bg-slate-900/50 border rounded-2xl overflow-hidden cursor-pointer transition-colors ${
                      openItem === item.id ? 'border-emerald-500/50 bg-slate-900' : 'border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="p-6 flex justify-between items-start gap-4">
                      <h3 className={`text-lg font-medium transition-colors ${openItem === item.id ? 'text-emerald-400' : 'text-slate-200'}`}>
                        {item.question}
                      </h3>
                      <motion.div 
                        animate={{ rotate: openItem === item.id ? 180 : 0 }}
                        className="text-slate-500 shrink-0 mt-1"
                      >
                        <ChevronDown size={20} />
                      </motion.div>
                    </div>
                    
                    <AnimatePresence>
                      {openItem === item.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-slate-800/50 mt-2 pt-4">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="text-center py-20"
                >
                  <div className="inline-block p-4 rounded-full bg-slate-900 mb-4">
                    <Search className="text-slate-500 w-8 h-8" />
                  </div>
                  <h3 className="text-white font-bold mb-2">No results found</h3>
                  <p className="text-slate-500">Try adjusting your search terms or browse all categories.</p>
                </motion.div>
              )}
            </motion.div>
          </LayoutGroup>
        </div>
      </section>

      {/* 4. SUPPORT CONTACT CTA */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Still have questions?</h2>
              <p className="text-slate-400 max-w-md">Can't find what you're looking for? Our team is happy to help.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-950 rounded-xl font-bold hover:bg-slate-200 transition-colors">
                <MessageCircle size={18} /> Chat with Support
              </button>
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-slate-600 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors">
                <Mail size={18} /> Email Us
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default FAQ;