import React from "react";
import "./Footer.css";
import { MdOutlineEmail, MdPhone, MdLocationPin } from "react-icons/md";
import { GiWoodenChair } from "react-icons/gi";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { TfiPinterest } from "react-icons/tfi";

function Footer() {
  const style = {
    color: "white",
    fontSize: "62px",
    marginTop: "4px",
    marginRight: "4px",
  };

  return (
    <div className="footer">
      <div>
        <div className="topFooter">
          <div className="emailUs">
            <span>
              <MdOutlineEmail size={35} />
            </span>
            <span></span>
            <h4>to get latest news and updates</h4>
          </div>
          <div className="topFooterSubscribe">
            <input
              type="text"
              className="subscribe"
              placeholder="email@example.com"
            />
            <button className="btn btn-warning" type="submit">
              subscribe
            </button>
          </div>
          <div className="footerDecor"></div>
        </div>
        <div className="bottomFooter">
          <div className="subBottomFooter">
            <a class="navbar-brand" href="#">
              <span>
                <GiWoodenChair style={style} />
              </span>
              <span>
                <h1>
                  Intra. <br /> <span className="logoSmall">deco</span>
                </h1>
              </span>
            </a>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus, duis
              faucibus enim vitae
            </p>
          </div>

          <div className="subBottomFooter paddingSBF">
            <h5>our company</h5>
            <ul>
              <li>search</li>
              <li>about</li>
              <li>contact us</li>
              <li>delivery</li>
              <li>faq's</li>
            </ul>
          </div>

          <div className="subBottomFooter paddingSBF">
            <h5>products</h5>
            <ul>
              <li>all collections</li>
              <li>delivery</li>
              <li>terms & conditions</li>
              <li>legal notice</li>
              <li>wishlist</li>
            </ul>
          </div>

          <div className="subBottomFooter paddingSBF">
            <h5>store information</h5>
            <ul>
              <li className="liFlex">
                <span>
                  <MdLocationPin />
                </span>{" "}
                <span> my compant, 42 dream land 254 hello world</span>
              </li>
              <li className="liFlex">
                <span>
                  <MdPhone />
                </span>{" "}
                <span> +254 74 2592594</span>{" "}
              </li>
              <li className="liFlex">
                {" "}
                <span>
                  <MdOutlineEmail />
                </span>
                <span> site@gmail.company</span>
              </li>
            </ul>
          </div>
          <div className="footerDecor"></div>
          <div className="socialMedia">
            <AiOutlineTwitter size={20} className="socialMediaIcon" />
            <GrFacebookOption size={20} className="socialMediaIcon" />
            <TfiPinterest size={20} className="socialMediaIcon" />
            <AiOutlineInstagram size={20} className="socialMediaIcon" />
          </div>
        </div>
        <div className="copyright">
          <div>
            <p>
              Copyright © 2023 Theme: IntraArt (Password: 1) | Powered by
              Shopify
            </p>
            <div className="paymentMethods">
              <svg
                class="icon icon--full-color"
                viewBox="0 0 38 24"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                width="38"
                height="24"
                aria-labelledby="pi-dankort"
              >
                <title id="pi-dankort">Dankort</title>
                <path
                  opacity=".07"
                  d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                ></path>
                <path
                  fill="#fff"
                  d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="#E31F28"
                  d="M18.309 15.378c.985-.645 1.621-1.641 1.907-2.991l3.145 3.968h6.028a6.858 6.858 0 01-2.394 1.918 6.758 6.758 0 01-3.086.727H12.566a6.792 6.792 0 01-3.086-.728 6.815 6.815 0 01-2.395-1.931h7.089c1.78.001 3.158-.32 4.135-.963zm-3.062-4.623c.254.23.321.568.202 1.013-.15.517-.342.878-.571 1.084-.278.246-.699.37-1.264.37H9.552l1.001-2.765h3.67c.453 0 .794.099 1.024.298zm11.651-5.088a6.9 6.9 0 012.337 1.799h-5.899l-2.979 3.086c-.103-1.12-.639-1.935-1.607-2.443-.834-.429-2.018-.644-3.551-.644H7.24A6.995 6.995 0 0112.566 5h11.343c1.048 0 2.045.222 2.989.667zm-.999 5.814l3.644-3.634a6.99 6.99 0 011.014 1.931c.239.715.357 1.458.357 2.228 0 .723-.107 1.426-.32 2.108a7.016 7.016 0 01-.919 1.858l-3.776-4.491z"
                ></path>
              </svg>

              <svg
                class="icon icon--full-color"
                viewBox="0 0 38 24"
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="24"
                role="img"
                aria-labelledby="pi-forbrugsforeningen"
              >
                <title id="pi-forbrugsforeningen">Forbrugsforeningen</title>
                <path
                  d="M3 0C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3H3z"
                  fill="#0076BC"
                ></path>
                <path
                  d="M17 1S7.427-1.002 7.078 6.99v9.514c0 1.417-3.078 1.38-3.078 1.38V23s7.03 2.267 8.127-5.104c.177-1.268 0-8.06 0-8.678 0-.62-.783-5.48 4.873-4.103V1z"
                  fill="#fff"
                ></path>
                <path fill="#fff" d="M0 9h17v4H0z"></path>
                <path d="M.5 9.5v3" stroke="#E5E5E5"></path>
              </svg>

              <svg
                class="icon icon--full-color"
                width="38"
                height="24"
                role="img"
                aria-labelledby="pi-jcb"
                viewBox="0 0 38 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title id="pi-jcb">JCB</title>
                <g fill="none" fill-rule="evenodd">
                  <g fill-rule="nonzero">
                    <path
                      d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                      fill="#000"
                      opacity=".07"
                    ></path>
                    <path
                      d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                      fill="#FFF"
                    ></path>
                  </g>
                  <path
                    d="M11.5 5H15v11.5a2.5 2.5 0 0 1-2.5 2.5H9V7.5A2.5 2.5 0 0 1 11.5 5z"
                    fill="#006EBC"
                  ></path>
                  <path
                    d="M18.5 5H22v11.5a2.5 2.5 0 0 1-2.5 2.5H16V7.5A2.5 2.5 0 0 1 18.5 5z"
                    fill="#F00036"
                  ></path>
                  <path
                    d="M25.5 5H29v11.5a2.5 2.5 0 0 1-2.5 2.5H23V7.5A2.5 2.5 0 0 1 25.5 5z"
                    fill="#2AB419"
                  ></path>
                  <path
                    d="M10.755 14.5c-1.06 0-2.122-.304-2.656-.987l.78-.676c.068 1.133 3.545 1.24 3.545-.19V9.5h1.802v3.147c0 .728-.574 1.322-1.573 1.632-.466.144-1.365.221-1.898.221zm8.116 0c-.674 0-1.388-.107-1.965-.366-.948-.425-1.312-1.206-1.3-2.199.012-1.014.436-1.782 1.468-2.165 1.319-.49 3.343-.261 3.926.27v.972c-.572-.521-1.958-.898-2.919-.46-.494.226-.737.917-.744 1.448-.006.56.245 1.252.744 1.497.953.467 2.39.04 2.919-.441v1.01c-.358.255-1.253.434-2.129.434zm8.679-2.587c.37-.235.582-.567.582-1.005 0-.438-.116-.687-.348-.939-.206-.207-.58-.469-1.238-.469H23v5h3.546c.696 0 1.097-.23 1.315-.415.283-.25.426-.53.426-.96 0-.431-.155-.908-.737-1.212zm-1.906-.281h-1.428v-1.444h1.495c.956 0 .944 1.444-.067 1.444zm.288 2.157h-1.716v-1.513h1.716c.986 0 1.083 1.513 0 1.513z"
                    fill="#FFF"
                    fill-rule="nonzero"
                  ></path>
                </g>
              </svg>

              <svg
                class="icon icon--full-color"
                viewBox="0 0 38 24"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                width="38"
                height="24"
                aria-labelledby="pi-master"
              >
                <title id="pi-master">Mastercard</title>
                <path
                  opacity=".07"
                  d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                ></path>
                <path
                  fill="#fff"
                  d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                ></path>
                <circle fill="#EB001B" cx="15" cy="12" r="7"></circle>
                <circle fill="#F79E1B" cx="23" cy="12" r="7"></circle>
                <path
                  fill="#FF5F00"
                  d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"
                ></path>
              </svg>

              <svg
                class="icon icon--full-color"
                viewBox="0 0 38 24"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                width="38"
                height="24"
                aria-labelledby="pi-visa"
              >
                <title id="pi-visa">Visa</title>
                <path
                  opacity=".07"
                  d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                ></path>
                <path
                  fill="#fff"
                  d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                ></path>
                <path
                  d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z"
                  fill="#142688"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
