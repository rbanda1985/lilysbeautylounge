import React from 'react'
import './SalonInfo.css';
import { MdSelfImprovement } from 'react-icons/md';
import { GiStairsGoal, GiHairStrands } from 'react-icons/gi';

const SalonInfo = () => {
  return (
    <>
      <div className='style-container'>
        <div className='style'>
        <div className='icon'>
          <GiHairStrands />
        </div>
        <div className='title'>
          About The Salon
        </div>
        <div className='description'>
          We offer an extensive range of services inluding cutting, styling, blow drying, and colouring.
        </div>
        </div>
        <div className='style'>
        <div className='icon'>
          <GiStairsGoal />
        </div>
        <div className='title'>
          My Mission
        </div>
        <div className='description'>
          Providing a luxurious and professional experience at an exceptional price
        </div>
        </div>
        <div className='style'>
        <div className='icon'>
          <MdSelfImprovement />
        </div>
        <div className='title'>
          Self Care
        </div>
        <div className='description'>
          With every service I will provide you with recommendations and instructions on how to take care of your new and improved look.
        </div>
        </div>
      </div>
    </>
  )
}

export default SalonInfo