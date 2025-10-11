
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  download?: boolean;
  isExternal?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, href, download, isExternal, ...props }) => {
  const commonClasses = "bg-[#ff7e67] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#ff6347] hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out inline-block text-lg";

  if (href) {
    return (
      <a 
        href={href} 
        className={commonClasses}
        download={download}
        target={isExternal ? '_blank' : '_self'}
        rel={isExternal ? 'noopener noreferrer' : ''}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={commonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
   