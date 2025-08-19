import { useState, useEffect } from 'react'
import TypingReveal from './components/TypingReveal.tsx'
import NavBar from './components/NavBar.tsx'

interface Images {
  path: string;
  alt: string;
}

function ImageDisplay({ images }: { images: object[] }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [imageFocused, setImageFocused] = useState(false);


  //Just an image display, maybe displays a group of images so that the user can use arrows to change which one is visible
  //on click the image will scale up to fill the screen
  //images will be displayed on a grid that will fill the parent
  //

  //image has "any" type because of conflict with declaring the object types
  const imageObject = images.map((image: any, index: number) => {
    return <img src={image.path} alt={image.alt} key={index} onClick={() => { setImageIndex(index); setImageFocused(true); }} />
  })

  if (imageFocused) {
    return <div className='singleImage'>
      <img src={images[imageIndex].path} alt={images[imageIndex].alt}></img>
      <p onClick={() => { setImageFocused(false) }}>x</p>
    </div>

  } else {
    return <div className='imageGrid'>{imageObject}</div>
  }
}

function Home() {
  const [newText, setNewText] = useState("Hello There")
  const [textChanged, setTextChanged] = useState(false)

  const images: Images[] = [
    {
      path: "src/media/IMG_0538.jpg",
      alt: "this is image 1"
    },
    {
      path: "src/media/IMG_0562.jpg",
      alt: "this is image 2"
    },
    {
      path: "src/media/IMG_0581.jpg",
      alt: "this is image 3"
    },
    {
      path: "src/media/IMG_0603.jpg",
      alt: "this is image 4"
    },
    {
      path: "src/media/IMG_0986.jpg",
      alt: "this is image 5"
    },
  ]

  return (
    <>
      <NavBar />
      <main>
        <h1><TypingReveal text={newText} delay={100} textChanged={textChanged} setTextChanged={setTextChanged} /></h1>
        <input
          name="textInput"
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
        <button
          onClick={function () {
            setTextChanged(true);

          }}
        />
        <ImageDisplay images={images} />
      </main>
    </>
  )
}

export default Home
