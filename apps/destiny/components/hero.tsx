import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <Image
        src="https://res.cloudinary.com/zapeture/image/upload/v1686653401/PINTEREST_SERIES/bike_ride3_vwitpf.jpg"
        alt="People riding bicycles"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            Meet Destiny, the visionary landing Page.
          </h1>
          <p className="text-white/90 mb-8 text-lg">
            Re-targeting your audience with competitive intelligence embedded in
            Destiny, see it in action and then believe.
          </p>
          <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 font-medium">
            WATCH INTRO
          </button>
        </div>
      </div>
    </section>
  );
}
