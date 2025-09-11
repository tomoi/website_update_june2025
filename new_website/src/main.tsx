import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import Home from './Home.tsx'
import About from './about/About.tsx'
import Destiny from './destiny/Destiny.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destiny" element={<Destiny />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
