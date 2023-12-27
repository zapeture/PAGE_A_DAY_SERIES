import ShowcaseItem from "./ShowcaseItem";

export default function ShowcaseGrid(): JSX.Element {
  return <section className="showcase-grid">
    <div className="row row-gap-4">
      <ShowcaseItem />
      <ShowcaseItem />
      <ShowcaseItem />
      <ShowcaseItem />
      <ShowcaseItem />
      <ShowcaseItem />
    </div>
  </section>;
}
