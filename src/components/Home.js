import React from 'react'
import Jumbotron from './Jumbotron'
import logo from '../assets/logo.png';
import image from '../assets/header.jpg';
import SalonInfo from './SalonInfo';
import Owner from './Owner';
import OwnerPic from '../assets/owner.jpg';

const Home = () => {
  return (
    <>
      <Jumbotron image={image} heading='Stylistic Hair With A Statement' subHeading='Creative | Elegant | Genuine' logo={logo}/>
      <SalonInfo />
      <Owner image={OwnerPic}/>
    </>
  )
}

export default Home