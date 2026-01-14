import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Platform from './components/Platform';
import Solutions from './components/Solutions';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Platform />
      <Solutions />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
