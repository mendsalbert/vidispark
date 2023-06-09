import Link from "next/link";
import { Fragment, useState } from "react";
import useClickOutside from "../../useClickOutside";

const CartButton = () => {
  const [toggle, setToggle] = useState(false);
  let domNode = useClickOutside(() => {
    setToggle(false);
  });
  return (
    <Fragment>
      <div className="cart-button-cont" ref={domNode}>
        <button
          className={`cart-button cryptoki-notif-bttn ${
            toggle ? "active" : ""
          }`}
          data-target="cart-dropdown"
          onClick={() => setToggle(!toggle)}
        >
          <span className="counter">3</span>
          <svg className="crumina-icon">
            <use xlinkHref="#bag-icon" />
          </svg>
          {/*cart dropdown*/}
        </button>
        <div
          id="cart-dropdown"
          className={`cryptoki-notif-target ${toggle ? "active" : ""}`}
        >
          <div className="title">
            Your Cart <span className="colored">3</span>
          </div>
          <div className="cart-wrapper">
            {/*cart product*/}
            <div className="cart-product">
              <div className="thumb-box">
                {" "}
                <Link href="/05-product-page">
                  <img
                    src="img/content/notifications/notif-thumb-1.png"
                    width={50}
                    height={50}
                    alt="UI templates"
                    loading="lazy"
                  />
                </Link>{" "}
              </div>
              <div className="purchase-info">
                <div className="product-info">
                  <div className="product-title">
                    {" "}
                    <Link href="/05-product-page">
                      Cryptoki NFT and Digital Market PSD Template
                    </Link>{" "}
                  </div>
                  <div className="product-price">$12.00</div>
                </div>
                <div className="product-type ui-templates">UI templates</div>
              </div>
            </div>
            {/*/cart product*/}
            {/*cart product*/}
            <div className="cart-product">
              <div className="thumb-box">
                {" "}
                <Link href="/06-product-page-v2">
                  <img
                    src="img/content/notifications/notif-thumb-2.png"
                    width={50}
                    height={50}
                    alt="Social graphics"
                    loading="lazy"
                  />
                </Link>{" "}
              </div>
              <div className="purchase-info">
                <div className="product-info">
                  <div className="product-title">
                    {" "}
                    <Link href="/06-product-page-v2">
                      Twitter Gaming Headers Pack 04
                    </Link>{" "}
                  </div>
                  <div className="product-price">$40.00</div>
                </div>
                <div className="product-type social-graphics">
                  Social graphics
                </div>
              </div>
            </div>
            {/*/cart product*/}
            {/*cart product*/}
            <div className="cart-product">
              <div className="thumb-box">
                {" "}
                <Link href="/07-product-page-v3">
                  <img
                    src="img/content/notifications/notif-thumb-3.png"
                    width={50}
                    height={50}
                    alt="Coded templates"
                    loading="lazy"
                  />
                </Link>{" "}
              </div>
              <div className="purchase-info">
                <div className="product-info">
                  <div className="product-title">
                    {" "}
                    <Link href="/07-product-page-v3">
                      Olympus WP - Social Networking Theme
                    </Link>{" "}
                  </div>
                  <div className="product-price">$68.00</div>
                </div>
                <div className="product-type coded-templates">
                  Coded templates
                </div>
              </div>
            </div>
          </div>
          {/*/cart product*/}
          <div className="total-price">
            <div className="heading">Cart Total</div>
            <div className="price">$120.00</div>
          </div>
          <div className="cart-buttons">
            {" "}
            <Link href="27-shopping-cart">
              <a className="btn-small gradient-background btn-square">
                Go to Cart
              </a>
            </Link>{" "}
            <Link href="28-checkout">
              <a className="btn-small btn-dark btn-square">Checkout</a>
            </Link>{" "}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default CartButton;
