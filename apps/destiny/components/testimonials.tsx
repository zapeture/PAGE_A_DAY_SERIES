import React from "react";
import TestimonialCarousel from "./testimonial-carousel";

export default function testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
        <TestimonialCarousel />
      </div>
    </section>
  );
}
