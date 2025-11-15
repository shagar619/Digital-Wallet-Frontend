import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const Faq = () => {

  const faqs = [
    {
      q: "What is the cash-out fee?",
      a: "For every 1000 Taka or above, the cash-out fee is 20 Taka, shared fairly between the Agent and Admin.",
    },
    {
      q: "Can I send money to other users?",
      a: "Yes, users can securely transfer money to others instantly with just a few clicks.",
    },
    {
      q: "How can agents top-up user accounts?",
      a: "Agents can easily add money to user accounts directly and assist with transactions.",
    },
    {
      q: "Is my money safe?",
      a: "Absolutely! We use top-tier security measures to ensure your digital wallet remains fully protected.",
    },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen pt-24 px-6">
      <section className="max-w-5xl mx-auto py-16">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
        >
          Frequently Asked Questions
        </motion.h1>

        {/* Subtitle */}
        <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto my-12">
          Got questions? We've got answers! Learn more about our fees,
          transfers, and security measures.
        </p>

        {/* FAQ Cards */}
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card text-card-foreground p-6 rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] border-l-4 border-primary transition-transform duration-300 cursor-pointer"
            >
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 mr-3">
                  <HelpCircle
                    className="w-5 h-5"
                    style={{ color: "var(--primary)" }}
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold">{faq.q}</h3>
              </div>
              <p className="text-muted-foreground">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Faq;
