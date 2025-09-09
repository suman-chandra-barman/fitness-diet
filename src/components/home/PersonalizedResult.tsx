"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import icon1 from "@/assets/svg/1.svg";
import icon2 from "@/assets/svg/2.svg";
import icon3 from "@/assets/svg/3.svg";
import icon4 from "@/assets/svg/4.svg";
import Image from "next/image";

interface FeatureCard {
  id: number;
  icon: string;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

const PersonalizedResults = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const features: FeatureCard[] = [
    {
      id: 1,
      icon: icon1,
      title: "More Details = Better Plans",
      description:
        "Share your full health and fitness info for the most accurate diet and workout plans.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: 2,
      icon: icon2,
      title: "Tailored to You",
      description:
        "Age, height, weight, activity level, health conditions, and preferences help AI customize everything.",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      id: 3,
      icon: icon3,
      title: "Maximize Your Results",
      description:
        "Get meal and workout plans that match your exact needs and goals.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      id: 4,
      icon: icon4,
      title: "Avoid Generic Suggestions",
      description: "Incomplete info means the AI can only give basic guidance.",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hover: {
      y: -8,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 my-12 py-12">
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
        className="text-center mb-12"
      >
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          variants={cardVariants}
        >
          Get 100% Personalized Results
        </motion.h2>
        <motion.p
          className="text-lg sm:text-xl text-gray-600 leading-relaxed"
          variants={cardVariants}
        >
          Complete your user profile to unlock fully personalized diet and
          workout plans tailored just for you.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            variants={cardVariants}
            whileHover="hover"
            className="group relative"
            onMouseEnter={() => setActiveCard(feature.id)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
              {/* Icon Container */}
              <motion.div
                className={`${feature.bgColor} ${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  className="w-8 h-8"
                />
              </motion.div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect Overlay */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                initial={false}
              />

              {/* Active Card Indicator */}
              {activeCard === feature.id && (
                <motion.div
                  className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${
                    feature.id === 1
                      ? "from-blue-400 to-blue-600"
                      : feature.id === 2
                      ? "from-green-400 to-green-600"
                      : feature.id === 3
                      ? "from-purple-400 to-purple-600"
                      : "from-orange-400 to-orange-600"
                  } opacity-20 -z-10`}
                  layoutId="activeCard"
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PersonalizedResults;
