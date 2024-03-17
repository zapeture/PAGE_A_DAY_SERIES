import Header from "@components/Header"
import About from "@components/About"
import Travel from "@components/Travel"
// import Showcase from "@components/Showcase"
// import Places from "@components/Places"

export default function App() {
  return (
    <main className="w-full mx-auto">
      <Header />
       <About />
       <Travel />
      {/* <Showcase />
      <Places />
       */}
    </main>
  )
}
