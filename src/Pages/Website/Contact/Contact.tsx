import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Contact = () => {

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-background text-foreground min-h-screen pt-24 px-6">
      <section className="max-w-4xl mx-auto py-16">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
        >
          Contact Us
        </motion.h1>

        {/* Subtitle */}
        <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto my-12">
          Have questions or need assistance? Send us a message and we'll get
          back to you promptly.
        </p>

        {/* Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6 w-xl mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-xl bg-card text-card-foreground border border-input shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-xl bg-card text-card-foreground border border-input shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
            <textarea
              placeholder="Your Message"
              required
              
              
              rows={5}
              className="w-full p-4 resize-none rounded-xl bg-card text-card-foreground border border-input shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
            ></textarea>
            <Button
              type="submit"
              className="w-full py-6 text-gray-300 text-base bg-primary hover:bg-primary/90 transition-all"
            >
              Send Message
            </Button>
          </form>
        ) : (
          <div className="text-center bg-green-100 border border-green-400 text-green-800 rounded-xl p-6 shadow-md">
            Your inquiry has been submitted successfully!
          </div>
        )}
      </section>
    </div>
  );
};

export default Contact;
