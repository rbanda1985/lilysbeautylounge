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
          <MDBCardTitle style={{color: '#9575cd'}}>Services Form</MDBCardTitle>
          <MDBCardText>
            This is where the magic begins! Lets start with getting all of your information and inspiration.
          </MDBCardText>
          <MDBBtn href='https://docs.google.com/forms/d/e/1FAIpQLSc2IvYEL3YtuHkCN0PWY905cWoC4sTwnxsg_xhjOvZ0aIYz1A/viewform
'>Get Started</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </>
  )
}

export default CardService