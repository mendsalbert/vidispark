import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import BrowseCategories from "../src/components/BrowseCategories";
import IndexSearchTigger from "../src/components/IndexSearchTigger";
import Layouts from "../src/layouts/Layouts";
import { featuredcarousel, featuredsellerscarousel } from "../src/sliderProps";

const Index = () => {
  return (
    <Layouts>
      <div className="primary-content-area bottom-padding-70 ">
        {/* fullwidth banner */}
        <div className="section-padding fullwidth-banner">
          <div
            className="banner-overlay"
            style={{ backgroundImage: "url(img/content/home-banner.png)" }}
          />
          <div className="search-form-with-text section-small">
            <div className="text-content">
              <div className="subtitle">WELCOME TO CRIPTOKI</div>
              <div className="title">
                Browse the Best
                <br />
                Digital Products!
              </div>
            </div>
            <IndexSearchTigger />
          </div>
        </div>
        {/* fullwidth banner */}
        {/* featured items carousel */}
        <div className="container section-padding overflow-hidden ">
          <div className="section-title-wrapper">
            <div className="section-title">
              <span className="gradient-text">Featured</span> Items
            </div>
            <div className="title-navigation">
              <div className="featured-carousel-icon swiper-button-prev">
                <svg className="crumina-icon">
                  <use xlinkHref="#arrow-left2-icon" />
                </svg>
              </div>
              <div className="featured-carousel-icon swiper-button-next">
                <svg className="crumina-icon">
                  <use xlinkHref="#arrow-right2-icon" />
                </svg>
              </div>
            </div>
          </div>
          <Swiper {...featuredcarousel} className="featured-carousel">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="featured-item v5">
                  <div className="featured-item-wrapper">
                    <div className="featured-item-content">
                      <div className="fav-counter">
                        <svg className="crumina-icon">
                          <use xlinkHref="#heart-icon" />
                        </svg>
                        <span className="count">22</span>
                      </div>
                      <div className="featured-item-image">
                        <Link href="06-profile-page">
                          <a>
                            <img
                              src="img/content/items/featured-item-25.png"
                              alt=""
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="featured-item-info">
                        <div className="item-category ui-templates">
                          UI templates
                        </div>
                        <div className="title">
                          <Link href="05-product">
                            <a>Cryptoki - NFT and Digital Market...</a>
                          </Link>
                        </div>
                        <div className="item-meta">
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
                      </div>
                    </div>
                    <div className="featured-item-post-content">
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
                      <div className="item-price">$12.00</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="featured-item v5">
                  <div className="featured-item-wrapper">
                    <div className="featured-item-content">
                      <div className="fav-counter">
                        <svg className="crumina-icon">
                          <use xlinkHref="#heart-icon" />
                        </svg>
                        <span className="count">22</span>
                      </div>
                      <div className="featured-item-image">
                        <Link href="06-profile-page">
                          <a>
                            <img
                              src="img/content/items/featured-item-26.png"
                              alt=""
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="featured-item-info">
                        <div className="item-category coded-templates">
                          Coded templates
                        </div>
                        <div className="title">
                          <Link href="05-product">
                            <a>Olympus HTML - Social Networking...</a>
                          </Link>
                        </div>
                        <div className="item-meta">
                          <span className="avatar box-26">
                            <Link href="06-profile-page">
                              <a>
                                <img src="img/avatar-2.png" alt="" />
                              </a>
                            </Link>
                            <span className="verified">
                              <svg className="crumina-icon">
                                <use xlinkHref="#check-icon" />
                              </svg>
                            </span>
                          </span>
                          @JackieJ
                        </div>
                      </div>
                    </div>
                    <div className="featured-item-post-content">
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
                        <span className="filled">
                          <svg className="crumina-icon">
                            <use xlinkHref="#star2-icon" />
                          </svg>
                        </span>
                      </div>
                      <div className="item-price">$24.00</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="featured-item v5">
                  <div className="featured-item-wrapper">
                    <div className="featured-item-content">
                      <div className="fav-counter">
                        <svg className="crumina-icon">
                          <use xlinkHref="#heart-icon" />
                        </svg>
                        <span className="count">68</span>
                      </div>
                      <div className="featured-item-image">
                        <Link href="06-profile-page">
                          <a>
                            <img
                              src="img/content/items/featured-item-27.png"
                              alt=""
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="featured-item-info">
                        <div className="item-category social-graphics">
                          Social graphics
                        </div>
                        <div className="title">
                          <Link href="05-product">
                            <a>Twitter Gaming Headers Pack 04</a>
                          </Link>
                        </div>
                        <div className="item-meta">
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
                      </div>
                    </div>
                    <div className="featured-item-post-content">
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
                      <div className="item-price">$8.00</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="featured-item v5">
                  <div className="featured-item-wrapper">
                    <div className="featured-item-content">
                      <div className="fav-counter">
                        <svg className="crumina-icon">
                          <use xlinkHref="#heart-icon" />
                        </svg>
                        <span className="count">22</span>
                      </div>
                      <div className="featured-item-image">
                        <Link href="06-profile-page">
                          <a>
                            <img
                              src="img/content/items/featured-item-28.png"
                              alt=""
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="featured-item-info">
                        <div className="item-category video-tutorials">
                          Video tutorials
                        </div>
                        <div className="title">
                          <Link href="05-product">
                            <a>Add Video Reviews to your Theme!</a>
                          </Link>
                        </div>
                        <div className="item-meta">
                          <span className="avatar box-26">
                            <Link href="06-profile-page">
                              <a>
                                <img src="img/avatar-8.png" alt="" />
                              </a>
                            </Link>
                            <span className="verified">
                              <svg className="crumina-icon">
                                <use xlinkHref="#check-icon" />
                              </svg>
                            </span>
                          </span>
                          @beardedwndr
                        </div>
                      </div>
                    </div>
                    <div className="featured-item-post-content">
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
                        <span>
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
                      <div className="item-price">$17.00</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
        {/* featured items carousel */}
        {/*  items categories carousel */}
        <BrowseCategories />
        {/*  items categories carousel */}
        {/* featured items grid */}
        <div className="container section-padding">
          <div className="section-title-wrapper">
            <div className="section-title">
              <span className="gradient-text">Newest</span> Items
            </div>
            <div className="all-items-link">
              <Link href="02-explore">
                <a>Explore all Artworks</a>
              </Link>
            </div>
          </div>
          <div className="featured-box">
            <div className="featured-box-wrapper grid-4-columns">
              <div className="featured-item v5">
                <div className="featured-item-wrapper">
                  <div className="featured-item-content">
                    <div className="fav-counter">
                      <svg className="crumina-icon">
                        <use xlinkHref="#heart-icon" />
                      </svg>
                      <span className="count">22</span>
                    </div>
                    <div className="featured-item-image">
                      <Link href="05-product">
                        <a>
                          <img
                            src="img/content/items/featured-item-29.png"
                            alt=""
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="featured-item-info">
                      <div className="item-category social-graphics">
                        Social graphics
                      </div>
                      <div className="title">
                        <Link href="/05-product">
                          <a>Youtube Gaming Thumbnails Pack 30</a>
                        </Link>
                      </div>
                      <div className="item-meta">
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
                    </div>
                  </div>
                  <div className="featured-item-post-content">
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
                    <div className="item-price">$8.00</div>
                  </div>
                </div>
              </div>
              <div className="featured-item v5">
                <div className="featured-item-wrapper">
                  <div className="featured-item-content">
                    <div className="fav-counter">
                      <svg className="crumina-icon">
                        <use xlinkHref="#heart-icon" />
                      </svg>
                      <span className="count">22</span>
                    </div>
                    <div className="featured-item-image">
                      <Link href="/05-product">
                        <a>
                          <img
                            src="img/content/items/featured-item-30.png"
                            alt=""
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="featured-item-info">
                      <div className="item-category coded-templates">
                        Coded templates
                      </div>
                      <div className="title">
                        <Link href="/05-product">
                          <a>Olympus WP - Social Networking...</a>
                        </Link>
                      </div>
                      <div className="item-meta">
                        <span className="avatar box-26">
                          <Link href="06-profile-page">
                            <a>
                              <img src="img/avatar-2.png" alt="" />
                            </a>
                          </Link>
                          <span className="verified">
                            <svg className="crumina-icon">
                              <use xlinkHref="#check-icon" />
                            </svg>
                          </span>
                        </span>
                        @JackieJ
                      </div>
                    </div>
                  </div>
                  <div className="featured-item-post-content">
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
                      <span className="filled">
                        <svg className="crumina-icon">
                          <use xlinkHref="#star2-icon" />
                        </svg>
                      </span>
                    </div>
                    <div className="item-price">$68.00</div>
                  </div>
                </div>
              </div>
              <div className="featured-item v5">
                <div className="featured-item-wrapper">
                  <div className="featured-item-content">
                    <div className="fav-counter">
                      <svg className="crumina-icon">
                        <use xlinkHref="#heart-icon" />
                      </svg>
                      <span className="count">22</span>
                    </div>
                    <div className="featured-item-image">
                      <Link href="05-product">
                        <a>
                          <img
                            src="img/content/items/featured-item-31.png"
                            alt=""
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="featured-item-info">
                      <div className="item-category social-graphics">
                        Social graphics
                      </div>
                      <div className="title">
                        <Link href="05-product">
                          <a>Phantom Cloud - Digital Artist PSD...</a>
                        </Link>
                      </div>
                      <div className="item-meta">
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
                    </div>
                  </div>
                  <div className="featured-item-post-content">
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
                    <div className="item-price">$10.00</div>
                  </div>
                </div>
              </div>
              <div className="featured-item v5">
                <div className="featured-item-wrapper">
                  <div className="featured-item-content">
                    <div className="fav-counter">
                      <svg className="crumina-icon">
                        <use xlinkHref="#heart-icon" />
                      </svg>
                      <span className="count">22</span>
                    </div>
                    <div className="featured-item-image">
                      <Link href="05-product">
                        <a>
                          <img
                            src="img/content/items/featured-item-32.png"
                            alt=""
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="featured-item-info">
                      <div className="item-category social-graphics">
                        Social graphics
                      </div>
                      <div className="title">
                        <Link href="05-product">
                          <a>Twitter Gaming Headers Pack 07</a>
                        </Link>
                      </div>
                      <div className="item-meta">
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
                    </div>
                  </div>
                  <div className="featured-item-post-content">
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
                    <div className="item-price">$8.00</div>
                  </div>
                </div>
              </div>
              <div className="featured-item v5">
                <div className="featured-item-wrapper">
                  <div className="featured-item-content">
                    <div className="fav-counter">
                      <svg className="crumina-icon">
                        <use xlinkHref="#heart-icon" />
                      </svg>
                      <span className="count">22</span>
                    </div>
                    <div className="featured-item-image">
                      <Link href="05-product">
                        <a>
                          <img
                            src="img/content/items/featured-item-33.png"
                            alt=""
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="featured-item-info">
                      <div className="item-category video-tutorials">
                        Video tutorials
                      </div>
                      <div className="title">
                        <Link href="05-product">
                          <a>How to Create Gamification Badges</a>
                        </Link>
                      </div>
                      <div className="item-meta">
                        <span className="avatar box-26">
                          <Link href="06-profile-page">
                            <a>
                              <img src="img/avatar-8.png" alt="" />
                            </a>
                          </Link>
                          <span className="verified">
                            <svg className="crumina-icon">
                              <use xlinkHref="#check-icon" />
                            </svg>
                          </span>
                        </span>
                        @beardedwndr
                      </div>
                    </div>
                  </div>
                  <div className="featured-item-post-content">
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
                    <div className="item-price">$17.00</div>
                  </div>
                </div>
              </div>
              <div className="featured-item v5">
                <div className="featured-item-wrapper">
                  <div className="featured-item-content">
                    <div className="fav-counter">
                      <svg className="crumina-icon">
                        <use xlinkHref="#heart-icon" />
                      </svg>
                      <span className="count">22</span>
                    </div>
                    <div className="featured-item-image">
                      <Link href="05-product">
                        <a>
                          <img
                            src="img/content/items/featured-item-34.png"
                            alt=""
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="featured-item-info">
                      <div className="item-category social-graphics">
                        Social graphics
                      </div>
                      <div className="title">
                        <Link href="05-product">
                          <a>Youtube Gaming Thumbnails Pack 05</a>
                        </Link>
                      </div>
                      <div className="item-meta">
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
                    </div>
                  </div>
                  <div className="featured-item-post-content">
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
                      <span className="filled">
                        <svg className="crumina-icon">
                          <use xlinkHref="#star2-icon" />
                        </svg>
                      </span>
                    </div>
                    <div className="item-price">$8.00</div>
                  </div>
                </div>
              </div>
              <div className="featured-item v5">
                <div className="featured-item-wrapper">
                  <div className="featured-item-content">
                    <div className="fav-counter">
                      <svg className="crumina-icon">
                        <use xlinkHref="#heart-icon" />
                      </svg>
                      <span className="count">22</span>
                    </div>
                    <div className="featured-item-image">
                      <Link href="05-product">
                        <a>
                          <img
                            src="img/content/items/featured-item-35.png"
                            alt=""
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="featured-item-info">
                      <div className="item-category social-graphics">
                        Social graphics
                      </div>
                      <div className="title">
                        <Link href="05-product">
                          <a>Twitter Gaming Headers Pack 01</a>
                        </Link>
                      </div>
                      <div className="item-meta">
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
                    </div>
                  </div>
                  <div className="featured-item-post-content">
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
                      <span className="filled">
                        <svg className="crumina-icon">
                          <use xlinkHref="#star2-icon" />
                        </svg>
                      </span>
                    </div>
                    <div className="item-price">$8.00</div>
                  </div>
                </div>
              </div>
              <div className="featured-item v5">
                <div className="featured-item-wrapper">
                  <div className="featured-item-content">
                    <div className="fav-counter">
                      <svg className="crumina-icon">
                        <use xlinkHref="#heart-icon" />
                      </svg>
                      <span className="count">22</span>
                    </div>
                    <div className="featured-item-image">
                      <Link href="05-product">
                        <a>
                          <img
                            src="img/content/items/featured-item-36.png"
                            alt=""
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="featured-item-info">
                      <div className="item-category ui-templates">
                        UI templates
                      </div>
                      <div className="title">
                        <Link href="05-product">
                          <a>Phantom Cloud - Digital Artist PSD...</a>
                        </Link>
                      </div>
                      <div className="item-meta">
                        <span className="avatar box-26">
                          <Link href="06-profile-page">
                            <a>
                              <img src="img/avatar-2.png" alt="" />
                            </a>
                          </Link>
                          <span className="verified">
                            <svg className="crumina-icon">
                              <use xlinkHref="#check-icon" />
                            </svg>
                          </span>
                        </span>
                        @JackieJ
                      </div>
                    </div>
                  </div>
                  <div className="featured-item-post-content">
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
                    <div className="item-price">$24.00</div>
                  </div>
                </div>
              </div>
              <div className="featured-item v5">
                <div className="featured-item-wrapper">
                  <div className="featured-item-content">
                    <div className="fav-counter">
                      <svg className="crumina-icon">
                        <use xlinkHref="#heart-icon" />
                      </svg>
                      <span className="count">22</span>
                    </div>
                    <div className="featured-item-image">
                      <Link href="05-product">
                        <a>
                          <img
                            src="img/content/items/featured-item-37.png"
                            alt=""
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="featured-item-info">
                      <div className="item-category social-graphics">
                        Social graphics
                      </div>
                      <div className="title">
                        <Link href="05-product">
                          <a>Youtube Gaming Thumbnails Pack 28</a>
                        </Link>
                      </div>
                      <div className="item-meta">
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
                    </div>
                  </div>
                  <div className="featured-item-post-content">
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
                    <div className="item-price">$8.00</div>
                  </div>
                </div>
              </div>
              <div className="featured-item v5">
                <div className="featured-item-wrapper">
                  <div className="featured-item-content">
                    <div className="fav-counter">
                      <svg className="crumina-icon">
                        <use xlinkHref="#heart-icon" />
                      </svg>
                      <span className="count">22</span>
                    </div>
                    <div className="featured-item-image">
                      <Link href="05-product">
                        <a>
                          <img
                            src="img/content/items/featured-item-38.png"
                            alt=""
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="featured-item-info">
                      <div className="item-category ui-templates">
                        UI templates
                      </div>
                      <div className="title">
                        <Link href="05-product">
                          <a>Valkivid PSD - Content Creators...</a>
                        </Link>
                      </div>
                      <div className="item-meta">
                        <span className="avatar box-26">
                          <Link href="06-profile-page">
                            <a>
                              <img src="img/avatar-2.png" alt="" />
                            </a>
                          </Link>
                          <span className="verified">
                            <svg className="crumina-icon">
                              <use xlinkHref="#check-icon" />
                            </svg>
                          </span>
                        </span>
                        @JackieJ
                      </div>
                    </div>
                  </div>
                  <div className="featured-item-post-content">
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
                      <span className="filled">
                        <svg className="crumina-icon">
                          <use xlinkHref="#star2-icon" />
                        </svg>
                      </span>
                    </div>
                    <div className="item-price">$12.00</div>
                  </div>
                </div>
              </div>
              <div className="featured-item v5">
                <div className="featured-item-wrapper">
                  <div className="featured-item-content">
                    <div className="fav-counter">
                      <svg className="crumina-icon">
                        <use xlinkHref="#heart-icon" />
                      </svg>
                      <span className="count">22</span>
                    </div>
                    <div className="featured-item-image">
                      <Link href="05-product">
                        <a>
                          <img
                            src="img/content/items/featured-item-39.png"
                            alt=""
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="featured-item-info">
                      <div className="item-category video-tutorials">
                        Video tutorials
                      </div>
                      <div className="title">
                        <Link href="05-product">
                          <a>How to Create Gamification Quests</a>
                        </Link>
                      </div>
                      <div className="item-meta">
                        <span className="avatar box-26">
                          <Link href="06-profile-page">
                            <a>
                              <img src="img/avatar-8.png" alt="" />
                            </a>
                          </Link>
                          <span className="verified">
                            <svg className="crumina-icon">
                              <use xlinkHref="#check-icon" />
                            </svg>
                          </span>
                        </span>
                        @beardedwndr
                      </div>
                    </div>
                  </div>
                  <div className="featured-item-post-content">
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
                    <div className="item-price">$17.00</div>
                  </div>
                </div>
              </div>
              <div className="featured-item v5">
                <div className="featured-item-wrapper">
                  <div className="featured-item-content">
                    <div className="fav-counter">
                      <svg className="crumina-icon">
                        <use xlinkHref="#heart-icon" />
                      </svg>
                      <span className="count">22</span>
                    </div>
                    <div className="featured-item-image">
                      <Link href="05-product">
                        <a>
                          <img
                            src="img/content/items/featured-item-40.png"
                            alt=""
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="featured-item-info">
                      <div className="item-category social-graphics">
                        Social graphics
                      </div>
                      <div className="title">
                        <Link href="05-product">
                          <a>Youtube Gaming Thumbnails Pack 11</a>
                        </Link>
                      </div>
                      <div className="item-meta">
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
                    </div>
                  </div>
                  <div className="featured-item-post-content">
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
                    <div className="item-price">$8.00</div>
                  </div>
                </div>
              </div>
              <div className="featured-item v5">
                <div className="featured-item-wrapper">
                  <div className="featured-item-content">
                    <div className="fav-counter">
                      <svg className="crumina-icon">
                        <use xlinkHref="#heart-icon" />
                      </svg>
                      <span className="count">22</span>
                    </div>
                    <div className="featured-item-image">
                      <Link href="05-product">
                        <a>
                          <img
                            src="img/content/items/featured-item-41.png"
                            alt=""
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="featured-item-info">
                      <div className="item-category social-graphics">
                        Social graphics
                      </div>
                      <div className="title">
                        <Link href="05-product">
                          <a>Youtube Gaming Thumbnails Pack 11</a>
                        </Link>
                      </div>
                      <div className="item-meta">
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
                    </div>
                  </div>
                  <div className="featured-item-post-content">
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
                    <div className="item-price">$8.00</div>
                  </div>
                </div>
              </div>
              <div className="featured-item v5">
                <div className="featured-item-wrapper">
                  <div className="featured-item-content">
                    <div className="fav-counter">
                      <svg className="crumina-icon">
                        <use xlinkHref="#heart-icon" />
                      </svg>
                      <span className="count">22</span>
                    </div>
                    <div className="featured-item-image">
                      <Link href="05-product">
                        <a>
                          <img
                            src="img/content/items/featured-item-42.png"
                            alt=""
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="featured-item-info">
                      <div className="item-category social-graphics">
                        Social graphics
                      </div>
                      <div className="title">
                        <Link href="05-product">
                          <a>Twitter Gaming Headers Pack 09</a>
                        </Link>
                      </div>
                      <div className="item-meta">
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
                    </div>
                  </div>
                  <div className="featured-item-post-content">
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
                      <span className="filled">
                        <svg className="crumina-icon">
                          <use xlinkHref="#star2-icon" />
                        </svg>
                      </span>
                    </div>
                    <div className="item-price">$8.00</div>
                  </div>
                </div>
              </div>
              <div className="featured-item v5">
                <div className="featured-item-wrapper">
                  <div className="featured-item-content">
                    <div className="fav-counter">
                      <svg className="crumina-icon">
                        <use xlinkHref="#heart-icon" />
                      </svg>
                      <span className="count">22</span>
                    </div>
                    <div className="featured-item-image">
                      <Link href="05-product">
                        <a>
                          <img
                            src="img/content/items/featured-item-43.png"
                            alt=""
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="featured-item-info">
                      <div className="item-category social-graphics">
                        Social graphics
                      </div>
                      <div className="title">
                        <Link href="05-product">
                          <a>Youtube Gaming Thumbnails Pack 08</a>
                        </Link>
                      </div>
                      <div className="item-meta">
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
                    </div>
                  </div>
                  <div className="featured-item-post-content">
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
                      <span className="filled">
                        <svg className="crumina-icon">
                          <use xlinkHref="#star2-icon" />
                        </svg>
                      </span>
                    </div>
                    <div className="item-price">$8.00</div>
                  </div>
                </div>
              </div>
              <div className="featured-item v5">
                <div className="featured-item-wrapper">
                  <div className="featured-item-content">
                    <div className="fav-counter">
                      <svg className="crumina-icon">
                        <use xlinkHref="#heart-icon" />
                      </svg>
                      <span className="count">22</span>
                    </div>
                    <div className="featured-item-image">
                      <Link href="05-product">
                        <a>
                          <img
                            src="img/content/items/featured-item-44.png"
                            alt=""
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="featured-item-info">
                      <div className="item-category ui-templates">
                        UI templates
                      </div>
                      <div className="title">
                        <Link href="05-product">
                          <a>Necromancers - eSports Team PSD...</a>
                        </Link>
                      </div>
                      <div className="item-meta">
                        <span className="avatar box-26">
                          <Link href="06-profile-page">
                            <a>
                              <img src="img/avatar-2.png" alt="" />
                            </a>
                          </Link>
                          <span className="verified">
                            <svg className="crumina-icon">
                              <use xlinkHref="#check-icon" />
                            </svg>
                          </span>
                        </span>
                        @JackieJ
                      </div>
                    </div>
                  </div>
                  <div className="featured-item-post-content">
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
                    <div className="item-price">$12.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* featured items grid */}
        {/* featured sellers carousel */}
        <div className="container section-padding">
          <div className="section-title-wrapper">
            <div className="section-title">
              Featured <span className="gradient-text">Sellers</span>
            </div>
            <div className="title-navigation">
              <div className="featured-sellers-icon swiper-button-prev">
                <svg className="crumina-icon">
                  <use xlinkHref="#arrow-left2-icon" />
                </svg>
              </div>
              <div className="featured-sellers-icon swiper-button-next">
                <svg className="crumina-icon">
                  <use xlinkHref="#arrow-right2-icon" />
                </svg>
              </div>
            </div>
          </div>
          <Swiper
            {...featuredsellerscarousel}
            className="featured-sellers-carousel overflow-hidden"
          >
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="seller-card">
                  <div className="about-seller">
                    <div className="seller-info">
                      <div className="avatar box-64">
                        <Link href="06-profile-page">
                          <a>
                            <img src="img/avatar.png" alt="avatar" />
                          </a>
                        </Link>
                        <span className="verified">
                          <svg className="crumina-icon">
                            <use xlinkHref="#check-icon" />
                          </svg>
                        </span>
                      </div>
                      <div className="seller-meta">
                        <div className="title">Dexter Stark</div>
                        <div className="meta">@DexterStark</div>
                      </div>
                    </div>
                    <div className="seller-stats">
                      <div className="seller-score">
                        <div className="number title">179</div>
                        <div className="label">Total Items</div>
                      </div>
                      <div className="seller-score">
                        <div className="number title">13.5K</div>
                        <div className="label">Total Sales</div>
                      </div>
                      <div className="seller-score">
                        <div className="number title">4.8 / 5</div>
                        <div className="label">Avg.Rating</div>
                      </div>
                    </div>
                  </div>
                  <div className="seller-products">
                    <div className="products-previews">
                      <div className="preview-box">
                        <Link href="06-profile-page">
                          <a>
                            <img
                              src="img/content/previews/project-thumb-37.png"
                              alt=""
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="preview-box">
                        <Link href="06-profile-page">
                          <a>
                            <img
                              src="img/content/previews/project-thumb-38.png"
                              alt=""
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="preview-box">
                        <Link href="06-profile-page">
                          <a>
                            <img
                              src="img/content/previews/project-thumb-39.png"
                              alt=""
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="preview-box">
                        <Link href="06-profile-page">
                          <a>
                            <img
                              src="img/content/previews/project-thumb-40.png"
                              alt=""
                            />
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="more-link">
                      <Link href="06-profile-page">
                        <a>
                          <svg className="crumina-icon">
                            <use xlinkHref="#dots-icon" />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="seller-card">
                  <div className="about-seller">
                    <div className="seller-info">
                      <div className="avatar box-64">
                        <Link href="06-profile-page">
                          <a>
                            <img src="img/avatar-2.png" alt="avatar" />
                          </a>
                        </Link>
                        <span className="verified">
                          <svg className="crumina-icon">
                            <use xlinkHref="#check-icon" />
                          </svg>
                        </span>
                      </div>
                      <div className="seller-meta">
                        <div className="title">Jackie Jones</div>
                        <div className="meta">@JackieJ</div>
                      </div>
                    </div>
                    <div className="seller-stats">
                      <div className="seller-score">
                        <div className="number title">53</div>
                        <div className="label">Total Items</div>
                      </div>
                      <div className="seller-score">
                        <div className="number title">10.7K</div>
                        <div className="label">Total Sales</div>
                      </div>
                      <div className="seller-score">
                        <div className="number title">4.9 / 5</div>
                        <div className="label">Avg.Rating</div>
                      </div>
                    </div>
                  </div>
                  <div className="seller-products">
                    <div className="products-previews">
                      <div className="preview-box">
                        <Link href="06-profile-page">
                          <a>
                            <img
                              src="img/content/previews/project-thumb-41.png"
                              alt=""
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="preview-box">
                        <Link href="06-profile-page">
                          <a>
                            <img
                              src="img/content/previews/project-thumb-42.png"
                              alt=""
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="preview-box">
                        <Link href="06-profile-page">
                          <a>
                            <img
                              src="img/content/previews/project-thumb-43.png"
                              alt=""
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="preview-box">
                        <Link href="06-profile-page">
                          <a>
                            <img
                              src="img/content/previews/project-thumb-44.png"
                              alt=""
                            />
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="more-link">
                      <Link href="06-profile-page">
                        <a>
                          <svg className="crumina-icon">
                            <use xlinkHref="#dots-icon" />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
        {/* featured sellers carousel */}
        {/* become seller block */}
        <div className="section-small section-padding">
          <div className="become-seller-block">
            <img src="img/content/become-seller.png" alt="" />
            <div className="text-content">
              <div className="subtitle">JOIN OUR COMMUNITY!</div>
              <div className="title">
                Click{" "}
                <span className="gradient-text">
                  <Link href="20-become-a-creator">
                    <a>Here</a>
                  </Link>
                </span>{" "}
                to <br />
                Become a Seller!
              </div>
            </div>
          </div>
        </div>
        {/* become seller block */}
        {/* latest news */}
        <div className="container section-padding">
          <div className="section-title-wrapper">
            <div className="section-title">
              Latest <span className="gradient-text">News</span>
            </div>
            <div className="all-items-link">
              <Link href="16-blog-grid">
                <a>View all Blog Posts</a>
              </Link>
            </div>
          </div>
          <div className="latest-news-box grid-3-columns">
            <div className="news-item">
              <div className="news-thumb">
                <Link href="15-blog-post-sidebar">
                  <a>
                    <img src="img/content/latest-news/news-thumb1.png" alt="" />
                  </a>
                </Link>
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <div className="news-tags">
                    <span className="tag-item">
                      <a>Guides</a>
                    </span>
                  </div>
                  by{" "}
                  <Link href="06-profile-page">
                    <a>Cryptoki</a>
                  </Link>
                  , March 26th, 2021
                </div>
                <div className="news-title h5">
                  <Link href="15-blog-post-sidebar">
                    <a>
                      We explain with details everything you need to know about
                      crypto art and cryptocurrencies!
                    </a>
                  </Link>
                </div>
                <div className="news-excerpt">
                  A cryptocurrency is a digital asset designed to work as a
                  medium of exchange wherein individual coin ownership
                  records...
                </div>
                <div className="read-more-link">
                  <a href="#">
                    Read More
                    <svg className="crumina-icon">
                      <use xlinkHref="#arrow-right2-icon" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="news-item">
              <div className="news-thumb">
                <Link href="15-blog-post-sidebar">
                  <a>
                    <img src="img/content/latest-news/news-thumb2.png" alt="" />
                  </a>
                </Link>
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <div className="news-tags">
                    <span className="tag-item">
                      <a>Guides</a>
                    </span>
                    <span className="tag-item">
                      <a>News</a>
                    </span>
                  </div>
                  by{" "}
                  <Link href="06-profile-page">
                    <a>Marina Valentine</a>
                  </Link>
                  , March 13th, 2021
                </div>
                <div className="news-title h5">
                  <Link href="15-blog-post-sidebar">
                    <a>
                      {`Here’s`} a quick guide about how to make money selling
                      your artworks with Criptoki!
                    </a>
                  </Link>
                </div>
                <div className="news-excerpt">
                  A cryptocurrency is a digital asset designed to work as a
                  medium of exchange wherein individual coin ownership
                  records...
                </div>
                <div className="read-more-link">
                  <Link href="15-blog-post-sidebar">
                    <a>
                      Read More
                      <svg className="crumina-icon">
                        <use xlinkHref="#arrow-right2-icon" />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="news-item">
              <div className="news-thumb">
                <Link href="15-blog-post-sidebar">
                  <a>
                    <img src="img/content/latest-news/news-thumb3.png" alt="" />
                  </a>
                </Link>
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <div className="news-tags">
                    <span className="tag-item">
                      <a>Currencies</a>
                    </span>
                  </div>
                  by{" "}
                  <Link href="06-profile-page">
                    <a>Cryptoki</a>
                  </Link>
                  , March 4th, 2021
                </div>
                <div className="news-title h5">
                  <Link href="15-blog-post-sidebar">
                    <a>
                      {`What’s`} ETH? An in-depth view of the currency used in
                      the market
                    </a>
                  </Link>
                </div>
                <div className="news-excerpt">
                  A cryptocurrency is a digital asset designed to work as a
                  medium of exchange wherein individual coin ownership
                  records...
                </div>
                <div className="read-more-link">
                  <Link href="15-blog-post-sidebar">
                    <a>
                      Read More
                      <svg className="crumina-icon">
                        <use xlinkHref="#arrow-right2-icon" />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* latest news */}
      </div>
    </Layouts>
  );
};
export default Index;
