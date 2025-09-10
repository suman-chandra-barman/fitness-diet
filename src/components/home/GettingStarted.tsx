"use client";

import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import step1 from "@/assets/step1.png";
import step2 from "@/assets/step2.png";
import step3 from "@/assets/step3.png";
import step4 from "@/assets/step4.png";

export default function GettingStarted() {
  const steps = [
    {
      title: "Download The App",
      description:
        "You can download the App from App Store or Google Play Store",
      image: step1,
    },
    {
      title: "Create and Personalize",
      description:
        "Create your account and Start personalizing your preferences!",
      image: step2,
    },
    {
      title: "Start Your Workout!",
      description: "Choose the workout based on your preferences.",
      image: step3,
    },
    {
      title: "Analyze and Repeat!",
      description: "Gain valuable insights into your progress and performance.",
      image: step4,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Getting Started is Simple!
      </h2>
      <p className="text-center text-gray-500 mb-20">
        Easy step to start your workout
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <Card
            key={index}
            className={`overflow-hidden py-0 border-0 shadow-none ${
              index % 2 === 0 ? "mt-[-50px]" : ""
            }`}
          >
            <CardContent className="p-0">
              <Image
                src={step.image}
                alt={step.title}
                width={300}
                height={500}
                className="w-full h-auto object-cover rounded-lg"
              />
              <CardTitle className="text-xl md:text-2xl font-bold mt-4">
                {step.title}
              </CardTitle>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
