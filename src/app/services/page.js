"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const services = [
  {
    slug: "remodeling",
    title: "Remodeling",
    description: "Transform your home with expert remodeling services.",
    imageUrl: "/images/services/remodeling.jpg", // add your real image paths here
  },
  {
    slug: "roofing",
    title: "Roofing",
    description: "High-quality roofing solutions with durable materials.",
    imageUrl: "/images/services/roofing.jpg",
  },
  {
    slug: "contracting",
    title: "Contracting",
    description: "Reliable general contracting for all types of projects.",
    imageUrl: "/images/services/contracting.jpg",
  },
];

export default function ServicesPage() {
  const router = useRouter();

  return (
    <section className="max-w-7xl mx-auto p-6">
      {/* Back Arrow */}
      <button
        onClick={() => router.back()}
        aria-label="Go Back"
        className="flex items-center mb-8 text-blue-700 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </button>

      <h1 className="text-4xl font-bold mb-10 text-center text-gray-900">Our Services</h1>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        {services.map(({ slug, title, description, imageUrl }) => (
          <Link
            key={slug}
            href={`/services/${slug}`}
            className="group block rounded-lg border border-gray-200 bg-white shadow-md overflow-hidden transform transition-transform hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={imageUrl}
                alt={title}
                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3 text-blue-700">{title}</h2>
              <p className="text-gray-600">{description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
