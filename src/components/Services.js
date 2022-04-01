import React from 'react'
import Jumbotron from './Jumbotron';
import image from '../assets/shears.jpg';
import Policies from './Policies';
import CardService from './CardService';
import BannerTitle from './BannerTitle';

const Services = () => {
  return (
    <>
      <Jumbotron image={image} heading='Services' subHeading='This is where inspiration becomes reality'/>
      <div style={{marginTop: '4em'}}>
      <CardService />
      </div>
      <div style={{marginBottom: '4em'}}>
      <BannerTitle title='Policies' />
      </div>
      <div style={{marginBottom: '4em'}}>
      <Policies />
      </div>
    </>
  )
}

export default Services