import React from 'react'
import '../styles/WorkItem.css'

const WorkItem = ({data}) => {
    const {designation, company, duration, location, responsibilities} = data;
  return (
    <div className='work-desc'>
        <h4 className='work-desc-item'>{designation}</h4>
        <p className='work-desc-item org-details'><strong>{company}</strong>  <span className='time-period'>{duration}</span> </p>
        <p className='work-desc-item location'>{location}</p>
        <div className='work-desc-item work-details'>{responsibilities}</div>
    </div>
  )
}

export default WorkItem