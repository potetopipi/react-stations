import { useState, useEffect } from 'react'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])

  useEffect(() => {
    const fetchBreeds = async () => {
      const res = await fetch('https://dog.ceo/api/breeds/list/all')
      const data = await res.json()
      setBreeds(Object.keys(data.message))
    }
    fetchBreeds()
  }, [])

  return (
    <>
      <p>犬の種類一覧</p>
      <ul>
        {breeds.map((breed) => (
          <li key={breed}>{breed}</li>
        ))}
      </ul>
    </>
  )
}

export default DogListContainer;
