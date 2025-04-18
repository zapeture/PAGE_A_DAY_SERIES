import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="absolute top-0 w-full z-60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-purple-700 text-white p-2 mr-2 relative z-50">
            <span className="font-bold">De</span>
          </div>
        </div>
        <Navbar />
      </div>
    </header>
  );
}
