export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Christian",
      feedback:
        "Best facial I've ever had! My skin has never looked better. The extractions were thorough but gentle, and the massage was so relaxing.",
    },
    {
      id: 2,
      name: "David",
      feedback:
        "Finally found someone who understands acne treatment. The Face Reality facial has completely transformed my skin. Highly recommend!",
    },
    {
      id: 3,
      name: "Diego",
      feedback:
        "The pregnancy facial was exactly what I needed. Safe, gentle, and my skin is glowing. Thank you for the amazing care!",
    },
    {
      id: 4,
      name: "Jonathan",
      feedback:
        "Professional service and incredible results. The facial + beard treatment is a game changer. My skin and beard have never looked this good!",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#1e293b] to-[#0f172a] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            <span className="text-sm font-semibold tracking-wider">TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">What Clients Say</h2>
          <p className="text-gray-400 text-lg">Real results from real people</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map(({ id, name, feedback }) => (
            <div
              key={id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 shadow-lg"
            >
              {/* Stars */}
              <div className="flex mb-4 text-rose-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    stroke="none"
                    className="w-5 h-5"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.967c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.04 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
                  </svg>
                ))}
              </div>
              <p className="italic text-gray-300 leading-relaxed mb-4">"{feedback}"</p>
              <footer className="font-semibold text-rose-400">— {name}</footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}