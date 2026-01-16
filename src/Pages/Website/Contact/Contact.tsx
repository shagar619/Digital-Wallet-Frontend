import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, MessageSquare, 
  Send, CheckCircle2, Loader2 
} from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    // Simulate network request
    setTimeout(() => {
      setFormState('success');
    }, 2000);
  };

  return (
    <div className="bg-slate-950 min-h-screen font-sans selection:bg-emerald-500/30">
      
      {/* 1. HEADER SECTION */}
      <section className="pt-40 pb-16 px-6 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Get in <span className="text-emerald-400">touch.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Have a question about the API, Enterprise plans, or just want to say hi? We're here to help.
          </motion.p>
        </div>
      </section>

      {/* 2. MAIN CONTENT GRID */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            
            {/* LEFT: Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-10 backdrop-blur-sm relative overflow-hidden"
            >
              {/* Form Success Overlay */}
              {formState === 'success' && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-slate-900/95 z-20 flex flex-col items-center justify-center text-center p-8"
                >
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500 mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400">We've received your inquiry and will get back to you within 24 hours.</p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="mt-6 text-emerald-400 hover:text-emerald-300 font-medium"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">First Name</label>
                  <input type="text" placeholder="Jane" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" required />
                  </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" required />
                </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Email Address</label>
                  <input type="email" placeholder="jane@company.com" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" required />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Subject</label>
                  <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors">
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Enterprise Sales</option>
                    <option>Partnership</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Message</label>
                  <textarea rows={5} placeholder="Tell us how we can help..." className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none" required />
                </div>

                <button 
                  type="submit" 
                  disabled={formState === 'loading'}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formState === 'loading' ? (
                  <Loader2 className="animate-spin" />
                  ) : (
                  <>Send Message <Send size={18} /></>
                  )}
                </button>
              </form>
            </motion.div>

            {/* RIGHT: Contact Info & Map */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-8"
            >
              {/* Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-emerald-500/50 transition-colors group">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-emerald-400 mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <h3 className="text-white font-bold mb-1">Email Us</h3>
                  <p className="text-slate-400 text-sm">support@gigiwallet.com</p>
                  <p className="text-slate-400 text-sm">sales@gigiwallet.com</p>
                </div>
                
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-blue-500/50 transition-colors group">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <MessageSquare size={20} />
                  </div>
                  <h3 className="text-white font-bold mb-1">Live Chat</h3>
                  <p className="text-slate-400 text-sm">Available Mon-Fri</p>
                  <p className="text-slate-400 text-sm">9am - 5pm EST</p>
                </div>
              </div>

              {/* Abstract Map Visual */}
              <div className="flex-1 bg-slate-900 border border-slate-800 rounded-3xl relative overflow-hidden min-h-[300px] flex items-center justify-center">
                {/* Map Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px]" />
                {/* Radial Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                {/* Central HQ Beacon */}
                <div className="relative z-10 flex flex-col items-center">
                    <div className="relative">
                      <div className="w-4 h-4 bg-emerald-500 rounded-full relative z-10" />
                      <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-75" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-emerald-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-emerald-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                    </div>
                    <div className="mt-8 bg-slate-800/80 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-700 text-center">
                      <p className="text-white font-bold text-sm">Headquarters</p>
                      <p className="text-slate-400 text-xs">San Francisco, CA</p>
                    </div>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;