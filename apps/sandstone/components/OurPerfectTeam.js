import Image from "next/image";

export default function OurPerfectTeam() {
  return (
    <section className="w-full our-perfect-team">
      <div className="container-sm py-5">
        <h2 className="display-5 text-center">Our Perfect Team</h2>
        <p className="fs-5 text-center">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
      </div>
      <div className="container-lg">
      <div className="team-grid d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center my-3">
              <Image src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/a5d193bae47a536fa7f5750a/pexels-photo-2943954.jpeg" width={278} height={287} alt="Member 1" />
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center my-3">
              <Image src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/4dbc716da2c8527b98ba9ccd/pexels-photo-3570362.jpeg" width={278} height={287} alt="Member 2" />
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center my-3">
              <Image src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/1c42079ff360568fab79e0f1/pexels-photo-4069063.jpeg" width={278} height={287} alt="Member 3" />
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center my-3">
              <Image src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/51746daf5ca9581ca1b2733a/pexels-photo-60778.jpeg" width={278} height={287} alt="Member 4" />
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center my-3">
              <Image src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/cdab391230d556d79cad3b40/i.jpeg" width={278} height={287} alt="Member 5" />
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center my-3">
              <Image src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/bd379d52466356ed996acde3/pexelsphoto91227.jpeg" width={278} height={287} alt="Member 6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

