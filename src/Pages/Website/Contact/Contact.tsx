import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import SkeletonCard from "@/Pages/MYComponent/SkeletonCard";

const Contact = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1000);
      return () => clearTimeout(timer);
    }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
  };

    const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "support@paywallet.com",
      link: "mailto:support@paywallet.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+880 1234-567890",
      link: "tel:+8801234567890"
    },
    {
      icon: MapPin,
      title: "Office",
      value: "Dhaka, Bangladesh",
      link: "#"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      value: "Available 24/7",
      link: "#"
    }
  ];


  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 min-h-screen pt-24 px-6">
      
      <section className="py-16">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-black dark:text-white"
        >
          Contact Us
        </motion.h1>

        {/* Subtitle */}
        <p className="text-center text-lg text-gray-600 dark:text-gray-200 max-w-4xl mx-auto mb-24 mt-8">
          Have questions or need assistance? <br /> Send us a message and we'll get
          back to you promptly.
        </p>

      { loading? (
        <>
        <section className="max-w-4xl mx-auto py-16 space-y-4">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        </section>
        </>
      ): (
          <>
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index} className="relative group bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-gray-200 dark:border-gray-700 p-4 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer">
                <div className="p-2">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black dark:text-white mb-1">{info.title}</h3>
                      <Link 
                        to={info.link}
                        className="text-sm hover:text-primary hover:underline text-gray-700 dark:text-gray-300 transition-colors"
                      >
                        {info.value}
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="relative group bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-gray-200 dark:border-gray-700 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer">
              <div>
                <h1 className="text-2xl text-black dark:text-white font-bold">Send us a Message</h1>
                <p className="text-gray-700 dark:text-gray-300 mt-2 mb-10">
                  Fill out the form below and we'll respond within 24 hours
                </p>
              </div>
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-black dark:text-white" htmlFor="name">Full Name</Label>
                      <Input className="dark:border-none" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-black dark:text-white" htmlFor="email">Email</Label>
                      <Input className="dark:border-none" id="email" type="email" placeholder="email@example.com" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-black dark:text-white" htmlFor="phone">Phone Number</Label>
                    <Input className="dark:border-none" id="phone" type="tel" placeholder="+880 1234-567890" />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-black dark:text-white" htmlFor="subject">Subject</Label>
                    <Input className="dark:border-none" id="subject" placeholder="How can we help?" required />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-black dark:text-white" htmlFor="message">Message</Label>
                    <Textarea 
                      className="dark:border-none"
                      id="message" 
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full gradient-primary">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
        </>
        )}


      </section>

    </div>
  );
};

export default Contact;
