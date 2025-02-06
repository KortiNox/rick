import React, { useState } from 'react';
import SearchBar from './SearchBar.js';
import CharacterList from './CharacterList.jsx';
import { Character } from './interface/Character.js';

import './App.css';

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);

  return (
    <div className="App">
      <SearchBar setCharacters={setCharacters} />
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;
