import React, { useState, useEffect } from "react";
import { SearchIcon } from "./icons";

type SearchInputProps = {
  onSearch: (searchTerm: string) => void;
  delay?: number;
};

function SearchInput({ onSearch, delay = 500 }: SearchInputProps) {
  const [searchTerm, setSearchTerm] = useState("");

  let debounceTimeout: NodeJS.Timeout;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);

    // Cancela o debounce anterior, se houver
    clearTimeout(debounceTimeout);

    // Define um novo timeout com o atraso especificado
    debounceTimeout = setTimeout(() => {
      // Verifica se o valor do searchTerm não mudou
      if (searchTerm !== value) {
        onSearch(value);
      }
    }, delay);
  };

  useEffect(() => {
    return () => {
      // Limpa o timeout quando o componente é desmontado
      clearTimeout(debounceTimeout);
    };
  }, []);

  return (
    <div className="relative mb-6">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
        <SearchIcon />
      </div>
      <input
        type="search"
        className="block w-full pl-10 p-2.5 rounded-md bg-stone-700 border-2 border-stone-400 placeholder-stone-400 text-white focus:ring-orange-500 focus:border-orange-500"
        placeholder="Procure por foguete, missão e/ou resultado..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchInput;
