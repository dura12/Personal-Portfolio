import React from 'react'
import Navbar from './sections/navbar'
import './index.css'
import HeroPage from './sections/hero'
import About from './sections/about'
const App = () => {
  return (
    <div className='p-0.5 text-3xl text-blue-300'>
      <Navbar />
      <HeroPage />
      <About />
    </div>
  )
}

export default App