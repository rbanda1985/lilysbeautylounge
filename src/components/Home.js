import React from 'react'
import Jumbotron from './Jumbotron'
import image from '../assets/header.jpg';

const Home = () => {
  return (
    <>
      <Jumbotron image={image} heading='Stylistic Hair With A Statement' subHeading='Creative | Elegant | Genuine'/>
    </>
  )
}

export default Home