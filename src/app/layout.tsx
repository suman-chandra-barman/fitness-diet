import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fitness and Diet App",
  description: "A web application for fitness and diet tracking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
