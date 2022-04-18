import React from 'react'
import Jumbotron from './Jumbotron';
import image from '../assets/gallery-banner.jpg';
import Carousel from './Carousel';

const Gallery = () => {
  return (
    <>
    <Jumbotron image={image} heading='Gallery' subHeading='My Work | My Art | My Life'/>
    <Carousel />
    </>
  )
}

export default Gallery