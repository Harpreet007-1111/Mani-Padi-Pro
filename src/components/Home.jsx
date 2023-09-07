import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Fade } from 'react-reveal';

function Home() {
  return (
    <div className='home-cont'>
      <div className="home-content">
        <Fade left>
        <h1>Discover the Ultimate in Nail Care</h1>
        <h3>WELCOME TO MANI PADI PRO</h3>

        <p>At Mani Padi Pro, we are dedicated to bringing you the finest in manicure and pedicure experiences. Our expert technicians are committed to pampering your hands and feet, leaving you feeling refreshed, rejuvenated, and absolutely fabulous.</p>
        <button><HashLink smooth to='#services'>OUR SERVICES</HashLink></button>
        </Fade>
      </div>
      <div className="hero">
        <Fade right>
        <img src="/assets/bluenails.jpg" alt="A beautiful white lady with long eye lashes and long black artifical nails." loading='lazy' />
          </Fade>
      </div>

    </div>
  )
}

export default Home;