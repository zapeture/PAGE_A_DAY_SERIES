import Header from "@/components/header";
import Hero from "@/components/hero";
import AiSection from "@/components/ai-section";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AiSection />
      <Features />
      <Testimonials />
    </main>
  );
}
