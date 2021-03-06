import React, {useState} from 'react';
import './Jumbotron.css';
import logo from '../assets/logo.png'
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBContainer,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';


const Jumbotron = ({image, heading, subHeading }) => {
  const [showNavColor, setShowNavColor] = useState(false);
  return (
    <header>
      <MDBNavbar expand='lg' style={{backgroundColor: 'white'}}>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'><img className='logo' src={logo} alt='logo'></img></MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarColor02'
          aria-controls='navbarColor02'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavColor(!showNavColor)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse show={showNavColor} navbar>
          <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
            <MDBNavbarItem className='active'>
              <MDBNavbarLink aria-current='page' href='/'>
                <span className='header-link'>Home</span>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/services'><span className='header-link'>Services</span></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/gallery'><span className='header-link'>Gallery</span></MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>

      <div
        className='p-5 text-center bg-image header-image'
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white image-text'>
              <h1 className='mb-3 headingOne'>{heading}</h1>
              <h4 className='mb-3 headingTwo'>{subHeading}</h4>
            </div>
          </div>
        </div>
      </div>
    </header>

  )
}

export default Jumbotron;