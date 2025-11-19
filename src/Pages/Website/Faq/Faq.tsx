import SkeletonCard from "@/Pages/MYComponent/SkeletonCard";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { useEffect, useState } from "react";

const Faq = () => {

    const [loading, setLoading] = useState(true);
      
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1000);
      return () => clearTimeout(timer);
    }, []);

    const faqs = [
    {
      question: "How do I create a PayWallet account?",
      answer: "Creating an account is simple! Click on 'Get Started' or 'Register', fill in your basic information including name, email, phone number, and choose your account type (User or Agent). Verify your email and phone, and you're all set!"
    },
    {
      question: "Is PayWallet secure?",
      answer: "Absolutely! We use bank-level encryption, two-factor authentication, and comply with international security standards. All sensitive data is encrypted and your transactions are protected with advanced fraud detection systems."
    },
    {
      question: "What are the transaction fees?",
      answer: "Transaction fees vary by transaction type: Send Money (1% fee, max $5), Cash Out (1.5% fee, max $10), Bill Payments (Free), and Merchant Payments (2% for business accounts). Premium and Business plans may have reduced fees."
    },
    {
      question: "How do I add money to my wallet?",
      answer: "You can add money through multiple methods: via an agent cash-in, bank transfer, or linked debit/credit cards. Simply select 'Add Money' from your dashboard and choose your preferred method."
    },
    {
      question: "Can I send money internationally?",
      answer: "Yes! PayWallet supports international transfers to over 150 countries. Multi-currency support is available for Premium and Business accounts with competitive exchange rates."
    },
    {
      question: "What's the difference between User and Agent accounts?",
      answer: "User accounts are for personal use - sending, receiving money, and making payments. Agent accounts are for authorized partners who can help users cash in/out and earn commissions on transactions."
    },
    {
      question: "How long do transactions take?",
      answer: "Most transactions are instant! Money transfers, bill payments, and merchant transactions are processed in real-time. Bank withdrawals may take 1-3 business days depending on your bank."
    },
    {
      question: "What if I forget my password?",
      answer: "Click on 'Forgot Password' on the login page, enter your registered email, and we'll send you a password reset link. You can also contact support for assistance."
    },
    {
      question: "Are there transaction limits?",
      answer: "Yes, limits vary by account type. Basic accounts have standard limits, while Premium and Business accounts enjoy higher transaction limits. You can view your specific limits in your account settings."
    },
    {
      question: "How do I become an agent?",
      answer: "To become an agent, register with an Agent account type, complete the verification process including business documentation, and await approval from our team. Once approved, you can start serving customers and earning commissions."
    },
    {
      question: "What should I do if I suspect unauthorized access?",
      answer: "Immediately change your password, enable two-factor authentication if not already active, and contact our 24/7 support team. We'll help secure your account and investigate any suspicious activity."
    },
    {
      question: "Can I cancel a transaction?",
      answer: "Once a transaction is completed, it cannot be canceled as funds are transferred instantly. However, you can request a refund from the recipient or contact support for assistance with disputed transactions."
    }
  ];
  //   {
  //     q: "What is the cash-out fee?",
  //     a: "For every 1000 Taka or above, the cash-out fee is 20 Taka, shared fairly between the Agent and Admin.",
  //   },
  //   {
  //     q: "Can I send money to other users?",
  //     a: "Yes, users can securely transfer money to others instantly with just a few clicks.",
  //   },
  //   {
  //     q: "How can agents top-up user accounts?",
  //     a: "Agents can easily add money to user accounts directly and assist with transactions.",
  //   },
  //   {
  //     q: "Is my money safe?",
  //     a: "Absolutely! We use top-tier security measures to ensure your digital wallet remains fully protected.",
  //   },
  // ];

  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 min-h-screen pt-24 px-6">
      
      { loading? (
        <>
        <section className="max-w-4xl mx-auto py-16 space-y-4">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        </section>
        </>
      ):
      (
        <>
        <section className="max-w-4xl mx-auto py-16">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-4 text-black dark:text-white"
        >
          Frequently Asked Questions
        </motion.h1>

        {/* Subtitle */}
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-24 mt-8">
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
              className="relative group bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-gray-200 dark:border-gray-700 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer"
            >
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 mr-3">
                  <HelpCircle
                    className="w-5 h-5"
                    style={{ color: "var(--primary)" }}
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-black dark:text-white">{faq.question}</h3>
              </div>
              <p className="text-[15px] text-gray-700 dark:text-gray-300">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </section>
      </>
      )
      }

      {/* Contact CTA */}
      <div className="text-center mt-12">
        <p className="text-black dark:text-white mb-4">
          Still have questions? We're here to help!
        </p>
        <a 
          href="/contact" 
          className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
        >
          Contact Support
        </a>
    </div>
    </div> 
  );
};

export default Faq;
