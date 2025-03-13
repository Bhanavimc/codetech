// src/components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-blue-600 text-white py-16 px-8 text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to Intelion</h1>
      <p className="text-lg mb-8">Empowering businesses with cutting-edge AI solutions.</p>
      <Link
        to="/about"
        className="bg-yellow-500 text-black py-2 px-6 rounded-full text-lg"
      >
        Learn More
      </Link>
    </section>
  );
};

export default Hero;
