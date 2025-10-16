import { useState } from 'react'

interface Images {
    pathLg: string;
    pathMd: string;
    pathSm: string;
    alt: string;
}

export default function ImageDisplay({ images }: { images: Images[] }) {
    const [imageIndex, setImageIndex] = useState(0);
    const [imageFocused, setImageFocused] = useState(false);


    //Just an image display, maybe displays a group of images so that the user can use arrows to change which one is visible
    //on click the image will scale up to fill the screen
    //images will be displayed on a grid that will fill the parent
    //transform: "rotate({Math.floor(Math.random() * (8 - (-8)) + (-8)))"

    const imageObject = images.map((image: Images, index: number) => {
        //picks a random number between -3 and 3 to add some random rotation to the polaroids
        let randomRotate = Math.floor(Math.random() * (3 - (-3)) + (-3));
        return <div className="polaroid" style={{ transform: `rotate(${randomRotate}deg)` }} key={index}>
            <picture onClick={() => { setImageIndex(index); setImageFocused(true); }}>
                <source media="(min-width:900px)" srcSet={image.pathLg} />
                <source media="(min-width:600px)" srcSet={image.pathMd} />
                <img src={image.pathSm} alt={image.pathSm} />
            </picture>
            {/* <img src={image.path} alt={image.alt} onClick={() => { setImageIndex(index); setImageFocused(true); }} /> */}
        </div>
    })

    if (imageFocused) {
        return <div className='singleImageDiv'>
            <img src={images[imageIndex].pathLg} alt={images[imageIndex].alt} className="singleImage"></img>
            <img src="src/assets/close_24dp_C1E0DC_FILL0_wght400_GRAD-25_opsz24.svg" alt="Exit Button" onClick={() => setImageFocused(false)} className="imageExit imageButton" />
            {(imageIndex === 0) ? null : <img src="src/assets/keyboard_arrow_left_24dp_C1E0DC_FILL0_wght400_GRAD-25_opsz24.svg" alt="Left Button" onClick={() => setImageIndex(imageIndex - 1)} className="imageLeft imageButton" />}
            {(imageIndex === images.length - 1) ? null : <img src="src/assets/keyboard_arrow_right_24dp_C1E0DC_FILL0_wght400_GRAD-25_opsz24.svg" alt="Right Button" onClick={() => setImageIndex(imageIndex + 1)} className="imageRight imageButton" />}
        </div>

    } else {
        return <div className='imageGrid'>{imageObject}</div>
    }
}