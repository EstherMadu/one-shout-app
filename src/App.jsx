import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Features } from "./components/Features";
import { Pricing } from "./components/Pricing";
import { faqItems } from "./components/data";
import { FAQItem } from "./components/FAQPage";
import { Footer } from "./components/Footer";
import "boxicons";

function App() {
  return (
    <div className="App bg-slate-100 font-sans">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Pricing />
      <section>
        <h2 className="text-center mt-20 mb-20 font-bold text-4xl">
          Frequently Asked Questions
        </h2>
        {faqItems.map(({ question, answer }, index) => (
          <FAQItem key={index} question={question} answer={answer} />
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default App;
