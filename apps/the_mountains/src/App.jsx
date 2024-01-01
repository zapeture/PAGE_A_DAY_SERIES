import About from "./components/About";
import Header from "./components/Header";

export default function App() {
  return <main className="main w-full">
    <Header />
    <About />
    <section className="section travel"></section>
    <section className="section showcase-image"></section>
    <section className="section places"></section>
    <section className="section showcase-image"></section>
    <section className="section new-road"></section>
    <footer className="section new-road"></footer>
  </main>
}
