
import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://picsum.photos/seed/sushi-hero/1920/1080')" }}>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative text-center text-white z-10 p-6">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-4 font-montserrat drop-shadow-lg">
          Kaze Sushi
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-poppins drop-shadow-md">
          Uma experiência autêntica de rodízio japonês.
        </p>
        <Button href="#reservations">
          Faça sua Reserva
        </Button>
      </div>
    </section>
  );
};

export default Hero;
   