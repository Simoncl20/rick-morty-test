"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { IconChevronDown } from '@tabler/icons-react';

interface FilterProps {
  options: string[];
  placeholder?: string;
  typeParam: string;
  isOpen: boolean;
  onToggle: () => void;
}

const Filter = ({
  options = [],
  placeholder = "Select an option",
  typeParam,
  isOpen,
  onToggle
}: FilterProps) => {
  const [selectedOption, setSelectedOption] = useState("");
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleOptionClick = (option: string) => {
    // Cerrar el dropdown después de seleccionar una opción
    onToggle();
    const params = new URLSearchParams(searchParams);
    
    if (option === selectedOption) {
      return;
    }
    
    params.set("page", "1");
    
    if (option === "None") {
      params.delete(typeParam);
      setSelectedOption(placeholder);
    } else {
      params.set(typeParam, option);
      setSelectedOption(option);
    }
    
    console.log(`Filtering by ${option}`);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="relative w-80">
      <button
        className="w-full px-4 py-3 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        onClick={onToggle}
      >
        <span className={selectedOption ? (selectedOption == placeholder ? "text-gray-400" : "text-gray-900")  : "text-gray-400"}>
          {selectedOption || placeholder}
        </span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <IconChevronDown color="gray"/>
        </span>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          <ul className="py-1 overflow-auto text-base max-h-60">
            {options.map((option, index) => (
              <li
                key={index}
                className="px-4 py-3 text-gray-900 cursor-pointer hover:bg-green-100"
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

export default Filter;