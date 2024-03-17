import Heading1 from "./Heading1";

export default function About() {
  return <section className="w-full">
    <div className="core-container mt-6">
      <div className="w-full flex">
        <div className="basis-full mobile_up:basis-1/2">
          <blockquote className="font-sans font-normal text-lg border-l-[20px] border-dark_mountain pl-5">
            Professional designer Barbara combines his photography degree with his marketing degree to find the right balance between creativity and commercial sense. Vincent is an experienced all round photographer and moved to Stirling at the end of 2017.
          </blockquote>
          <Heading1 text="About" />
        </div>
      </div>
    </div>
  </section>
}
