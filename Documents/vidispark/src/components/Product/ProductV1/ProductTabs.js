import Link from "next/link";
import React, { useState } from "react";
const ProductTabs = () => {
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
              <div className="avatar box-42">
                {" "}
                <Link href="/08-profile-page">
                  <a>
                    <img src="img/avatar-3.png" alt="avatar" />
                  </a>
                </Link>{" "}
              </div>
              <div className="bid-info">
                <div className="bid-title">
                  Bid placed by{" "}
                  <span className="gradient-text">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>Crimson Ray</a>
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
        <div className="tab-content">
          {/* Detailed description*/}
          <div className="product-description">
            <ul className="details-list">
              <li>
                <svg className="crumina-icon bullet-icon">
                  <use xlinkHref="#circle-icon" />
                </svg>
                <span className="detail-label">Size</span>
                <span className="bold">5000 x 3500px (37MB)</span>
              </li>
              <li>
                <svg className="crumina-icon bullet-icon">
                  <use xlinkHref="#circle-icon" />
                </svg>
                <span className="detail-label">Formats</span>
                <span className="bold">MP4, JPEG and PNG</span>
              </li>
              <li>
                <svg className="crumina-icon bullet-icon">
                  <use xlinkHref="#circle-icon" />
                </svg>
                <span className="detail-label">Contract Address</span>
                <span className="bold">0xf7a6...f643</span>
              </li>
              <li>
                <svg className="crumina-icon bullet-icon">
                  <use xlinkHref="#circle-icon" />
                </svg>
                <span className="detail-label">Token ID</span>
                <span className="bold">3584</span>
              </li>
              <li>
                <svg className="crumina-icon bullet-icon">
                  <use xlinkHref="#circle-icon" />
                </svg>
                <span className="detail-label">Token Standard</span>
                <span className="bold">ERC-721</span>
              </li>
              <li>
                <svg className="crumina-icon bullet-icon">
                  <use xlinkHref="#circle-icon" />
                </svg>
                <span className="detail-label">Blockchain</span>
                <span className="bold">Ethereum</span>
              </li>
            </ul>
          </div>
          {/* /Detailed description*/}
        </div>
      </div>
      {/*/TAB DETAILS*/}
      {/*TAB ACTIVITY*/}
      <div id="tab3" className={`tab ${activeContent("tab3")}`}>
        <div className="tab-content">
          {/*Activity Item*/}
          <div className="activity-item sale">
            <div className="bid-placer">
              <div className="avatar box-42">
                {" "}
                <Link href="/08-profile-page">
                  <a>
                    <img src="img/avatar.png" alt="avatar" />
                    <span className="verified">
                      <svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg>
                    </span>
                  </a>
                </Link>{" "}
              </div>
              <div className="bid-info">
                <div className="bid-title">
                  <span className="gradient-text">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>Dexter Stark</a>
                    </Link>{" "}
                  </span>{" "}
                  sold
                </div>
                <div className="bid-date">53 minutes ago</div>
              </div>
            </div>
            <div className="bid-box">
              <div className="crypto-value">2.31 ETH</div>
              <div className="currency-value">125.230 U$D</div>
            </div>
          </div>
          {/*/ Activity Item*/}
          {/*Activity Item*/}
          <div className="activity-item purchase">
            <div className="bid-placer">
              <div className="avatar box-42">
                {" "}
                <Link href="/08-profile-page">
                  <a>
                    <img src="img/avatar-14.png" alt="avatar" />
                  </a>
                </Link>{" "}
              </div>
              <div className="bid-info">
                <div className="bid-title">
                  <span className="gradient-text">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>Derek Greyson</a>
                    </Link>{" "}
                  </span>{" "}
                  purchased
                </div>
                <div className="bid-date">56 minutes ago</div>
              </div>
            </div>
            <div className="bid-box">
              <div className="crypto-value">2.31 ETH</div>
              <div className="currency-value">125.230 U$D</div>
            </div>
          </div>
          {/*/ Activity Item*/}
          {/*Activity Item*/}
          <div className="activity-item listing">
            <div className="bid-placer">
              <div className="avatar box-42">
                {" "}
                <Link href="/08-profile-page">
                  <a>
                    <img src="img/avatar-2.png" alt="avatar" />
                    <span className="verified">
                      <svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg>
                    </span>
                  </a>
                </Link>{" "}
              </div>
              <div className="bid-info">
                <div className="bid-title">
                  <span className="gradient-text">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>Jackie Jones</a>
                    </Link>{" "}
                  </span>{" "}
                  listed
                </div>
                <div className="bid-date">58 minutes ago</div>
              </div>
            </div>
            <div className="bid-box">
              <div className="crypto-value">2.31 ETH</div>
              <div className="currency-value">125.230 U$D</div>
            </div>
          </div>
          {/* / Activity Item*/}
        </div>
      </div>
      {/*/TAB ACTIVITY*/}
    </div>
  );
};

export default ProductTabs;
