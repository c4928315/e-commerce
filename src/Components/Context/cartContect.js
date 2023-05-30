import React, { createContext, useState, useEffect } from 'react'
import { PRODUCTS } from '../Data';

export const CartContext = createContext(null)

const getDefaultCart = () => {
  let cart = {}

  for (let i = 1; i < PRODUCTS.length; i++) {
      cart[i] = 0;  
  }
  return cart;
}

function CartContextProvider(props) {

  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    // Retrieve cart items from local storage when the component initializes
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  



    const addToCart = (itemId) => {
      setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    const removeFromCart = (itemId) => {
      setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }


    const getTotalCartAmount = () => {
      let totalAmount = 0;
      for (const item in cartItems) {
        if (cartItems[item] > 0) {
          let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
          totalAmount += cartItems[item] * itemInfo.currentCost;
        }
      }
      return totalAmount;
    };

    const contextValue = { cartItems, addToCart, removeFromCart, getTotalCartAmount}

    console.log(cartItems)

  return (
    <CartContext.Provider value={contextValue}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;
