import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SkeletonCard from "@/Pages/MYComponent/SkeletonCard";
import Hero from "@/section/Hero";


const Home = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

    const stats = [
    { value: "1M+", label: "Active Users" },
    { value: "$50B+", label: "Transactions" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Support" },
  ];


  return (
    <div className="bg-background text-foreground min-h-screen">

      {/* Hero Section */}
      <Hero></Hero>

      {/* Features Section */}
      <section
        id="features"
        className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950"
      >

      {/* stats */}
      <div className="w-10/12 mx-auto">
        <div 
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 mb-36">
          {stats.map((stat, index) => (
          <div
          key={index} className="text-center">
          <div className="text-white text-3xl font-extrabold group-hover:scale-110 bg-gradient-to-tr from-primary to-blue-500 shadow-md py-6 rounded-lg hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer">
            {stat.value}
          </div>
          <div className="text-xl font-semibold mt-2">
            {stat.label}
          </div>
          </div>
          ))}
      </div>
      </div>

        <div className="max-w-[1300px] mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-14">
            Why Choose <span className="text-primary">Digi Wallet</span> ?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-14">
            Discover the tools that make managing your digital wallet faster,
            safer, more convenient than ever and cutting-edge features.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {loading ? (
              <>
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </>
            ) : (
              [
                {
                  title: "Fast Transactions",
                  desc: "Experience lightning-fast payments and transfers anytime, anywhere.",
                  icon: "⚡",
                },
                {
                  title: "Top Security",
                  desc: "Bank-grade encryption and AI monitoring keep your money safe 24/7.",
                  icon: "🔒",
                },
                {
                  title: "Multi-Role Support",
                  desc: "Designed for users, agents, and administrators",
                  icon: "🔒",
                },
                {
                  title: "Real-time Analytics",
                  desc: "Track your spending and income with detailed insights",
                  icon: "🌍",
                },
                {
                  title: "24/7 Access",
                  desc: "Manage your wallet anytime with seamless cross-device sync.",
                  icon: "🌍",
                },
                {
                  title: "24/7 Access",
                  desc: "Manage your wallet anytime with seamless cross-device sync.",
                  icon: "🌍",
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="relative group bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-gray-200 dark:border-gray-700 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-tr from-primary to-blue-500 text-white text-3xl shadow-md group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mt-6 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
