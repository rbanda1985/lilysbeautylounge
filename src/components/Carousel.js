import React from 'react';
import './Carousel.css';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBTabsItem,
} from 'mdb-react-ui-kit';
import imageData from '../imageData';

const Carousel = () => {
  return (
    <MDBCarousel showControls className='carousel'>
    <MDBCarouselInner>
      {
        imageData.map((image, index) => <MDBCarouselItem key={index} className={index === 0 ? 'active' : ''} >
          <MDBCarouselElement className='carousel-image' src={image.image} alt={image.alt} />
        </MDBCarouselItem>)
      }
    </MDBCarouselInner>
  </MDBCarousel>
  )
}

export default Carousel;