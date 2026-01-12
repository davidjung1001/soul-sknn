"use client";

const servicesData = [
  {
    id: 1,
    title: "Soul Signature Facial",
    description: "Our complete facial experience with deep cleansing, extractions, customized masks, and relaxing massage.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Facial + Beard Treatment",
    description: "Complete facial care combined with specialized beard grooming and conditioning.",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Pregnancy Facial",
    description: "Gentle, pregnancy-safe treatment designed for expecting mothers' sensitive skin.",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Face Reality Facial (Acne)",
    description: "Specialized acne treatment using Face Reality products for clear, healthy skin.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Back Facial",
    description: "Deep cleansing treatment for your back including exfoliation, extractions, and hydration.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            <span className="text-sm font-semibold tracking-wider">WHAT WE OFFER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Our Treatments</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Personalized skincare treatments for healthy, radiant skin
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-xl overflow-hidden bg-[#1e293b] border border-gray-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/50 hover:border-gray-600 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2 group-hover:text-rose-400 transition-colors">{service.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/services"
            className="inline-block px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
}