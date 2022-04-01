import React from 'react'
import Jumbotron from './Jumbotron';
import image from '../assets/tamara.jpg';
import Carousel from './Carousel';
import imageData from '../imageData';
import { MDBCarouselElement, MDBCarouselItem } from 'mdb-react-ui-kit';

const Gallery = () => {
  return (
    <>
    <Jumbotron image={image} heading='Gallery' subHeading='My Work | My Art | My Life'/>
    <Carousel />
    </>
  )
}

export default Gallery