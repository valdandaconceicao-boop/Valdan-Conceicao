
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Reservations from './components/Reservations';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#1a1a1a] text-[#f8f8f8] font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Menu />
        <About />
        <Reservations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
   