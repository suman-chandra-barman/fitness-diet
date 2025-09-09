import HeroSection from "@/components/home/HeroSection";
import Navbar from "@/components/home/Navbar";
import Upcomming from "@/components/home/Upcomming";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Upcomming />
    </div>
  );
}
