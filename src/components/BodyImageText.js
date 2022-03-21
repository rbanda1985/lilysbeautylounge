import React from 'react'
import './BodyImageText.css';

const BodyImageText = ({imageBody}) => {
  return (
    <>
      <div className='body-image-container'>
        <div className='body-image'>
          <img src={imageBody} />
        </div>
      </div>
    </>
  )
}

export default BodyImageText