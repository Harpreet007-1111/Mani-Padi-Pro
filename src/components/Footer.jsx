import React from 'react';
import { BsFacebook, BsTwitter, BsPinterest } from 'react-icons/bs';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { Fade } from 'react-reveal';

function Footer() {
  return (
    <footer>
      <Fade bottom>
        <div className="about">
          <h2>ABOUT US</h2>
          <p>At Mani Padi Pro, we are more than just a nail care studio; we are your partners in enhancing your beauty and well-being. Established by passionate professionals in the beauty industry, our journey began with a shared vision of bringing excellence and luxury to the world of manicures and pedicures.</p>
        </div>

        <div className="social">
          <h2>Follow Us On:</h2>
            <BsFacebook className="icons" />
            <BsTwitter className="icons" />
            <BiLogoInstagramAlt className="icons" />
            <BsPinterest className='icons' />
        </div>
        </Fade>
    </footer>
  )
}

export default Footer;