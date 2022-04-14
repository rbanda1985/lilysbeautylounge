import React from 'react'
import Jumbotron from './Jumbotron';
import image from '../assets/shears.jpg';
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
      <div className='service-form' style={{marginBottom: '4em'}}>
        <CardServices />
      </div>
    </>
  )
}

export default Services