import Link from "next/link";
import DashBoardSidebar from "../src/components/DashBoardSidebar";
import Layouts from "../src/layouts/Layouts";

const ProfilePurchases = () => {
  return (
    <Layouts>
      <div className="primary-content-area container content-padding grid-small-sidebar-left">
        <DashBoardSidebar />
        <div className="main-content-area">
          <div className="page-title-section">
            <h2>
              Your <span className="gradient-text">Purchases</span>
            </h2>
          </div>
          <div className="purchases-list">
            <div className="filterable-bar">
              <form
                id="creators-filter-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="filter-options">
                  <select className="select-nice">
                    <option value="july-2021">July 2021</option>
                    <option value="august-2021" selected="">
                      August 2021
                    </option>
                    <option value="september-2021">September 2021</option>
                  </select>
                  <select className="select-nice">
                    <option value="all-items" selected="">
                      All Items
                    </option>
                    <option value="regular-license">Regular license</option>
                    <option value="commercial-license">
                      Commercial license
                    </option>
                    <option value="extended-license">Extended license</option>
                  </select>
                  <select className="select-nice">
                    <option value="newest-to-oldest" selected="">
                      Newest to Oldest
                    </option>
                    <option value="oldest-to-newest">Oldest to Newest</option>
                  </select>
                </div>
                <div className="filter-button">
                  <button className="btn btn-normal btn-dark">Filter</button>
                </div>
              </form>
            </div>
            <table className="content-table">
              <thead>
                <tr>
                  <th scope="col" className="heading-label">
                    Item details
                  </th>
                  <th scope="col" className="heading-label">
                    Date
                  </th>
                  <th scope="col" className="heading-label">
                    License
                  </th>
                  <th scope="col" className="heading-label">
                    Price
                  </th>
                  <th scope="col" className="heading-label">
                    Rating
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
                  <td data-label="Date">Jun 5, 2021</td>
                  <td data-label="License">Regular</td>
                  <td data-label="Price" className="price">
                    $12.00
                  </td>
                  <td data-label="Rating">
                    <button data-modal="review-modal1" className="item-rating">
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
                    </button>
                    <div className="cryptoki-modal" id="review-modal1">
                      <div className="modal-bg modal-exit" />
                      <div className="modal-container">
                        <form
                          className="cryptoki-form review-form"
                          onSubmit={(e) => e.preventDefault()}
                        >
                          <div className="review-form-title">
                            Review: Cryptoki NFT and DIgital Market PSD Template
                          </div>
                          <div className="rating-box">
                            <div className="title">
                              Your rating <span className="colored">*</span>
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
                          <div className="form-field">
                            <label>
                              Review Title <span className="colored">*</span>
                            </label>
                            <input type="text" />
                          </div>
                          <div className="form-field">
                            <label>Your Review</label>
                            <textarea cols={30} rows={7} defaultValue={""} />
                          </div>
                          <input
                            className="btn btn-fullwidth gradient-background"
                            type="submit"
                            defaultValue="Post review"
                          />
                        </form>
                        <button className="modal-close modal-exit">
                          <svg className="crumina-icon">
                            <use xlinkHref="#cross-icon" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <button className="download">
                      <svg className="crumina-icon">
                        <use xlinkHref="#download-icon" />
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
                  <td data-label="Date">Apr 19, 2021</td>
                  <td data-label="License">Commercial</td>
                  <td data-label="Price" className="price">
                    $40.00
                  </td>
                  <td data-label="Rating">
                    <button data-modal="review-modal2" className="item-rating">
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
                    </button>
                    <div className="cryptoki-modal" id="review-modal2">
                      <div className="modal-bg modal-exit" />
                      <div className="modal-container">
                        <form
                          className="cryptoki-form review-form"
                          onSubmit={(e) => e.preventDefault()}
                        >
                          <div className="review-form-title">
                            Review: Cryptoki NFT and DIgital Market PSD Template
                          </div>
                          <div className="rating-box">
                            <div className="title">
                              Your rating <span className="colored">*</span>
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
                          <div className="form-field">
                            <label>
                              Review Title <span className="colored">*</span>
                            </label>
                            <input type="text" />
                          </div>
                          <div className="form-field">
                            <label>Your Review</label>
                            <textarea cols={30} rows={7} defaultValue={""} />
                          </div>
                          <input
                            className="btn btn-fullwidth gradient-background"
                            type="submit"
                            defaultValue="Post review"
                          />
                        </form>
                        <button className="modal-close modal-exit">
                          <svg className="crumina-icon">
                            <use xlinkHref="#cross-icon" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <button className="download">
                      <svg className="crumina-icon">
                        <use xlinkHref="#download-icon" />
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
                  <td data-label="Date">Dec 27, 2020</td>
                  <td data-label="License">Regular</td>
                  <td data-label="Price" className="price">
                    $68.00
                  </td>
                  <td data-label="Rating">
                    <button data-modal="review-modal3" className="item-rating">
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
                    </button>
                    <div className="cryptoki-modal" id="review-modal3">
                      <div className="modal-bg modal-exit" />
                      <div className="modal-container">
                        <form
                          className="cryptoki-form review-form"
                          onSubmit={(e) => e.preventDefault()}
                        >
                          <div className="review-form-title">
                            Review: Cryptoki NFT and DIgital Market PSD Template
                          </div>
                          <div className="rating-box">
                            <div className="title">
                              Your rating <span className="colored">*</span>
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
                          <div className="form-field">
                            <label>
                              Review Title <span className="colored">*</span>
                            </label>
                            <input type="text" />
                          </div>
                          <div className="form-field">
                            <label>Your Review</label>
                            <textarea cols={30} rows={7} defaultValue={""} />
                          </div>
                          <input
                            className="btn btn-fullwidth gradient-background"
                            type="submit"
                            defaultValue="Post review"
                          />
                        </form>
                        <button className="modal-close modal-exit">
                          <svg className="crumina-icon">
                            <use xlinkHref="#cross-icon" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <button className="download">
                      <svg className="crumina-icon">
                        <use xlinkHref="#download-icon" />
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
                              src="img/content/previews/project-thumb-39.png"
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
                          <div className="item-category video-tutorials">
                            Video Tutorials
                          </div>
                          <div className="product-seller">
                            @beardedwndr
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
                  <td data-label="Date">Jan 5, 2020</td>
                  <td data-label="License">Regular</td>
                  <td data-label="Price" className="price">
                    $12.00
                  </td>
                  <td data-label="Rating">
                    <button data-modal="review-modal4" className="item-rating">
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
                    </button>
                    <div className="cryptoki-modal" id="review-modal4">
                      <div className="modal-bg modal-exit" />
                      <div className="modal-container">
                        <form
                          className="cryptoki-form review-form"
                          onSubmit={(e) => e.preventDefault()}
                        >
                          <div className="review-form-title">
                            Review: Cryptoki NFT and DIgital Market PSD Template
                          </div>
                          <div className="rating-box">
                            <div className="title">
                              Your rating <span className="colored">*</span>
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
                          <div className="form-field">
                            <label>
                              Review Title <span className="colored">*</span>
                            </label>
                            <input type="text" />
                          </div>
                          <div className="form-field">
                            <label>Your Review</label>
                            <textarea cols={30} rows={7} defaultValue={""} />
                          </div>
                          <input
                            className="btn btn-fullwidth gradient-background"
                            type="submit"
                            defaultValue="Post review"
                          />
                        </form>
                        <button className="modal-close modal-exit">
                          <svg className="crumina-icon">
                            <use xlinkHref="#cross-icon" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <button className="download">
                      <svg className="crumina-icon">
                        <use xlinkHref="#download-icon" />
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
        </div>
      </div>
    </Layouts>
  );
};
export default ProfilePurchases;
