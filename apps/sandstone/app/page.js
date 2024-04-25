import Awards from "@/components/Awards";
import OurPerfectTeam from "@/components/OurPerfectTeam";
import Places from "@/components/Places";
import Pricing from "@/components/Pricing";
import SandsAndRoses from "@/components/SandsAndRoses";

export default function Home() {
  return (
    <>
      <Places />
      <SandsAndRoses />
      <Pricing />
      <OurPerfectTeam />
      <Awards />
    </>
  );
}
