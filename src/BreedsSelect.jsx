import { useState } from "react";

export const BreedsSelect = ({ breeds }) => {
  const [selectedBreed, setSelectedBreed] = useState(null);


  return (
    <select
      value={selectedBreed || ""}
      onChange={(e) => setSelectedBreed(e.target.value)}
    >
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
