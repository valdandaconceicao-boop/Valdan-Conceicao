
import React from 'react';
import type { MenuItem } from '../types';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  return (
    <div className="bg-[#f8f8f8] text-[#1a1a1a] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#ff7e67]/20">
      <img src={item.image} alt={item.name} className="w-full h-48 object-cover filter contrast-110" />
      <div className="p-6 text-left">
        <h4 className="text-xl font-bold mb-2 font-montserrat">{item.name}</h4>
        <p className="text-gray-700 font-poppins">{item.description}</p>
      </div>
    </div>
  );
};

export default MenuItemCard;
   