import { useState, useEffect } from 'react'
import './App.css'

function TypingReveal(props: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typeDisplay, setTypeDisplay] = useState('');

  useEffect(() => {
    if (props.textChanged) {
      const timeout = setTimeout(() => {
        console.log(currentIndex);

        setTypeDisplay(prevText => prevText.slice(0, -1));
        setCurrentIndex(prevIndex => prevIndex - 1);

        if (currentIndex === 0) {
          props.setTextChanged(false)
          console.log(props.textChanged)
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

  return <p>{typeDisplay}<span className='typingCursor'>|</span></p>
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
        onClick={() => setTextChanged(true)}
      />
    </>
  )
}

export default App
