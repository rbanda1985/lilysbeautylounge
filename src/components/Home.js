import React from 'react'
import './Home.css'
import Jumbotron from './Jumbotron'
import logo from '../assets/logo.png';
import image from '../assets/header.jpg';
import SalonInfo from './SalonInfo';
import Owner from './Owner';
import OwnerPic from '../assets/owner.jpg';
import bannerImage from '../assets/jenna.jpg';
import Card from './Card';
import cardData from '../data';

const Home = () => {
  return (
    <>
      <Jumbotron image={image} heading='Stylistic Hair With A Statement' subHeading='Creative | Elegant | Genuine' logo={logo}/>
      <SalonInfo />
      <Owner image={OwnerPic}/>
      <div className='banner-text'>
        <p>Come and enjoy the luxury of silky smooth beautiful coloured hair</p>
      </div>
      <div className='banner-image'>
        <img src={bannerImage} className='img-fluid shadow-4' alt='Banner'/>
        <div className='image-design-text'>
        <h2>Appointments</h2>
        <p>Visit the services section below to book an appointement with me.</p>
        </div>
      </div>
      <div className='cards'>
        {
          cardData.map(card => <Card key={card.title} card={card}/>)
        }
      </div>
    </>
  )
}

export default Home