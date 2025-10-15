import NavBar from '../../components/NavBar.tsx'
import ImageDisplay from '../../components/ImageDisplay.tsx';

interface Images {
    pathLg: string;
    pathMd: string;
    pathSm: string;
    alt: string;
}

function Photography() {

    const images: Images[] = [
        {
            pathLg: "src/pages/photography/media/IMG_1161-lg.jpg",
            pathMd: "src/pages/photography/media/IMG_1161-md.jpg",
            pathSm: "src/pages/photography/media/IMG_1161-sm.jpg",
            alt: "Two penguins standing on a rock"
        },
        {
            pathLg: "src/pages/photography/media/IMG_1088-lg.jpg",
            pathMd: "src/pages/photography/media/IMG_1088-md.jpg",
            pathSm: "src/pages/photography/media/IMG_1088-sm.jpg",
            alt: "Two penguins posing for the camera"
        },
        {
            pathLg: "src/pages/photography/media/IMG_1092-lg.jpg",
            pathMd: "src/pages/photography/media/IMG_1092-md.jpg",
            pathSm: "src/pages/photography/media/IMG_1092-sm.jpg",
            alt: "A single penguin standing on a rock"
        },
        {
            pathLg: "src/pages/photography/media/IMG_1107-lg.jpg",
            pathMd: "src/pages/photography/media/IMG_1107-md.jpg",
            pathSm: "src/pages/photography/media/IMG_1107-sm.jpg",
            alt: "A single penguin standing on a rock"
        },
    ]

    return (
        <>
            <NavBar />
            <main>
                <h1>Photography</h1>
                <ImageDisplay images={images} />
            </main>
        </>
    )
}

export default Photography