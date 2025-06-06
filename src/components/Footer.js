export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-16 py-6">
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} ConstructionCo. All rights reserved.
      </div>
    </footer>
  );
}
