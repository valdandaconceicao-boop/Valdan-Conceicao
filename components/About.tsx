
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#f8f8f8] text-[#1a1a1a]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold mb-6 font-montserrat">Nossa Filosofia</h2>
            <p className="mb-4 leading-relaxed">
              No Kaze Sushi, acreditamos que a culinária japonesa é uma arte. Nossa missão é trazer a mais autêntica e fresca experiência de rodízio, combinando técnicas tradicionais com um toque contemporâneo.
            </p>
            <p className="leading-relaxed">
              Cada ingrediente é selecionado com o máximo rigor, garantindo que cada peça de sushi seja uma celebração de sabor e qualidade. Nosso ambiente foi pensado para ser um refúgio elegante e acolhedor, o lugar perfeito para criar memórias inesquecíveis.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://picsum.photos/seed/sushi-chef/600/400" 
              alt="Chef de sushi preparando um prato" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
   