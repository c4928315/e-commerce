import React from 'react'
import './Crafts.css'

function Crafts() {
  return (
    <div className='crafts'>

        <div className='craftsLeft'>
            <div className='bigImage'></div>
            <div className='cropImage'>
                <div className='circle'></div>
                <div className='smallImage'></div>
            </div>
        </div>
        <div className='craftsRight'>
            <div className='mainHead'>
                <h3 className='head2'>decorative <br/> crafts</h3>
            </div>
            <p className='loremP'>Lorem ipsum eiusmod dolor adi eiusmod incididunt.adi eiusmod tempor adi eiusmod tempor.</p>
            <div className='verticleContainer'>
            <div className='verticle'></div>
            </div>
            <button className='blackBtn'>shop now</button>
        </div>
      
    </div>
  )
}

export default Crafts
