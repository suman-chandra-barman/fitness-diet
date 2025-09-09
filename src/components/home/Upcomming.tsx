import Image from "next/image";
import React from "react";
import comingSoon from "@/assets/upcoming.png";

function Upcomming() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-12">
      <div className="max-w-5xl mx-auto p-8 bg-[#F2ECFF] rounded-2xl">
        <div className="flex items-center justify-center flex-wrap gap-8">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-center">
              Our Mobile App is
            </h2>
            <p className="text-3xl md:text-5xl lg:text-6xl text-orange-500 font-bold">
              Coming Soon!
            </p>
          </div>
          <div>
            <Image src={comingSoon} alt="Coming Soon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upcomming;
