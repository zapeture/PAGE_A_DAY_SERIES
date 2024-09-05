import BelowTheFoldSection from "@/components/BelowTheFoldSection";
import Header from "@/components/Header";
import SideBySideShowcase from "@/components/SideBySideShowcase";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <BelowTheFoldSection />
      <SideBySideShowcase />
      <Testimonials/>
    </>
  );
}
