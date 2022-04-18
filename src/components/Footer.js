import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/Lilysbeautylounge' target='_blank' rel='noreferrer' className='me-4 text-reset'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='https://www.instagram.com/lilys_beauty_lounge/' target='_blank' rel='noreferrer' className='me-4 text-reset'>
            <i className='fab fa-instagram'></i>
          </a>
        </div>
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>Lily's Beauty Lounge
              </h6>
              <p>
                If you have any questions, please feel free to contact me so that I can further assist you.
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> 2471 S.A.W Grimes, Round Rock, TX.
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                lilysbeautylounge@gmail.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i>
                254-300-1945
              </p>
            </div>
          </div>
        </div>
      </section>
    </MDBFooter>
  )
}

export default Footer