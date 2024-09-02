import Image from "next/image";

export default function SideBySideShowcase() {
  return (
    <section className="side-by-side-showcase w-100">
      <div className="side-by-side-showcase-inner">
        {/*  */}
        <div className="row align-items-center py-4">
          <div className="col-12 col-md-6">
            <Image src={"/img/laptop.png"}
              alt="laptop"
              width={465} height={276}
              className="mx-auto d-block d-md-inline showcase-image "
            />
          </div>
          <div className="col-12 col-md-6">
            <h2 className="h2 fw-semibold text-center text-md-start mt-5 mt-lg-2">Designed for Startups & brands.</h2>
            <p>Just get the code and sit tight, you will witness its power and performance in lead generations. Is simple yet Powerful and productive technology. Experience, then believe.</p>
            <ul className="ps-3">
              <li>Write some feature here.</li>
              <li>Repeat the same with another one.</li>
              <li>Complete the list with the last.</li>
            </ul>
            <div className="d-flex justify-content-center justify-content-lg-start" >
              <button className="btn btn-primary watch-intro-btn">Watch Intro</button>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="row align-items-center py-4">
          <div className="col-12 col-md-6">
            <h2 className="h2 fw-semibold text-center text-md-start mt-5 mt-lg-2">Designed for Startups & brands.</h2>
            <p>Just get the code and sit tight, you will witness its power and performance in lead generations. Is simple yet Powerful and productive technology. Experience, then believe.</p>
            <ul className="ps-3">
              <li>Write some feature here.</li>
              <li>Repeat the same with another one.</li>
              <li>Complete the list with the last.</li>
            </ul>
            <div className="d-flex justify-content-center justify-content-lg-start" >
              <button className="btn btn-primary watch-intro-btn">Watch Intro</button>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <Image src={"/img/laptop.png"}
              alt="laptop"
              width={465} height={276}
              className="mx-auto d-block d-md-inline showcase-image "
            />
          </div>
        </div>
        {/*  */}
      </div>
    </section>
  )
}

