import React, { useState } from 'react'

const Color = () => {
  const [color, setColor] = useState('white')
  return (
    <>
      <button
        onClick={() => setColor('black')}
        style={{ backgroundColor: 'black', color: 'white' }}
      >
        Black me
      </button>
    </>
  )
}

export default Color
