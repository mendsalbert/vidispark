import Link from "next/link";
import DashBoardSidebar from "../src/components/DashBoardSidebar";
import Layouts from "../src/layouts/Layouts";

const ProfileDashboard = () => {
  return (
    <Layouts>
      <div className="primary-content-area container content-padding grid-small-sidebar-left">
        <DashBoardSidebar />
        <div className="main-content-area">
          <div className="page-title-section">
            <h2>
              Your <span className="gradient-text">Dashboard</span>
            </h2>
          </div>
          <div className="dashboard-wrapper">
            {/*   user stats */}
            <div className="user-stats-section">
              <div className="stat-item blue-gradient-diagonal">
                <div className="stat-icon">
                  <svg className="crumina-icon">
                    <use xlinkHref="#face-id-icon" />
                  </svg>
                </div>
                <div className="stat-info">
                  <div className="stat-number">436K</div>
                  <div className="stat-description">Monthly Item Views</div>
                </div>
              </div>
              <div className="stat-item fuchsia-gradient-diagonal">
                <div className="stat-icon">
                  <svg className="crumina-icon">
                    <use xlinkHref="#heart-icon" />
                  </svg>
                </div>
                <div className="stat-info">
                  <div className="stat-number">107</div>
                  <div className="stat-description">Monthly Item Likes</div>
                </div>
              </div>
              <div className="stat-item yellow-gradient-diagonal">
                <div className="stat-icon">
                  <svg className="crumina-icon">
                    <use xlinkHref="#dollar-icon" />
                  </svg>
                </div>
                <div className="stat-info">
                  <div className="stat-number">94</div>
                  <div className="stat-description">Monthly Item Sales</div>
                </div>
              </div>
            </div>
            {/*    earnings diagram */}
            <div className="earnings-report-section">
              <h5>Earnings Report</h5>
              <img
                src="img/content/profile-dashboard/earnings-picture.png"
                alt=""
              />
            </div>
            {/*     best selling items */}
            <div className="best-sellers-section">
              <h5>Top Selling Items</h5>
              <div className="best-sellers">
                <table className="content-table">
                  <thead>
                    <tr>
                      <th scope="col" className="heading-label">
                        Item details
                      </th>
                      <th scope="col" className="heading-label">
                        Sales
                      </th>
                      <th scope="col" className="heading-label">
                        Views
                      </th>
                      <th scope="col" className="heading-label">
                        Comments
                      </th>
                      <th scope="col" className="heading-label">
                        Rating
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-label="Item details">
                        <div className="product-info">
                          <div className="item-number">01</div>
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
                                <a>
                                  Cryptoki NFT and DIgital Market PSD Template
                                </a>
                              </Link>
                            </div>
                            <div className="product-meta">
                              <div className="item-category ui-templates">
                                UI TEMPLATES
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td data-label="Sales" className="stats-item colored">
                        158
                      </td>
                      <td data-label="Views" className="stats-item">
                        5.360
                      </td>
                      <td data-label="Comments" className="stats-item">
                        24
                      </td>
                      <td data-label="Rating" className="stats-item">
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
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Item details">
                        <div className="product-info">
                          <div className="item-number">02</div>
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
                            </div>
                          </div>
                        </div>
                      </td>
                      <td data-label="Sales" className="stats-item colored">
                        97
                      </td>
                      <td data-label="Views" className="stats-item">
                        6.012
                      </td>
                      <td data-label="Comments" className="stats-item">
                        18
                      </td>
                      <td data-label="Rating" className="stats-item">
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
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Item details">
                        <div className="product-info">
                          <div className="item-number">03</div>
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
                                <a>Twitter Gaming Headers Pack 03</a>
                              </Link>
                            </div>
                            <div className="product-meta">
                              <div className="item-category social-graphics">
                                Social graphics
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td data-label="Sales" className="stats-item colored">
                        84
                      </td>
                      <td data-label="Views" className="stats-item">
                        1.258
                      </td>
                      <td data-label="Comments" className="stats-item">
                        33
                      </td>
                      <td data-label="Rating" className="stats-item">
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
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};
export default ProfileDashboard;
