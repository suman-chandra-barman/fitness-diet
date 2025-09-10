"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import facebook from "@/assets/svg/social/facebook.svg";
import instagrame from "@/assets/svg/social/instagrame.svg";
import twitter from "@/assets/svg/social/twitter.svg";
import phoneMockup from "@/assets/step1.png";
import playstore from "@/assets/play-store.png";

export default function Footer() {
  return (
    <footer className="bg-[#F2ECFF] py-6 md:mt-[100px]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Image src={logo} alt="BeFT Logo" width={100} height={50} />
          <p className="text-sm text-gray-600 mt-2">
            Smarter training, data-driven <br /> fitness for everyone
          </p>
          <div className="flex space-x-4 mt-2">
            <Link href="#">
              <Image src={facebook} alt="Facebook" width={24} height={24} />
            </Link>
            <Link href="#">
              <Image src={instagrame} alt="Instagram" width={24} height={24} />
            </Link>
            <Link href="#">
              <Image src={twitter} alt="Twitter" width={24} height={24} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
          <div>
            <h3 className="font-bold mb-2">Quick Action</h3>
            <Link
              href="#"
              className="block text-sm text-gray-600 hover:text-gray-800"
            >
              Home
            </Link>
            <Link
              href="#"
              className="block text-sm text-gray-600 hover:text-gray-800"
            >
              Try the AI Coach - Free!
            </Link>
          </div>
          <div>
            <h3 className="font-bold mb-2">Policy</h3>
            <Link
              href="#"
              className="block text-sm text-gray-600 hover:text-gray-800"
            >
              Terms of Condition
            </Link>
            <Link
              href="#"
              className="block text-sm text-gray-600 hover:text-gray-800"
            >
              Privacy policy
            </Link>
          </div>
        </div>
        <div className="mt-4 md:mt-0 relative">
          <Image
            src={phoneMockup}
            alt="App Store"
            width={200}
            height={50}
            className="md:absolute -top-45"
          />
          <p className="text-xl mt-2 font-bold">Download The App</p>
          <Link href="#">
            <Image
              src={playstore}
              alt="Google Play"
              width={150}
              height={50}
              className="mt-2"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
