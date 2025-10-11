
import React from 'react';
import { MENU_DATA } from '../constants';
import MenuItemCard from './MenuItemCard';
import Button from './Button';

const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-[#f8f8f8] font-montserrat">Nossa Seleção</h2>
        
        {MENU_DATA.map((category) => (
          <div key={category.title} className="mb-16">
            <h3 className="text-3xl font-semibold mb-8 text-[#ff7e67] font-montserrat">{category.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item) => (
                <MenuItemCard key={item.name} item={item} />
              ))}
            </div>
          </div>
        ))}

        <div className="mt-16">
          <Button href="/cardapio.pdf" download={true} isExternal={true}>
            Ver Cardápio Completo (PDF)
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
   