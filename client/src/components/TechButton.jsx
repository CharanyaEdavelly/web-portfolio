import React from 'react'

const TechButton = ({skill}) => {
    const style = {
       
            border: 'none',
            borderRadius: '3px',
            backgroundColor: 'rgb(76, 133, 176)',
            color: 'white',
            marginTop: '8px',
            marginRight: '7px',
            padding: '5px 8px'
        
    }
  return <button style={style}>{skill}</button>
  
}

export default TechButton