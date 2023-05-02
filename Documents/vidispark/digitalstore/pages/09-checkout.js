import Link from "next/link";
import Layouts from "../src/layouts/Layouts";
const Checkout = () => {
  return (
    <Layouts>
      <div className="primary-content-area container content-padding shopping-cart-page">
        <div className="page-title-section">
          <h2>
            Order <span className="gradient-text">Checkout</span>
          </h2>
        </div>
        {/*  checkout form */}
        <div className="checkout-area">
          <form
            className="cryptoki-form grid-2-columns"
            id="checkout-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="form-column">
              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="name">You name</label>
                  <input type="text" id="name" />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email address</label>
                  <input type="email" id="email" />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="address">Full address address</label>
                <input type="text" id="address" />
              </div>
              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="country">Country</label>
                  <select id="country">
                    <option value="your-country">Your country</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="state">State</label>
                  <select id="state">
                    <option value="your-state">Your state</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="city">City</label>
                  <select id="city">
                    <option value="city">Your country</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="zip-code">ZIP code</label>
                  <select id="zip-code">
                    <option value="your-zip-code">Your ZIP code</option>
                  </select>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="state">Additonal comments</label>
                <textarea cols={30} rows={10} defaultValue={""} />
              </div>
            </div>
            <div className="form-column">
              <div className="summary-section">
                <div className="small-title">Summary</div>
                <div className="products-in-cart">
                  <div className="product-in-cart">
                    <div className="product-info">
                      <div className="product-thumb">
                        <Link href="05-product">
                          <a>
                            <img
                              src="img/content/previews/project-thumb-37.png"
                              alt=""
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="product-details">
                        <div className="product-name">
                          <Link href="05-product">
                            <a>Cryptoki NFT and DIgital Market PSD Template</a>
                          </Link>
                        </div>
                        <div className="license-type">Regular License</div>
                      </div>
                    </div>
                    <div className="product-price">$12.00</div>
                  </div>
                  <div className="product-in-cart">
                    <div className="product-info">
                      <div className="product-thumb">
                        <Link href="05-product">
                          <a>
                            <img
                              src="img/content/previews/project-thumb-38.png"
                              alt=""
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="product-details">
                        <div className="product-name">
                          <Link href="05-product">
                            <a>Twitter Gaming Headers Pack 04</a>
                          </Link>
                        </div>
                        <div className="license-type">Commercial License</div>
                      </div>
                    </div>
                    <div className="product-price">$40.00</div>
                  </div>
                  <div className="product-in-cart">
                    <div className="product-info">
                      <div className="product-thumb">
                        <Link href="05-product">
                          <a>
                            <img
                              src="img/content/previews/project-thumb-42.png"
                              alt=""
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="product-details">
                        <div className="product-name">
                          <Link href="05-product">
                            <a>Olympus WP - Social Networking Theme</a>
                          </Link>
                        </div>
                        <div className="license-type">Regular License</div>
                      </div>
                    </div>
                    <div className="product-price">$12.00</div>
                  </div>
                </div>
                <div className="total-price-section">
                  <div className="total-price-details">
                    <div className="field">
                      <div className="label">Cart</div>
                      <div className="value">$120.00</div>
                    </div>
                    <div className="field">
                      <div className="label">Code</div>
                      <div className="value">-$5.00</div>
                    </div>
                    <div className="field">
                      <div className="label">Total</div>
                      <div className="value total-price gradient-text">
                        $115.00
                      </div>
                    </div>
                  </div>
                </div>
                <div className="payment-method-section">
                  <div className="small-title">Payment Method</div>
                  <div className="payment-method">
                    <input type="radio" name="payment-method" id="paypal" />
                    <label htmlFor="paypal">Paypal</label>
                    <div className="payment-description">
                      Pay with your Paypal balance or connected bank account/
                      credit card! {`it’s`} quick and really secure, it just
                      takes a few minutes to set it up!
                    </div>
                  </div>
                  <div className="payment-method">
                    <input
                      type="radio"
                      name="payment-method"
                      id="credit-card"
                    />
                    <label htmlFor="credit-card">Credit or Debit Card</label>
                  </div>
                </div>
                <div className="complete-order-button">
                  <input
                    className="btn gradient-background"
                    type="submit"
                    defaultValue="Complete Order!"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layouts>
  );
};
export default Checkout;
