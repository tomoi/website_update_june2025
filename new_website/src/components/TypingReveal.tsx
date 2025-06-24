import { useState, useEffect } from 'react'

export default function TypingReveal(props: any) {
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
                setTypeDisplay(prevText => prevText + props.text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, props.delay);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, props.delay, props.text, props.textChanged]);

    return <p>{typeDisplay}</p>
}