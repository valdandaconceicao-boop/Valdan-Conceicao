
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#f8f8f8] text-[#1a1a1a]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6 font-montserrat">Contato e Localização</h2>
            <div className="space-y-4">
              <p><strong>Endereço:</strong> Rua das Cerejeiras, 123 - Bairro Liberdade, São Paulo - SP</p>
              <p><strong>Telefone:</strong> (11) 98765-4321</p>
              <p><strong>E-mail:</strong> contato@kazesushi.com</p>
            </div>

            <h3 className="text-2xl font-bold mt-10 mb-4 font-montserrat">Horários de Funcionamento</h3>
            <ul className="space-y-2">
              <li><strong>Terça a Sexta:</strong> 18:00 - 23:00</li>
              <li><strong>Sábado:</strong> 12:00 - 16:00 | 18:00 - 23:30</li>
              <li><strong>Domingo:</strong> 12:00 - 16:00</li>
              <li><strong>Segunda:</strong> Fechado</li>
            </ul>
          </div>
          <div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
               <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.431268502391!2d-46.63883488554287!3d-23.55299496717585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a72d3e3a51%3A0x949392261e4471f4!2sBairro%20da%20Liberdade%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1678886450123!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
   