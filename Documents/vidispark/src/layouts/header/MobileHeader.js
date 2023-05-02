import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import useClickOutside from "../../useClickOutside";

const MobileHeader = () => {
  const [toggle, setToggle] = useState(false);
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
          {/*MOBILE LOGO*/}
          <div className="mobile-menu-logo logo">
            {" "}
            <Link href="/">
              <img src="svg/cryptoki-logo.svg" alt="" />
            </Link>{" "}
          </div>
          {/*/MOBILE LOGO*/}
          {/*close button*/}
          <div className="close-icon" onClick={() => setToggle(false)}>
            <svg className="crumina-icon">
              <use xlinkHref="#cross-icon" />
            </svg>
          </div>
          {/*/close button*/}
        </div>
        {/*MOBILE MENU*/}
        <div className="mobile-menu-wrapper">
          <ul className="mobile-menu">
            <li className="menu-item">
              {" "}
              <Link href="/">
                <a className="menu-link">Home</a>
              </Link>{" "}
            </li>
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
                <li className="menu-item">
                  {" "}
                  <Link href="/02-explore">
                    <a className="menu-link">Explore</a>
                  </Link>{" "}
                </li>
                <li className="menu-item">
                  {" "}
                  <Link href="03-explore-v2">
                    <a className="menu-link">Explore v2</a>
                  </Link>{" "}
                </li>
                <li className="menu-item">
                  {" "}
                  <Link href="04-item-versions">
                    <a className="menu-link">Item versions</a>
                  </Link>{" "}
                </li>
              </ul>
            </li>
            <li className="menu-item">
              {" "}
              <Link href="10-creators">
                <a className="menu-link">Creators</a>
              </Link>{" "}
            </li>
            <li className="menu-item">
              {" "}
              <Link href="11-collectors">
                <a className="menu-link">Collectors</a>
              </Link>{" "}
            </li>
            <li className="menu-item">
              {" "}
              <Link href="16-spotlight">
                <a className="menu-link">Spotlight</a>
              </Link>{" "}
            </li>
            <li className="menu-item menu-item-has-children">
              <a
                className="menu-link"
                href="#"
                onClick={() => activeMenuSet("Product")}
              >
                Product
                <span className="indicator">
                  <svg className="crumina-icon">
                    <use xlinkHref="#arrow-down-icon" />
                  </svg>
                </span>
              </a>
              <ul className={`submenu ${activeLi("Product")}`}>
                <li className="menu-item">
                  {" "}
                  <Link href="05-product-page">
                    <a className="menu-link">Product v1</a>
                  </Link>{" "}
                </li>
                <li className="menu-item">
                  {" "}
                  <Link href="06-product-page- v2">
                    <a className="menu-link">Product v2</a>
                  </Link>{" "}
                </li>
                <li className="menu-item">
                  {" "}
                  <Link href="07-product-page-v3">
                    <a className="menu-link">Product v3</a>
                  </Link>{" "}
                </li>
              </ul>
            </li>
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
                        <li className="menu-item">
                          {" "}
                          <Link href="/">
                            <a className="menu-link">Home</a>
                          </Link>{" "}
                        </li>
                        <li className="menu-item">
                          {" "}
                          <Link href="02-explore">
                            <a className="menu-link">Explore</a>
                          </Link>{" "}
                        </li>
                        <li className="menu-item">
                          {" "}
                          <Link href="03-explore-v2">
                            <a className="menu-link">Explore v2</a>
                          </Link>{" "}
                        </li>
                        <li className="menu-item">
                          {" "}
                          <Link href="04-item-versions">
                            <a className="menu-link">Item versions</a>
                          </Link>{" "}
                        </li>
                        <li className="menu-item">
                          {" "}
                          <Link href="16-spotlight">
                            <a className="menu-link">Spotlight</a>
                          </Link>{" "}
                        </li>
                        <li className="menu-item">
                          {" "}
                          <Link href="05-product-page">
                            <a className="menu-link">Product page</a>
                          </Link>{" "}
                        </li>
                        <li className="menu-item">
                          {" "}
                          <Link href="06-product-page-v2">
                            <a className="menu-link">Product page v2</a>
                          </Link>{" "}
                        </li>
                      </ul>
                      <ul className="submenu-column">
                        <li className="menu-item">
                          {" "}
                          <Link href="07-product-page-v3">
                            <a className="menu-link">Product page v3</a>
                          </Link>{" "}
                        </li>
                        <li className="menu-item">
                          {" "}
                          <Link href="12-blog-grid">
                            <a className="menu-link">Blog grid</a>
                          </Link>{" "}
                        </li>
                        <li className="menu-item">
                          {" "}
                          <Link href="13-blog-classic">
                            <a className="menu-link">Blog classic</a>
                          </Link>{" "}
                        </li>
                        <li className="menu-item">
                          {" "}
                          <Link href="14-blog-post-centered">
                            <a className="menu-link">Blog postcentered</a>
                          </Link>{" "}
                        </li>
                        <li className="menu-item">
                          {" "}
                          <Link href="15-blog-post-sidebar">
                            <a className="menu-link">Blog post sidebar</a>
                          </Link>{" "}
                        </li>
                        <li className="menu-item">
                          {" "}
                          <Link href="19-faq">
                            <a className="menu-link">FAQ</a>
                          </Link>{" "}
                        </li>
                        <li className="menu-item">
                          {" "}
                          <Link href="20-contact">
                            <a className="menu-link">Contact</a>
                          </Link>{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="megamenu-column">
                    <div className="megamenu-title">User pages</div>
                    <div>
                      <ul className="submenu-column">
                        <li className="menu-item">
                          {" "}
                          <Link href="08-profile-page">
                            <a className="menu-link">Profile page</a>
                          </Link>{" "}
                        </li>
                        <li className="menu-item">
                          <a href="09-profile-page-about" className="menu-link">
                            Profile page about
                          </a>
                        </li>
                        <li className="menu-item">
                          {" "}
                          <Link href="23-profile-info">
                            <a className="menu-link">Profile info</a>
                          </Link>{" "}
                        </li>
                        <li className="menu-item">
                          {" "}
                          <Link href="26-upload-artwork">
                            <a className="menu-link">Upload artwork</a>
                          </Link>{" "}
                        </li>
                        <li className="menu-item">
                          {" "}
                          <Link href="25-notifications">
                            <a className="menu-link">Notifications</a>
                          </Link>{" "}
                        </li>
                        <li className="menu-item">
                          {" "}
                          <Link href="27-shopping-cart">
                            <a className="menu-link">Shopping cart</a>
                          </Link>{" "}
                        </li>
                        <li className="menu-item">
                          {" "}
                          <Link href="28-checkout">
                            <a className="menu-link">Checkout</a>
                          </Link>{" "}
                        </li>
                      </ul>
                      <ul className="submenu-column">
                        <li className="menu-item">
                          {" "}
                          <Link href="17-activity">
                            <a className="menu-link">Activity</a>
                          </Link>{" "}
                        </li>
                        <li className="menu-item">
                          {" "}
                          <Link href="10-creators">
                            <a className="menu-link">Creators</a>
                          </Link>{" "}
                        </li>
                        <li className="menu-item">
                          {" "}
                          <Link href="11-collectors">
                            <a className="menu-link">Collectors</a>
                          </Link>{" "}
                        </li>
                        <li className="menu-item">
                          <a href="24-become-a-creator" className="menu-link">
                            Become a creator
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="18-connect-a-wallet" className="menu-link">
                            Connect a wallet
                          </a>
                        </li>
                        <li className="menu-item">
                          {" "}
                          <Link href="21-login">
                            <a className="menu-link">Login</a>
                          </Link>{" "}
                        </li>
                        <li className="menu-item">
                          {" "}
                          <Link href="22-register">
                            <a className="menu-link">Register</a>
                          </Link>{" "}
                        </li>
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
                <li className="menu-item">
                  {" "}
                  <Link href="12-blog-grid">
                    <a className="menu-link">Blog grid</a>
                  </Link>{" "}
                </li>
                <li className="menu-item">
                  {" "}
                  <Link href="13-blog-classic">
                    <a className="menu-link">Blog classic</a>
                  </Link>{" "}
                </li>
                <li className="menu-item">
                  {" "}
                  <Link href="14-blog-post-centered">
                    <a className="menu-link">Blog post centered</a>
                  </Link>{" "}
                </li>
                <li className="menu-item">
                  {" "}
                  <Link href="15-blog-post-sidebar">
                    <a className="menu-link">Blog post sidebar</a>
                  </Link>{" "}
                </li>
              </ul>
            </li>
            <li className="menu-item">
              {" "}
              <Link href="/08-profile-page">
                <a className="menu-link">
                  My Collection
                  <span className="count">12</span>
                </a>
              </Link>{" "}
            </li>
          </ul>
        </div>
        {/*mobile menu bottom panel*/}
        <div className="mobile-nav-footer">
          <ul className="social-icons-list">
            <li className="social-icon">
              {" "}
              <a href="#">
                <svg className="crumina-icon">
                  <use xlinkHref="#facebook-icon" />
                </svg>
              </a>
            </li>
            <li className="social-icon">
              {" "}
              <a href="#">
                <svg className="crumina-icon">
                  <use xlinkHref="#twitter-icon" />
                </svg>
              </a>
            </li>
            <li className="social-icon">
              {" "}
              <a href="#">
                <svg className="crumina-icon">
                  <use xlinkHref="#instagram-icon" />
                </svg>
              </a>
            </li>
            <li className="social-icon">
              {" "}
              <a href="#">
                <svg className="crumina-icon">
                  <use xlinkHref="#twitch-icon" />
                </svg>
              </a>
            </li>
            <li className="social-icon">
              {" "}
              <a href="#">
                <svg className="crumina-icon">
                  <use xlinkHref="#discord-icon" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        {/*/mobbile menu bottom panel*/}
      </div>
      {/*/MOBILE NAVIGATION*/}
      {/*MOBILE NAVIGATION BUTTON*/}
      <div className="burger-icon" onClick={() => setToggle(true)}>
        <svg className="crumina-icon">
          <use xlinkHref="#menu-icon" />
        </svg>
      </div>
    </Fragment>
  );
};
export default MobileHeader;
