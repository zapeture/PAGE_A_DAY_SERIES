import Image from "next/image";
import Link from "next/link";

export default function Pricing() {
  return (
    <section className="w-100 pricing my-5">
      <div className="container-lg">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card w-full border-0">
              <Image src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/0300a99382c25c3fb2d428de/1.jpg" alt="pricing card 1" width={416} height={436} sizes="(max-width: 500px) 320px"/>
              <div className="card-body">
                <h2 className="card-title my-3">MOUNTAINS TRAVEL</h2>
                <p className="card-text">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="card-price text-center">$500</h2>
                  <Link href="/" className="btn btn-dark rounded-0 text-uppercase btn-lg px-4">Book Now</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card w-full border-0">
              <Image src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/102758e34c375ab8bd4146ca/3.jpg" alt="pricing card 2" width={416} height={436} sizes="(max-width: 500px) 320px"/>
              <div className="card-body">
                <h2 className="card-title my-3">SURF TRAVEL</h2>
                <p className="card-text">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="card-price text-center">$700</h2>
                  <Link href="/" className="btn btn-dark rounded-0 text-uppercase btn-lg px-4">Book Now</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card w-full border-0">
              <Image src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/8425d5b3ef115f608760cbd5/2.jpg" alt="pricing card 3" width={416} height={436} sizes="(max-width: 500px) 320px"/>
              <div className="card-body">
                <h2 className="card-title my-3">OCEAN TRAVEL</h2>
                <p className="card-text">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <h2 className="card-price text-center">$1000</h2>
                  <Link href="/" className="btn btn-dark rounded-0 text-uppercase btn-lg px-4">Book Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
