"use client";

import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  function scrollToNextSection() {
    const nextSection = document.getElementById("about-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/hero.jpg"
          alt="Construction workers at a job site"
          className="w-full h-full object-cover object-center opacity-90"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Heading and Tagline */}
      <h1 className="text-5xl font-bold text-white drop-shadow-lg max-w-3xl z-10">
        Your Company
      </h1>
      <p className="mt-4 text-xl text-white drop-shadow-md max-w-xl z-10">
        Reliable remodeling, roofing, and contracting services for your home or business.
      </p>

      {/* CTA Button */}
      <button
        className="mt-10 px-8 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition z-10"
        onClick={() => router.push("/get-quote")}
      >
        Get a Free Quote
      </button>

      {/* Scroll Arrow */}
      <button
        onClick={scrollToNextSection}
        aria-label="Scroll to About Section"
        className="absolute bottom-8 animate-bounce text-white z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </section>
  );
}
