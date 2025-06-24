import { useState, useEffect } from 'react'

const pages: object = {
  about: { title: "This is Me", subh: "This is subh", body: "this is body" },

}

function ImageDisplay() {
  //Just an image display, maybe displays a group of images sao that the user can use arrows to change which one is visible
  //on click the image will scale up to fill the screen
  //
}

function TypingReveal(props: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typeDisplay, setTypeDisplay] = useState('');

  useEffect(() => {
    //if the text is changed, remove it character by character
    if (props.textChanged) {
      const timeout = setTimeout(() => {

        setTypeDisplay(prevText => prevText.slice(0, -1));
        setCurrentIndex(prevIndex => prevIndex - 1);

        //if current index is 0, then all the text is gone.
        if (currentIndex === 0) {
          props.setTextChanged(false)
          setCurrentIndex(0);
        }
      }, props.delay);

      return () => clearTimeout(timeout);
    }

    else if (currentIndex < props.text.length) {
      const timeout = setTimeout(() => {
        console.log(currentIndex);
        setTypeDisplay(prevText => prevText + props.text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, props.delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, props.delay, props.text, props.textChanged]);

  return <p>{typeDisplay}</p>
}

function App() {
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

export default App
