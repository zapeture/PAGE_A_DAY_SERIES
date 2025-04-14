import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

export default function Header(): JSX.Element {
  return (
    <header className="header mt-5 mb-5">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-5">
          <div className="image-wrapper mb-4 mb-md-0 d-flex justify-content-center d-md-block">
            <Image
              src="https://a-page-a-day-assets.s3.us-east-2.amazonaws.com/page-a-day-logos/page-a-day.svg"
              alt="logo"
              width={155}
              height={114}
              priority
            />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-7">
          <p className={`${inter.className} fs-6 text-center text-md-start`}>
            'A Page a Day' is more than just a repository; it's a diary of a
            developer's creative journey through the world of web design. Each
            day brings a new page, a new challenge, and a new opportunity to
            innovate. From the first line of code to the final design tweak,
            these single-page websites represent a personal and professional
            journey. Learn about the inspiration, the tools, and the techniques
            behind each creation. This collection serves as an inspiration and
            guide for fellow coders and designers on their own creative
            journeys.
          </p>
        </div>
      </div>
    </header>
  );
}
