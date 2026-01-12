"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo + Site Name */}
        <Link
          href="/"
          className="flex items-center space-x-3"
        >
          <Image
            src="/images/company.jpg"
            alt="Company Logo"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <span className="font-semibold text-xl sm:text-2xl text-white tracking-tight">
            Soul SKNN 
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-300 font-medium text-sm sm:text-base">
          <Link href="/about" className="hover:text-blue-400 transition">
            About
          </Link>
          <Link href="/services" className="hover:text-blue-400 transition">
            Services
          </Link>
          <Link href="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
         
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-gray-300 font-medium text-base">
          <Link href="/about" className="block hover:text-blue-400 transition">
            About
          </Link>
          <Link href="/services" className="block hover:text-blue-400 transition">
            Services
          </Link>
          <Link href="/contact" className="block hover:text-blue-400 transition">
            Contact
          </Link>
          <Link href="/get-quote" className="block hover:text-blue-400 transition">
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
