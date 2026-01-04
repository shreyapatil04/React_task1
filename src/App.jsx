import React from 'react'
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import WhyUs from "./components/whyus/WhyUs";
import Process from "./components/process/Process";
import Projects from "./components/projects/Projects";
import Testimonials from "./components/testimonials/Testimonials";
import CTA from "./components/cta/CTA";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <div className="app-bg">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <Projects />
      <Testimonials />
      <CTA />
      <Footer />

    </div>
  )
}

export default App
