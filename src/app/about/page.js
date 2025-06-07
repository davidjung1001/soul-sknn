"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AboutPage() {
  const router = useRouter();

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

    fadeEls.forEach((el) => observer.observe(el));
    return () => fadeEls.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-16 overflow-x-hidden text-gray-800 font-sans">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        aria-label="Go back"
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </button>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-700">
        <div className="md:w-1/2 w-full rounded-lg overflow-hidden shadow-md">
          <Image
            src="/images/company2.jpg"
            alt="Gold Standard Contracting"
            width={600}
            height={400}
            className="object-cover w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 w-full space-y-4 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            About
          </h1>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            We’re a family-owned business dedicated to quality craftsmanship and customer satisfaction.
            With over 20 years of experience, we take pride in transforming houses into dream homes.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="space-y-4 fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-700">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center sm:text-left">Our Mission</h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          Our mission at Gold Standard Contracting is simple: deliver exceptional construction results while
          building lasting relationships with our clients. We focus on integrity, transparency, and consistent
          excellence in every project.
        </p>
      </section>

      {/* Timeline */}
      <section className="space-y-6 fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-700">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center sm:text-left">Our Journey</h2>
        <ul className="border-l-4 border-blue-600 pl-6 space-y-6">
          <li>
            <div className="text-blue-600 font-semibold">2003</div>
            <p className="text-gray-700 text-sm sm:text-base">Gold Standard Contracting is founded with a small but passionate team.</p>
          </li>
          <li>
            <div className="text-blue-600 font-semibold">2010</div>
            <p className="text-gray-700 text-sm sm:text-base">Completed 100+ residential remodels across the region.</p>
          </li>
          <li>
            <div className="text-blue-600 font-semibold">2018</div>
            <p className="text-gray-700 text-sm sm:text-base">Expanded into commercial contracting and larger-scale development.</p>
          </li>
          <li>
            <div className="text-blue-600 font-semibold">Today</div>
            <p className="text-gray-700 text-sm sm:text-base">Continuing to set the gold standard in quality and client trust.</p>
          </li>
        </ul>
      </section>

      {/* Team Members */}
      <section className="space-y-6 fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-700">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center sm:text-left">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: "John Rivera", role: "Founder & CEO", image: "/images/team1.jpg" },
            { name: "Emily Sanchez", role: "Project Manager", image: "/images/team2.jpg" },
            { name: "Michael Tran", role: "Lead Carpenter", image: "/images/team3.jpg" },
          ].map((member, idx) => (
            <div key={idx} className="bg-white shadow rounded-lg p-4 text-center">
              <Image
                src={member.image}
                alt={member.name}
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
