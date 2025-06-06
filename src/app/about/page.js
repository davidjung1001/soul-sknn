"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AboutPage() {
  const router = useRouter();

  // Optional: Add simple scroll effect with IntersectionObserver (fade in)
  useEffect(() => {
    const fadeEls = document.querySelectorAll(".fade-in-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeEls.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      fadeEls.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <main className="max-w-5xl mx-auto p-6 space-y-16">
      {/* Back arrow */}
      <button
        onClick={() => router.back()}
        aria-label="Go back"
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold mb-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </button>

      {/* Existing image and intro */}
      <section className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 rounded overflow-hidden shadow-lg">
          <Image
            src="/about-hero.jpg"
            alt="About BuildCo Construction"
            width={600}
            height={400}
            className="object-cover"
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">About BuildCo Construction</h1>
          <p className="text-gray-600 leading-relaxed">
            We’re a family-owned business dedicated to quality craftsmanship and
            customer satisfaction. With over 20 years of experience, we take pride
            in transforming houses into dream homes.
          </p>
        </div>
      </section>

      {/* Added content sections with fade-in on scroll */}
      <section
        className="space-y-8 fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-700"
      >
        <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          To deliver exceptional remodeling and roofing services with honesty,
          integrity, and a commitment to excellence.
        </p>
      </section>

      <section
        className="space-y-8 fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-700"
      >
        <h2 className="text-3xl font-semibold text-gray-800">Our Vision</h2>
        <p className="text-gray-600 leading-relaxed">
          To be the most trusted construction company in our community, known for
          reliability and superior workmanship.
        </p>
      </section>

      <section
        className="fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-700"
      >
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { name: "Alice Johnson", role: "Founder & CEO", img: "/team/alice.jpg" },
            { name: "Bob Smith", role: "Lead Contractor", img: "/team/bob.jpg" },
            { name: "Carol Lee", role: "Project Manager", img: "/team/carol.jpg" },
          ].map(({ name, role, img }) => (
            <div key={name} className="text-center">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg">
                <Image src={img} alt={name} width={160} height={160} className="object-cover" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{name}</h3>
              <p className="text-gray-500">{role}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-700"
      >
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Our Journey</h2>
        <ol className="border-l-4 border-blue-600 ml-4 space-y-6">
          <li>
            <h3 className="font-semibold text-lg">2000</h3>
            <p className="text-gray-600">BuildCo Construction founded by Alice Johnson.</p>
          </li>
          <li>
            <h3 className="font-semibold text-lg">2010</h3>
            <p className="text-gray-600">Expanded to include roofing services.</p>
          </li>
          <li>
            <h3 className="font-semibold text-lg">2020</h3>
            <p className="text-gray-600">Completed 1,000+ projects and grew team to 20+ members.</p>
          </li>
        </ol>
      </section>
    </main>
  );
}
