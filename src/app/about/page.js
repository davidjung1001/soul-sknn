"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AboutPage() {
  const router = useRouter();

  useEffect(() => {
    const fadeEls = document.querySelectorAll(".fade-in-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeEls.forEach((el) => observer.observe(el));
    return () => fadeEls.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-16 overflow-x-hidden">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          aria-label="Go back"
          className="group flex items-center text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg px-2 py-1"
        >
          <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mr-2 group-hover:bg-white/20 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <span className="font-semibold">Back</span>
        </button>

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center gap-8 fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <div className="md:w-1/2 w-full rounded-xl overflow-hidden shadow-2xl border border-gray-700">
            <img
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop"
              alt="Soul SKNN - Professional Esthetician"
              className="object-cover w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 w-full space-y-4 text-center md:text-left">
            <div className="inline-block mb-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
              <span className="text-sm font-semibold tracking-wider">ABOUT SOUL SKNN</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold">
              [Your Name]
            </h1>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              [Insert your introduction here - Example: "I'm a licensed esthetician passionate about helping clients achieve their healthiest, most radiant skin. With specialized training in acne treatment, pregnancy-safe skincare, and customized facial therapies, I create personalized experiences that address each client's unique skin goals."]
            </p>
          </div>
        </section>

        {/* Philosophy */}
        <section className="space-y-4 fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center sm:text-left">My Approach to Skincare</h2>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8">
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
              At Soul SKNN, your skin's health and goals are my top priority. I believe in a holistic approach that combines:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-rose-400 mt-1">✦</span>
                <span>Personalized treatment plans tailored to your unique skin type and concerns</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-400 mt-1">✦</span>
                <span>Results-driven products and techniques backed by skincare science</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-400 mt-1">✦</span>
                <span>A relaxing, rejuvenating experience that nourishes both skin and soul</span>
              </li>
            </ul>
          </div>
        </section>

        {/* What's Included */}
        <section className="space-y-6 fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center sm:text-left">Every Facial Includes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Deep cleansing",
              "Gentle exfoliation",
              "Extractions",
              "Customized masks",
              "Corrective serums",
              "SPF protection",
              "Head, neck & shoulder massage",
              "Steamed hot towels"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <div className="w-6 h-6 rounded-full bg-rose-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="space-y-6 fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center sm:text-left">My Journey</h2>
          <ul className="border-l-4 border-rose-500 pl-6 space-y-6">
            <li>
              <div className="text-rose-400 font-semibold">[Year - e.g., 2016]</div>
              <p className="text-gray-400 text-sm sm:text-base">[Milestone - e.g., "Graduated from esthetics school and earned my license"]</p>
            </li>
            <li>
              <div className="text-rose-400 font-semibold">[Year - e.g., 2019]</div>
              <p className="text-gray-400 text-sm sm:text-base">[Milestone - e.g., "Completed advanced training in Face Reality acne treatment"]</p>
            </li>
            <li>
              <div className="text-rose-400 font-semibold">[Year - e.g., 2022]</div>
              <p className="text-gray-400 text-sm sm:text-base">[Milestone - e.g., "Launched Soul SKNN and began serving clients independently"]</p>
            </li>
            <li>
              <div className="text-rose-400 font-semibold">Today</div>
              <p className="text-gray-400 text-sm sm:text-base">[Current status - e.g., "Helping clients achieve radiant, healthy skin through personalized facial treatments"]</p>
            </li>
          </ul>
        </section>

        {/* Specialties */}
        <section className="space-y-6 fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center sm:text-left">Areas of Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { 
                title: "Acne Treatment", 
                description: "Face Reality certified",
                icon: "✨"
              },
              { 
                title: "Pregnancy Skincare", 
                description: "Safe & gentle treatments",
                icon: "🤰"
              },
              { 
                title: "Custom Facials", 
                description: "Tailored to your needs",
                icon: "💆"
              },
            ].map((specialty, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
                <div className="text-4xl mb-3">{specialty.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{specialty.title}</h3>
                <p className="text-sm text-gray-400">{specialty.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Credentials */}
        <section className="space-y-6 fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center sm:text-left">Credentials & Training</h2>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8 space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm sm:text-base text-gray-300">[Credential 1 - e.g., "Licensed Esthetician, State of Texas"]</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm sm:text-base text-gray-300">[Credential 2 - e.g., "Face Reality Certified Acne Specialist"]</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm sm:text-base text-gray-300">[Credential 3 - e.g., "Advanced Training in Pregnancy-Safe Skincare"]</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center fade-in-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <div className="inline-block p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
            <h3 className="text-2xl font-bold mb-3">Ready for radiant skin?</h3>
            <p className="text-gray-400 mb-6">Book your personalized facial treatment today</p>
            <button 
              onClick={() => router.push('/book-appointment')}
              className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Book Appointment
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}