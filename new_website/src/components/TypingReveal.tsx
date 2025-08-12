import { useState, useEffect, type Dispatch, type SetStateAction } from 'react'

interface typingProps {
    textChanged: boolean;
    setTextChanged: Dispatch<SetStateAction<boolean>>;
    delay: number;
    text: string;
}

export default function TypingReveal({ textChanged, setTextChanged, delay, text }: typingProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [typeDisplay, setTypeDisplay] = useState('');

    useEffect(() => {
        //if the text is changed, remove it character by character
        if (textChanged) {
            const timeout = setTimeout(() => {

                setTypeDisplay(prevText => prevText.slice(0, -1));
                setCurrentIndex(prevIndex => prevIndex - 1);

                //if current index is 0, then all the text is gone.
                if (currentIndex === 0) {
                    setTextChanged(false)
                    setCurrentIndex(0);
                }
            }, delay);

            return () => clearTimeout(timeout);
        }

        else if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setTypeDisplay(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text, textChanged]);

    return <>{typeDisplay}</>

}