import Heading1 from "./Heading1"
import Socials from "@components/Socials"

export default function NewRoad() {
  return (
    <section className="w-full pb-8">
      <div className="core-container mt-6">
        <div className="w-full flex">
          <div className="basis-full mobile_up:basis-1/2">
            <Heading1 text="new road" />
            <blockquote className="font-sans font-normal text-lg">
              We have a few ways to go in the middle of summer. Embrace the warm weather, seek the air-conditioned
              indoors, escape to the beach, or satisfy that seasonal urge to get away.
            </blockquote>
            <Socials />
          </div>
        </div>
      </div>
    </section>
  )
}
