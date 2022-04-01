import React from 'react'
import './Owner.css';
import BannerTitle from './BannerTitle';

const Owner = ({image}) => {
  return (
    <>
    <BannerTitle title='The Owner' />
      <div className='owner-container'>
        <div className='owner-box'>

        </div>
        <div className='owner-summary'>
        <div className='owner-image'>
          <img src={image} alt='owner' />
        </div>
        <div className='owner-info'>
        Welcome! Thank you for considering me as your hair stylist. I specialize in giving my guests an all over transformative experience. My goal is to enhance your natural beauty and to uplift your confidence. Please navigate through the website to find out more information on policies and how to book an appointment.
        </div>
        </div>
       </div>
    </>
  )
}

export default Owner