"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import phones from "@/assets/user-interface.png";

const features = [
  "Personalized Fitness & Meal Plans",
  "AI Chat Coach",
  "Smart Food Image Analysis",
  "Workout Programs for Gym & Home",
  "Smartwatch Integration",
  "Goal-Oriented Training by Level",
  "Custom Meal Plans",
];

export default function UserInterface() {
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div>
          <h2 className="font-bold text-2xl md:text-4xl text-center">
            Application with the best user interface
          </h2>
          <div className="h-1 bg-gray-300 w-[350px] md:w-[500px] mx-auto mt-5"></div>
          <div className="h-1 bg-gray-300 w-[200px] md:w-[300px] mx-auto mt-1"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 lg:gap-12 items-end">
          {/* Left Content */}
          <div>
            <Image src={phones} alt="User Interface" objectFit="contain" />
          </div>
          {/* Right Content  */}
          <div className="space-y-8 md:px-8 pt-12  md:py-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
              No More Expensive Coaches Just Better Result
            </h2>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-6 h-6 bg-gray-800 rounded-sm flex items-center justify-center mt-0.5 group-hover:bg-gray-700 transition-colors">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className=" text-gray-700 leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <Button>Try the AI Coach - Free!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
