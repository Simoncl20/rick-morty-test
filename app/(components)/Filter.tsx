'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

interface FilterProps {
  options: string[];
  placeholder?: string;
  typeParam: string;
}

const Filter = ({ options = [],  placeholder = 'Select an option' , typeParam}: FilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleOptionClick = (option: string) => {
    if (option === selectedOption) {
      setIsOpen(false);
      return;
    } else if (option === 'None') {
      setIsOpen(false);
      setSelectedOption(placeholder);
      return;
    }
    
    setSelectedOption(option);
    setIsOpen(false);
    console.log(`Filtering by ${option}`);
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (option) {
      params.set(typeParam, option);
    } else if (option === 'None') {
      params.delete(typeParam);
    } else {
      params.delete(typeParam);
    }

    replace(`${pathname}?${params.toString()}`);

  };

  return (
    <div className="relative w-64">
      <button 
        className="w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption || placeholder}
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          <ul className="py-1 overflow-auto text-base max-h-60">
            {options.map((option, index) => (
              <li 
                key={index}
                className="px-4 py-2 text-gray-900 cursor-pointer hover:bg-blue-100"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Filter