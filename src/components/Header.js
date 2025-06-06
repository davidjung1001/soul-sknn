"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Site Name */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          ConstructionCo
        </Link>

        {/* Navigation */}
        <nav className="space-x-6 text-gray-600 font-medium">
          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/services" className="hover:text-blue-600 transition">
            Services
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
          <Link href="/get-quote" className="hover:text-blue-600 transition">
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
