import { Award, Eye, Target, Users } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {

    const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To make financial services accessible to everyone through innovative digital solutions."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "A world where financial transactions are seamless, secure, and available to all."
    },
    {
      icon: Users,
      title: "Our Team",
      description: "A diverse group of fintech experts, developers, and designers passionate about change."
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Trust, innovation, security, and customer-centricity drive everything we do."
    }
  ];


  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 min-h-screen pt-24 px-6">

    <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto my-16">
          <h1 className="text-4xl text-black dark:text-white md:text-5xl font-bold mb-4">
            About  
            <span className="text-primary ml-5">DIGI WALLET</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Revolutionizing digital payments for millions of users worldwide
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 md:p-12 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer">
              <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Our Story</h2>
              <div className="space-y-4 text-gray-900 dark:text-gray-300">
                <p>
                  Founded in 2020, PayWallet emerged from a simple idea: financial services should be 
                  accessible, secure, and user-friendly for everyone. What started as a small team of 
                  passionate technologists has grown into a trusted platform serving over 1 million users.
                </p>
                <p>
                  We recognized the challenges people face with traditional banking systems - long wait times, 
                  complex processes, and limited accessibility. PayWallet was born to address these pain points 
                  by leveraging cutting-edge technology to create a seamless digital wallet experience.
                </p>
                <p>
                  Today, we're proud to offer a comprehensive suite of financial services including instant 
                  money transfers, bill payments, merchant transactions, and more. Our commitment to innovation 
                  and security has made us a leader in the digital payment space.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="w-10/12 mx-auto grid md:grid-cols-2 gap-6 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-gray-200 dark:border-gray-700 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer">
              <div className="p-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-tr from-primary to-blue-500 text-gray-600 dark:text-gray-300 text-3xl shadow-md group-hover:scale-110 transition-transform mb-3">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="rounded-2xl p-8 md:p-12 shadow-soft">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Our Impact</h2>
          <div className="w-10/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl text-white font-extrabold group-hover:scale-105 bg-gradient-to-tr from-primary to-blue-500 shadow-md py-3 rounded-lg hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer">
                1M+
              </div>
              <div className="text-base font-semibold mt-2 text-gray-900 dark:text-white">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl text-white font-extrabold group-hover:scale-105 bg-gradient-to-tr from-primary to-blue-500 shadow-md py-3 rounded-lg hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer">
                $50B+
              </div>
              <div className="text-base font-semibold mt-2 text-gray-900 dark:text-white">Transactions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl text-white font-extrabold group-hover:scale-105 bg-gradient-to-tr from-primary to-blue-500 shadow-md py-3 rounded-lg hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer">
                10K+
              </div>
              <div className="text-base font-semibold mt-2 text-gray-900 dark:text-white">Agent Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl text-white font-extrabold group-hover:scale-105 bg-gradient-to-tr from-primary to-blue-500 shadow-md py-3 rounded-lg hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer">
                150+
              </div>
              <div className="text-base font-semibold mt-2 text-gray-900 dark:text-white">Countries</div>
            </div>
          </div>
        </div>
      </div>

      {/* section part */}
      <section className="max-w-6xl mx-auto py-20">

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold mb-10 text-center text-primary">
            Meet Our Team
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {["Founder", "CTO", "Support Manager"].map((role, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative group bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-gray-200 dark:border-gray-700 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white text-center mb-3">
                  {role}
                </h3>
                <p className="text-gray-900 dark:text-gray-300 text-center leading-relaxed">
                  Dedicated to making financial services simpler, smarter, and
                  accessible for everyone.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
