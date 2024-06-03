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
    </header>
  )
}
