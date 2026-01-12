"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const services = [
  {
    slug: "soul-signature-facial",
    title: "Soul Signature Facial",
    description: "Our signature treatment with deep cleansing, extractions, customized masks, and relaxing massage.",
    imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop",
  },
  {
    slug: "facial-beard-treatment",
    title: "Facial + Beard Treatment",
    description: "Complete facial care combined with specialized beard grooming and conditioning.",
    imageUrl: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=400&fit=crop",
  },
  {
    slug: "pregnancy-facial",
    title: "Pregnancy Facial",
    description: "Gentle, pregnancy-safe treatment designed for expecting mothers' sensitive skin.",
    imageUrl: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=400&fit=crop",
  },
  {
    slug: "face-reality-acne-facial",
    title: "Face Reality Facial (Acne)",
    description: "Specialized acne treatment using Face Reality products for clear, healthy skin.",
    imageUrl: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop",
  },
  {
    slug: "back-facial",
    title: "Back Facial",
    description: "Deep cleansing treatment for your back including exfoliation, extractions, and hydration.",
    imageUrl: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop",
  },
];

export default function ServicesPage() {
  const router = useRouter();

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Back Arrow */}
        <button
          onClick={() => router.back()}
          aria-label="Go Back"
          className="group flex items-center mb-8 text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg px-2 py-1"
        >
          <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mr-2 group-hover:bg-white/20 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <span className="font-semibold">Back</span>
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            <span className="text-sm font-semibold tracking-wider">WHAT WE OFFER</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Each facial includes deep cleansing, gentle exfoliation, extractions, customized masks, corrective serums, SPF protection, and a relaxing head, neck, and shoulder massage with steamed hot towels.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ slug, title, description, imageUrl }) => (
            <Link
              key={slug}
              href={`/services/${slug}`}
              className="group block rounded-xl border border-gray-700 bg-[#1e293b] overflow-hidden transform transition-all hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-2 hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={imageUrl}
                  alt={title}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-gray-200 transition-colors flex items-center justify-between">
                  {title}
                  <svg 
                    className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth={2} 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </h2>
                <p className="text-gray-400 leading-relaxed">{description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
            <h3 className="text-2xl font-bold mb-3">Ready for radiant skin?</h3>
            <p className="text-gray-400 mb-6">Book your personalized facial treatment today</p>
            <button 
              onClick={() => router.push('/book-appointment')}
              className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}