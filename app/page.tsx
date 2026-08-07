import HeroSection from "@/Components/HeroSection";
import WelcomeSection from "@/Components/WelcomeSection";
import VisionMissionSection from "@/Components/VisionMissionSection";
import UpcomingEventsSection from "@/Components/UpcomingEventsSection";
import MinistrySection from "@/Components/MinistrySection";
import SermonsSection from "@/Components/SermonsSection";
import AnnouncementsSection from "@/Components/AnnouncementsSection";
import GallerySection from "@/Components/GallerySection";
import SupportMissionSection from "@/Components/SupportMissionSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WelcomeSection />
      <VisionMissionSection />
      <UpcomingEventsSection />
      <MinistrySection />
      <SermonsSection />
      <AnnouncementsSection />
      <GallerySection />
      <SupportMissionSection />
    </main>
  );
}
