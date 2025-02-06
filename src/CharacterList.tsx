import './CharacterList.css';
import { CharacterListProps } from './interface/CharacterListProps.js';

function CharacterList({ characters }: CharacterListProps) {
  return (
    <div className="character-list">
      {characters.map((character) => (
        <a
          key={character.id}
          href={character.url}
          target="_blank"
          rel="noopener noreferrer"
          className="character-card"
        >
          <img src={character.image} alt={character.name} />
          <h2 className="character-name">{character.name}</h2>
          <h3 className="character-info">
            Status:{' '}
            <span className={`status ${character.status.toLowerCase()}`}>{character.status}</span>
          </h3>{' '}
          <h3 className="character-info">Created: {character.created}</h3>{' '}
        </a>
      ))}
    </div>
  );
}

export default CharacterList;
