import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Layouts from "../src/layouts/Layouts";

const ProfilePageTabsCreated = () => {
  return (
    <Layouts>
      <div className="featured-box grid-4-columns tw-mx-4 tw-mt-4">
        <div className="featured-item">
          <div className="featured-item-wrapper">
            <div className="featured-item-content">
              <div className="fav-counter">
                <svg className="crumina-icon">
                  <use xlinkHref="#heart-icon" />
                </svg>{" "}
                <span className="count">22</span>
              </div>
              <div className="featured-item-image">
                {" "}
                <Link href="/05-product-page">
                  <a>
                    <img src="img/content/items/featured-item-1.png" alt="" />
                  </a>
                </Link>{" "}
              </div>
              <div className="featured-item-info">
                <div className="featured-countdown">
                  {/*  */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-cardboards"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 8v8.5a2.5 2.5 0 0 0 2.5 2.5h1.06a3 3 0 0 0 2.34 -1.13l1.54 -1.92a2 2 0 0 1 3.12 0l1.54 1.92a3 3 0 0 0 2.34 1.13h1.06a2.5 2.5 0 0 0 2.5 -2.5v-8.5a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2z"></path>
                    <path d="M8 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                    <path d="M16 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                  </svg>
                </div>
                <div className="title">
                  {" "}
                  <Link href="/05-product-page">
                    <a>The Molten Heart</a>
                  </Link>{" "}
                </div>
                <div className="item-meta">
                  <button className="tw-bg-green-600 tw-px-5 tw-py-2 ">
                    Enter
                  </button>
                </div>
              </div>
            </div>
            <div className="featured-item-post-content"></div>
          </div>
        </div>
        <div className="featured-item">
          <div className="featured-item-wrapper">
            <div className="featured-item-content">
              <div className="fav-counter">
                <svg className="crumina-icon">
                  <use xlinkHref="#heart-icon" />
                </svg>{" "}
                <span className="count">68</span>
              </div>
              <div className="featured-item-image">
                {" "}
                <Link href="/05-product-page">
                  <a>
                    <img src="img/content/items/featured-item-17.png" alt="" />
                  </a>
                </Link>{" "}
              </div>
              <div className="featured-item-info">
                <div className="featured-countdown">
                  {" "}
                  <span className="clock">
                    <svg className="crumina-icon">
                      <use xlinkHref="#clock-icon" />
                    </svg>{" "}
                  </span>
                  <span
                    className="js-countdown"
                    data-timer={73400}
                    data-labels="d : , h : , m : , s"
                  />
                </div>
                <div className="title">
                  {" "}
                  <Link href="/05-product-page">
                    <a>Mystery Cube</a>
                  </Link>{" "}
                </div>
                <div className="item-meta">
                  <span className="avatar box-26">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>
                        <img src="img/avatar.png" alt="" />
                      </a>
                    </Link>{" "}
                    <span className="verified">
                      <svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg>{" "}
                    </span>
                  </span>
                  @DexterStark
                </div>
              </div>
            </div>
            <div className="featured-item-post-content">
              <div className="featured-item-pricebox">
                <div className="price-caption">Current BID</div>
                <div className="price">1.96 ETH</div>
              </div>
              <div className="social-share-box">
                <div className="social-caption">Share</div>
                <div className="share-icons">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#facebook-icon" />
                    </svg>{" "}
                  </a>{" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#twitter-icon" />
                    </svg>{" "}
                  </a>{" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#instagram-icon" />
                    </svg>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="featured-item">
          <div className="featured-item-wrapper">
            <div className="featured-item-content">
              <div className="fav-counter">
                <svg className="crumina-icon">
                  <use xlinkHref="#heart-icon" />
                </svg>{" "}
                <span className="count">105</span>
              </div>
              <div className="featured-item-image">
                {" "}
                <Link href="/05-product-page">
                  <a>
                    <img src="img/content/items/featured-item-3.png" alt="" />
                  </a>
                </Link>{" "}
              </div>
              <div className="featured-item-info">
                <div className="featured-countdown">
                  {" "}
                  <span className="clock">
                    <svg className="crumina-icon">
                      <use xlinkHref="#clock-icon" />
                    </svg>{" "}
                  </span>
                  <span
                    className="js-countdown"
                    data-timer={19400}
                    data-labels="d : , h : , m : , s"
                  />
                </div>
                <div className="title">
                  {" "}
                  <Link href="/05-product-page">
                    <a>Breathing Nature</a>
                  </Link>{" "}
                </div>
                <div className="item-meta">
                  <span className="avatar box-26">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>
                        <img src="img/avatar.png" alt="" />
                      </a>
                    </Link>{" "}
                    <span className="verified">
                      <svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg>{" "}
                    </span>
                  </span>
                  @DexterStark
                </div>
              </div>
            </div>
            <div className="featured-item-post-content">
              <div className="featured-item-pricebox">
                <div className="price-caption">Current BID</div>
                <div className="price">2.31 ETH</div>
              </div>
              <div className="social-share-box">
                <div className="social-caption">Share</div>
                <div className="share-icons">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#facebook-icon" />
                    </svg>{" "}
                  </a>{" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#twitter-icon" />
                    </svg>{" "}
                  </a>{" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#instagram-icon" />
                    </svg>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="featured-item">
          <div className="featured-item-wrapper">
            <div className="featured-item-content">
              <div className="fav-counter">
                <svg className="crumina-icon">
                  <use xlinkHref="#heart-icon" />
                </svg>{" "}
                <span className="count">60</span>
              </div>
              <div className="featured-item-image">
                {" "}
                <Link href="/05-product-page">
                  <a>
                    <img src="img/content/items/featured-item-18.png" alt="" />
                  </a>
                </Link>{" "}
              </div>
              <div className="featured-item-info">
                <div className="featured-countdown">
                  {" "}
                  <span className="clock">
                    <svg className="crumina-icon">
                      <use xlinkHref="#clock-icon" />
                    </svg>{" "}
                  </span>
                  <span
                    className="js-countdown"
                    data-timer={46400}
                    data-labels="d : , h : , m : , s"
                  />
                </div>
                <div className="title">
                  {" "}
                  <Link href="/05-product-page">
                    <a>Golden Ebony</a>
                  </Link>{" "}
                </div>
                <div className="item-meta">
                  <span className="avatar box-26">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>
                        <img src="img/avatar.png" alt="" />
                      </a>
                    </Link>{" "}
                    <span className="verified">
                      <svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg>{" "}
                    </span>
                  </span>
                  @DexterStark
                </div>
              </div>
            </div>
            <div className="featured-item-post-content">
              <div className="featured-item-pricebox">
                <div className="price-caption">Current BID</div>
                <div className="price">1.40 ETH</div>
              </div>
              <div className="social-share-box">
                <div className="social-caption">Share</div>
                <div className="share-icons">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#facebook-icon" />
                    </svg>{" "}
                  </a>{" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#twitter-icon" />
                    </svg>{" "}
                  </a>{" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#instagram-icon" />
                    </svg>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="featured-item">
          <div className="featured-item-wrapper">
            <div className="featured-item-content">
              <div className="fav-counter">
                <svg className="crumina-icon">
                  <use xlinkHref="#heart-icon" />
                </svg>{" "}
                <span className="count">22</span>
              </div>
              <div className="featured-item-image">
                {" "}
                <Link href="/05-product-page">
                  <a>
                    <img src="img/content/items/featured-item-5.png" alt="" />
                  </a>
                </Link>{" "}
              </div>
              <div className="featured-item-info">
                <div className="title">
                  {" "}
                  <Link href="/05-product-page">
                    <a>MushRoom Popcorn</a>
                  </Link>{" "}
                </div>
                <div className="item-meta">
                  <span className="avatar box-26">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>
                        <img src="img/avatar.png" alt="" />
                      </a>
                    </Link>{" "}
                    <span className="verified">
                      <svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg>{" "}
                    </span>
                  </span>
                  @DexterStark
                </div>
              </div>
            </div>
            <div className="featured-item-post-content">
              <div className="featured-item-pricebox">
                <div className="price-caption">Reserve price</div>
                <div className="price">0.96 ETH</div>
              </div>
              <div className="social-share-box">
                <div className="social-caption">Share</div>
                <div className="share-icons">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#facebook-icon" />
                    </svg>{" "}
                  </a>{" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#twitter-icon" />
                    </svg>{" "}
                  </a>{" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#instagram-icon" />
                    </svg>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="featured-item">
          <div className="featured-item-wrapper">
            <div className="featured-item-content">
              <div className="fav-counter">
                <svg className="crumina-icon">
                  <use xlinkHref="#heart-icon" />
                </svg>{" "}
                <span className="count">24</span>
              </div>
              <div className="featured-item-image">
                {" "}
                <Link href="/05-product-page">
                  <a>
                    <img src="img/content/items/featured-item-6.png" alt="" />
                  </a>
                </Link>{" "}
              </div>
              <div className="featured-item-info">
                <div className="title">
                  {" "}
                  <Link href="/05-product-page">
                    <a>Golden Expansion</a>
                  </Link>{" "}
                </div>
                <div className="item-meta">
                  <span className="avatar box-26">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>
                        <img src="img/avatar.png" alt="" />
                      </a>
                    </Link>{" "}
                    <span className="verified">
                      <svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg>{" "}
                    </span>
                  </span>
                  @DexterStark
                </div>
              </div>
            </div>
            <div className="featured-item-post-content">
              <div className="featured-item-pricebox">
                <div className="price-caption">Reserve price</div>
                <div className="price">1.47 ETH</div>
              </div>
              <div className="social-share-box">
                <div className="social-caption">Share</div>
                <div className="share-icons">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#facebook-icon" />
                    </svg>{" "}
                  </a>{" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#twitter-icon" />
                    </svg>{" "}
                  </a>{" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#instagram-icon" />
                    </svg>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="featured-item">
          <div className="featured-item-wrapper">
            <div className="featured-item-content">
              <div className="fav-counter">
                <svg className="crumina-icon">
                  <use xlinkHref="#heart-icon" />
                </svg>{" "}
                <span className="count">32</span>
              </div>
              <div className="featured-item-image">
                {" "}
                <Link href="/05-product-page">
                  <a>
                    <img src="img/content/items/featured-item-19.png" alt="" />
                  </a>
                </Link>{" "}
              </div>
              <div className="featured-item-info">
                <div className="featured-countdown">
                  {" "}
                  <span className="clock">
                    <svg className="crumina-icon">
                      <use xlinkHref="#clock-icon" />
                    </svg>{" "}
                  </span>
                  <span
                    className="js-countdown"
                    data-timer={86900}
                    data-labels="d : , h : , m : , s"
                  />
                </div>
                <div className="title">
                  {" "}
                  <Link href="/05-product-page">
                    <a>Balloons Confetti</a>
                  </Link>{" "}
                </div>
                <div className="item-meta">
                  <span className="avatar box-26">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>
                        <img src="img/avatar.png" alt="" />
                      </a>
                    </Link>{" "}
                    <span className="verified">
                      <svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg>{" "}
                    </span>
                  </span>
                  @DexterStark
                </div>
              </div>
            </div>
            <div className="featured-item-post-content">
              <div className="featured-item-pricebox">
                <div className="price-caption">Current BID</div>
                <div className="price">3.25 ETH</div>
              </div>
              <div className="social-share-box">
                <div className="social-caption">Share</div>
                <div className="share-icons">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#facebook-icon" />
                    </svg>{" "}
                  </a>{" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#twitter-icon" />
                    </svg>{" "}
                  </a>{" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#instagram-icon" />
                    </svg>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="featured-item">
          <div className="featured-item-wrapper">
            <div className="featured-item-content">
              <div className="fav-counter">
                <svg className="crumina-icon">
                  <use xlinkHref="#heart-icon" />
                </svg>{" "}
                <span className="count">18</span>
              </div>
              <div className="featured-item-image">
                {" "}
                <Link href="/05-product-page">
                  <a>
                    <img src="img/content/items/featured-item-20.png" alt="" />
                  </a>
                </Link>{" "}
              </div>
              <div className="featured-item-info">
                <div className="title">
                  {" "}
                  <Link href="/05-product-page">
                    <a>Living Stripes</a>
                  </Link>{" "}
                </div>
                <div className="item-meta">
                  <span className="avatar box-26">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>
                        <img src="img/avatar.png" alt="" />
                      </a>
                    </Link>{" "}
                    <span className="verified">
                      <svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg>{" "}
                    </span>
                  </span>
                  @DexterStark
                </div>
              </div>
            </div>
            <div className="featured-item-post-content">
              <div className="featured-item-pricebox">
                <div className="price-caption">Reserve price</div>
                <div className="price">0.57 ETH</div>
              </div>
              <div className="social-share-box">
                <div className="social-caption">Share</div>
                <div className="share-icons">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#facebook-icon" />
                    </svg>{" "}
                  </a>{" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#twitter-icon" />
                    </svg>{" "}
                  </a>{" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#instagram-icon" />
                    </svg>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="featured-item">
          <div className="featured-item-wrapper">
            <div className="featured-item-content">
              <div className="fav-counter">
                <svg className="crumina-icon">
                  <use xlinkHref="#heart-icon" />
                </svg>{" "}
                <span className="count">29</span>
              </div>
              <div className="featured-item-image">
                {" "}
                <Link href="/05-product-page">
                  <a>
                    <img src="img/content/items/featured-item-21.png" alt="" />
                  </a>
                </Link>{" "}
              </div>
              <div className="featured-item-info">
                <div className="title">
                  {" "}
                  <Link href="/05-product-page">
                    <a>Sand Tornado</a>
                  </Link>{" "}
                </div>
                <div className="item-meta">
                  <span className="avatar box-26">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>
                        <img src="img/avatar.png" alt="" />
                      </a>
                    </Link>{" "}
                    <span className="verified">
                      <svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg>{" "}
                    </span>
                  </span>
                  @DexterStark
                </div>
              </div>
            </div>
            <div className="featured-item-post-content">
              <div className="featured-item-pricebox">
                <div className="price-caption">Reserve price</div>
                <div className="price">1.36 ETH</div>
              </div>
              <div className="social-share-box">
                <div className="social-caption">Share</div>
                <div className="share-icons">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#facebook-icon" />
                    </svg>{" "}
                  </a>{" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#twitter-icon" />
                    </svg>{" "}
                  </a>{" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#instagram-icon" />
                    </svg>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="featured-item">
          <div className="featured-item-wrapper">
            <div className="featured-item-content">
              <div className="fav-counter">
                <svg className="crumina-icon">
                  <use xlinkHref="#heart-icon" />
                </svg>{" "}
                <span className="count">27</span>
              </div>
              <div className="featured-item-image">
                {" "}
                <Link href="/05-product-page">
                  <a>
                    <img src="img/content/items/featured-item-22.png" alt="" />
                  </a>
                </Link>{" "}
              </div>
              <div className="featured-item-info">
                <div className="featured-countdown">
                  {" "}
                  <span className="clock">
                    <svg className="crumina-icon">
                      <use xlinkHref="#clock-icon" />
                    </svg>{" "}
                  </span>
                  <span
                    className="js-countdown"
                    data-timer={51690}
                    data-labels="d : , h : , m : , s"
                  />
                </div>
                <div className="title">
                  {" "}
                  <Link href="/05-product-page">
                    <a>Hell’s Spagetthi</a>
                  </Link>{" "}
                </div>
                <div className="item-meta">
                  <span className="avatar box-26">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>
                        <img src="img/avatar.png" alt="" />
                      </a>
                    </Link>{" "}
                    <span className="verified">
                      <svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg>{" "}
                    </span>
                  </span>
                  @DexterStark
                </div>
              </div>
            </div>
            <div className="featured-item-post-content">
              <div className="featured-item-pricebox">
                <div className="price-caption">Current BID</div>
                <div className="price">4.89 ETH</div>
              </div>
              <div className="social-share-box">
                <div className="social-caption">Share</div>
                <div className="share-icons">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#facebook-icon" />
                    </svg>{" "}
                  </a>{" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#twitter-icon" />
                    </svg>{" "}
                  </a>{" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#instagram-icon" />
                    </svg>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="featured-item">
          <div className="featured-item-wrapper">
            <div className="featured-item-content">
              <div className="fav-counter">
                <svg className="crumina-icon">
                  <use xlinkHref="#heart-icon" />
                </svg>{" "}
                <span className="count">31</span>
              </div>
              <div className="featured-item-image">
                {" "}
                <Link href="/05-product-page">
                  <a>
                    <img src="img/content/items/featured-item-23.png" alt="" />
                  </a>
                </Link>{" "}
              </div>
              <div className="featured-item-info">
                <div className="title">
                  {" "}
                  <Link href="/05-product-page">
                    <a>Inside Fireworks</a>
                  </Link>{" "}
                </div>
                <div className="item-meta">
                  <span className="avatar box-26">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>
                        <img src="img/avatar.png" alt="" />
                      </a>
                    </Link>{" "}
                    <span className="verified">
                      <svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg>{" "}
                    </span>
                  </span>
                  @DexterStark
                </div>
              </div>
            </div>
            <div className="featured-item-post-content">
              <div className="featured-item-pricebox">
                <div className="price-caption">Reserve price</div>
                <div className="price">3.47 ETH</div>
              </div>
              <div className="social-share-box">
                <div className="social-caption">Share</div>
                <div className="share-icons">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#facebook-icon" />
                    </svg>{" "}
                  </a>{" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#twitter-icon" />
                    </svg>{" "}
                  </a>{" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#instagram-icon" />
                    </svg>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="featured-item">
          <div className="featured-item-wrapper">
            <div className="featured-item-content">
              <div className="fav-counter">
                <svg className="crumina-icon">
                  <use xlinkHref="#heart-icon" />
                </svg>{" "}
                <span className="count">19</span>
              </div>
              <div className="featured-item-image">
                {" "}
                <Link href="/05-product-page">
                  <a>
                    <img src="img/content/items/featured-item-24.png" alt="" />
                  </a>
                </Link>{" "}
              </div>
              <div className="featured-item-info">
                <div className="title">
                  {" "}
                  <Link href="/05-product-page">
                    <a>Melting Magbulb</a>
                  </Link>{" "}
                </div>
                <div className="item-meta">
                  <span className="avatar box-26">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>
                        <img src="img/avatar.png" alt="" />
                      </a>
                    </Link>{" "}
                    <span className="verified">
                      <svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg>{" "}
                    </span>
                  </span>
                  @DexterStark
                </div>
              </div>
            </div>
            <div className="featured-item-post-content">
              <div className="featured-item-pricebox">
                <div className="price-caption">Reserve price</div>
                <div className="price">0.25 ETH</div>
              </div>
              <div className="social-share-box">
                <div className="social-caption">Share</div>
                <div className="share-icons">
                  {" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#facebook-icon" />
                    </svg>{" "}
                  </a>{" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#twitter-icon" />
                    </svg>{" "}
                  </a>{" "}
                  <a href="#">
                    <svg className="crumina-icon">
                      <use xlinkHref="#instagram-icon" />
                    </svg>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default ProfilePageTabsCreated;
