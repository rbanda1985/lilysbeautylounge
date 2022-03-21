import React from 'react'
import './Owner.css';
import BannerTitle from './BannerTitle';
import BannerText from './BannerText';
import BodyImageText from './BodyImageText';
import imageBody from '../assets/hairEighteen.jpg'

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
        Welcome! Thank you for considering me as your hair stylist. I have years of experience in the salon industry. I specialize in haircuts, blowouts, color corrections, and most importantly color transformations! If you feel that you're tired of the same look and you're ready for a change, let me help transform you into that beautiful confident charismatic woman that you deserve to feel and look like. Hope to see you in my chair soon!
        </div>
        </div>
       </div>
    </>
  )
}

export default Owner