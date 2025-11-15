import { motion } from "framer-motion";
import { DollarSign } from "lucide-react";

const Pricing = () => {
  const tiers = [
    {
      name: "Add Money",
      price: "Free",
      desc: "Deposit funds securely and access all basic wallet features at no cost.",
    },
    {
      name: "Withdraw Money",
      price: "৳20 / 1000",
      desc: "Instant cash-out with transparent service fees and reliable support.",
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "Tailored solutions and premium support for businesses and agents.",
    },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen pt-24 px-6">
      <section className="max-w-6xl mx-auto py-16">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
        >
          Pricing & Service Fees
        </motion.h1>

        {/* Subtitle */}
        <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mt-8 mb-14">
          Enjoy transparent pricing with no hidden charges. Cash-out fees are
          shared fairly between Agents and Admins, keeping the system balanced
          and sustainable.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-card text-card-foreground p-8 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 text-center cursor-pointer"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mx-auto mb-6">
                <DollarSign
                  className="w-8 h-8"
                  style={{ color: "var(--primary)" }}
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2">{tier.name}</h3>
              <p
                className="text-xl font-bold mb-3"
                style={{ color: "var(--primary)" }}
              >
                {tier.price}
              </p>
              <p className="text-muted-foreground">{tier.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing;
