import React from 'react';
import { Person } from '../utils/types';

interface MatchupProps {
  personA: Person | null;
  personB: Person | null;
  onPersonSelect: (selectedPersonId: string) => void;
}

const Matchup: React.FC<MatchupProps> = ({ personA, personB, onPersonSelect }) => {
  if (!personA || !personB) {
    return <div>Loading...</div>;
  }

  return (
    <div className='matchup'>
      <div onClick={() => onPersonSelect(personA._id)}>
        <img src={personA.photoUrl} alt={personA.name} />
        <h3>{personA.name}</h3>
      </div>
      <div onClick={() => onPersonSelect(personB._id)}>
        <img src={personB.photoUrl} alt={personB.name} />
        <h3>{personB.name}</h3>
      </div>
    </div>
  );
};

export default Matchup;
