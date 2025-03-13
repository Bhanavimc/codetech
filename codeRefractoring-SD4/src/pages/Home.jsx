// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
