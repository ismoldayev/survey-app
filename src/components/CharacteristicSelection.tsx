import React from 'react';

interface CharacteristicSelectionProps {
  onCharacteristicSelect: (characteristic: string) => void;
}

const CharacteristicSelection: React.FC<CharacteristicSelectionProps> = ({
  onCharacteristicSelect,
}) => {
  return (
    <div>
      <h2>Select a characteristic to rank:</h2>
      <button onClick={() => onCharacteristicSelect('attractiveness')}>
        Attractiveness
      </button>
      <button onClick={() => onCharacteristicSelect('intelligence')}>
        Intelligence
      </button>
      <button onClick={() => onCharacteristicSelect('charisma')}>
        Charisma
      </button>
    </div>
  );
};

export default CharacteristicSelection;
