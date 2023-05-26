import React from 'react'
import './Signature.css'
import { GiWoodenChair } from 'react-icons/gi'

function Signature() {
  return (
    <div className='signature'>
      <div className="signatureBorders"></div>
      <GiWoodenChair/>
      <div className="signatureBorders"></div>
    </div>
  )
}

export default Signature
