import { Users } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {

  return (
    <div className="bg-background text-foreground min-h-screen pt-24 px-6">
      <section className="max-w-6xl mx-auto py-20">
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
        >
          About Digital Wallet Management
        </motion.h1>
        <p className="text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          Digital Wallet Management is a next-generation platform built to make
          transactions{" "}
          <span className="font-semibold text-foreground">faster, safer,</span>{" "}
          and more reliable. From secure savings to instant transfers, we
          empower individuals and businesses with seamless financial solutions
          designed for trust and convenience.
        </p>

        {/* Mission Section */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">Our Mission</h2>
          <p className="text-muted-foreground max-w-4xl mx-auto text-lg leading-relaxed">
            Our mission is to redefine digital finance with
            <span className="font-semibold text-foreground">
              {" "}
              transparency, security,
            </span>
            and accessibility. We believe in building trust by delivering
            reliable cash-in, cash-out, and transfer services — all at fair
            charges — so that everyone can experience financial freedom.
          </p>
        </div>

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
                className="bg-card text-card-foreground p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">
                  {role}
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
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
