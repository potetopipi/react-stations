import { useState } from 'react';

export const BreedsSelect = ({ breeds, onSelectBreed }) => {
  const [selectedBreed, setSelectedBreed] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedBreed(value);
    onSelectBreed(value); // 親に選んだ犬種を渡す
  };

  return (
    <select value={selectedBreed} onChange={handleChange}>
      <option value="">すべての犬種</option>
      {breeds.map((breed) => (
        <option key={breed} value={breed}>
          {breed}
        </option>
      ))}
    </select>
  );
};

export default BreedsSelect;
