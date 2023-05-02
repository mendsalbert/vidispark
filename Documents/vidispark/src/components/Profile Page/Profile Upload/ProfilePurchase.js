import React from "react";
const ProfilePurchase = () => {
  return (
    <div className="purchase-type-box">
      <div className="user-db-title">Purchase Type</div>
      <div className="db-tabs-block">
        <ul className="db-tabs-list">
          <li className="active">
            <a href="#">
              <div className="purchase-type-symbol">
                <svg className="crumina-icon">
                  <use xlinkHref="#dollar-icon" />
                </svg>
              </div>
              <div className="purchase-type-info">
                <div className="purchase-type-title">Fixed Price</div>
                <div className="purchase-type-description">
                  Set a fixed price for people to buy your work instantly
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="purchase-type-symbol">
                <svg className="crumina-icon">
                  <use xlinkHref="#clock-icon" />
                </svg>
              </div>
              <div className="purchase-type-info">
                <div className="purchase-type-title">Timed Auction</div>
                <div className="purchase-type-description">
                  Set a fixed price for people to buy your work instantly
                </div>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="purchase-type-symbol">
                <svg className="crumina-icon">
                  <use xlinkHref="#annotation-icon" />
                </svg>
              </div>
              <div className="purchase-type-info">
                <div className="purchase-type-title">Open for Bids</div>
                <div className="purchase-type-description">
                  Set a fixed price for people to buy your work instantly
                </div>
              </div>
            </a>
          </li>
        </ul>
        <div id="tab-1" className="tab active">
          <div className="tab-content">
            <form className="cryptoki-form" id="personal-info-form">
              <div className="form-title">Main Details</div>
              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="name">Artwork name</label>
                  <input
                    type="text"
                    id="name"
                    defaultValue="Breathing Nature"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="price">Price</label>
                  <input type="number" id="price" defaultValue="3.21" />
                </div>
                <div className="form-field">
                  <label>Select currency</label>
                  <select className="select-nice" name="currency">
                    <option value="ETH" selected="">
                      ETH
                    </option>
                    <option value="USD">USD</option>
                    <option value="Euro">Euro</option>
                  </select>
                </div>
              </div>
              <div className="form-field comment-area">
                <label>Description</label>
                <textarea
                  id="message"
                  cols={30}
                  rows={10}
                  className=""
                  spellCheck="false"
                  defaultValue={""}
                />
              </div>
              <button className="btn btn-wide btn-dark">Create Item</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePurchase;
