import Header from "@components/Header"
import About from "@components/About"
import Travel from "@components/Travel"
import ShowcaseBanner from "@components/ShowcaseBanner"
import Places from "@components/Places"
import NewRoad from "@components/NewRoad"

export default function App() {
  return (
    <main className="w-full mx-auto">
      <Header />
      <About />
      <Travel />
      <ShowcaseBanner image={"images/deer_photo.jpg"} />
      <Places />
      <ShowcaseBanner image={"images/snowshow_photo.jpg"} />
      <NewRoad />
    </main>
  )
}
