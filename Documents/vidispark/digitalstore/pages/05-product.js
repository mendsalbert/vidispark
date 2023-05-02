import Link from "next/link";
import ProductTab from "../src/components/Tabs/ProductTab";
import Layouts from "../src/layouts/Layouts";

const Product = () => {
  return (
    <Layouts>
      <div className="primary-content-area container content-padding product-page-ds">
        <div className="main-content-area product-ds">
          <div className="product-title-section">
            <h2>Twitter Gaming Headers Pack 04</h2>
            <div className="product-subtitle">
              <div className="product-author">
                <span className="avatar box-26">
                  <Link href="06-profile-page">
                    <a>
                      <img src="img/avatar.png" alt="" />
                    </a>
                  </Link>
                  <span className="verified">
                    <svg className="crumina-icon">
                      <use xlinkHref="#check-icon" />
                    </svg>
                  </span>
                </span>
                @DexterStark
              </div>
              <div className="item-category social-graphics">
                Social graphics
              </div>
              <div className="item-rating">
                <span className="filled">
                  <svg className="crumina-icon">
                    <use xlinkHref="#star2-icon" />
                  </svg>
                </span>
                <span className="filled">
                  <svg className="crumina-icon">
                    <use xlinkHref="#star2-icon" />
                  </svg>
                </span>
                <span className="filled">
                  <svg className="crumina-icon">
                    <use xlinkHref="#star2-icon" />
                  </svg>
                </span>
                <span className="filled">
                  <svg className="crumina-icon">
                    <use xlinkHref="#star2-icon" />
                  </svg>
                </span>
                <span>
                  <svg className="crumina-icon">
                    <use xlinkHref="#star2-icon" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="product-image">
            <img
              src="img/content/product-img/product-2.png"
              alt="Product Image"
            />
          </div>
          <div className="product-info">
            <div className="tabs-block swiper-container">
              <div className="swiper-nav">
                <div className="swiper-button-next">
                  <svg className="crumina-icon next-button">
                    <use xlinkHref="#arrow-right2-icon" />
                  </svg>
                </div>
                <div className="swiper-button-prev">
                  <svg className="crumina-icon prev-button">
                    <use xlinkHref="#arrow-left2-icon" />
                  </svg>
                </div>
              </div>
              <ProductTab />
            </div>
          </div>
        </div>
        <aside>
          <div className="product-additional-info">
            <div className="product-fav-counter">
              <svg className="crumina-icon">
                <use xlinkHref="#heart-icon" />
              </svg>
              <span className="count">105</span>
            </div>
            <div className="product-purchase-info">
              <form
                className="cryptoki-form"
                onSubmit={(e) => e.preventDefault()}
                id="purchase-form"
              >
                <div className="product-price">
                  <div className="price">$8.00</div>
                  <div className="label">one time payment</div>
                </div>
                <div className="pricing-plans">
                  <div className="plan">
                    <input type="radio" name="license-type" id="regular" />
                    <label htmlFor="regular">Regular License</label>
                    <div className="license-description">
                      {`Here’s`} a small explanation about what you can do with
                      this <a href="#">regular license</a> and fair use.{" "}
                    </div>
                  </div>
                  <div className="plan">
                    <input type="radio" name="license-type" id="commercial" />
                    <label htmlFor="commercial">Commercial License</label>
                  </div>
                  <div className="plan">
                    <input type="radio" name="license-type" id="extended" />
                    <label htmlFor="extended">Extended License</label>
                  </div>
                </div>
                <button
                  className="btn btn-fullwidth  gradient-background"
                  type="submit"
                >
                  Buy Now!
                </button>
                <button className="btn btn-fullwidth  btn-dark" type="submit">
                  Add to Cart
                </button>
              </form>
            </div>
            <div className="product-score">
              <div className="score-item">
                <div className="value">27</div>
                <div className="label">Item Sales</div>
              </div>
              <div className="score-item">
                <div className="value">4.3 / 5</div>
                <div className="label">Item Rating</div>
              </div>
            </div>
            <div className="product-details">
              <div className="small-title">Item details</div>
              <div className="product-details-wrapper">
                <ul className="details-title">
                  <li>Published</li>
                  <li>Updated</li>
                  <li>Files included</li>
                  <li>Software</li>
                  <li>Size</li>
                  <li>Tags</li>
                </ul>
                <ul className="details-value">
                  <li>March 26th, 2021</li>
                  <li>May 9th, 2021</li>
                  <li>PSD, PNG</li>
                  <li>Photoshop CS6</li>
                  <li>12MB</li>
                  <li className="tags-list">
                    <span className="colored">
                      <a href="#">social</a>
                    </span>
                    ,{" "}
                    <span className="colored">
                      <a href="#">twitter</a>
                    </span>
                    ,{" "}
                    <span className="colored">
                      <a href="#">header</a>
                    </span>
                    ,
                    <span className="colored">
                      <a href="#">banner</a>
                    </span>
                    ,{" "}
                    <span className="colored">
                      <a href="#">gaming</a>
                    </span>
                    ,{" "}
                    <span className="colored">
                      <a href="#">streamer</a>
                    </span>
                    ,
                    <span className="colored">
                      <a href="#">gamer</a>
                    </span>
                    ,{" "}
                    <span className="colored">
                      <a href="#">live</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="seller-info">
              <div className="small-title">Item Seller</div>
              <div className="seller-box">
                <div className="avatar box-64">
                  <Link href="06-profile-page">
                    <a>
                      <img src="img/avatar.png" alt="avatar" />
                      <span className="verified">
                        <svg className="crumina-icon">
                          <use xlinkHref="#check-icon" />
                        </svg>
                      </span>
                    </a>
                  </Link>
                </div>
                <div className="seller-meta">
                  <div className="seller-name">
                    <div className="name">
                      <Link href="06-profile-page">
                        <a>Dexter Stark</a>
                      </Link>
                    </div>
                    <div className="meta gradient-text">@dexterstark</div>
                  </div>
                  <ul className="social-icons-list">
                    <li className="social-icon icon-border">
                      <a href="#">
                        <svg className="crumina-icon">
                          <use xlinkHref="#link-icon" />
                        </svg>
                      </a>
                    </li>
                    <li className="social-icon icon-border">
                      <a href="#">
                        <svg className="crumina-icon">
                          <use xlinkHref="#facebook-icon" />
                        </svg>
                      </a>
                    </li>
                    <li className="social-icon icon-border">
                      <a href="#">
                        <svg className="crumina-icon">
                          <use xlinkHref="#twitter-icon" />
                        </svg>
                      </a>
                    </li>
                    <li className="social-icon icon-border">
                      <a href="#">
                        <svg className="crumina-icon">
                          <use xlinkHref="#instagram-icon" />
                        </svg>
                      </a>
                    </li>
                    <li className="social-icon icon-border">
                      <a href="#">
                        <svg className="crumina-icon">
                          <use xlinkHref="#twitch-icon" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                  <div className="seller-buttons">
                    <Link href="/06-profile-page">
                      <a className="btn  btn-small-wide gradient-background">
                        Profile
                      </a>
                    </Link>
                    <a className="btn  btn-small-wide btn-dark" href="#">
                      Follow
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </Layouts>
  );
};
export default Product;
