export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-16 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-600 text-sm space-y-4">
        {/* Contact info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <div>
            <a href="tel:+1234567890" className="hover:text-blue-600 transition">
              📞 +1 (234) 567-890
            </a>
          </div>
          <div>
            <a href="mailto:info@constructionco.com" className="hover:text-blue-600 transition">
              📧 info@constructionco.com
            </a>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M22 12.07c0-5.5-4.48-10-10-10s-10 4.5-10 10c0 5 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.9h2.54v-2.22c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.25 0-1.64.78-1.64 1.58v1.87h2.8l-.45 2.9h-2.35v6.99C18.34 21.2 22 17 22 12.07z" />
            </svg>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-600 hover:text-pink-500 transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37a4 4 0 11-4.73-4.73 4 4 0 014.73 4.73z" />
              <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div>&copy; {new Date().getFullYear()} ConstructionCo. All rights reserved.</div>
      </div>
    </footer>
  );
}
