import Link from "next/link";
import Layouts from "../src/layouts/Layouts";

const ShoppingCart = () => {
  return (
    <Layouts>
      <div className="primary-content-area container content-padding shopping-cart-page">
        <div className="page-title-section">
          <h2>
            Shopping <span className="gradient-text">Cart</span>
          </h2>
        </div>
        <div className="shopping-cart-area grid-right-sidebar">
          {/*      shopping cart */}
          <div className="shopping-cart">
            <table className="content-table">
              <thead>
                <tr>
                  <th scope="col" className="heading-label">
                    Item details
                  </th>
                  <th scope="col" className="heading-label">
                    License
                  </th>
                  <th scope="col" className="heading-label">
                    Price
                  </th>
                  <th scope="col" className="heading-label" />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Item details">
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
                        <div className="product-meta">
                          <div className="item-category ui-templates">
                            UI TEMPLATES
                          </div>
                          <div className="product-seller">
                            @DexterStark
                            <span className="verified">
                              <svg className="crumina-icon">
                                <use xlinkHref="#check-icon" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td data-label="License">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <select className="select-nice">
                        <option value="regular">Regular</option>
                        <option value="commercial">Commercial</option>
                        <option value="extended">Extended</option>
                      </select>
                    </form>
                  </td>
                  <td data-label="price" className="price">
                    $12.00
                  </td>
                  <td>
                    <button className="close">
                      <svg className="crumina-icon">
                        <use xlinkHref="#close-circle-icon" />
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td data-label="Item details">
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
                        <div className="product-meta">
                          <div className="item-category social-graphics">
                            Social graphics
                          </div>
                          <div className="product-seller">
                            @DexterStark
                            <span className="verified">
                              <svg className="crumina-icon">
                                <use xlinkHref="#check-icon" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td data-label="License">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <select className="select-nice">
                        <option value="regular">Regular</option>
                        <option value="commercial">Commercial</option>
                        <option value="extended">Extended</option>
                      </select>
                    </form>
                  </td>
                  <td data-label="price" className="price">
                    $40.00
                  </td>
                  <td>
                    <button className="close">
                      <svg className="crumina-icon">
                        <use xlinkHref="#close-circle-icon" />
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td data-label="Item details">
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
                        <div className="product-meta">
                          <div className="item-category coded-templates">
                            Coded templates
                          </div>
                          <div className="product-seller">
                            @JackieJ
                            <span className="verified">
                              <svg className="crumina-icon">
                                <use xlinkHref="#check-icon" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td data-label="License">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <select className="select-nice">
                        <option value="regular">Regular</option>
                        <option value="commercial">Commercial</option>
                        <option value="extended">Extended</option>
                      </select>
                    </form>
                  </td>
                  <td data-label="price" className="price">
                    $68.00
                  </td>
                  <td>
                    <button className="close">
                      <svg className="crumina-icon">
                        <use xlinkHref="#close-circle-icon" />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="discount-section">
              <form
                className="cryptoki-form"
                onSubmit={(e) => e.preventDefault()}
                id="discount-form"
              >
                <span className="label">Redeem Code</span>
                <input type="text" placeholder="CRYP1258OFF" />
                <button className="btn btn-normal btn-dark" type="submit">
                  Redeem!
                </button>
              </form>
            </div>
          </div>
          {/*    cart total box */}
          <aside>
            <div className="cart-total-box">
              <div className="cart-total-wrapper">
                <div className="small-title">Order Total</div>
                <div className="total-price">$115.00</div>
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
                    <div className="value">$115.00</div>
                  </div>
                </div>
                <div className="to-checkout-button">
                  <a className="btn btn-wide gradient-background" href="#">
                    Proceed to Checkout
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </Layouts>
  );
};
export default ShoppingCart;
