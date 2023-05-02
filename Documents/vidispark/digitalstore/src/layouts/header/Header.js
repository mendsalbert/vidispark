import { Fragment } from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <Fragment>
      {" "}
      <header className="site-header">
        {/* topbar section */}
        <div className="topbar border-bottom">
          <div className="topbar-wrapper topbar-47 container">
            {/*  social icons list */}
            <ul className="social-icons-list">
              <li className="social-icon">
                <a href="#">
                  <svg className="crumina-icon">
                    <use xlinkHref="#facebook-icon" />
                  </svg>
                </a>
              </li>
              <li className="social-icon">
                <a href="#">
                  <svg className="crumina-icon">
                    <use xlinkHref="#twitter-icon" />
                  </svg>
                </a>
              </li>
              <li className="social-icon">
                <a href="#">
                  <svg className="crumina-icon">
                    <use xlinkHref="#instagram-icon" />
                  </svg>
                </a>
              </li>
              <li className="social-icon">
                <a href="#">
                  <svg className="crumina-icon">
                    <use xlinkHref="#twitch-icon" />
                  </svg>
                </a>
              </li>
              <li className="social-icon">
                <a href="#">
                  <svg className="crumina-icon">
                    <use xlinkHref="#discord-icon" />
                  </svg>
                </a>
              </li>
            </ul>
            {/* currency and language switchers */}
            <div className="topbar-switchers">
              <div className="currency-switcher">
                <select className="select-nice">
                  <option value="eth" selected="">
                    ETHEREUM (ETH)
                  </option>
                  <option value="euro">Euro</option>
                  <option value="usd">USD</option>
                </select>
              </div>
              <div className="language-switcher">
                <select className="select-nice">
                  <option value="english" selected="">
                    English
                  </option>
                  <option value="french">French</option>
                  <option value="german">German</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* topbar section */}
      </header>
      <Nav />
    </Fragment>
  );
};
export default Header;
