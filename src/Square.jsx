import React from 'react'

const Square = ({value, onSquareClick}) => {
  return (
    <button className='square' onClick={onSquareClick} style={{width:'50px',height: '50px'}}>{value}</button>
  )
}

export default Square