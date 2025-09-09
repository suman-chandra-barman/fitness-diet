import React from "react";
import localFont from "next/font/local";
import heroImg from "@/assets/hero1.png";
import Image from "next/image";

const phonk = localFont({
  src: "../../../public/fonts/Phonk Regular DEMO.otf",
  weight: "400",
  style: "normal",
});

function HeroSection() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Content */}
        <div className="flex flex-col md:pt-16">
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight ${phonk.className}`}
          >
            BeFT AI <br /> Wellness Made <br /> Personal
          </h1>
          <p className="mt-4 text-gray-600 max-w-lg">
            BeFT helps you crush your fitness goals with personalized AI-powered
            plans tailored just for you. Whether you&apos;re a beginner or a
            pro, BeFT gives you the coaching you need — anytime, anywhere.
          </p>
        </div>
        {/* Image */}
        <div>
          <Image src={heroImg} alt="Hero Image" layout="responsive" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
