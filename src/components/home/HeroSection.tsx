import React from "react";
import localFont from "next/font/local";
import heroImg from "@/assets/hero1.png";
import Image from "next/image";
import { Button } from "../ui/button";

const phonk = localFont({
  src: "../../../public/fonts/Phonk Regular DEMO.otf",
  weight: "400",
  style: "normal",
});

function HeroSection() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Content */}
        <div className="flex flex-col lg:pt-10">
          <h1
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight ${phonk.className}`}
          >
            BeFT AI <br /> Wellness Made <br /> Personal
          </h1>
          <p className="mt-4 text-gray-600 max-w-lg">
            BeFT helps you crush your fitness goals with personalized AI-powered
            plans tailored just for you. Whether you&apos;re a beginner or a
            pro, BeFT gives you the coaching you need — anytime, anywhere.
          </p>
          <div className="flex gap-4 mt-6 flex-wrap">
            <Button variant="outline">Join the Fitness Revolution</Button>
            <Button variant="default">Try the AI Coach – Free!</Button>
          </div>
        </div>
        {/* Image */}
        <div>
          <Image src={heroImg} alt="Hero Image" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
