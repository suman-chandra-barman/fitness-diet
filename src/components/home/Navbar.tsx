"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Try the AI Coach - Free!", href: "/ai-coach" },
  ];

  return (
    <nav className="w-full bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                alt="Logo"
                className="object-contain"
                width={60}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Desktop Join Button */}
          <div className="hidden md:block">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium transition-all duration-200 shadow-md hover:shadow-lg">
              Join Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader className="py-5">
                  <SheetTitle className="text-left">
                    <Link href="/" className="flex items-center">
                      <Image
                        src={logo}
                        alt="Logo"
                        className="object-contain"
                        width={52}
                      />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-6 mt-8 px-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4 border-t border-gray-200">
                    <Button
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      Join Now
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
