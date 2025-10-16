// import { useState, useEffect } from 'react'
import NavBar from './components/NavBar.tsx'

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
      <header className="hero">
        <picture>
          <source media="(min-width:900px)" srcSet="src/pages/photography/media/IMG_1522-lg.jpg" />
          <source media="(min-width:600px)" srcSet="src/pages/photography/media/IMG_1522-md.jpg" />
          <img src="src/pages/photography/media/IMG_1522-sm.jpg" alt="mountainpeaks in the distance" />
        </picture>
        <div>
          <h1>Hello there, my name is Tomas.</h1>
          <p>I am a front-end developer / designer with a passion for creating responsive webpages using modern technologies.</p>
        </div>
      </header>
      <main>
        <h2>My Journey</h2>
        <p>My software development journey started in Highschool where I learned the basics of Python.</p>
        <p>Even though learning Python was fun and interesting, I always wanted to make something visual. Which is why I turned to front-end web development and design.</p>

      </main>
    </>
  )
}

export default Home
