import FeaturesSection from "@/components/home/Features";
import GettingStarted from "@/components/home/GettingStarted";
import HeroSection from "@/components/home/HeroSection";
import Navbar from "@/components/home/Navbar";
import OurServices from "@/components/home/OurServices";
import PersonalizedResults from "@/components/home/PersonalizedResult";
import Upcomming from "@/components/home/Upcomming";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Upcomming />
      <PersonalizedResults />
      <FeaturesSection />
      <GettingStarted />
      <OurServices />
    </div>
  );
}
