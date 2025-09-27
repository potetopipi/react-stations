import { useState } from 'react'
import Header from './Header'
import Description from './Description'
import './App.css'

/** @type {() => JSX.Element} */
export const App = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg')

  const fetchDogImage = async () => {
    const res = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await res.json()
    setDogUrl(data.message)
  }
  return (
    <>
      <Header />
      <Description dogUrl={dogUrl} fetchDogImage={fetchDogImage} />
    </>
  )
}


