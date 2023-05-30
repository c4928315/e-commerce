import React, { useContext } from 'react'
import './Card.css'
import { CartContext } from '../Context/cartContect'
import { AiOutlineShoppingCart, AiOutlineLike } from 'react-icons/ai'
import { BiGitCompare, BiShow} from 'react-icons/bi'

function Card({data}) {

  const {addToCart, cartItems} = useContext(CartContext)

  const cartItemAmount = cartItems[data.id]

  return (
    <div className='card'>
      <div className='cardBtns'>
        <div className='cardBtnsIcons' onClick={() => addToCart(data.id)}>
          <AiOutlineShoppingCart size={20}/>
          <div>
        {
        cartItemAmount !== 0 && <div className='cartQuantity'>{cartItemAmount}</div>
        }
      </div>
        </div>
        <br/>
        <div className='cardBtnsIcons'><AiOutlineLike size={20}/></div>
        <br/>
        <div className='cardBtnsIcons'><BiGitCompare size={20}/></div>
        <br/>
        <div className='cardBtnsIcons'><BiShow size={20}/></div>
      </div>
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
