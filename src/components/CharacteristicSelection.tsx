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
      <button onClick={() => onCharacteristicSelect('seksapil')}>
        seksapil
      </button>
      <button onClick={() => onCharacteristicSelect('cuteness')}>
        cuteness
      </button>
      <button onClick={() => onCharacteristicSelect('wifematerial')}>
        wifematerial
      </button>
    </div>
  );
};

export default CharacteristicSelection;
