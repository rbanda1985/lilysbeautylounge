import React from 'react'
import './Home.css'
import Jumbotron from './Jumbotron'
import logo from '../assets/logo.png';
import image from '../assets/header.jpg';
import SalonInfo from './SalonInfo';
import Owner from './Owner';
import OwnerPic from '../assets/owner.jpg';
import bannerImage from '../assets/alexander.jpg';

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
        <img src={bannerImage} className='img-fluid shadow-4' alt='Banner Photo'/>
      </div>
    </>
  )
}

export default Home