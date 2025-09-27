import { useState, useEffect } from "react";
import BreedsSelect from "./BreedsSelect";

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      const res = await fetch("https://dog.ceo/api/breeds/list/all");
      const data = await res.json();
      setBreeds(Object.keys(data.message));
    };
    fetchBreeds();
  }, []);

  return (
    <>
      <p>犬の種類一覧</p>
      <BreedsSelect breeds={breeds} />
    </>
  );
};

export default DogListContainer;
