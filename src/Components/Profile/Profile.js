import React, { useContext } from "react";
import "./Profile.css";
import { CgProfile } from "react-icons/cg";
import { BiSearchAlt2, BiCartAlt } from "react-icons/bi";
import { TiDeleteOutline } from "react-icons/ti";
import { AiOutlineSearch, AiOutlineLogin, AiFillSetting } from "react-icons/ai";
import { CartContext } from "../Context/cartContect";
import { PRODUCTS } from "../Data";

function Profile() {
  const { cartItems, getTotalCartAmount, removeFromCart } = useContext(CartContext);

  const totalAmount = getTotalCartAmount();

  const styles = { color: "white", fontSize: "1.6em" };

  return (
    <div>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#account-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true"
          >
            <CgProfile style={styles} />
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#search-tab-pane"
            type="button"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected="false"
          >
            <BiSearchAlt2 style={styles} />
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#cart-tab-pane"
            type="button"
            role="tab"
            aria-controls="contact-tab-pane"
            aria-selected="false"
          >
            <BiCartAlt style={styles} />
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show "
          id="account-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabindex="0"
        >
          <div>
            <AiOutlineLogin />
            <span class="accountSpan">logout</span>
          </div>

          <div>
            <AiFillSetting />
            <span class="accountSpan">settings</span>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="search-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabindex="0"
        >
          <input type="text" className="search-input" placeholder="search..." />
          <div className="search">
            <AiOutlineSearch />
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="cart-tab-pane"
          role="tabpanel"
          aria-labelledby="contact-tab"
          tabindex="0"
        >
          <div className="topCartContainer">
            {PRODUCTS.map((product) => {
              if (cartItems[product.id] > 0) {
                return (
                  <div className="topCart">
                    <div className="innerTopCart">
                    <div className="removeFromCartTop" onClick={() => removeFromCart(product.id)}><TiDeleteOutline/></div>
                      <img src={product.image} />
                      <div className="innerTopCartRight">
                        <p>
                          {product.name} - <br /> {product.size}/{product.color}
                        </p>
                        <div className="bold">
                          <b>
                            ${product.currentCost}.00
                            <sub>*{cartItems[product.id]}</sub>
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
            <div className="topCartTotalCheckout">
              <hr/>
              <div className="topCartAmount">
                <h4>cart total:</h4>
                <p>${totalAmount}.00</p>
              </div>
              <div className="topCartBtns">
              <button className='blackBtn blackBtnTopCart'>view cart</button>
              <button className='blackBtn blackBtnTopCart'>check out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
