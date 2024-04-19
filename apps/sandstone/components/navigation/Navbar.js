import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar bg-transparent">
      <div className="container-lg">
        <Link className="navbar-brand" href="/" aria-label='Logo Branding'></Link>
        <button className="navbar-toggler d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"
          aria-expanded="false" aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <li className="nav-item d-none d-md-block">
          <Link className="nav-link text-uppercase fw-bold text-other-gray" aria-current="page" href="/">Home</Link>
        </li>
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <button id="offcanvas-toggle-button" type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
