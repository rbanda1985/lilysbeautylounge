import React from 'react';
import './Carousel.css';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from 'mdb-react-ui-kit';

const Carousel = ({imageOne, imageTwo, imageThree, imageFour}) => {
  return (
    <MDBCarousel showControls className='carousel'>
    <MDBCarouselInner>
      <MDBCarouselItem className='active'>
        <MDBCarouselElement className='carousel-image' src={imageOne} alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem>
        <MDBCarouselElement className='carousel-image' src={imageTwo} alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem>
        <MDBCarouselElement className='carousel-image' src={imageThree} alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem>
        <MDBCarouselElement className='carousel-image' src={imageFour} alt='...' />
      </MDBCarouselItem>
    </MDBCarouselInner>
  </MDBCarousel>
  )
}

export default Carousel;