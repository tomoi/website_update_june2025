// import { useState, useEffect } from 'react'
import NavBar from './components/NavBar.tsx'

// interface Images {
//   path: string;
//   alt: string;
// }

function Clock() {
  return <p>12:00</p>
}

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
      {/* <header className="hero">
        <picture>
          <source media="(min-width:900px)" srcSet="src/pages/photography/media/IMG_1522-lg.jpg" />
          <source media="(min-width:600px)" srcSet="src/pages/photography/media/IMG_1522-md.jpg" />
          <img src="src/pages/photography/media/IMG_1522-sm.jpg" alt="mountainpeaks in the distance" />
        </picture>
        <div>
          <h1>Hello there, my name is Tomas.</h1>
          <p>I am a front-end developer / designer with a passion for creating responsive webpages using modern technologies.</p>
        </div>
      </header> */}
      <main id="home_main">
        <section id="home_intro">
          <p>Hey there stranger, I'm Tomas Godoybaca. I am a Front End developer with an eye for detail.</p>
          <p>I recently graduated from the Interactive Design & Technology course at Saskatchewan Polytechnic with Great Distinction.</p>
        </section>
        <section id="home_contact">
          <p>You can find me in these places, or just send me an email.</p>
          <a href="mailto:tommygodoybaca@outlook.com">tommygodoybaca@outlook.com</a>
        </section>
        <section id="main_clock">
          <Clock />
        </section>
        <section id="main_social_icons">
          <a href="https://github.com/tomoi" className="github"><img src="src/assets/github-mark-white.svg" alt="GitHub Logo" /></a>
          <a href="https://www.linkedin.com/in/tomasgodoybaca/"><img src="src/assets/InBug-White.png" alt="LinkedIn Logo" /></a>
          <a href="https://www.instagram.com/tomoi_28/"><img src="src/assets/Instagram_Glyph_White.svg" alt="Instagram Logo" /></a>

        </section>
      </main>
    </>
  )
}

export default Home
