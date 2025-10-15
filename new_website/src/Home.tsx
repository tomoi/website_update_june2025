import { useState, useEffect } from 'react'
import NavBar from './components/NavBar.tsx'
import ImageDisplay from './components/ImageDisplay.tsx'

// interface Images {
//   path: string;
//   alt: string;
// }

function Home() {

  // const images: Images[] = [
  //   {
  //     path: "src/media/IMG_0538.jpg",
  //     alt: "this is image 1"
  //   },
  //   {
  //     path: "src/media/IMG_0562.jpg",
  //     alt: "this is image 2"
  //   },
  //   {
  //     path: "src/media/IMG_0581.jpg",
  //     alt: "this is image 3"
  //   },
  //   {
  //     path: "src/media/IMG_0603.jpg",
  //     alt: "this is image 4"
  //   },
  //   {
  //     path: "src/media/IMG_0986.jpg",
  //     alt: "this is image 5"
  //   },
  // ]

  return (
    <>
      <NavBar />
      <main>
        <h1>My name is Tomas Godoybaca</h1>
        <p>I am a front-end developer / designer based in Saskatoon, Saskatchewan.</p>
        {/* <input
          name="textInput"
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
        <button
          onClick={function () {
            setTextChanged(true);

          }}
        /> */}
        {/* <ImageDisplay images={images} /> */}
      </main>
    </>
  )
}

export default Home
