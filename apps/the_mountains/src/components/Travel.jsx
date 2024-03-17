import Heading1 from "@components/Heading1"
import MasonryItem from "@components/MasonryItem"

export default function Travel() {
  return (
    <section className="w-full min-h-[1357px] bg-dark_mountain py-8">
      <div className="core-container">
        <div className="w-full flex">
          <div className="basis-full mobile_up:basis-1/2 mt-5">
            <Heading1 text="Travel" variant="light" />
            <blockquote className="font-sans font-normal text-lg text-[#fff]">
              Professional designer Barbara combines his photography degree with his marketing degree to find the right
              balance between creativity and commercial sense. Vincent is an experienced all round photographer and
              moved to Stirling at the end of 2017.
            </blockquote>
          </div>
        </div>
        <div className="masonry-grid mt-[50px] w-full gap-5 grid grid-cols-1 mobile_up:grid-cols-2 tablet_up:grid-cols-3">
          <MasonryItem background="images/travel/travel_pic_1.jpg" />
          <MasonryItem background="images/travel/travel_pic_2.jpg" />
          <MasonryItem background="images/travel/travel_pic_3.jpg" />
          <MasonryItem background="images/travel/travel_pic_4.jpg" />
          <MasonryItem background="images/travel/travel_pic_5.jpg" />
          <MasonryItem background="images/travel/travel_pic_6.jpg" />
        </div>
      </div>
    </section>
  )
}
