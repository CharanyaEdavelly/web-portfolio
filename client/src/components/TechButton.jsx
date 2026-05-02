import React from 'react'

const TechButton = ({ skill }) => {
  const style = {
    display: 'inline-block',
    border: '1px solid rgba(56, 189, 248, 0.2)',
    borderRadius: '99px',
    backgroundColor: 'rgba(56, 189, 248, 0.08)',
    color: '#38bdf8',
    marginTop: '8px',
    marginRight: '6px',
    padding: '4px 12px',
    fontSize: '12px',
    fontWeight: '600',
    fontFamily: 'inherit',
    letterSpacing: '0.1px',
    cursor: 'default',
    transition: 'background 0.2s ease',
  }

  return <span style={style}>{skill}</span>
}

export default TechButton
