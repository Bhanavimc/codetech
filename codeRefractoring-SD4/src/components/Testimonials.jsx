// src/components/Testimonials.jsx
import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>
        <div className="flex justify-center">
          <div className="bg-white text-black p-8 rounded-lg shadow-lg max-w-xs">
            <p className="italic">"Intelion's AI solutions transformed our business. A game changer!"</p>
            <p className="font-semibold mt-4">John Doe</p>
            <p>CEO, TechCompany</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
