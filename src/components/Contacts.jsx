import React from 'react';
import { IoMdCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { ImLocation } from 'react-icons/im';
import { Fade } from 'react-reveal';

function Contacts() {
  return (
    <div>
        <section className='section'>
        <div className="wrapper">
          <h1>CONTACT US!</h1>
          <h4>GET IN TOUCH NOW!</h4>
        </div>
    </section>

        <div className="contact-main">
          <div className="wrapper">
            <Fade left>
              <div className="call">
                <div>
                  <IoMdCall className='icons' />
                  <h3>PHONE NUMBER</h3>
                  <p>+254 777444569</p>
                </div>

              <div>
                <MdEmail className='icons' />
                <h3>EMAIL</h3>
                <p>info@manipadipro.com</p>
              </div>

              <div>
                <ImLocation className='icons' />
                <h3>LOCATION</h3>
                <p>Noori Plaza, Moi Avenue street, Nairobi, Kenya</p>
              </div>
              </div>
              </Fade>

                <Fade right>
              <div className="map">
              <iframe title='Location of Mani Padi Pro' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255345.26362961886!2d34.48819122499998!3d0.28273069999999895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17803d4a3db3265d%3A0xd1499f8dbaeca30c!2sCloa%20Nails%20Spa!5e0!3m2!1sen!2ske!4v1693912732485!5m2!1sen!2ske" width="600" height="450" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              </Fade>
          </div>
        </div>


    </div>
  )
}

export default Contacts;