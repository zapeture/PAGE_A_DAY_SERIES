import Heading1 from "@components/Heading1"
import Heading2 from "@components/Heading2"

export default function Header() {
  return (
    <header className="w-full bg-hero-background-image min-h-[527px] bg-center bg-no-repeat bg-cover text-dark_mountain">
      <div className="core-container mt-6">
        <Heading1 text="The Mountains" />
        <Heading2 text="is calling and i must go" />
      </div>
    </header>
  )
}
