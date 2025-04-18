import { Smartphone } from "lucide-react";
import { ShieldCheck } from "lucide-react";

export default function AiSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Destiny isn&apos;t A.I, its the result of human intelligence.
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-16">
          Id sed mollis gubergren, eirx natum hendrerit ea eos. In quo volutpat
          molestie gubergren, eirx natum hendrerit ea eos. In quo volutpat
          molestie gubergren.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-purple-700 p-4 rounded-full mb-4">
              <Smartphone className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Highly Responsive</h3>
            <p className="text-gray-600">
              Id sed mollis gubergren, eirx natum hendrerit ea eos. In quo
              volutpat molestie gubergren, eirx natum hendrerit ea eos. In quo
              volutpat molestie gubergren, then believe.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-purple-700 p-4 rounded-full mb-4">
              <ShieldCheck className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Built-In Security</h3>
            <p className="text-gray-600">
              Id sed mollis gubergren, eirx natum hendrerit ea eos. In quo
              volutpat molestie gubergren, eirx natum hendrerit ea eos. In quo
              volutpat molestie gubergren, then believe.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-purple-700 p-4 rounded-full mb-4">
              <ShieldCheck className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Safety Locked</h3>
            <p className="text-gray-600">
              Id sed mollis gubergren, eirx natum hendrerit ea eos. In quo
              volutpat molestie gubergren, eirx natum hendrerit ea eos. In quo
              volutpat molestie gubergren, then believe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
