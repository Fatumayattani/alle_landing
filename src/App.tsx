import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}