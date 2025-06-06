export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Jane Doe",
      feedback:
        "BuildCo did an amazing job remodeling our kitchen. Highly recommend!",
    },
    {
      id: 2,
      name: "John Smith",
      feedback:
        "Professional, on time, and great quality roofing work!",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {testimonials.map(({ id, name, feedback }) => (
          <div
            key={id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            {/* Stars */}
            <div className="flex mb-4 text-yellow-400">
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
            <p className="italic text-gray-700">"{feedback}"</p>
            <footer className="mt-4 font-semibold text-blue-600">- {name}</footer>
          </div>
        ))}
      </div>
    </section>
  );
}
