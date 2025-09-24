// DO NOT DELETE

import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  return (
    <div>
      <header>
        <h1>Dogアプリ</h1>
      </header>
      <img
        src="https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg"
        alt="dog"
        width={200}
      />
      <p>かわいい犬の画像です。</p>
    </div>
  )
}
