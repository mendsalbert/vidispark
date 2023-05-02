import DashBoardSidebar from "../src/components/DashBoardSidebar";
import Layouts from "../src/layouts/Layouts";

const ProfilePaymentHistory = () => {
  return (
    <Layouts>
      <div className="primary-content-area container content-padding grid-small-sidebar-left">
        <DashBoardSidebar />
        <div className="main-content-area">
          <div className="page-title-section">
            <h2>
              <span className="gradient-text">Payouts</span>
            </h2>
          </div>
          <div className="upload-row">
            <div className="upload-column">
              <div className="payment-history">
                <h5>Payments History</h5>
                <table className="content-table">
                  <thead>
                    <tr>
                      <th scope="col" className="heading-label">
                        Date
                      </th>
                      <th scope="col" className="heading-label">
                        Method
                      </th>
                      <th scope="col" className="heading-label">
                        Amount
                      </th>
                      <th scope="col" className="heading-label">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-label="Date">
                        <div className="date">Jul 01, 2021</div>
                      </td>
                      <td data-label="Method">
                        <div className="item-title">
                          dexterstark@fakepay.com
                        </div>
                      </td>
                      <td data-label="Amount" className="stat-value">
                        $2.924.00
                      </td>
                      <td data-label="price" className="stat-value">
                        Pending
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Date">
                        <div className="date">Jun 01, 2021</div>
                      </td>
                      <td data-label="Method">
                        <div className="item-title">
                          dexterstark@fakepay.com
                        </div>
                      </td>
                      <td data-label="Amount" className="stat-value">
                        $1.536.00
                      </td>
                      <td data-label="price" className="stat-value green">
                        Paid
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Date">
                        <div className="date">May 01, 2021</div>
                      </td>
                      <td data-label="Method">
                        <div className="item-title">
                          dexterstark@fakepay.com
                        </div>
                      </td>
                      <td data-label="Amount" className="stat-value">
                        $987.00
                      </td>
                      <td data-label="price" className="stat-value green">
                        Paid
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Date">
                        <div className="date">Apr 01, 2021</div>
                      </td>
                      <td data-label="Method">
                        <div className="item-title">
                          dexterstark@fakepay.com
                        </div>
                      </td>
                      <td data-label="Amount" className="stat-value">
                        $1.025.00
                      </td>
                      <td data-label="price" className="stat-value green">
                        Paid
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Date">
                        <div className="date">Mar 01, 2021</div>
                      </td>
                      <td data-label="Method">
                        <div className="item-title">
                          dexterstark@fakepay.com
                        </div>
                      </td>
                      <td data-label="Amount" className="stat-value">
                        $423.00
                      </td>
                      <td data-label="price" className="stat-value green">
                        Paid
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Date">
                        <div className="date">Feb 01, 2021</div>
                      </td>
                      <td data-label="Method">
                        <div className="item-title">
                          dexterstark@fakepay.com
                        </div>
                      </td>
                      <td data-label="Amount" className="stat-value">
                        $987.00
                      </td>
                      <td data-label="price" className="stat-value green">
                        Paid
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Date">
                        <div className="date">Jan 01, 2021</div>
                      </td>
                      <td data-label="Method">
                        <div className="item-title">
                          dexterstark@fakepay.com
                        </div>
                      </td>
                      <td data-label="Amount" className="stat-value">
                        $635.00
                      </td>
                      <td data-label="price" className="stat-value green">
                        Paid
                      </td>
                    </tr>
                    <tr>
                      <td data-label="Date">
                        <div className="date">Dec 01, 2020</div>
                      </td>
                      <td data-label="Method">
                        <div className="item-title">
                          dexterstark@fakepay.com
                        </div>
                      </td>
                      <td data-label="Amount" className="stat-value">
                        $635.00
                      </td>
                      <td data-label="price" className="stat-value green">
                        $208.00
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="upload-column">
              <div className="payment-method-section">
                <h5>Payment Method</h5>
                <form
                  className="cryptoki-form"
                  onSubmit={(e) => e.preventDefault()}
                  id="payment-method-form"
                >
                  <div className="payment-method">
                    <input type="radio" name="payment-method" id="paypal" />
                    <label htmlFor="paypal">Paypal</label>
                    <div className="payment-description">
                      Set up your account to recieve the payouts directly every
                      month!
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
                  <button className="btn btn-wide btn-dark" type="submit">
                    Confirm Method
                  </button>
                </form>
                <div className="confirmed-section">
                  <div className="small-title">Confirmed Method</div>
                  <div className="confirmed-info">
                    <a
                      href="mailto:dexterstark@fakepay.com"
                      className="green bold"
                    >
                      dexterstark@fakepay.com
                    </a>
                    <div className="confirmed-comment">
                      <span className="bold">Paypal</span> - Confirmed on Nov
                      17, 2020
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};
export default ProfilePaymentHistory;
