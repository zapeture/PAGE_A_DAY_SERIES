import Heading1 from "@components/Heading1";

export default function Travel() {
  return <section className="w-full min-h-[1357px] bg-dark_mountain">
    <div className="core-container mt-6">
      <div className="w-full flex">
        <div className="basis-full mobile_up:basis-1/2 mt-5">
          <Heading1 text="Travel" variant="light"/>
          <blockquote className="font-sans font-normal text-lg text-[#fff]">
            Professional designer Barbara combines his photography degree with his marketing degree to find the right balance between creativity and commercial sense. Vincent is an experienced all round photographer and moved to Stirling at the end of 2017.
          </blockquote>
        </div>
      </div>
    </div>
  </section>
}
