import React from 'react'
import Navbar from './sections/navbar'
import './index.css'
import HeroPage from './sections/hero'
const App = () => {
  return (
    <div className='p-0.5 text-3xl text-blue-300'>
      <Navbar />
      <HeroPage />
    </div>
  )
}

export default App