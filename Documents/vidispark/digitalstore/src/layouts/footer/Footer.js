import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <footer className="footer footer-margin">
      <div className="footer-wrapper container">
        {/* subscribe widget v2 */}
        <div className="subscribe-widget-v2">
          <div className="animated-img" />
          <div className="subscribe-text">
            <div className="h2">Subscribe to our Newsletter!</div>
            <div className="subtitle">
              DEALS, NEW ITEMS, FREEBIES AND MUCH MORE!
            </div>
          </div>
          <div className="subscribe-form-v2">
            <form
              className="cryptoki-subscribe-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="subscribe-input"
                type="email"
                name="email"
                placeholder="Subscribe to our newsletter"
              />
              <button className="subscribe-submit btn btn-dark" type="submit">
                <span className="button-text">Subscribe</span>
                <svg id="send" className="crumina-icon">
                  <use xlinkHref="#send-icon" />
                </svg>
              </button>
            </form>
          </div>
        </div>
        {/*  footer content */}
        <div className="footer-content">
          <div className="footer-row flex-space-between align-items-center">
            <div className="logo">
              <Link href="/">
                <a className="logo-link">
                  <div className="logo-img">
                    <img src="svg/logo-ds.svg" alt="logo" />
                  </div>
                  <div className="logo-text">Cryptoki</div>
                </a>
              </Link>
            </div>
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
          </div>
          <div className="footer-row flex-space-between flex-wrap">
            <div className="footer-column">
              <div className="footer-widget">
                <div className="widget-title">Cryptoki Market</div>
                <div className="widget-content flex-space-between">
                  <div className="is-two-col-element">
                    <ul className="footer-menu">
                      <li className="menu-item">
                        <Link href="/">
                          <a className="menu-link">Home</a>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/02-explore">
                          <a className="menu-link">Explore</a>
                        </Link>
                      </li>
                    </ul>
                    <ul className="footer-menu">
                      <li className="menu-item">
                        <Link href="/06-profile-page">
                          <a className="menu-link">Profile page</a>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/03-shop-category">
                          <a className="menu-link">Shop</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="is-two-col-element">
                    <ul className="footer-menu">
                      <li className="menu-item">
                        <Link href="/07-sellers">
                          <a className="menu-link">Sellers</a>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/05-product">
                          <a className="menu-link">Product Page</a>
                        </Link>
                      </li>
                    </ul>
                    <ul className="footer-menu">
                      <li className="menu-item">
                        <Link href="/23-login">
                          <a className="menu-link">Login &amp; Register</a>
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/20-become-a-creator">
                          <a className="menu-link">Become a Seller</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-column">
              <div className="footer-widget">
                <div className="widget-title">Explore</div>
                <div className="is-two-col-element">
                  <ul className="footer-menu">
                    <li className="menu-item">
                      <a className="menu-link" href="#">
                        UI Templates
                      </a>
                    </li>
                    <li className="menu-item">
                      <a className="menu-link" href="#">
                        Coded Templates
                      </a>
                    </li>
                  </ul>
                  <ul className="footer-menu">
                    <li className="menu-item">
                      <a className="menu-link" href="#">
                        Social Graphics
                      </a>
                    </li>
                    <li className="menu-item">
                      <a className="menu-link" href="#">
                        Video Tutorials
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-column">
              <div className="footer-widget">
                <div className="widget-title">Helpful Links</div>
                <div className="is-two-col-element">
                  <ul className="footer-menu">
                    <li className="menu-item">
                      <Link href="/17-blog-classic">
                        <a className="menu-link">Our Blog</a>
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link href="/21-contact">
                        <a className="menu-link">Contact</a>
                      </Link>
                    </li>
                  </ul>
                  <ul className="footer-menu">
                    <li className="menu-item">
                      <Link href="/22-faq">
                        <a className="menu-link">FAQs</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  footer content */}
        {/*  copyright section */}
        <div className="footer-copyright flex-space-between">
          <span className="copyright-text">
            Cryptoki 2021 - All Rights Reserved
          </span>
          <ul className="sub-footer-menu">
            <li className="menu-item">
              <a className="menu-link" href="#">
                Terms of Service
              </a>
            </li>
            <li className="menu-item">
              <a className="menu-link" href="#">
                Privacy
              </a>
            </li>
          </ul>
        </div>
        {/*  copyright section */}
      </div>
    </footer>
  );
};
export default Footer;
