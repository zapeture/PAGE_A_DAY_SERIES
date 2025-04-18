"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  id: number;
  content: string;
  author: string;
  position: string;
  avatar: string;
  rating: number;
};

export default function TestimonialCarousel() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laculis quis tellus ac vestibulum. Etiam fermentum nisi ac venenatis rhoncus.",
      author: "Neil Young",
      position: "Vice President Primal Inc",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 5,
    },
    {
      id: 2,
      content:
        "Destiny has transformed how we approach our marketing strategy. The platform's intuitive design and powerful analytics have given us insights we never had before.",
      author: "Sarah Johnson",
      position: "Marketing Director, TechFlow",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 5,
    },
    {
      id: 3,
      content:
        "As a startup founder, I needed a solution that was both powerful and easy to implement. Destiny delivered on both fronts, helping us grow our user base by 200% in just three months.",
      author: "Michael Chen",
      position: "CEO, InnovateLabs",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, testimonials.length]);

  const goToPrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length,
    );
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, testimonials.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <div className="relative max-w-3xl mx-auto px-4">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <div className="mb-6">
                <Image
                  src={testimonial.avatar}
                  alt={`${testimonial.author} avatar`}
                  width={80}
                  height={80}
                  className="rounded-full mx-auto border-4 border-white shadow-md"
                />
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <p className="font-bold">- {testimonial.author}</p>
              <p className="text-gray-600 text-sm mb-4">
                {testimonial.position}
              </p>
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={goToPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6 text-purple-700" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6 text-purple-700" />
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isAnimating) return;
              setIsAnimating(true);
              setCurrentIndex(index);
              setTimeout(() => setIsAnimating(false), 500);
            }}
            className={`h-2 rounded-full transition-all ${
              currentIndex === index ? "w-8 bg-purple-700" : "w-2 bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
