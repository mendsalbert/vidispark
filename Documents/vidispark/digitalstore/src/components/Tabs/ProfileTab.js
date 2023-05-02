import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Paggination2 from "../Paggination2";

const ProfileTab = () => {
  return (
    <Tab.Container defaultActiveKey={"tab1"}>
      <Nav as={"ul"} className="tabs-list swiper-wrapper flex-center">
        <Nav.Link as={"li"} eventKey="tab1" className="swiper-slide">
          <a className="c-pointer">
            Items <span className="count">135</span>
          </a>
        </Nav.Link>
        <Nav.Link as={"li"} eventKey="tab2" className="swiper-slide">
          <a className="c-pointer">
            Liked <span className="count">7.2K</span>
          </a>
        </Nav.Link>
        <Nav.Link as={"li"} eventKey="tab3" className="swiper-slide">
          <a className="c-pointer">
            Following <span className="count">56</span>
          </a>
        </Nav.Link>
        <Nav.Link as={"li"} eventKey="tab4" className="swiper-slide">
          <a className="c-pointer">
            Followers <span className="count">903</span>
          </a>
        </Nav.Link>
        <Nav.Link as={"li"} eventKey="tab5" className="swiper-slide">
          <a className="c-pointer">About</a>
        </Nav.Link>
      </Nav>
      <Tab.Content className="tabs-content-wrapper">
        <Tab.Pane eventKey="tab1" className="tab">
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
          <Paggination2 queryItem={".featured-item"} />
        </Tab.Pane>
        <Tab.Pane eventKey="tab2" className="tab" />
        <Tab.Pane eventKey="tab3" className="tab" />
        <Tab.Pane eventKey="tab4" className="tab" />
        <Tab.Pane eventKey="tab5" className="tab">
          <div className="about-author-wrapper">
            <div className="author-bio">
              <div className="small-title">Full Bio</div>
              <p>
                I am a self-taught digital artist who specializes in 3d art and
                motion graphics. Most of my works are inspired by nature and
                biomechanic themes.
              </p>
              <p>
                What does it mean? Biomechanics is the study of the structure,
                function and motion of the mechanical aspects of biological
                systems, at any level from whole organisms to organs, cells and
                cell organelles, using the methods of mechanics. Biomechanics is
                a branch of biophysics.
              </p>
            </div>
            <div className="author-details">
              <div className="small-title">Details</div>
              <ul className="details-list">
                <li>
                  <svg className="crumina-icon bullet-icon">
                    <use xlinkHref="#circle-icon" />
                  </svg>
                  <span className="detail-label">Joined</span>
                  <span className="bold">January 5th, 2021</span>
                </li>
                <li>
                  <svg className="crumina-icon bullet-icon">
                    <use xlinkHref="#circle-icon" />
                  </svg>
                  <span className="detail-label">Formats</span>
                  <span className="bold">Austin, TX - United States</span>
                </li>
                <li>
                  <svg className="crumina-icon bullet-icon">
                    <use xlinkHref="#circle-icon" />
                  </svg>
                  <span className="detail-label">Email</span>
                  <span className="bold">
                    <a href="mailto:dexstarkart@fakemail.com">
                      dexstarkart@fakemail.com
                    </a>
                  </span>
                </li>
                <li>
                  <svg className="crumina-icon bullet-icon">
                    <use xlinkHref="#circle-icon" />
                  </svg>
                  <span className="detail-label">Speciality</span>
                  <span className="bold">Motion Graphics</span>
                </li>
              </ul>
            </div>
            <div className="author-social-networks">
              <div className="small-title">Social Media</div>
              <ul className="social-styled-list">
                <li>
                  <a href="#">
                    <span className="marker">
                      <svg className="crumina-icon">
                        <use xlinkHref="#link-icon" />
                      </svg>
                    </span>
                    www.dexstarkart.com
                    <span className="verified">
                      <svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="marker">
                      <svg className="crumina-icon">
                        <use xlinkHref="#facebook-icon" />
                      </svg>
                    </span>
                    @dexstarkart
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="marker">
                      <svg className="crumina-icon">
                        <use xlinkHref="#twitter-icon" />
                      </svg>
                    </span>
                    @dexstark_art
                    <span className="verified">
                      <svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="marker">
                      <svg className="crumina-icon">
                        <use xlinkHref="#instagram-icon" />
                      </svg>
                    </span>
                    @dexstark
                    <span className="verified">
                      <svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="marker">
                      <svg className="crumina-icon">
                        <use xlinkHref="#twitch-icon" />
                      </svg>
                    </span>
                    @dexstarkstreams
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};
export default ProfileTab;
