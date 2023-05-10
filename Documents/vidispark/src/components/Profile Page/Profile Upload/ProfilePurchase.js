import React from "react";
const ProfilePurchase = () => {
  return (
    <div className="purchase-type-box">
      <div className="db-tabs-block">
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
                  <label htmlFor="price">Thumnail URL</label>
                  <input type="number" id="price" defaultValue="3.21" />
                </div>
                <div className="form-field">
                  <label>Category</label>
                  <select className="select-nice" name="currency">
                    <option value="ETH" selected="">
                      Gaming
                    </option>
                    <option value="USD">Music</option>
                    <option value="Euro">Education</option>
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
