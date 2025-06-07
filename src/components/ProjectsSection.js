"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

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
    <div className="mb-6 rounded-xl overflow-hidden shadow-md bg-[#1e293b] border border-gray-700 text-white">
      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center px-6 py-4 bg-gradient-to-r from-amber-600 to-amber-400 text-white text-xl font-bold hover:from-amber-700 hover:to-amber-500 transition"
      >
        <span>{category}</span>
        <svg
          className={`w-6 h-6 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Content */}
      <div
        ref={contentRef}
        className="transition-all duration-500 ease-in-out overflow-hidden"
        style={{ maxHeight }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative rounded-lg overflow-hidden bg-gray-800 hover:scale-[1.02] transition-transform shadow-md"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [openCategory, setOpenCategory] = useState(null);

  return (
    <section className="bg-[#0f172a] text-white py-12 px-4 sm:px-6 lg:px-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Our Projects</h2>
      {Object.entries(projectsData).map(([category, projects]) => (
        <ExpandableSection
          key={category}
          category={category}
          projects={projects}
          isOpen={openCategory === category}
          onToggle={() =>
            setOpenCategory(openCategory === category ? null : category)
          }
        />
      ))}
    </section>
  );
}
