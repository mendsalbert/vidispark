import Link from "next/link";
import DashBoardSidebar from "../src/components/DashBoardSidebar";
import Layouts from "../src/layouts/Layouts";

const ProfileSalesStatement = () => {
  return (
    <Layouts>
      <div className="primary-content-area container content-padding grid-small-sidebar-left">
        <DashBoardSidebar />
        <div className="main-content-area sales-statement">
          <div className="page-title-section">
            <h2>
              <span className="gradient-text">Sales</span> Statement
            </h2>
          </div>
          <div className="dashboard-wrapper">
            <div className="user-stats-section">
              <div className="stat-item">
                <div className="stat-number">$253.36</div>
                <div className="stat-description">Monthly Earnings</div>
              </div>
              <div className="stat-item">
                <div className="stat-number green">+54.2%</div>
                <div className="stat-description">From Last Month</div>
              </div>
              <div className="stat-item">
                <div className="stat-number red">$17.60</div>
                <div className="stat-description">Montly Taxes and Fees</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">$1,978,356.04</div>
                <div className="stat-description">
                  Total Sales Amount (before fees and taxes)
                </div>
              </div>
            </div>
            <div className="statement-list">
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
                      <option value="sales-only" selected="">
                        Sales only
                      </option>
                      <option value="all-items">All Items</option>
                      <option value="purchases only">Purchases only</option>
                    </select>
                  </div>
                  <div className="filter-button">
                    <button className="btn btn-normal btn-dark">Filter</button>
                  </div>
                </form>
              </div>
              <div className="statement">
                <table className="content-table">
                  <thead>
                    <tr>
                      <th scope="col" className="heading-label">
                        Date
                      </th>
                      <th scope="col" className="heading-label">
                        Item details
                      </th>
                      <th scope="col" className="heading-label">
                        Type
                      </th>
                      <th scope="col" className="heading-label">
                        Price
                      </th>
                      <th scope="col" className="heading-label">
                        Fee
                      </th>
                      <th scope="col" className="heading-label">
                        Tax
                      </th>
                      <th scope="col" className="heading-label">
                        Earnings
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-label="Date">
                        <div className="date">Jul 17, 2021</div>
                      </td>
                      <td data-label="Item details">
                        <div className="item-title gradient-text">
                          <Link href="05-product">
                            <a>Cryptoki NFT and Digital Market PSD Template</a>
                          </Link>
                        </div>
                        <div className="license-details">
                          Regular License - Invoice CRKT12354
                        </div>
                      </td>
                      <td data-label="type" className="stat-value">
                        Sale
                      </td>
                      <td data-label="price" className="stat-value">
                        $12.00
                      </td>
                      <td data-label="fee" className="stat-value">
                        -$1.00
                      </td>
                      <td data-label="tax" className="stat-value">
                        -$1.00
                      </td>
                      <td data-label="earnings" className="green stat-value">
                        $10.00
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Date">
                        <div className="date">Jul 16, 2021</div>
                      </td>
                      <td data-label="Item details">
                        <div className="item-title gradient-text">
                          <Link href="05-product">
                            <a>Cryptoki NFT and Digital Market PSD Template</a>
                          </Link>
                        </div>
                        <div className="license-details">
                          Regular License - Invoice CRKT12354
                        </div>
                      </td>
                      <td data-label="type" className="stat-value">
                        Sale
                      </td>
                      <td data-label="price" className="stat-value">
                        $12.00
                      </td>
                      <td data-label="fee" className="stat-value">
                        -$1.00
                      </td>
                      <td data-label="tax" className="stat-value">
                        -$1.00
                      </td>
                      <td data-label="earnings" className="green stat-value">
                        $10.00
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Date">
                        <div className="date">Jul 16, 2021</div>
                      </td>
                      <td data-label="Item details">
                        <div className="item-title gradient-text">
                          <Link href="05-product">
                            <a>Add Video Reviews to your Theme!</a>
                          </Link>
                        </div>
                        <div className="license-details">
                          Regular License - Invoice CRKT12354
                        </div>
                      </td>
                      <td data-label="type" className="stat-value">
                        Purchase
                      </td>
                      <td data-label="price" className="stat-value">
                        $17.00
                      </td>
                      <td data-label="fee" className="stat-value">
                        $0.00
                      </td>
                      <td data-label="tax" className="stat-value">
                        $0.00
                      </td>
                      <td data-label="earnings" className="red stat-value">
                        $17.00
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Date">
                        <div className="date">Jul 14, 2021</div>
                      </td>
                      <td data-label="Item details">
                        <div className="item-title gradient-text">
                          <Link href="05-product">
                            <a>Twitter Gaming Headers Pack 04</a>
                          </Link>
                        </div>
                        <div className="license-details">
                          Regular License - Invoice CRKT12354
                        </div>
                      </td>
                      <td data-label="type" className="stat-value">
                        Sale
                      </td>
                      <td data-label="price" className="stat-value">
                        $8.00
                      </td>
                      <td data-label="fee" className="stat-value">
                        -$0.80
                      </td>
                      <td data-label="tax" className="stat-value">
                        -$0.80
                      </td>
                      <td data-label="earnings" className="green stat-value">
                        $6.60
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Date">
                        <div className="date">Jul 14, 2021</div>
                      </td>
                      <td data-label="Item details">
                        <div className="item-title gradient-text">
                          <Link href="05-product">
                            <a>Twitter Gaming Headers Pack 12</a>
                          </Link>
                        </div>
                        <div className="license-details">
                          Regular License - Invoice CRKT12354
                        </div>
                      </td>
                      <td data-label="type" className="stat-value">
                        Sale
                      </td>
                      <td data-label="price" className="stat-value">
                        $8.00
                      </td>
                      <td data-label="fee" className="stat-value">
                        -$0.80
                      </td>
                      <td data-label="tax" className="stat-value">
                        -$0.80
                      </td>
                      <td data-label="earnings" className="green stat-value">
                        $6.60
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Date">
                        <div className="date">Jul 13, 2021</div>
                      </td>
                      <td data-label="Item details">
                        <div className="item-title gradient-text">
                          <Link href="05-product">
                            <a>Cryptoki NFT and Digital Market PSD Template</a>
                          </Link>
                        </div>
                        <div className="license-details">
                          Regular License - Invoice CRKT12354
                        </div>
                      </td>
                      <td data-label="type" className="stat-value">
                        Sale
                      </td>
                      <td data-label="price" className="stat-value">
                        $12.00
                      </td>
                      <td data-label="fee" className="stat-value">
                        -$1.00
                      </td>
                      <td data-label="tax" className="stat-value">
                        -$1.00
                      </td>
                      <td data-label="earnings" className="green stat-value">
                        $10.00
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Date">
                        <div className="date">Jul 9, 2021</div>
                      </td>
                      <td data-label="Item details">
                        <div className="item-title gradient-text">
                          <Link href="05-product">
                            <a>Twitter Gaming Headers Pack 08</a>
                          </Link>
                        </div>
                        <div className="license-details">
                          Regular License - Invoice CRKT12354
                        </div>
                      </td>
                      <td data-label="type" className="stat-value">
                        Sale
                      </td>
                      <td data-label="price" className="stat-value">
                        $8.00
                      </td>
                      <td data-label="fee" className="stat-value">
                        -$0.80
                      </td>
                      <td data-label="tax" className="stat-value">
                        -$0.80
                      </td>
                      <td data-label="earnings" className="green stat-value">
                        $6.60
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Date">
                        <div className="date">July 8, 2021</div>
                      </td>
                      <td data-label="Item details">
                        <div className="item-title gradient-text">
                          <Link href="05-product">
                            <a>Cryptoki NFT and Digital Market PSD Template</a>
                          </Link>
                        </div>
                        <div className="license-details">
                          Regular License - Invoice CRKT12354
                        </div>
                      </td>
                      <td data-label="type" className="stat-value">
                        Sale
                      </td>
                      <td data-label="price" className="stat-value">
                        $12.00
                      </td>
                      <td data-label="fee" className="stat-value">
                        -$1.00
                      </td>
                      <td data-label="tax" className="stat-value">
                        -$1.00
                      </td>
                      <td data-label="earnings" className="green stat-value">
                        $10.00
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="pagination-section flex-right">
                <ul className="pagination-list">
                  <li className="page-item page-nav-prev">
                    <a href="#">Prev</a>
                  </li>
                  <li className="page-item">
                    <a href="#">01</a>
                  </li>
                  <li className="page-item">
                    <a href="#">02</a>
                  </li>
                  <li className="page-item">
                    <a href="#">03</a>
                  </li>
                  <li className="page-item page-more-link">
                    <a href="#">...</a>
                  </li>
                  <li className="page-item">
                    <a href="#">16</a>
                  </li>
                  <li className="page-item page-nav-next">
                    <a href="#">Next</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};
export default ProfileSalesStatement;
