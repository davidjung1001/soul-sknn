"use client";

import { useState, useRef, useEffect } from "react";

const projectsData = {
  Remodeling: [
    {
      id: 1,
      title: "Kitchen Renovation",
      description: "Modern design with open floor plan and energy-efficient appliances.",
      image: "/images/kitchen-renovation.jpg",
    },
    {
      id: 2,
      title: "Bathroom Remodel",
      description: "Spa style bathroom with rain shower and heated floors.",
      image: "/images/bathroom-remodel.jpg",
    },
  ],
  Roofing: [
    {
      id: 3,
      title: "New Roof Installation",
      description: "Durable and aesthetic roofing using premium materials.",
      image: "/images/roof-installation.jpg",
    },
    {
      id: 4,
      title: "Roof Repair",
      description: "Fix leaks and damages promptly with long-lasting solutions.",
      image: "/images/roof-repair.jpg",
    },
  ],
  Contracting: [
    {
      id: 5,
      title: "Commercial Office Buildout",
      description: "Efficient workspace design tailored to your business needs.",
      image: "/images/office-buildout.jpg",
    },
    {
      id: 6,
      title: "Deck Construction",
      description: "Outdoor living space with high-quality wood and custom features.",
      image: "/images/deck-construction.jpg",
    },
  ],
};

function ExpandableSection({ category, projects, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="mb-8 rounded-lg shadow-lg border border-gray-200">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${category}-projects`}
        className="w-full flex justify-between items-center px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold text-lg rounded-t-lg hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <span>{category}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <div
        id={`${category}-projects`}
        ref={contentRef}
        style={{ maxHeight }}
        className="overflow-hidden transition-max-height duration-500 ease-in-out bg-white px-6"
      >
        <ul className="py-4 space-y-8">
          {projects.map(({ id, title, description, image }) => (
            <li
              key={id}
              className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0 flex flex-col md:flex-row items-center gap-6"
            >
              {image && (
                <img
                  src={image}
                  alt={title}
                  className="w-full md:w-48 h-32 object-cover rounded-md shadow-sm flex-shrink-0"
                />
              )}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                <p className="mt-1 text-gray-600">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [openCategory, setOpenCategory] = useState(null);

  function toggleCategory(category) {
    setOpenCategory(openCategory === category ? null : category);
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-900">Our Projects</h2>

      {Object.entries(projectsData).map(([category, projects]) => (
        <ExpandableSection
          key={category}
          category={category}
          projects={projects}
          isOpen={openCategory === category}
          onToggle={() => toggleCategory(category)}
        />
      ))}
    </section>
  );
}
