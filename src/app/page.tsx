import BottomNavbar from "@/components/navbar/BottomNavbar";
import MobileNavbar from "@/components/navbar/MobileNavbar";
import Navbar from "@/components/navbar/Navbar";
import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import StepsSection from "@/components/sections/StepsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import LastSection from "@/components/sections/LastSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <div className=" bg-firstcolormedium w-screen h-20 flex justify-center dashed-border">
        <Navbar />
        <MobileNavbar />
      </div>
      <div className="w-full" />
      <main className=" w-screen h-screen">
        <HomeSection />
        <AboutSection />
        <StepsSection />
        <TestimonialSection />
        <LastSection />
        <ContactSection />
      </main>
      <BottomNavbar />
    </>
  );
}
