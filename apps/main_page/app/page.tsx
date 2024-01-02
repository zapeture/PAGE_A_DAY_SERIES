import Header from "./components/Header";
import ShowcaseGrid from "./components/ShowcaseGrid";

export default function Page(): JSX.Element {
  return (
    <>
      <div className="container-xl main-content-wrapper">
        <Header />
        <ShowcaseGrid />
      </div>
    </>
  );
}
