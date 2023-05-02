import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import useClickOutside from "../../useClickOutside";
import {
  Blogs,
  Explore,
  Home,
  Pages1,
  Pages2,
  Pages3,
  Pages4,
  Sellers,
} from "./menu";

const MobileMenu = ({ setToggle, toggle }) => {
  useEffect(() => {
    let body = document.querySelector("body");
    if (toggle) {
      body.classList.add("body-overlay");
    } else {
      body.classList.remove("body-overlay");
    }
  }, [toggle]);

  let domNode = useClickOutside(() => {
    setToggle(false);
  });

  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) => (value === activeMenu ? "show" : "");

  return (
    <Fragment>
      <div className={`mobile-nav-panel ${toggle ? "open" : ""}`} ref={domNode}>
        <div className="mobile-nav-header">
          <div className="mobile-menu-logo logo">
            <Link href="/">
              <a>
                <img src="svg/logo-ds.svg" alt="logo" />
              </a>
            </Link>
          </div>
          <svg
            className="crumina-icon close-icon"
            onClick={() => setToggle(false)}
          >
            <use xlinkHref="#cross-icon" />
          </svg>
        </div>
        <div className="mobile-menu-wrapper">
          {/* mobile menu */}
          <ul className="mobile-menu">
            <Home />
            <li className="menu-item menu-item-has-children">
              <a
                className="menu-link"
                href="#"
                onClick={() => activeMenuSet("Explore")}
              >
                Explore
                <span className="indicator">
                  <svg className="crumina-icon">
                    <use xlinkHref="#arrow-down-icon" />
                  </svg>
                </span>
              </a>
              <ul className={`submenu ${activeLi("Explore")}`}>
                <Explore />
              </ul>
            </li>
            <Sellers />
            <li className="menu-item menu-item-has-megamenu menu-item-has-children">
              <a
                className="menu-link"
                href="#"
                onClick={() => activeMenuSet("pages")}
              >
                All pages
                <span className="indicator">
                  <svg className="crumina-icon">
                    <use xlinkHref="#arrow-down-icon" />
                  </svg>
                </span>
                <span className="highlighted-item gradient-background">
                  NEW
                </span>
              </a>
              <div className={`megamenu ${activeLi("pages")}`}>
                <div className="megamenu-wrapper">
                  <div className="megamenu-column">
                    <div className="megamenu-title">Main Pages</div>
                    <div>
                      <ul className="submenu-column">
                        <Pages1 />
                      </ul>
                      <ul className="submenu-column">
                        <Pages2 />
                      </ul>
                    </div>
                  </div>
                  <div className="megamenu-column">
                    <div className="megamenu-title">Dashboard</div>
                    <div>
                      <ul className="submenu-column">
                        <Pages3 />
                      </ul>
                      <ul className="submenu-column">
                        <Pages4 />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="menu-item menu-item-has-children">
              <a
                className="menu-link"
                href="#"
                onClick={() => activeMenuSet("Blog")}
              >
                Blog
                <span className="indicator">
                  <svg className="crumina-icon">
                    <use xlinkHref="#arrow-down-icon" />
                  </svg>
                </span>
              </a>
              <ul className={`submenu ${activeLi("Blog")}`}>
                <Blogs />
              </ul>
            </li>
          </ul>
          {/* mobile menu */}
        </div>
        <div className="mobile-nav-footer">
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
          {/* currency and language switchers */}
          {/* social icons list */}
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
          {/* social icons list */}
        </div>
      </div>
    </Fragment>
  );
};
export default MobileMenu;
