import { useState, useEffect } from 'react'
import BreedsSelect from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [putBreeds, setPutBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('spaniel') // 初期値を設定

  // 犬種一覧を取得
  useEffect(() => {
    const fetchBreeds = async () => {
      const res = await fetch('https://dog.ceo/api/breeds/list/all')
      const data = await res.json()
      setBreeds(Object.keys(data.message))
    }
    fetchBreeds()
  }, [])

  // 選択した犬種の画像を取得
  const fetchPutBreeds = async () => {
    if (!selectedBreed) return
    const res = await fetch(
      `https://dog.ceo/api/breed/${selectedBreed}/images/random/12`,
    )
    const data = await res.json()
    setPutBreeds(data.message)
  }

  return (
    <>
      <p>犬の種類一覧</p>
      <BreedsSelect breeds={breeds} onSelectBreed={setSelectedBreed} />
      <button onClick={fetchPutBreeds}>表示</button>
      <ul>
        {putBreeds.map((imgUrl, idx) => (
          <li key={idx}>
            <img src={imgUrl} alt={selectedBreed} width={200} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default DogListContainer
