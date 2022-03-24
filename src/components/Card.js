import React from 'react'
import './Card.css';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';

const Card = ({card}) => {
  return (
    <MDBRow className='row-cols-1 cols-1 cols-md-2 g-4 card-row'>
      <MDBCol>
        <MDBCard shadow='0' border='secondary' background='white'>
          <MDBCardImage
            src={card.image}
            alt='...'
            position='top'
          />
          <MDBCardBody className='card-text-style'>
            <MDBCardTitle className='card-title'>{card.title}</MDBCardTitle>
            <MDBCardText>
              {card.text}
            </MDBCardText>
            <MDBBtn href={card.link}>{card.button}</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      </MDBRow>
  )
}

export default Card