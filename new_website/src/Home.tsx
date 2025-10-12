import { useState, useEffect } from 'react'
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
  //transform: "rotate({Math.floor(Math.random() * (8 - (-8)) + (-8)))"

  //image has "any" type because of conflict with declaring the object types
  const imageObject = images.map((image: any, index: number) => {
    //picks a random number between -3 and 3 to add some variation to the polaroids
    let randomRotate = Math.floor(Math.random() * (3 - (-3)) + (-3));
    return <div className="polaroid" style={{ transform: `rotate(${randomRotate}deg)` }}>
      <img src={image.path} alt={image.alt} key={index} onClick={() => { setImageIndex(index); setImageFocused(true); }} />
    </div>
  })

  if (imageFocused) {
    return <div className='singleImageDiv'>
      <img src={images[imageIndex].path} alt={images[imageIndex].alt} className="singleImage"></img>
      <img src="src/assets/close_24dp_C1E0DC_FILL0_wght400_GRAD-25_opsz24.svg" alt="Exit Button" onClick={() => setImageFocused(false)} className="imageExit imageButton" />
      {(imageIndex === 0) ? null : <img src="src/assets/keyboard_arrow_left_24dp_C1E0DC_FILL0_wght400_GRAD-25_opsz24.svg" alt="Left Button" onClick={() => setImageIndex(imageIndex - 1)} className="imageLeft imageButton" />}
      {(imageIndex === images.length - 1) ? null : <img src="src/assets/keyboard_arrow_right_24dp_C1E0DC_FILL0_wght400_GRAD-25_opsz24.svg" alt="Right Button" onClick={() => setImageIndex(imageIndex + 1)} className="imageRight imageButton" />}
    </div>

  } else {
    return <div className='imageGrid'>{imageObject}</div>
  }
}

function Home() {

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
        <ImageDisplay images={images} />
      </main>
    </>
  )
}

export default Home
