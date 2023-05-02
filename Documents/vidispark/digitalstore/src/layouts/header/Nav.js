import React, { Fragment, useState } from "react";
import CartButton from "./CartButton";
import {
  Blogs,
  Explore,
  Home,
  Logo,
  Pages1,
  Pages2,
  Pages3,
  Pages4,
  Pages5,
  Sellers,
} from "./menu";
import MobileMenu from "./MobileMenu";
import MobileSearchTrigger from "./MobileSearchTrigger";
import NotificationsButton from "./NotificationsButton";
import ProfileDropdown from "./ProfileDropdown";
const Nav = () => {
  const [searchToggle, setSearchToggle] = useState(false);
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <MobileMenu toggle={toggle} setToggle={setToggle} />
      <nav className="border-bottom nav-ds sticky-header">
        <div className="navigation-wrapper container flex-space-between align-items-center">
          <div className="nav-left-hand-part">
            {/* mobile panel burger icon */}
            <div className="burger-icon" onClick={() => setToggle(true)}>
              <svg className="crumina-icon">
                <use xlinkHref="#menu-icon" />
              </svg>
            </div>
            {/* mobile panel burger icon */}
            {/* header logo */}
            <div className="logo">
              <Logo />
            </div>
            {/* header logo */}
            {/*  navigation menu */}
            <ul className="navigation-menu">
              <Home />
              <li className="menu-item menu-item-has-children">
                <a className="menu-link" href="#">
                  Explore{" "}
                  <span className="indicator">
                    <svg className="crumina-icon">
                      <use xlinkHref="#arrow-down-icon" />
                    </svg>
                  </span>
                </a>
                <ul className="submenu">
                  <Explore />
                </ul>
              </li>
              <Sellers />
              <li className="menu-item menu-item-has-megamenu menu-item-has-children">
                <a className="menu-link" href="#">
                  All pages
                  <span className="indicator">
                    <svg className="crumina-icon">
                      <use xlinkHref="#arrow-down-icon" />
                    </svg>
                  </span>
                </a>
                <span className="highlighted-item gradient-background">
                  NEW
                </span>
                <div className="megamenu">
                  <div className="megamenu-wrapper">
                    <div className="megamenu-column">
                      <div className="megamenu-title">Main Pages</div>
                      <div className="flex-space-between">
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
                      <div className="flex-space-between">
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
                <a className="menu-link" href="#">
                  Blog{" "}
                  <span className="indicator">
                    <svg className="crumina-icon">
                      <use xlinkHref="#arrow-down-icon" />
                    </svg>
                  </span>
                </a>
                <ul className="submenu">
                  <Blogs />
                </ul>
              </li>
              <li className="menu-item hidden-menu">
                <a className="menu-link" href="#">
                  <svg className="crumina-icon">
                    <use xlinkHref="#dots-icon" />
                  </svg>
                </a>
                <ul className="hidden-menu-dropdown submenu">
                  <Pages5 />
                </ul>
              </li>
            </ul>
            {/*  navigation menu */}
          </div>
          <div className="nav-right-hand-part">
            {/* user activity buttons */}
            <div className="user-activity-buttons">
              {/* user mobile search button */}
              <button
                id="mobile-search"
                onClick={() => setSearchToggle(!searchToggle)}
                className={searchToggle ? "clicked" : "s____"}
              >
                <svg className="crumina-icon open-button">
                  <use
                    id="search"
                    xlinkHref={searchToggle ? "#cross-icon" : "#search-icon"}
                  />
                </svg>
              </button>
              {/* user mobile search button */}
              {/* cart button */}
              <CartButton />
              {/* cart button */}
              {/* favourites buttons */}
              <div className="favourites-button-cont">
                <button
                  className="favourites-button cryptoki-notif-bttn"
                  data-target=""
                >
                  <span className="counter">7</span>
                  <svg className="crumina-icon">
                    <use xlinkHref="#heart-icon" />
                  </svg>
                </button>
              </div>
              {/* favourites buttons */}
              {/*  notifications dropdown */}
              <NotificationsButton />
              {/*  notifications dropdown */}
            </div>
            {/* user activity buttons */}
            {/* header user profile */}
            <ProfileDropdown />
            {/* header user profile */}
          </div>
        </div>
        {/* header search block */}
        <MobileSearchTrigger
          active={searchToggle}
          close={() => setSearchToggle(false)}
        />
        {/* header search block */}
      </nav>
    </Fragment>
  );
};
export default Nav;
