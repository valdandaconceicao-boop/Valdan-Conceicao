
import React, { useState } from 'react';
import type { ReservationForm } from '../types';
import { RESERVATION_TIMES } from '../constants';
import Button from './Button';
import Input from './Input';

type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

const Reservations: React.FC = () => {
  const [formData, setFormData] = useState<ReservationForm>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: RESERVATION_TIMES[0],
    guests: 2,
  });
  const [status, setStatus] = useState<SubmissionStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      // Logic to send email or save to a database would go here.
      // For this example, we'll just simulate success.
      console.log('Reservation data:', formData);
      setStatus('success');
      
      // Reset form after a few seconds
      setTimeout(() => {
        setStatus('idle');
         setFormData({
            name: '', email: '', phone: '', date: '',
            time: RESERVATION_TIMES[0], guests: 2,
        });
      }, 5000);
    }, 2000);
  };

  if (status === 'success') {
    return (
      <section id="reservations" className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4 text-white font-montserrat">Obrigado!</h2>
            <p className="text-lg text-[#d4f1d4]">Sua solicitação de reserva foi enviada com sucesso.</p>
            <p className="text-md text-gray-300 mt-2">Entraremos em contato em breve para confirmar. Aguarde nosso e-mail.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="reservations" className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-white font-montserrat">Faça sua Reserva</h2>
          <p className="text-lg text-gray-300 mb-8">
            Garanta seu lugar em uma experiência gastronômica única.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-[#f8f8f8] text-[#1a1a1a] p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input name="name" label="Nome Completo" type="text" value={formData.name} onChange={handleChange} required />
            <Input name="email" label="E-mail" type="email" value={formData.email} onChange={handleChange} required />
            <Input name="phone" label="Telefone" type="tel" placeholder="(XX) XXXXX-XXXX" value={formData.phone} onChange={handleChange} required />
            <Input name="date" label="Data" type="date" value={formData.date} onChange={handleChange} required min={new Date().toISOString().split('T')[0]}/>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Hora</label>
              <select id="time" name="time" value={formData.time} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#ff7e67] focus:border-[#ff7e67] transition">
                {RESERVATION_TIMES.map(time => <option key={time} value={time}>{time}</option>)}
              </select>
            </div>
            <Input name="guests" label="Número de Pessoas" type="number" value={formData.guests.toString()} onChange={handleChange} required min="1" max="10"/>
          </div>
          <div className="mt-8 text-center">
             <Button type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Enviando...' : 'Solicitar Reserva'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Reservations;
   