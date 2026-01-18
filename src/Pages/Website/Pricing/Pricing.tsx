/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, X, ChevronDown, 
  Building 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// --- DATA ---
const plans = [
  {
    id: 'starter',
    name: 'Starter',
    desc: 'For individuals just getting started.',
    price: { monthly: 0, annual: 0 },
    features: [
      '1 Bank Account Link',
      'Basic Expense Tracking',
      '1 Virtual Card',
      'Standard Support',
      'Mobile App Access'
    ],
    notIncluded: ['Crypto Integration', 'Budget Rules', 'API Access']
  },
  {
    id: 'pro',
    name: 'Gigi Pro',
    desc: 'The complete financial operating system.',
    price: { monthly: 12, annual: 9 }, // $9/mo billed annually
    popular: true,
    features: [
      'Unlimited Bank Links',
      'Advanced AI Insights',
      'Unlimited Virtual Cards',
      'Crypto & DeFi Tracking',
      'Priority 24/7 Support',
      'Smart Budget Rules'
    ],
    notIncluded: ['Team Management', 'White-labeling']
  },
  {
    id: 'business',
    name: 'Business',
    desc: 'For startups and small teams.',
    price: { monthly: 49, annual: 39 },
    features: [
      'Everything in Pro',
      'Up to 5 Team Members',
      'Role-based Permissions',
      'Invoice Generation',
      'Developer API Access',
      'Dedicated Account Manager'
    ],
    notIncluded: []
  }
];

const faqs = [
  {
    question: "Is Gigi Wallet really free?",
    answer: "Yes! Our Starter plan is completely free forever. We believe basic financial health shouldn't have a paywall. We make money from our Pro and Business subscriptions."
  },
  {
    question: "How secure is my data?",
    answer: "We use bank-grade AES-256 encryption and never sell your data. We are SOC2 Type II compliant and regularly audited by third-party security firms."
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Anytime. If you cancel, you'll keep Pro features until the end of your billing cycle. No hidden fees or cancellation penalties."
  },
  {
    question: "Does the crypto tracking work with cold wallets?",
    answer: "Yes, you can add 'Watch Only' addresses for Ledger, Trezor, and other cold storage devices to track your total net worth safely."
  }
];

// --- SUB-COMPONENTS ---

const FAQItem = ({ question, answer, isOpen, onClick }: any) => {
  return (
    <div className="border-b border-slate-800">
      <button 
        onClick={onClick}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
      >
        <span className="text-lg font-medium text-slate-200">{question}</span>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="text-slate-500" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-400 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- MAIN COMPONENT ---

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <div className="bg-slate-950 min-h-screen font-sans selection:bg-emerald-500/30">
      
      {/* 1. HEADER & TOGGLE */}
      <section className="pt-40 pb-20 px-6 text-center relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Simple pricing for <span className="text-emerald-400">everyone.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 mb-12"
          >
            Choose the plan that fits your financial goals.
          </motion.p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-slate-500'}`}>Monthly</span>
            
            <Button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-16 h-8 bg-slate-800 rounded-full p-1 relative transition-colors hover:bg-slate-700"
            >
              <motion.div 
                animate={{ x: isAnnual ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-6 h-6 bg-white rounded-full shadow-lg"
              />
            </Button>
            
            <span className={`text-sm font-medium ${isAnnual ? 'text-white' : 'text-slate-500'}`}>
              Yearly 
              <span className="ml-2 inline-block px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-xs rounded-full border border-emerald-500/20">
                Save 20%
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* 2. PRICING CARDS */}
      <section className="pb-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={`relative p-8 rounded-3xl border flex flex-col h-full ${
                  plan.popular 
                    ? 'bg-slate-900 border-emerald-500 shadow-2xl shadow-emerald-900/20 z-10 scale-105 ring-1 ring-emerald-500/50' 
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-colors'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-400 text-sm h-10">{plan.desc}</p>
                </div>

                <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-white">
                    ${isAnnual ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span className="text-slate-500">/mo</span>
                </div>

                <div className="flex-1">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-sm text-slate-300">
                        <Check size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                        {feat}
                      </li>
                    ))}
                    {plan.notIncluded.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-sm text-slate-600">
                        <X size={18} className="shrink-0 mt-0.5" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  className={`w-full py-4 rounded-xl font-bold transition-all ${
                    plan.popular 
                      ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/25' 
                      : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'
                  }`}
                >
                  {plan.price.monthly === 0 ? 'Start for Free' : 'Get Started'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ENTERPRISE BANNER */}
      <section className="pb-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Building className="text-blue-400" />
                <h3 className="text-2xl font-bold text-white">Need a custom plan?</h3>
              </div>
              <p className="text-slate-400 max-w-md">
                We offer tailored solutions for large organizations, including dedicated instances, SSO, and custom audit logs.
              </p>
            </div>
            <div className="relative z-10">
              <button className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section className="pb-32 px-6 bg-slate-950">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-400">Everything you need to know about billing and plans.</p>
          </div>
          
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Pricing;
