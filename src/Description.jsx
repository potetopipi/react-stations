import { DogImage } from './DogImage'

/**
 * Description component that displays a dog image and a button to fetch a new one.
 */
export const Description = ({ dogUrl, fetchDogImage }) => {

  return (
    <div>
      <p>かわいい犬の画像です。</p>
      <DogImage imageUrl={dogUrl} /> {/* ここで表示 */}
      <button onClick={fetchDogImage}>更新</button>
    </div>
  )
}


export default Description;
