import {
  ShieldCheck,
  Wallet,
  ArrowUpCircle,
  ArrowDownCircle,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";

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
  ];

  return (
    <div className="bg-background text-foreground min-h-screen pt-24 px-6">
      <section className="max-w-6xl mx-auto py-20">
        {/* Section Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
        >
        Available  Features
        </motion.h1>
        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mt-2 mb-14">
          Discover the essential tools that make digital transactions simple,
          secure, and seamless.
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
              className="bg-card text-card-foreground p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <f.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">{f.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Feature;
