"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import exerciseLady from "@/assets/service.png";

const features = [
  "For developers and AI models BeFT Model Context Protocol Server (Soon).",
  "AI-Powered Personalized Plans, BeFT AI Chatbot, affordable subscription prices",
  "BeFT as a Service for GYMs, trainers and diet specialists (Soon)",
  "For GYMs BeFT AI API (Soon)",
];

export default function OurServices() {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-4 lg:gap-12 items-end">
          {/* Left Content */}
          <div className="space-y-8 md:px-8 pt-12  md:py-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
              Powerful features
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

          {/* Right Content  */}
          <div>
            <Image src={exerciseLady} alt="Exercise Lady" objectFit="contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
