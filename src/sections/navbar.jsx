import React from 'react'
import { useState } from 'react'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  const closeMenu = () => {
    setIsOpen(false);
  }
  const handleClick = (e) => {
    if (e.target.tagName === 'A') {
      closeMenu();
    }
  }
  const handleScroll = () => {
    const navbar = document.querySelector('header');
    if (window.scrollY > 0) {
      navbar.classList.add('bg-black/90');
    } else {
      navbar.classList.remove('bg-black/90');
    }
  }
  const NavItems =() => {
    return (
     <ul className='flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20'>
      {["Home", "About", "Projects", "Contact"].map((item, index) => (
      <li key={index} className='text-neutral-400 hover:text-white font-generalsans max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5'
      >
        <a className="text-lg md:text-base hover:text-white transition-colors" href="/" onClick={() => {}} >{item}</a>
      </li>))}

     </ul>
    )
  }

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('click', handleClick);
  window.addEventListener('resize', closeMenu);
  window.addEventListener('touchstart', closeMenu);   
  return (
    <header className="fixed top-0 left-0 right-0 bg-black/90 z-50 ">
        <div className='max-w-7xl mx-auto'>
            <div className='flex justify-between items-center py-5 mx-auto sm:px-10 px-5'>
                <a href="/" className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
                 Dureti 
                </a>
                <button onClick={toggleMenu} className='text-neutral-400 hover:text-white focus:outline-0 sm:hidden flex' aria-label='toggle menu'>
                    <img src={ isOpen ? "./assets/close.svg": "assets/menu.svg"} alt='menu' className='w-6 h-6'/>

                </button>
            <nav className='sm:flex hidden'>

            <NavItems />
            </nav>
            </div>


        </div>
        <div className={`absolute left-0 right-0 bg-black-200 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <nav className='p-5'>

          <NavItems />
          </nav>
          </div>
    </header>
  )
}

export default Navbar