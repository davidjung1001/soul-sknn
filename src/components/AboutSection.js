import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about-section"
      className="relative bg-gradient-to-r from-blue-50 to-white py-20 px-6 sm:px-12 lg:px-24 text-gray-800"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Image side */}
        <div className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg border border-gray-200">
          <Image
            src="/images/company.jpg"
            alt="BuildCo Construction team working"
            width={600}
            height={400}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Text side */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h2 className="text-4xl font-extrabold text-blue-700 relative inline-block">
            About Us
            <span className="block h-1.5 w-20 bg-blue-400 rounded mt-2 mx-auto lg:mx-0"></span>
          </h2>

          <p className="text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 text-gray-700">
            At <span className="font-semibold text-blue-600">BuildCo Construction</span>, we specialize
            in delivering top-tier remodeling, roofing, and general contracting services.
            With years of experience and a commitment to craftsmanship, we bring your
            vision to life — on time and within budget.
          </p>

          <button
            type="button"
            className="mt-4 inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
