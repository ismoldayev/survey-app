import React from 'react';

interface SwitchCharacteristicButtonProps {
  onSwitch: () => void;
}

const SwitchCharacteristicButton: React.FC<SwitchCharacteristicButtonProps> = ({
  onSwitch,
}) => {
  return <button onClick={onSwitch}>Switch Characteristic</button>;
};

export default SwitchCharacteristicButton;
