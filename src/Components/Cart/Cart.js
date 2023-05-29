import React, { useContext, useEffect } from "react";
import { PRODUCTS } from "../Data";
import "./Cart.css";
import { CartContext } from "../Context/cartContect";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineCustomerService } from "react-icons/ai";
import { GiDeliveryDrone } from "react-icons/gi";
import CartItem from "../CartItem/CartItem";

function Cart() {
  const { cartItems, getTotalCartAmount } =
    useContext(CartContext);
    
    const totalAmount = getTotalCartAmount()

    const style = {
        color: "grey",
        marginTop: "15px",
    }

  return (
    <div className="cart">
      <div className="innerCart">
        <div className="cartLeft">
          <table className="thead">
            <th className="delete">remove</th>
            <th className="image">product image</th>
            <th className="description">product name</th>
            <th className="costCartItem">unit price</th>
            <th className="quantity">quantity</th>
            <th className="total">total</th>
          </table>
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] > 0) {
              return (
                <>
                  <CartItem data={product} />
                </>
              );
            }
          })}
        </div>

        <div className="cartRight">
            <div className="instructions">
                <h3>special instructions for seller</h3>
                <textarea  rows="3" cols="16" placeholder="special instructions for seller"/>
            </div>

            <div className="cartTotal">
                <div>
                <h3>cart total</h3>
                <p className="totalAmount">${totalAmount}.00 USD</p>
                <p className="cartCheckoutDetail">Shipping, taxes and discounts will be added at checkout</p>
                <button className="checkoutBtn">check out</button>
                </div>
            </div>

            <div className="policies">
                <div className="innerPolicies one">
                    <span><HiOutlineShoppingBag size={40} style={style}/></span>
                    <span className="policyIcon">
                    <p>Security Policy <br/> <b>(edit with the Customer Reassurance module)</b></p>
                    </span>
                </div>
                <div className="innerPolicies">
                    <span><GiDeliveryDrone size={40} style={style}/></span>
                    <span className="policyIcon">
                    <p>Delivery Policy <br/> <b>(edit with the Customer Reassurance module)</b></p>
                    </span>
                </div>
                <div className="innerPolicies three">
                    <span><AiOutlineCustomerService size={40} style={style}/></span>
                    <span className="policyIcon">
                        <p>Return Policy <br/> <b>(edit with the Customer Reassurance module)</b></p>
                    </span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
