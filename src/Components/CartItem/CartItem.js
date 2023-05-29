import React, { useContext } from 'react'
import './CartItem.css'
import { CartContext } from '../Context/cartContect'
import { RiDeleteBinLine } from 'react-icons/ri'
import { PRODUCTS } from '../Data'

function CartItem({data}) {
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext)

    const cartItemAmount = cartItems[data.id]

    function multiply(a, b) {
        return a * b;
      }
      
    
  return (
    <div className='cartItem'>
    <table>  
     <tr>
        <td className='delete'><RiDeleteBinLine/></td>
        <td className='image'><img src={data.image}/></td>
        <td className='description'>
            <h5>{data.name}</h5>
            <p className='size'> size: {data.size}</p>
            <p> color: {data.color}</p>
        </td>
        <td className='costCartItem'>${data.currentCost}.00</td>
        <td className='quantity'>
            <button onClick={() => removeFromCart(data.id)}> - </button>
            <input value={cartItems[data.id]}/>
            <button onClick={() => addToCart(data.id)}> + </button>
        </td>
        <td className='total'>
          ${ multiply(cartItemAmount, data.currentCost)}.00
        </td>

     </tr>
    </table>
     
    </div>
  )
}

export default CartItem
