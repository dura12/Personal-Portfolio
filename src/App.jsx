import React from 'react'
import Navbar from './sections/navbar'
import './index.css'
import HeroPage from './sections/hero'
import About from './sections/about'
import Project from './sections/project'
import Client from './sections/client'
import Contact from './sections/contact'
import Footer from './sections/footer'
import WorkExperience from './sections/works'
import ParticlesBackground from '../src/component/particlebackground'
const App = () => {
  return (
    <div className='p-0.5 text-3xl max-w-7xl mx-auto relative text-white' >
      <ParticlesBackground />

      <Navbar />
      <HeroPage />
      <About />
      <Project />
      <Client />
      <WorkExperience />
      <Contact />
      <Footer/>

    </div>
  )
}

export default App