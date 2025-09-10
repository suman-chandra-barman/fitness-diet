import FeaturesSection from "@/components/home/Features";
import Footer from "@/components/home/Footer";
import GettingStarted from "@/components/home/GettingStarted";
import HeroSection from "@/components/home/HeroSection";
import Navbar from "@/components/home/Navbar";
import OurServices from "@/components/home/OurServices";
import PersonalizedResults from "@/components/home/PersonalizedResult";
import Upcomming from "@/components/home/Upcomming";
import UserInterface from "@/components/home/UserInterface";

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
      <UserInterface />
      <Footer />
    </div>
  );
}
