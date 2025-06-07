import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="about-section"
      className="relative bg-[#1f2937] text-white py-20 px-6 sm:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Image side */}
        <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
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
          <h2 className="text-4xl font-extrabold text-blue-400">
            About Us
            <span className="block h-1.5 w-20 bg-blue-500 rounded mt-2 mx-auto lg:mx-0"></span>
          </h2>

          <p className="text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 text-gray-300">
            At <span className="font-semibold text-blue-400">BuildCo Construction</span>, we specialize
            in delivering top-tier remodeling, roofing, and general contracting services.
            With years of experience and a commitment to craftsmanship, we bring your
            vision to life — on time and within budget.
          </p>

          <Link
            href="/about"
            className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 px-6 rounded-xl shadow-lg"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
