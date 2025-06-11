// Index.jsx
import React from "react";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import UseCases from "../components/UseCases";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import "./index.css"

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <UseCases />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

       