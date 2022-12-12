import React from 'react'

export const button = ({color, text }) => {
  
  return (
    <button className='btn' style={{backgroundColor: color}} >{text}</button>
  )
}
 export default button;