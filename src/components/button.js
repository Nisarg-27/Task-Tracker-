import React from 'react'
const onClick = () => {
    
 }
export const button = ({color, text}) => {
  return (
    <button className='btn' style={{backgroundColor: color}} onClick={onClick}>{text}</button>
  )
}
 export default button;