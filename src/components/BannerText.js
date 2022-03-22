import { getByDisplayValue } from '@testing-library/react'
import React from 'react'
import { GiWhiteBook } from 'react-icons/gi'
import { MdHeight } from 'react-icons/md'

const BannerText = ({text}) => {
  const textStyle = {
    textAlign: 'center',
    fontSize: '1.2em',
    fontWeight: 'bold',
    backgroundColor: '#9575cd',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
  }
  return (
    <>
      <div className='banner-text' style={textStyle}>
        {text}
      </div>
    </>
  )
}

export default BannerText