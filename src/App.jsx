// DO NOT DELETE

import { useState } from 'react'
import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg',
  )

  return (
    <div>
      <header>
        <h1>Dogアプリ</h1>
      </header>
      <img src={dogUrl} alt="dog" width={200} />
      <p>かわいい犬の画像です。</p>
    </div>
  )
}
