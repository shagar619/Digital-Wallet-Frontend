import {
  ShieldCheck,
  Wallet,
  ArrowUpCircle,
  ArrowDownCircle,
  Send,
  Smartphone,
  CreditCard,
  DollarSign,
  BarChart3,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Feature = () => {
  const features = [
    {
      title: "Save Money",
      desc: "Securely store your savings in a digital wallet with full protection.",
      icon: Wallet,
    },
    {
      title: "Top-up Money",
      desc: "Easily recharge your wallet balance anytime through agents.",
      icon: ArrowUpCircle,
    },
    {
      title: "Withdraw Money",
      desc: "Instantly withdraw cash with transparent service charges.",
      icon: ArrowDownCircle,
    },
    {
      title: "Send Money",
      desc: "Transfer money to other users in seconds, safely and reliably.",
      icon: Send,
    },
    {
      title: "Agent Services",
      desc: "Agents provide top-up support and assist with secure transactions.",
      icon: ShieldCheck,
    },
    {
      title: "Service Fees",
      desc: "For every cash-out above 1000 Taka, a 20 Taka fee applies—shared between Agent and Admin.",
      icon: ShieldCheck,
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      desc: "Access your wallet anytime, anywhere from your mobile device with our intuitive app.",
    },
    {
      icon: CreditCard,
      title: "Multiple Payment Methods",
      desc: "Link your bank accounts, cards, and other payment methods for easy transactions.",
    },
    {
      icon: DollarSign,
      title: "Send & Receive Money",
      desc: "Transfer money instantly to friends, family, or merchants with just a tap.",
    },
    {
      icon: BarChart3,
      title: "Transaction Analytics",
      desc: "Track your spending patterns with detailed charts and insights to manage your money better.",
    },
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 min-h-screen pt-24 px-6">
      <section className="max-w-6xl mx-auto py-20">
        {/* Section Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-black dark:text-white"
        >
        Available  Features
        </motion.h1>
        <p className="text-lg text-gray-900 dark:text-gray-200 text-center max-w-2xl mx-auto mt-2 mb-14">
          Discover the essential tools that make digital transactions simple,
          secure, and seamless. Everything you need to manage your money securely and efficiently in one place
        </p>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative group bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-gray-200 dark:border-gray-700 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <f.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mt-6 text-gray-900 dark:text-white">{f.title}</h3>

              {/* Description */}
              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <p className="text-white mb-4">
          Ready to experience the future of digital payments?
        </p>
        <Link 
          to="/register" 
          className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
        >
          Get started for free
        <Zap className="w-4 h-4" />
        </Link>
    </div>

    </div>
  );
};

export default Feature;
