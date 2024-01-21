export default function Places() {
  return <section className="section places w-full">
    <div className="w-full max-w-[839px] mx-auto flex flex-col justify-center tablet:flex-row tablet:justify-between items-center gap-x-8 min-h-[300px]">
      <div className="col basis-1/2">
        <h1 className="text-4xl tablet:text-6xl laptop:text-7xl desktop:text-8xl font-bold">go where</h1>
      </div>
      <div className="col basis-1/2">
        <p className="text-lg font-normal font-sans">
          Mountain tours combine hiking, sightseeing and super jeep excursions, taking visitors to some of the land's most breathtaking regions.</p>
      </div>
    </div>
    <div className="w-full max-w-[839px] mx-auto flex flex-col justify-evenly min-h-[300px]">
      <div className="col">
        <h1 className="text-4xl tablet:text-6xl laptop:text-7xl desktop:text-8xl font-bold">amazing places</h1>
      </div>
      <div className="col">
        <p className="text-lg font-normal font-sans w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
        <div className="columns-4 w-full my-8">
          <img className="w-full aspect-[270/362]" src="images/places_gallery/waves.jpg" alt="waves" />
          <img className="w-full aspect-[270/362]" src="images/places_gallery/snow.jpeg" alt="snow" />
          <img className="w-full aspect-[270/362]" src="images/places_gallery/peaks.jpg" alt="peaks" />
          <img className="w-full aspect-[270/362]" src="images/places_gallery/road.jpg" alt="road" />
        </div>
      </div>
    </div>
  </section>
}
