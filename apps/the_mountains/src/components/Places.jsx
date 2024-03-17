import Heading1 from "@components/Heading1"
import MasonryItem from "@components/MasonryItem"

export default function Places() {
  return (
    <section className="w-full py-8">
      <div className="core-container mt-6">
        <div className="w-full flex flex-col mobile_up:flex-row gap-x-1">
          <div className="w-full flex-1 mobile_up:basis-3/5 mobile_down:mb-5">
            <Heading1 text="go where" />
          </div>
          <div className="w-full flex-1 mobile_up:basis-2/5">
            <blockquote className="font-sans font-normal text-lg">
              Professional designer Barbara combines his photography degree with his marketing degree to find the right
              balance between creativity and commercial sense. Vincent is an experienced all round photographer and
              moved to Stirling at the end of 2017.
            </blockquote>
          </div>
        </div>
        <div className="w-full">
          <Heading1 text="amazing places" />
          <span className="max-w-[148px] h-5 bg-dark_mountain block mt-8"></span>
        </div>
        <div className="w-full flex flex-col mobile_up:flex-row gap-x-1 mt-8">
          <div className="basis-full mobile_up:basis-1/2">
            <blockquote className="font-sans font-normal text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
            </blockquote>
          </div>
        </div>
        <div className="masonry-grid mt-[10px] w-full gap-5 grid grid-cols-1 mobile_up:grid-cols-2 tablet_up:grid-cols-3 desktop_up:grid-cols-4">
          <MasonryItem background="images/travel/travel_pic_1.jpg" />
          <MasonryItem background="images/travel/travel_pic_2.jpg" />
          <MasonryItem background="images/travel/travel_pic_3.jpg" />
          <MasonryItem background="images/travel/travel_pic_4.jpg" />
        </div>
      </div>
    </section>
  )
}
