"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission (e.g. send data to your backend)
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center py-16 px-6">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8 md:p-12">
        <h1 className="text-4xl font-extrabold mb-8 text-gray-900 text-center">
          Contact Us
        </h1>

        <div className="flex flex-col md:flex-row md:space-x-12">
          {/* Contact Info */}
          <div className="md:w-1/2 mb-10 md:mb-0 space-y-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              Have questions or want to discuss your project? Reach out to us via
              phone, email, or send a message using the form.
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5h2l3.6 7.59-1.35 2.44a1 1 0 00.25 1.34l4.24 3.18a16 16 0 007.3-7.3l-3.18-4.24a1 1 0 00-1.34-.25L10.41 7.4 3 5z"
                  />
                </svg>
                <a href="tel:+15551234567" className="text-lg font-medium text-gray-800 hover:text-blue-600 transition">
                  +1 (555) 123-4567
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12H8m0 0l-4-4m4 4l4 4m2-10a9 9 0 110 18 9 9 0 010-18z"
                  />
                </svg>
                <a
                  href="mailto:info@constructionco.com"
                  className="text-lg font-medium text-gray-800 hover:text-blue-600 transition"
                >
                  info@constructionco.com
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="md:w-1/2 space-y-6"
            noValidate
          >
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-md px-4 py-3 resize-y focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md py-3 transition"
            >
              Send Message
            </button>

            {submitted && (
              <p className="mt-4 text-green-600 font-medium">
                Thanks for reaching out! We will get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
