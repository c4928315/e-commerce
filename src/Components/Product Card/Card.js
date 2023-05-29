import React, { useContext } from 'react'
import './Card.css'
import { CartContext } from '../Context/cartContect'

function Card({data}) {

  const {addToCart, cartItems} = useContext(CartContext)

  const cartItemAmount = cartItems[data.id]

  return (
    <div className='card'>
      <img src={data.image}/>
      <diV className="smallImg">
      <img src={data.image}/>
      </diV>
      <div className='allPs'>
      <p className='name'>{data.name}</p>
      <p className='cost'>{data.currentCost}</p>
      <button onClick={() => addToCart(data.id)}>add to cart</button>
      <div>
        {
        cartItemAmount !== 0 && <>({cartItemAmount})</>
        }
      </div>
      </div>
    </div>
  )
}

export default Card
