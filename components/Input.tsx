
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...props }) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        id={name}
        name={name}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#ff7e67] focus:border-[#ff7e67] transition"
        {...props}
      />
    </div>
  );
};

export default Input;
   