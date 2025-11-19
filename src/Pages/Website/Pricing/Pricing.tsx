import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SkeletonCard from "@/Pages/MYComponent/SkeletonCard";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Pricing = () => {

    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1000);
      return () => clearTimeout(timer);
    }, []);

    const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for personal use",
      features: [
        "Send & Receive Money",
        "Bill Payments",
        "Transaction History",
        "Email Support",
        "Basic Security",
      ]
    },
    {
      name: "Premium",
      price: "$4.99",
      period: "/month",
      description: "For power users",
      features: [
        "Everything in Basic",
        "Priority Support",
        "Advanced Analytics",
        "Higher Transaction Limits",
        "Multi-Currency Support",
        "Cashback Rewards",
      ],
      popular: true
    },
    {
      name: "Business",
      price: "$19.99",
      period: "/month",
      description: "For businesses & merchants",
      features: [
        "Everything in Premium",
        "Business Dashboard",
        "API Access",
        "Bulk Transactions",
        "Dedicated Account Manager",
        "Custom Integration",
        "Advanced Reporting",
      ]
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 min-h-screen pt-24 px-6">

    {/* Header */}
    <div className="text-center max-w-3xl mx-auto my-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-black dark:text-white mb-8">
            Simple Transparent Pricing
        </motion.h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Enjoy transparent pricing with no hidden charges. Cash-out fees are
          shared fairly between Agents and Admins, keeping the system balanced
          and sustainable.
        </p>
    </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-24">

      { loading? (
        <>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        </>
      )
      :
      (
      <>
        {plans.map((plan, index) => (
        <Card 
          key={index} 
          className={`relative group bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-gray-200 dark:border-gray-700 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer ${
          plan.popular ? 'ring-2 ring-primary shadow-strong' : ''
          }`}
          >
            {plan.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-primary px-4 py-1 rounded-full text-white text-sm font-medium">
                Most Popular
              </span>
              </div>
          )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${plan.popular ? 'gradient-primary' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                  asChild
                >
                  <Link to="/register">
                    Get Started
                  </Link>
                </Button>
              </CardContent>
        </Card>
        ))}
      </>
      )}
    </div>

        {/* Transaction Fees */}
        <div className="max-w-4xl mx-auto mt-26">
          <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">Transaction Fees</h2>
          <div className="shadow-soft relative group bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-gray-200 dark:border-gray-700 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer">
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-black dark:text-white font-bold mb-2">Send Money</h3>
                  <p className="text-sm text-muted-foreground">1% fee (max $5) per transaction</p>
                </div>
                <div>
                  <h3 className="text-black dark:text-white font-bold mb-2">Cash Out</h3>
                  <p className="text-sm text-muted-foreground">1.5% fee (max $10) per withdrawal</p>
                </div>
                <div>
                  <h3 className="text-black dark:text-white font-bold mb-2">Bill Payment</h3>
                  <p className="text-sm text-muted-foreground">Free for all users</p>
                </div>
                <div>
                  <h3 className="text-black dark:text-white font-bold mb-2">Merchant Payment</h3>
                  <p className="text-sm text-muted-foreground">2% fee for business accounts</p>
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>
  );
};

export default Pricing;
