import React from 'react';
import { Bounce, Slide } from "react-reveal";
function Services() {
  return (
    <div>

      <section className='section'>
        <div className="wrapper">
          <h1>OUR SERVICES</h1>
          <h4>WHAT WE DO BEST!</h4>
        </div>
      </section>

      <div className="main-services">
        <Slide left>
        <p>At Mani Padi Pro, we offer a comprehensive range of nail care services to cater to your unique needs and preferences. Our expert technicians are dedicated to delivering top-quality treatments that leave you feeling pampered and looking fabulous. Explore our services below:</p> </Slide>

        <div className="wrapper">

          <div className='cards'>
          <Bounce left>
            <img loading='lazy' src="/assets/eyelashes.jpg" alt="A Beautiful lady wearing dark Acrylic Nails with dark long eyelashes." />
            </Bounce>
          </div>

          <div className='cards'>
          <Bounce>
            <h2>Nail Art & Gel Manicure</h2>
            <p>Express your individuality with our Nail Art & Design services. From intricate patterns to custom designs, our talented nail artists can turn your ideas into stunning reality.</p>
            </Bounce>
          </div>

          <div className='cards'>
          <Bounce right>
            <img src="/assets/darknails.jpg" alt="A Beautiful lady wearing dark Acrylic Nails with dark long eyelashes." loading='lazy' />
            </Bounce>
          </div>

          <div className='cards'>
            <Bounce left>
            <h2>EYELASH EXTENSIONS</h2>
            <p>Enhance your natural beauty with our Classic Lash Extensions. Our expert technicians meticulously apply individual extensions to your lashes, giving you a stunning, long-lasting look.</p> </Bounce>
          </div>

          <div className='cards'>
            <Bounce>
            <img src="/assets/main-hero.jpg" alt="A Beautiful lady wearing dark Acrylic Nails with dark long eyelashes." loading='lazy' /> </Bounce>
          </div>

          <div className='cards'>
            <Bounce right>
            <h2>Acrylic Nails</h2>
            <p>Achieve the perfect length and shape with our Acrylic Nails service. Our experts will customize your look, ensuring your nails are strong and stunning.</p> </Bounce>
          </div>

          <div className='cards'>
            <Bounce left>
            <img src="/assets/royalnails.jpg" alt="Nails of royal blue." loading='lazy' /> </Bounce>
          </div>

          <div className='cards'>
              <Bounce>
            <h2>Book Your Appointment</h2>
            <p>Ready to experience our exceptional nail and eyelash services? Schedule your appointment today and let us pamper you to perfection.</p>
            </Bounce>
          </div>

          <div className='cards'> <Bounce right>
            <img src="/assets/seanails.jpg" alt="Nails of royal blue." loading='lazy' /> </Bounce>
          </div>
        </div>

      </div>

    </div>

  )
}

export default Services;