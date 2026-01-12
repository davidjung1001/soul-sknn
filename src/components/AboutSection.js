import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="about-section"
      className="relative bg-gradient-to-b from-[#1e293b] to-[#0f172a] text-white py-20 px-6 sm:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Image side */}
        <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
          <img
            src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&h=400&fit=crop"
            alt="Soul SKNN facial treatment"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text side */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h2 className="text-4xl font-extrabold text-rose-400">
            About Soul SKNN
            <span className="block h-1.5 w-20 bg-rose-500 rounded mt-2 mx-auto lg:mx-0"></span>
          </h2>

          <p className="text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 text-gray-300">
            At <span className="font-semibold text-rose-400">Soul SKNN</span>, I specialize
            in personalized facial treatments that prioritize your skin's health and goals.
            From acne solutions to pregnancy-safe skincare, each treatment includes deep cleansing,
            gentle exfoliation, extractions, customized masks, and a relaxing massage—all designed
            to help you achieve radiant, healthy skin.
          </p>

          <Link
            href="/about"
            className="mt-4 inline-block bg-white text-gray-900 hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold py-3 px-6 rounded-lg shadow-lg"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}