import Link from "next/link";
import React from "react";
import Layouts from "../src/layouts/Layouts";
import ProfileInfoSidebar from "../src/components/Profile Page/Profile Info/ProfileInfoSidebar";

const AccountSettings = () => {
  return (
    <Layouts>
      <div className="primary-content-area container content-padding grid-left-sidebar">
        <ProfileInfoSidebar />
        <div className="main-content-area">
          <form className="cryptoki-form" id="account-settings-form">
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
