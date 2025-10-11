
import type { MenuCategory } from './types';

export const NAV_LINKS = [
  { name: 'Início', href: '#home' },
  { name: 'Cardápio', href: '#menu' },
  { name: 'Sobre', href: '#about' },
  { name: 'Reservas', href: '#reservations' },
  { name: 'Contato', href: '#contact' },
];

export const MENU_DATA: MenuCategory[] = [
  {
    title: 'Uramakis',
    items: [
      { name: 'Salmão com Cream Cheese', description: 'Arroz, alga, salmão fresco e cream cheese Philadelphia.', image: 'https://picsum.photos/seed/uramaki1/400/300' },
      { name: 'Ebiten', description: 'Camarão empanado, alface, maionese japonesa e ovas.', image: 'https://picsum.photos/seed/uramaki2/400/300' },
      { name: 'Skin', description: 'Pele de salmão grelhada, molho tarê e gergelim.', image: 'https://picsum.photos/seed/uramaki3/400/300' },
    ],
  },
  {
    title: 'Hot Rolls',
    items: [
      { name: 'Hot Philadelphia', description: 'Sushi empanado e frito com salmão e cream cheese.', image: 'https://picsum.photos/seed/hotroll1/400/300' },
      { name: 'Hot Couve', description: 'Hot roll coberto com couve crispy e molho tarê.', image: 'https://picsum.photos/seed/hotroll2/400/300' },
      { name: 'Hot Kaze', description: 'Nosso especial da casa com um toque picante.', image: 'https://picsum.photos/seed/hotroll3/400/300' },
    ],
  },
   {
    title: 'Sashimis',
    items: [
      { name: 'Sashimi de Salmão', description: 'Fatias finas de salmão fresco premium.', image: 'https://picsum.photos/seed/sashimi1/400/300' },
      { name: 'Sashimi de Atum', description: 'Fatias de atum de alta qualidade.', image: 'https://picsum.photos/seed/sashimi2/400/300' },
      { name: 'Sashimi de Polvo', description: 'Fatias delicadas de polvo cozido.', image: 'https://picsum.photos/seed/sashimi3/400/300' },
    ],
  },
];

export const RESERVATION_TIMES = ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'];
   