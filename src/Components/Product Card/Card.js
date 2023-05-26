import React from 'react'
import './Card.css'

function Card({data}) {
  return (
    <div className='card'>
      <img src={data.image}/>
      <diV className="smallImg">
      <img src={data.image}/>
      </diV>
      <div className='allPs'>
      <p className='name'>{data.name}</p>
      <p className='cost'>{data.currentCost}</p>
      </div>
    </div>
  )
}

export default Card
