import React from 'react'
import Navbar from './sections/navbar'
import './index.css'
import HeroPage from './sections/hero'
import About from './sections/about'
import Project from './sections/project'
const App = () => {
  return (
    <div className='p-0.5 text-3xl max-w-7xl mx-auto relative text-blue-300'>
      <Navbar />
      <HeroPage />
      <About />
      <Project />
    </div>
  )
}

export default App