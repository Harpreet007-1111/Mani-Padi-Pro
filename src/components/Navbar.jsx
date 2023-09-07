import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Navbar() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='nav-cont'>
        <div className="logo">
          <img src="/logo512.png" alt="Logo for Mani Padi Pro" />
          <HashLink smooth to="#">MANI PADI PRO</HashLink>
        </div>

        {(showMenu === false) ? <BiMenu className='menu' onClick={() => setShowMenu(true)} /> : <AiOutlineCloseCircle className='close' onClick={() => setShowMenu(false)} />}

        {(showMenu === true) && (
          <nav className={showMenu ? 'show' : 'close'}>
          <HashLink smooth to="#">Home</HashLink>
          <HashLink smooth to="#about">About</HashLink>
          <HashLink smooth to='#services'>Services</HashLink>
          <HashLink smooth to="#test">Testimonials</HashLink>
          <HashLink smooth to="#contact">Contact</HashLink>
        </nav>
        )}
    </div>
  )
}

export default Navbar;