import React, { useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { Fade } from 'react-reveal';
function Test() {

  const reviews = [
    {
      id: 1,
      image: '/assets/maxim.jpg',
      name: "Sarah Turner",
      content: "I had the most wonderful experience at Mani Padi Pro. The Classic Lash Extensions transformed my look, and I couldn't be happier. The team here is truly skilled and friendly, making every visit a delight."
    },
    {
      id: 2,
      image: '/assets/mira.jpg',
      name: "Emily Collins",
      content: "As a regular customer, I can confidently say that Mani Padi Pro is my go-to for nail care. The Gel Manicure & Pedicure is my favorite, and it lasts for weeks without chipping. The ambiance is relaxing, and the staff is exceptional."
    },
    {
      id: 3,
      image: '/assets/tej.jpg',
      name: "Tej Anderson",
      content: "I discovered Mani Padi Pro for nail art, and I've never looked back. The Nail Art & Design services are beyond creative; they turn my nails into mini masterpieces. I love the attention to detail and the personalized designs."
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const review = reviews[currentSlide];

  const handleNext = () => {
    if (currentSlide < (reviews.length - 1)) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  }

  const handlePrev = () => {
    if (currentSlide !== 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(reviews.length - 1);
    }
  }

  return (
    <div>
      <section className='section'>
        <div className="wrapper">
          <h1>OUR TESTIMONIALS</h1>
          <h4>WHAT CUSTOMERS SAY ABOUT US!</h4>
        </div>
      </section>
        <Fade bottom>
      <div className="main-test">
        <div className="prev">
          <AiOutlineArrowLeft className='left' onClick={() => handlePrev()} />
        </div>

        <div className="test" key={review.key}>
          <img src={review.image} alt={review.name} loading='lazy' />
          <FaQuoteLeft className='icons' />
          <p>{review.content}</p>
          <h2>~ {review.name} ~</h2>
        </div>

        <div className="next">
          <AiOutlineArrowRight className='right' onClick={() => handleNext()} />
        </div>

      </div>
      </Fade>
    </div>
  )
}

export default Test;