import Link from "next/link";
import React, { useState } from "react";
const ProductTabs = ({ filteredVideos }) => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [description, setDescription] = useState("");

  const activeTabNav = (value) => (value === activeTab ? "active" : ""),
    activeContent = (value) => (value === activeTab ? "active" : "");
  return (
    <div className="tabs-block">
      {/*TAB TITLE*/}
      <ul className="tabs-list">
        <li
          className={activeTabNav("tab1")}
          onClick={() => setActiveTab("tab1")}
        >
          <a>Comments</a>
        </li>
        <li
          className={activeTabNav("tab2")}
          onClick={() => setActiveTab("tab2")}
        >
          <a>Other Videos from creators</a>
        </li>
      </ul>
      {/*/TAB TITLE*/}
      {/*TAB BIDS*/}
      <div id="tab1" className={`tab ${activeContent("tab1")}`}>
        <div className="tab-content">
          <div className="placed-bid">
            <div className="bid-placer">
              <input className="tw-bg-white dark:tw-bg-red-400" />
            </div>
            <div className="bid-box">
              <div className="crypto-value">2.31 ETH</div>
              <div className="currency-value">125.230 U$D</div>
            </div>
          </div>

          {/* comment */}
          <div className="placed-bid">
            <div className="bid-placer">
              <div className="avatar box-42">
                {" "}
                <Link href="/08-profile-page">
                  <a>
                    <img src="img/avatar-4.png" alt="avatar" />
                  </a>
                </Link>{" "}
              </div>
              <div className="bid-info">
                <div className="bid-title">
                  Bid placed by{" "}
                  <span className="gradient-text">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>Jenn Art</a>
                    </Link>{" "}
                  </span>
                </div>
                <div className="bid-date">03/25/2021 at 12:19pm</div>
              </div>
            </div>
            <div className="bid-box">
              <div className="crypto-value">2.31 ETH</div>
              <div className="currency-value">125.230 U$D</div>
            </div>
          </div>

          <div className="placed-bid">
            <div className="bid-placer">
              <div className="avatar box-42">
                {" "}
                <Link href="/08-profile-page">
                  <a>
                    <img src="img/avatar-5.png" alt="avatar" />
                  </a>
                </Link>{" "}
              </div>
              <div className="bid-info">
                <div className="bid-title">
                  Bid placed by{" "}
                  <span className="gradient-text">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>Derek Greyson</a>
                    </Link>{" "}
                  </span>
                </div>
                <div className="bid-date">03/25/2021 at 12:19pm</div>
              </div>
            </div>
            <div className="bid-box">
              <div className="crypto-value">2.31 ETH</div>
              <div className="currency-value">125.230 U$D</div>
            </div>
          </div>
          {/*/Bid Item*/}
        </div>
      </div>
      {/*/TAB BIDS*/}
      {/*TAB DETAILS*/}
      <div id="tab2" className={`tab ${activeContent("tab2")}`}>
        {/*  */}
      </div>
    </div>
  );
};

export default ProductTabs;
