import React from 'react'
import Jumbotron from './Jumbotron';
import image from '../assets/services-banner.jpg';
import Policies from './Policies';
import './Services.css'
import BannerTitle from './BannerTitle';
import CardServices from './CardService';


const Services = () => {
  return (
    <>
      <Jumbotron image={image} heading='Services' subHeading='This is where inspiration becomes reality'/>
      <div style={{marginBottom: '4em'}}>
      <BannerTitle title='Policies' />
      </div>
      <div style={{marginBottom: '4em'}}>
      <Policies />
      </div>
      <div className='service-disclaimer-container'>
        <div className='service-disclaimer'>
        <p>
        At Lily's Beauty Loung, I offer a variety of hair coloring services depending on your image goals and desires! My techniques and industry expertise allow me to perform from basic touch-ups to a full on make-over of your image. The pricing for your services will be based on your new image goals and desires, as there are a multitude of factors that play a role, and one size doesn't fit all. A color transformation can range from $200 to $400; while a color correction procedure can range from $450 to $800.
        </p>
        </div>
        <div className='service-disclaimer-two'>
          <p>Please note: These are estimates only, your accurate pricing will be established after a personal consultation.</p>
        </div>
      </div>
      <div className='service-form' style={{marginBottom: '4em'}}>
        <CardServices />
      </div>
    </>
  )
}

export default Services