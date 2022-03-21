import React from 'react'

const BannerTitle = ({title}) => {
  const bannerTitleStyle = {
    textAlign: 'center',
    fontSize: '2.5em',
    fontFamily: "Parisienne, cursive",
    marginTop: '3em',
    fontWeight: '600',
    color: '#9575cd'
  }
  return (
    <div style={bannerTitleStyle}>{title}</div>
  )
}

export default BannerTitle;