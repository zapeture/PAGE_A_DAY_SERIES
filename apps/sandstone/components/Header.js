import Navbar from "@/components/navigation/Navbar";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-100 header">
      <Navbar />
      <main className="w-100">
        <div className="container-lg hero">
          <div className="row">
            <div className="col-12 offset-md-6 offset-lg-8 col-md-6 col-lg-4">
              <div className="card p-4">
                <div className="card-body">
                  <h1 className="card-title display-5">I declare this world is so beautiful that I can hardly believe it exists</h1>
                  <Link href="/" className="text-uppercase text-decoration-underline text-sandstone-orange fw-bold">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </header>
  )
}
