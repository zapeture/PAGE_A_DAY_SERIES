import Header from "./components/Header";
import ShowcaseGrid from "./components/ShowcaseGrid";

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <div className="container-xl main-content-wrapper">
        <Header />
        <ShowcaseGrid />
      </div>
    </>
  );
}
