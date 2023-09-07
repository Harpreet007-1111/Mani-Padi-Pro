import React from 'react';
import { Fade } from 'react-reveal';

function About() {
  return (
    <div className='about-cont'>

        <section className='section'>
        <div className="wrapper">
        <h1>ABOUT US</h1>
        <h4>LEARN MORE ABOUT US!</h4>
        </div>
      </section>

      <div className="about-main">
          <Fade left>
          <h2>WHO WE ARE?</h2>
          <p>At Mani Padi Pro, we are more than just a nail care studio; we are your partners in enhancing your beauty and well-being. Established by passionate professionals in the beauty industry, our journey began with a shared vision of bringing excellence and luxury to the world of manicures and pedicures.</p>
          </Fade>

          <span id='rose'>
          <Fade right>
          <img src="/assets/rosenails.jpg" alt="A lady with red short nails" loading='lazy' />
          </Fade>
        </span>

          <Fade right>
          <p>We take pride in our team of highly skilled technicians who are dedicated to providing you with an unforgettable pampering experience. With years of expertise, they bring artistry and precision to every nail service, ensuring you leave feeling confident and empowered.</p>
          </Fade>

          <Fade left>
          <h2>OUR MISSION</h2>
          <p>Our mission is simple yet profound: to empower you with stunning nails that reflect your individuality and style. We strive to create a sanctuary where self-care meets self-expression, delivering nail services that not only beautify but also boost your confidence.</p>
          </Fade>

          <span id='dark'>
            <Fade left>
          <img src="/assets/rills.jpg" alt="A lady with long artificial with rills on the nail." loading='lazy' />
          </Fade>
        </span>

          <Fade right>
          <h2>OUR VISION</h2>
          <p>At Mani Padi Pro, we envision a world where nail care isn't just a routine but a celebration of your uniqueness. We aspire to be the go-to destination for individuals seeking top-notch manicure and pedicure services in a welcoming and hygienic environment. Our vision is to set new industry standards, continually pushing the boundaries of creativity and innovation.</p>
          </Fade>
          <Fade right>
          <span id='flower'>
          <img src="/assets/flower-nails.jpg" alt="A lady with flowers drawn on the nails." loading='lazy' />
        </span>
        </Fade>

        </div>

    </div>
  )
}

export default About;