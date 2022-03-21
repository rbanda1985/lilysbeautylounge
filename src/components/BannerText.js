import React from 'react'

const BannerText = ({text}) => {
  const textStyle = {
    textAlign: 'center',
    fontSize: '1.2em',
    fontWeight: 'bold'
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