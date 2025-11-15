
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SkeletonCard from "@/Pages/MYComponent/SkeletonCard";
import bannerImg from "../../../assets/hero1.jpg";

const Home = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* <Navbar /> */}

      {/* Hero Section */}

      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-center px-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/5"></div>

        {/* Content */}
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold text-blue-600 drop-shadow-lg"
          >
            Digital Wallet System
          </motion.h1>

          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Manage your money with elegance, speed, and security.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button className="bg-primary text-gray-300 hover:text-primary-foreground hover:bg-primary/90 cursor-pointer">
              Get Started
            </Button>
            <Button
              variant="outline"
              className="border border-white text-gray-300 hover:bg-primary hover:text-primary-foreground transition cursor-pointer"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-14">
            Powerful <span className="text-primary">Features</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-14">
            Discover the tools that make managing your digital wallet faster,
            safer, and more convenient than ever.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {loading ? (
              <>
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
