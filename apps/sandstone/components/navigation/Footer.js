export default function Footer() {
  return (
    <footer className="w-100 footer d-flex justify-content-center align-items-center my-5">
      <div className="container-lg">
        <h2 className="display-4">Subscribe to our Newsletter</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices. Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
        <form>
          <div className="row mt-5">
            <div className="col-12 col-md-5">
              <div className="mb-3">
                <input type="text" className="form-control border-2 border-dark rounded-0 py-3" aria-describedby="Name" placeholder="Enter your Name" />
              </div>
            </div>
            <div className="col-12 col-md-5">
              <div className="mb-3">
                <input type="email" className="form-control border-2 border-dark rounded-0 py-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
              </div>
            </div>
            <div className="col-12 col-md-2">
              <button className="btn btn-sandstone-orange rounded-0 text-uppercase py-3 px-5 w-100 d-block d-md-inline-block">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </footer>
  )
}
