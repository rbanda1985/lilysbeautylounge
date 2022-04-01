import React from 'react'
import './CardService.css';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import serviceImage from '../assets/giselle.jpg';

const CardService = () => {
  return (
    <>
    <MDBCard className='mb-3 serviceCard'>
        <MDBCardImage position='top' src={serviceImage} alt='...' />
        <MDBCardBody style={{textAlign: 'center'}}>
          <MDBCardTitle>Services Form</MDBCardTitle>
          <MDBCardText>
            This is where the magic begins! Lets start with getting all of your information and inspiration.
          </MDBCardText>
          <MDBBtn href='!#'>Get Started</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </>
  )
}

export default CardService