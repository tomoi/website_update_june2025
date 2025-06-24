import { useState, useEffect } from 'react'
import TypingReveal from './components/TypingReveal.tsx'

const pages: object = {
  about: { title: "This is Me", subh: "This is subh", body: "this is body" },
}

function ImageDisplay() {
  //Just an image display, maybe displays a group of images sao that the user can use arrows to change which one is visible
  //on click the image will scale up to fill the screen
  //
}

function Home() {
  const [newText, setNewText] = useState("Hello There")
  const [textChanged, setTextChanged] = useState(false)

  return (
    <>
      <TypingReveal text={newText} delay={100} textChanged={textChanged} setTextChanged={setTextChanged} />
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
    </>
  )
}

export default Home
