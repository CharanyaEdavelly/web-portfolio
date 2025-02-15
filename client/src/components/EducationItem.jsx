import React from 'react'
import '../styles/EducationItem.css'

const EducationItem = ({data}) => {
    const {degree, schoolName, duration, location, score} = data;
  return (
    <div className='education-desc'>
        <h5 className='education-item education-details'>{degree}<span className='duration'>{duration}</span></h5>
        <p className='school-name'>{schoolName}</p>
        <p className='school-location'>{location}</p>
        <p className='score'>{score}</p>
    </div>
  )
}

export default EducationItem