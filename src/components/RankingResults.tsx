import React from 'react';
import { Person } from '../utils/types';

interface RankingResultsProps {
  people: Person[];
}

const RankingResults: React.FC<RankingResultsProps> = ({ people }) => {
  return (
    <div className='ranking-results'>
      <h2>Results:</h2>
      <ol>
        {people.map((person) => (
          <li key={person._id}>
            <img src={person.photoUrl} alt={person.name} />
            <h3>{person.name}</h3>
            <p>
              Attractiveness wins: {person.wins.attractiveness}
              <br />
              Intelligence wins: {person.wins.intelligence}
              <br />
              Charisma wins: {person.wins.charisma}
              <br />
              Total wins: {person.wins.attractiveness + person.wins.intelligence + person.wins.charisma}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default RankingResults;
