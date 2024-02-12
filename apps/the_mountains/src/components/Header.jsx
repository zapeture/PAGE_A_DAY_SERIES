import Heading1 from "@components/Heading1"

export default function Header() {
  return (
    <header className="w-full bg-hero-background-image min-h-[527px] bg-center bg-no-repeat bg-cover text-dark_mountain">
      <div className="core-container mt-6">
        <Heading1 text="The Mountains" />
        <h1 className="font-sans-serif font-thin uppercase text-sm tablet_up:text-xl tablet_up:text-left laptop_up:text-2xl desktop_up:text-3xl">
          is calling and i must go
        </h1>
      </div>
    </header>
  )
}
