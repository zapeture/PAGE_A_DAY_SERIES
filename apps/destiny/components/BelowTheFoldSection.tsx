import { TfiTablet } from "react-icons/tfi";
import { CiLock } from "react-icons/ci";
import { GoShieldCheck } from "react-icons/go";

export default function BelowTheFoldSection() {
  return (
    <section className="below-the-fold w-100 bg-white d-flex justify-content-center align-items-center">
      <div className="container text-center">
        <div className="row below-the-fold-header">
          <div className="col">
            <h3 className="h3 fw-semibold">Destiny isn't A.I, its the result of human intelligence.</h3>
            <p className="fs-6">Ne homero petentium mel, eu pro putent persecuti. Id ius mutat gubergren, eros harum hendrerit ex eos, in quo vocibus inimicus gubergren.</p>
          </div>
        </div>
        <div className="row below-the-fold-body">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="service-item-header">
              <span className="icon-wrapper">
                <TfiTablet className="icon" />
              </span>
            </div>
            <h6 className="fw-semibold">Highly Responsive</h6>
            <p>Id ius mutat gubergren, eros harum hendrerit ex eos, in quo vocibus inimicus gubergren. Experience, then believe.</p>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="service-item-header">
              <span className="icon-wrapper">
                <CiLock className="icon" />
              </span>
            </div>
            <h6 className="fw-semibold">Built-in Security</h6>
            <p>Id ius mutat gubergren, eros harum hendrerit ex eos, in quo vocibus inimicus gubergren. Experience, then believe.</p>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="service-item-header">
              <span className="icon-wrapper">
                <GoShieldCheck className="icon" />
              </span>
            </div>
            <h6 className="fw-semibold">Safety Locked</h6>
            <p>Id ius mutat gubergren, eros harum hendrerit ex eos, in quo vocibus inimicus gubergren. Experience, then believe.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

