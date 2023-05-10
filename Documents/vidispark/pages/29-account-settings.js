import Link from "next/link";
import React from "react";
import Layouts from "../src/layouts/Layouts";

const AccountSettings = () => {
  return (
    <Layouts>
      <div className="primary-content-area container content-padding grid-left-sidebar">
        <aside>
          <div className="user-db-menu">
            <div className="user-db-header">
              <div className="user-db-cover-image profile-cover-image" />
              <div className="user-header-user-profile">
                <div className="avatar box-64">
                  <Link href="/08-profile-page">
                    <a className="tw-flex tw-flex-row tw-items-center">
                      <img src="img/avatar.png" alt="avatar" />
                      <span className="verified">
                        <svg className="crumina-icon">
                          <use xlinkHref="#check-icon" />
                        </svg>
                      </span>
                    </a>
                  </Link>
                </div>
                <div className="title">
                  <Link href="/08-profile-page">
                    <a>Dexter Stark</a>
                  </Link>
                </div>
                <div className="item-meta">
                  <span className="gradient-text">@DexterStark</span>
                </div>
              </div>
            </div>
            <div className="user-db-body">
              <ul className="profile-menu">
                <li className="profile">
                  <Link href="/23-profile-info">
                    <a className="tw-flex tw-flex-row tw-items-center">
                      <svg className="crumina-icon">
                        <use xlinkHref="#user-icon" />
                      </svg>
                      Profile Info
                    </a>
                  </Link>
                </li>
                <li className="account">
                  <Link href="/29-account-settings">
                    <a className="tw-flex tw-flex-row tw-items-center">
                      <svg className="crumina-icon">
                        <use xlinkHref="#settings-icon" />
                      </svg>
                      Account Settings
                    </a>
                  </Link>
                </li>
                <li className="notification">
                  <Link href="/30-notification-settings">
                    <a className="tw-flex tw-flex-row tw-items-center">
                      <svg className="crumina-icon">
                        <use xlinkHref="#slide-filter-icon" />
                      </svg>
                      Notification Settings
                    </a>
                  </Link>
                </li>
                <li className="artwork">
                  <Link href="/26-upload-artwork">
                    <a className="tw-flex tw-flex-row tw-items-center">
                      <svg className="crumina-icon">
                        <use xlinkHref="#picture-icon" />
                      </svg>
                      Create Artwork
                    </a>
                  </Link>
                </li>
                <li className="wallet">
                  <Link href="/18-connect-a-wallet">
                    <a className="tw-flex tw-flex-row tw-items-center">
                      <svg className="crumina-icon">
                        <use xlinkHref="#wallet-icon" />
                      </svg>
                      Wallet info
                    </a>
                  </Link>
                </li>
                <li className="verification">
                  <Link href="/31-get-verified">
                    <a className="tw-flex tw-flex-row tw-items-center">
                      <svg className="crumina-icon">
                        <use xlinkHref="#circle-checked-icon" />
                      </svg>
                      Get Verified
                    </a>
                  </Link>
                </li>
                <li className="logout">
                  <a className="tw-flex tw-flex-row tw-items-center">
                    <svg className="crumina-icon">
                      <use xlinkHref="#logout-icon" />
                    </svg>
                    Log Out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
        <div className="main-content-area">
          <div className="page-title">
            <h2>
              <span className="gradient-text">Account</span> Settings
            </h2>
          </div>
          <form className="cryptoki-form" id="account-settings-form">
            <div className="form-section">
              <div className="user-db-title">My Account</div>
              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="name">Default language</label>
                  <select className="select-nice" name="" id="">
                    <option value="select-language">Select language</option>
                    <option value="english(us)" selected="">
                      English (United States)
                    </option>
                    <option value="german">German</option>
                    <option value="spanish">Spanish</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="email">Default Currency</label>
                  <select className="select-nice" name="" id="">
                    <option value="select-currency">Select currency</option>
                    <option value="english(us)" selected="">
                      ETH Ethereum
                    </option>
                    <option value="euro">EURO</option>
                    <option value="usd">USD</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="username">Show my Email in Profile</label>
                  <div className="form-list-elem">
                    <input
                      type="radio"
                      name="email-show"
                      id="email-show-yes"
                      className="cryptoki-radio"
                    />
                    <label htmlFor="email-show-yes">Yes</label>
                    <input
                      type="radio"
                      name="email-show"
                      id="email-show-no"
                      className="cryptoki-radio"
                    />
                    <label htmlFor="email-show-no">No</label>
                  </div>
                  <label htmlFor="phone">Keep The Account Logged In</label>
                  <div className="form-list-elem">
                    <input
                      type="radio"
                      name="acc-logged-in"
                      id="acc-logged-in-yes"
                      className="cryptoki-radio"
                    />
                    <label htmlFor="acc-logged-in-yes">Yes</label>
                    <input
                      type="radio"
                      name="acc-logged-in"
                      id="acc-logged-in-no"
                      className="cryptoki-radio"
                    />
                    <label htmlFor="acc-logged-in-no">No</label>
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="phone">Show my Social Links in Profile</label>
                  <div className="form-list-elem">
                    <input
                      type="radio"
                      name="sl-show"
                      id="sl-show-yes"
                      className="cryptoki-radio"
                    />
                    <label htmlFor="sl-show-yes">Yes</label>
                    <input
                      type="radio"
                      name="sl-show"
                      id="sl-show-no"
                      className="cryptoki-radio"
                    />
                    <label htmlFor="sl-show-no">No</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-section">
              <div className="user-db-title">Social Accounts</div>
              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="name">Facebook</label>
                  <div className="social-network-input-cont">
                    <span className="input-icon" id="input-facebook-icon">
                      <svg className="crumina-icon">
                        <use xlinkHref="#facebook-icon" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      name="social-network-login"
                      id="facebook-login"
                      defaultValue="dexterstark"
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="name">Twitter</label>
                  <div className="social-network-input-cont">
                    <span className="input-icon">
                      <svg className="crumina-icon">
                        <use xlinkHref="#twitter-icon" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      name="social-network-login"
                      id="twitter-login"
                      defaultValue="@dexterstark"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="name">Instagram</label>
                  <div className="social-network-input-cont">
                    <span className="input-icon">
                      <svg className="crumina-icon">
                        <use xlinkHref="#instagram-icon" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      name="social-network-login"
                      id="instagram-login"
                      defaultValue="@dexterstark"
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="name">Twitch</label>
                  <div className="social-network-input-cont">
                    <span className="input-icon">
                      <svg className="crumina-icon">
                        <use xlinkHref="#twitch-icon" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      name="social-network-login"
                      id="twitch-login"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="name">Youtube</label>
                  <div className="social-network-input-cont">
                    <span className="input-icon">
                      <svg className="crumina-icon">
                        <use xlinkHref="#youtube-icon" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      name="social-network-login"
                      id="youtube-login"
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="name">Discord</label>
                  <div className="social-network-input-cont">
                    <span className="input-icon">
                      <svg className="crumina-icon">
                        <use xlinkHref="#discord-icon" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      name="social-network-login"
                      id="discord-login"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button className="btn btn-wide btn-dark" type="submit">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </Layouts>
  );
};
export default AccountSettings;
