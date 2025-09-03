import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Features from './components/Features';
import Amenities from './components/Amenities';
import UseCases from './components/UseCases';
import Gallery from './components/Gallery';
import Access from './components/Access';
import Faq from './components/Faq';
import Booking from './components/Booking';
import Footer from './components/Footer';
import FloatingBookingButton from './components/FloatingBookingButton';

function App() {
  return (
    <div className="bg-white text-gray-800 antialiased">
      <Header />
      <main>
        <Hero />
        <Concept />
        <Features />
        <Amenities />
        <UseCases />
        <Gallery />
        <Access />
        <Faq />
        <Booking />
      </main>
      <Footer />
      <FloatingBookingButton />
    </div>
  );
}

export default App;
