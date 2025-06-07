"use client";

import { useState } from "react";

export default function GetQuotePage() {
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will get to you soon.");
    setFormData({ category: "", name: "", email: "", phone: "" });
  };

  const goBack = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };

  return (
    <main className="max-w-lg mx-auto p-8 bg-white rounded-2xl shadow-lg mt-12">
      {/* Back Button */}
      <button
        onClick={goBack}
        className="mb-6 text-blue-600 font-semibold hover:text-blue-800 transition"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-900">
        Request a Free Quote
      </h1>

      <form onSubmit={handleSubmit} className="space-y-7">
        {/* Category */}
        <div>
          <label
            htmlFor="category"
            className="block mb-2 font-semibold text-gray-800"
          >
            Select Service Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3
                       text-gray-700 placeholder-gray-400
                       focus:outline-none focus:ring-4 focus:ring-blue-300
                       transition-shadow duration-300"
          >
            <option value="" disabled>
              -- Choose a category --
            </option>
            <option value="remodeling">Remodeling</option>
            <option value="roofing">Roofing</option>
            <option value="contracting">Contracting</option>
            <option value="consultation">Consultation</option>
          </select>
        </div>

        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block mb-2 font-semibold text-gray-800"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3
                       text-gray-700 placeholder-gray-400
                       focus:outline-none focus:ring-4 focus:ring-blue-300
                       transition-shadow duration-300"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block mb-2 font-semibold text-gray-800"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3
                       text-gray-700 placeholder-gray-400
                       focus:outline-none focus:ring-4 focus:ring-blue-300
                       transition-shadow duration-300"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block mb-2 font-semibold text-gray-800"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(123) 456-7890"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3
                       text-gray-700 placeholder-gray-400
                       focus:outline-none focus:ring-4 focus:ring-blue-300
                       transition-shadow duration-300"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-500
                     text-white font-semibold py-4 rounded-lg shadow-md
                     hover:from-blue-700 hover:to-blue-600 transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
