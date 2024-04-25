import Image from "next/image";
import Link from "next/link";

export default function Places() {
  return (
    <section className="w-full places">
      <div className="container-sm py-5">
        <h2 className="display-5 text-center">Best places to hike and trek in the world.
        </h2>
        <p className="fs-5 text-center">If you’re an adventurer who loves being out in nature, a hiking and trekking tour should be next on your list. You can expect great wildlife photography opportunities and the chance to travel with a group of like-minded individuals who love the great outdoors.
        </p>
      </div>
      <div className="container-lg">
        <div className="places-grid d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center my-3">
              <Image src="https://images02.nicepage.com/a1389d7bc73adea1e1c1fb7e/7c6a81cb99835be397c93b53/pexels-photo-3876328.jpeg?version=" width={255} height={321} alt="Member 1" />
              <Link href="/team" className="text-dark mt-3">view more</Link>
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center my-3">
              <Image src="https://images02.nicepage.com/a1389d7bc73adea1e1c1fb7e/3e3a6f3ecacd50bfa433e5e1/pexels-photo-3876324.jpeg?version=" width={255} height={321} alt="Member 2" />
              <Link href="/team" className="text-dark mt-3">view more</Link>
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center my-3">
              <Image src="https://images02.nicepage.com/a1389d7bc73adea1e1c1fb7e/50fd8a22cb845f1c933e8fd3/pexels-photo-3560136.jpeg?version=" width={255} height={321} alt="Member 3" />
              <Link href="/team" className="text-dark mt-3">view more</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

