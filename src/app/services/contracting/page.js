import Link from "next/link";

export default function Contracting() {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg mt-12 text-white">
      <h1 className="text-4xl font-bold mb-6 text-amber-400">Contracting</h1>
      <p className="text-gray-300 mb-8 text-lg">
        This is the Contracting service page. You can add your different services, 
        showcase pictures, and provide detailed descriptions here.
      </p>

      <div className="border-2 border-dashed border-amber-400 rounded-lg p-10 text-center text-amber-300">
        <p className="mb-4 text-xl font-semibold">Your content can go here!</p>
        <p>Add photos, project examples, pricing, or any other details you want to share with your customers.</p>
      </div>

      <Link
        href="/services"
        className="inline-block mt-8 px-6 py-3 bg-amber-500 rounded hover:bg-amber-600 transition text-gray-900 font-semibold"
      >
        Back to Services
      </Link>
    </section>
  );
}
