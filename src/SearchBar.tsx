import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Character } from './interface/Character.js';

interface SearchBarProps {
  setCharacters: (characters: Character[]) => void; // Поменять any на Character[]
}

function SearchBar({ setCharacters }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (query.length > 3) {
        try {
          const response = await axios.get(
            `https://rickandmortyapi.com/api/character/?name=${query}`,
          );

          setCharacters(response.data.results || []);
        } catch (error) {
          console.error('Ошибка при запросе:', error);
          setCharacters([]);
        }
      } else {
        setCharacters([]);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <input
      type="text"
      placeholder="Search characters..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputRef}
    />
  );
}

export default SearchBar;
