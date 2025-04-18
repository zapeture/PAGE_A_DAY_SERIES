import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Features() {
  return (
    <>
      {/* First Feature Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Analytics Dashboard on Laptop"
                width={600}
                height={400}
                className="object-cover shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                Powerful Analytics Dashboard
              </h2>
              <p className="text-gray-600 mb-6">
                Get real-time insights into your business performance with our
                intuitive analytics dashboard. Track key metrics, visualize data
                trends, and make data-driven decisions with confidence.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-purple-700 mr-2 mt-0.5" />
                  <span>Real-time data visualization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-purple-700 mr-2 mt-0.5" />
                  <span>Customizable dashboard widgets</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-purple-700 mr-2 mt-0.5" />
                  <span>Exportable reports and insights</span>
                </li>
              </ul>
              <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 font-medium">
                WATCH INTRO
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Second Feature Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Data Visualization on Laptop"
                width={600}
                height={400}
                className="object-cover shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                Advanced Data Visualization
              </h2>
              <p className="text-gray-600 mb-6">
                Transform complex data into beautiful, interactive
                visualizations. Our platform makes it easy to understand your
                data through stunning charts, graphs, and interactive elements.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-purple-700 mr-2 mt-0.5" />
                  <span>Interactive charts and graphs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-purple-700 mr-2 mt-0.5" />
                  <span>Custom visualization templates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-purple-700 mr-2 mt-0.5" />
                  <span>Shareable data presentations</span>
                </li>
              </ul>
              <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 font-medium">
                WATCH INTRO
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
