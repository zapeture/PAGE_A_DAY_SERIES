import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="main-header w-100">
      <nav className="navbar navbar-light navbar-expand-lg bg-transparent pt-4" data-bs-theme="dark">
        <div className="container-lg">
          <Link className="navbar-brand" href="/">
            <Image src="https://ydirection.com/Destiny/assets/logos/logo.png" alt="Destiny" width={35} height={35} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-uppercase text-light text-sm fw-medium" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-uppercase text-light text-sm fw-medium" href="/">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-uppercase text-light text-sm fw-medium" href="/">Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-uppercase text-light text-sm fw-medium" href="/">Reviews</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-uppercase text-light text-sm fw-medium" href="/">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-uppercase text-light text-sm fw-medium" href="/">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="hero w-100">
        <div className="container-lg">
          <div className="row">
            <div className="col-12 col-md-6">
              <h1 className="display-3 text-white fw-semibold mb-4">Meet Destiny, the visonary landing Page.</h1>
              <p className="text-white fs-6">Re-targeting your audience with competitive intelligence embedded in Destiny. See it in action and then believe.
              </p>

              <button className="hero-btn btn btn-primary btn-lg text-uppercase rounded-0">Watch Intro</button>
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}
