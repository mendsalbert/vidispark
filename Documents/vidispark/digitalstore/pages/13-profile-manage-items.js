import Link from "next/link";
import DashBoardSidebar from "../src/components/DashBoardSidebar";
import Paggination2 from "../src/components/Paggination2";
import Layouts from "../src/layouts/Layouts";

const ProfileManageItems = () => {
  return (
    <Layouts>
      <div className="primary-content-area container content-padding grid-small-sidebar-left">
        <DashBoardSidebar />
        <div className="main-content-area">
          <div className="page-title-section">
            <h2>
              <span className="gradient-text">Manage</span> Items
            </h2>
          </div>
          {/*   items grid */}
          <div className="featured-box manage-items">
            <div className="featured-box-wrapper grid-4-columns">
              <div className="create-item">
                <div className="create-item-wrapper">
                  <div className="create-item-content">
                    <div className="create-item-image">
                      <svg className="crumina-icon">
                        <use xlinkHref="#upload-icon" />
                      </svg>
                    </div>
                    <div className="create-item-info">
                      <div className="small-title">Create a New Item!</div>
                      <div className="description">Click here to start</div>
                    </div>
                  </div>
                  <div className="create-item-post-content"></div>
                </div>
              </div>
              <div className="featured-item v5">
                <div className="featured-item-wrapper">
                  <div className="featured-item-content">
                    <button className="btn btn-small-wide btn-dark">
                      Edit
                    </button>
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
                          <a href="/cryptoki-html/">
                            <img src="img/avatar.png" alt="" />
                          </a>
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
                    <button className="btn btn-small-wide btn-dark">
                      Edit
                    </button>
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
                          <a href="/cryptoki-html/">
                            <img src="img/avatar.png" alt="" />
                          </a>
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
              <div className="featured-item v5">
                <div className="featured-item-wrapper">
                  <div className="featured-item-content">
                    <button className="btn btn-small-wide btn-dark">
                      Edit
                    </button>
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
                          <a href="/cryptoki-html/">
                            <img src="img/avatar.png" alt="" />
                          </a>
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
                    <button className="btn btn-small-wide btn-dark">
                      Edit
                    </button>
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
                          <a href="/cryptoki-html/">
                            <img src="img/avatar.png" alt="" />
                          </a>
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
                    <button className="btn btn-small-wide btn-dark">
                      Edit
                    </button>
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
                          <a href="/cryptoki-html/">
                            <img src="img/avatar.png" alt="" />
                          </a>
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
                    <button className="btn btn-small-wide btn-dark">
                      Edit
                    </button>
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
                          <a href="/cryptoki-html/">
                            <img src="img/avatar.png" alt="" />
                          </a>
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
                    <button className="btn btn-small-wide btn-dark">
                      Edit
                    </button>
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
                          <a href="/cryptoki-html/">
                            <img src="img/avatar.png" alt="" />
                          </a>
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
                    <button className="btn btn-small-wide btn-dark">
                      Edit
                    </button>
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
                          <a href="/cryptoki-html/">
                            <img src="img/avatar.png" alt="" />
                          </a>
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
            </div>
          </div>
          <Paggination2
            direction={"right"}
            queryItem={".featured-item"}
            sortItem={5}
          />
        </div>
      </div>
    </Layouts>
  );
};
export default ProfileManageItems;
